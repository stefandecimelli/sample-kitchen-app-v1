import express from "express";
import { PrismaClient } from "@prisma/client";
import { formatPrismaError } from "../lib/errorHandlers";
import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";

const db = new PrismaClient();
const app = express.Router();

app.get("/api/items", async (req, res) => {
	const allItems = await db.foodItem.findMany();
	res.json(allItems);
});

app.post("/api/items", async (req, res) => {
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

app.delete("/api/items/:id", async (req, res) => {
	const result = await db.foodItem.delete({
		where: {
			id: parseInt(req.params.id)
		}
	})
	res.json(result);
})

export default app;