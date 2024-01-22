import express from "express";
import cors from "cors";
import itemsApi from "./routes/items";
import openapi from "swagger-ui-express";
import apidoc from "./openapi.json";

const port = process.env.SERVER_PORT || 8080;
const app = express();

app.use(express.json())
app.use(cors())
app.use(itemsApi);
app.use("/api/explorer", openapi.serve, openapi.setup(apidoc))

app.listen(port, () => {
	console.log(`API listening on http://localhost:${port}/`)
});