import express from "express";
import cors from "cors";

const port = process.env.SERVER_PORT || 8080;
const app = express();

app.use(express.json())
app.use(cors())

app.get("/api/hello", (_, res) => {
	res.send({message: "Hello, world!"});
});

app.listen(port, () => {
	console.log(`API listening on http://localhost:${port}/`)
});