import { PrismaClient } from "@prisma/client";
import express from "express";

const db = new PrismaClient();
const app = express.Router();

app.get("/api/fridge", (_, res) => {
	const allFridges = db.fridge.findMany();
	res.json(allFridges);
})

export default app;