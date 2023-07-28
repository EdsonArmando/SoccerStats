import { createServer } from "http";
import * as express from "express";
import cors from "cors";
import { config } from "dotenv";
config();
import routes from "./routes";

// Create servers
const app = express.default();
const server = createServer(app);

// Config
app.set("port", 8083);
app.set("json spaces", 2);

// Middlewares
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", routes);

// Listen
server.listen(app.get("port"), () => {
  console.log("Servidor levantado en el puerto", app.get("port"));
});
