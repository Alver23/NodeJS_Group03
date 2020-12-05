// Dependencies
import 'es6-shim';
import 'reflect-metadata';
import express from "express";

// RoutesConfig
import { RouteConfig } from "./api/routes";

// Middlewares
import { addResponseJsonToResponse } from "./shared/infraestructure/middlewares/response";
import { errorHandler } from "./shared/infraestructure/middlewares/error-handler";

const app = express();
const routes = new RouteConfig(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(addResponseJsonToResponse.handler())

routes.publicRoutes();
routes.privateRoutes();

app.use(errorHandler.wrapperError());
app.use(errorHandler.handler());

export default app;
