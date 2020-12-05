// Dependencies
import { NextFunction, Request, RequestHandler, Response } from 'express';

// Exceptions
import { RouteNotFoundError } from "./route-error";

export class FourOFour {
	handler(): RequestHandler {
		return (req: Request, res: Response, next: NextFunction) => {
			next(new RouteNotFoundError(req.originalUrl));
		};
	}
}

export const fourOFour = new FourOFour();
