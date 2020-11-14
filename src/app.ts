import express from "express";
import { medicRouter } from "./medic/infraestructure/routes/medic.routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

medicRouter(app);

export default app;
