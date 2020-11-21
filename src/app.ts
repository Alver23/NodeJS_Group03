// Dependencies
import 'es6-shim';
import 'reflect-metadata';
import express from "express";
import { medicRouter } from "./medic/infraestructure/routes/medic.routes";
import { driverRouter } from "./driver/infraestructure/routes/driver";

// Middlewares
import { wrapError, errorHandler } from "./shared/infraestructure/middlewares/error-handler";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

medicRouter(app);
driverRouter(app);

app.use(wrapError);
app.use(errorHandler);

export default app;
