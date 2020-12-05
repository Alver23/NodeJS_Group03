// Dependencies
import { NextFunction, Request, Response, ErrorRequestHandler } from 'express';
import { badImplementation, boomify } from '@hapi/boom';
import yenv from "yenv";

import { CustomError } from "../../../utils/custom-error";

const config = yenv();

export class ErrorHandler {

	private errorWithStack(error: any, stack: any) {
		const { statusCode, ...otherValues } = error;
		const response = {
			status: statusCode,
			...otherValues,
		};
		if (config.environment === 'development') {
			return { ...response, stack };
		}
		return response;
	}

	public wrapperError(): ErrorRequestHandler {
		return (error: any, req: Request, res: Response, next: NextFunction): void => {
			if (error instanceof CustomError) {
				next(boomify(error, { statusCode: error.statusCode }));
			}

			if (!error.isBoom) {
				next(badImplementation(error));
			}

			next(error);
		};
	}

	public handler(): ErrorRequestHandler {
		return (error: any, req: Request, res: Response, next: NextFunction): void => {
			const {
				output: { statusCode, payload },
				stack,
				data,
			} = error;
			res.status(statusCode).json(this.errorWithStack({ ...payload, data }, stack));
		};
	}
}

export const errorHandler = new ErrorHandler();
