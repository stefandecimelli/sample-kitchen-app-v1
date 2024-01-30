import express from "express";
import { PrismaClient } from "@prisma/client";
import { formatPrismaError } from "../lib/errorHandlers";
import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";

const db = new PrismaClient();
const app = express.Router();

/**
 * @openapi
 * /api/items:
 *    get:
 *      tags:
 *       - items
 */
app.get("/api/items", async (req, res) => {
	const allItems = await db.foodItem.findMany();
	res.json(allItems);
});

/**
 * @openapi
 * /api/item/{id}:
 *    get:
 *      summary: Retrieve a food item that may be used in a recipe, or placed in a fridge
 *      tags:
 *       - items
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: ID number of the food item to get
 *      responses:
 *        404:
 *          description: No such food item exists with this ID
 *        200:
 *          description: A food item
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/FoodItem"
 */
app.get("/api/item/:id", async (req, res) => {
	try {
		const item = await db.foodItem.findUnique({
			where: {
				id: parseInt(req.params.id)
			}
		})
		res.json(item);
	} catch (e) {
		if (e instanceof PrismaClientKnownRequestError || e instanceof PrismaClientValidationError) {
			res.status(404).json(formatPrismaError(e))
		}
		else {
			res.status(404).json({ error: e })
		}
	}
});

/**
 * @openapi
 * /api/item:
 *   post:
 *     tags:
 *      - items
 */
app.post("/api/item", async (req, res) => {
	try {
		const { newItem } = req.body;
		newItem.unit = newItem.unit ?? null;
		console.log("Creating new item: " + JSON.stringify(newItem))
		const createNewItem = await db.foodItem.create({ data: newItem })
		res.json(createNewItem);
	} catch (e) {
		if (e instanceof PrismaClientKnownRequestError || e instanceof PrismaClientValidationError) {
			res.status(400).json(formatPrismaError(e))
		}
		else {
			res.status(400).json({ error: e })
		}
	}
});


/**
 * @openapi
 * /api/item/{id}:
 *   delete:
 *     tags:
 *      - items
 */
app.delete("/api/item/:id", async (req, res) => {
	const result = await db.foodItem.delete({
		where: {
			id: parseInt(req.params.id)
		}
	})
	res.json(result);
})

export default app;