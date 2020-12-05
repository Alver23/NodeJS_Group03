// Dependencies
import { OK } from 'http-status-codes';
import { NextFunction, Request, RequestHandler } from 'express';

// Interfaces
import { ICustomResponse } from "./response-interface";

export class ResponseToJson {
	handler(): RequestHandler {
		return (req: Request, res: ICustomResponse, next: NextFunction) => {
			res.responseJson = ({ data, message, status, options }: any): void => {
				const statusCode = status || OK;
				res
					.status(statusCode)
					.json({
						data,
						message,
						status,
						statusCode,
						options
					});
			};
			next();
		};
	}
}

export const addResponseJsonToResponse = new ResponseToJson();
