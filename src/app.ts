import express from "express";
import { medicRouter } from "./medic/infraestructure/routes/medic.routes";
import { driverRouter } from "./driver/infraestructure/routes/driver";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

medicRouter(app);
driverRouter(app);

export default app;
