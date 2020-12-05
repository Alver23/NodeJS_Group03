// Dependencies
import { iterate } from 'iterare';
import { badRequest } from '@hapi/boom';
import { plainToClass } from 'class-transformer';
import { validateOrReject, ValidationError } from 'class-validator';
import { NextFunction, Request, RequestHandler, Response } from 'express';

// Interfaces
import { ISchemaValidator, CustomType } from './schema-validator-interface';

export class SchemaValidator {
	private readonly listValidations: string[] = ['body', 'params', 'query'];

	private prependConstraintsWithParentProp(parentError: ValidationError, error: ValidationError): ValidationError {
		const constraints: {[key: string]: any;} = {};
		/* eslint guard-for-in: 0 */
		for (const key in error.constraints) {
			constraints[key] = `${parentError.property}.${error.constraints[key]}`;
		}
		return {
			...error,
			constraints,
		};
	}

	private mapChildrenToValidationErrors(error: ValidationError): ValidationError[] {
		if (!(error.children && error.children.length)) {
			return [error];
		}
		const validationErrors = [];
		/* eslint no-restricted-syntax: 0 */
		for (const item of error.children) {
			if (item.children && item.children.length) {
				validationErrors.push(...this.mapChildrenToValidationErrors(item));
			}
			validationErrors.push(this.prependConstraintsWithParentProp(error, item));
		}
		return validationErrors;
	}

	private flattenValidationErrors(validationErrors: ValidationError[]): string[] {
		return iterate(validationErrors)
			.map((error) => this.mapChildrenToValidationErrors(error))
			.flatten()
			.filter((item) => !!item.constraints)
			.map((item) => Object.values(item.constraints))
			.flatten()
			.toArray();
	}

	public handler(schema: ISchemaValidator): RequestHandler {
		return async (req: CustomType, res: Response, next: NextFunction): Promise<any> => {
			if (Object.keys(schema).length === 0) {
				return next();
			}

			const errorList: Promise<any>[] = [];

			this.listValidations.forEach((item) => {
				if (Object.prototype.hasOwnProperty.call(schema, item)) {
					const modelToValidate = plainToClass(schema[item], req[item]);
					errorList.push(validateOrReject(modelToValidate));
				}
			});

			return Promise.all(errorList)
				.then(() => {
					next();
				})
				.catch((errors) => {
					next(badRequest('Bad Request', this.flattenValidationErrors(errors)));
				});
		};
	}
}

export const schemaValidator = new SchemaValidator();
