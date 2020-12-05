// Dependencies
import { NextFunction, Request, RequestHandler, Response } from 'express';

export class CatchErrors {
	handler(requestHandler: RequestHandler): RequestHandler {
		return async (req: Request, res: Response, next: NextFunction) => {
			try {
				return await requestHandler(req, res, next);
			} catch (error) {
				next(error);
			}
		};
	}
}

export const catchErrors = new CatchErrors();
