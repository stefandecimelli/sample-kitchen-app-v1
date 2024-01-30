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
 *      summary: Retrieve a list of all food items available
 *      tags:
 *       - items
 *      responses:
 *        200:
 *          description: an array of FoodItem objects
 *          content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: "#/components/schemas/FoodItem"
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
 *     summary: Create a new food item
 *     tags:
 *      - items
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/NewFoodItem"
 *     responses:
 *       200:
 *         description: Food item created successfully
 *         content: 
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/FoodItem"
 *       400:
 *         description: Unable to create the new item
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
 *     summary: Delete a food item
 *     tags:
 *      - items
 *     parameters:
 *       - in: path
 *         name: id 
 *         schema: 
 *           type: number
 *         required: true
 *         description: ID of the FoodItem to delete
 *     responses:
 *       200:
 *         description: Delete one FoodItem. Item must not belong to any recipes or fridges.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/FoodItem"
 *       404:
 *         description: Unable to delete the FoodItem.
 */
app.delete("/api/item/:id", async (req, res) => {
    try {
        const result = await db.foodItem.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.json(result);
    } catch (err) {
        if (err instanceof PrismaClientKnownRequestError) {
            res.status(404).json(err.meta);
        }
        else {
            res.status(404).json(err);
        }
    }
})

export default app;