// Dependencies
import { NextFunction, Request, Response } from 'express';
import { badImplementation } from '@hapi/boom';
import yenv from "yenv";

const config = yenv();

export const withErrorStack = (error: any, stack: any): any => {
	const { statusCode, ...otherValues } = error;
	const response = {
		status: statusCode,
		...otherValues,
	};
	if (config.environment === 'development') {
		return { ...response, stack };
	}
	return response;
};

export const wrapError = (error: any, req: Request, res: Response, next: NextFunction): void => {
	if (!error.isBoom) {
		next(badImplementation(error));
	}
	next(error);
};

export const errorHandler = (error: any, req: Request, res: Response, next: NextFunction): void => {
	const {
		output: { statusCode, payload },
		stack,
    data,
	} = error;
	res.status(statusCode).json(withErrorStack({...payload, data}, stack));
};
