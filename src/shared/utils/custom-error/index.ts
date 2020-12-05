// Dependencies
import { INTERNAL_SERVER_ERROR } from 'http-status-codes';

type ErrorData = { [key: string]: any };

export abstract class CustomError extends Error {
    constructor(
        public message: string,
        public code: string | number = 'INTERNAL_ERROR',
        public statusCode: number = INTERNAL_SERVER_ERROR,
        public data: ErrorData = {},
    ) {
        super();
    }
}
