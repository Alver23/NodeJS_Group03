// Dependencies
import { notFound } from '@hapi/boom';

// Utils
import { CustomError } from "../../../utils/custom-error";

export class RouteNotFoundError extends CustomError {
	constructor(originalUrl: string) {
		const {
			output: { statusCode },
		} = notFound();
		super(`Route '${originalUrl}' does not exist.`, statusCode, statusCode);
	}
}
