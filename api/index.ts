import express from "express";
import cors from "cors";
import itemsApi from "./routes/items";
import fridgesApi from "./routes/fridges";
import recipesApi from "./routes/recipes";
import apidocBuilder from "swagger-jsdoc";
import apidoc from "swagger-ui-express";
import apidocConfig from "./apidoc.config.json"

const apidocSpec = apidocBuilder({ definition: apidocConfig, apis: ["api/routes/*.ts"] });
const port = process.env.SERVER_PORT || 8080;
const app = express();

app.use(express.json())
app.use(cors())
app.use(itemsApi);
app.use(fridgesApi);
app.use(recipesApi);
app.get("/api", (_, res) => res.json(apidocSpec))
app.use("/api/explorer", apidoc.serve, apidoc.setup(apidocSpec))
app.listen(port);