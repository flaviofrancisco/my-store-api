import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import { attributesRoute } from "./services/attributes/attributes.service";
import { connectDatabase } from "./mongo";

connectDatabase();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello from the TypeScript world!</h1>");
});

app.use("/api/v1/attributes", attributesRoute);

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
