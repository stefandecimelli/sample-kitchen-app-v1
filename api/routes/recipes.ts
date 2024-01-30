import { PrismaClient } from "@prisma/client";
import express from "express";

const db = new PrismaClient();
const app = express.Router();

app.get("/api/recipe", (_, res) => {
	const allRecipes = db.recipe.findMany();
	res.json(allRecipes);
});

export default app;