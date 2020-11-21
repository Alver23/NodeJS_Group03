// Dependencies
import { iterate } from 'iterare';
import { NextFunction, Response } from 'express';
import { validateOrReject, ValidationError } from "class-validator";
import { badRequest } from "@hapi/boom";
import { plainToClass } from "class-transformer";

const prependConstraintsWithParentProp = (parentError: ValidationError, error: ValidationError): ValidationError => {
    const constraints: any = {};
    for (const key in error.constraints) {
        constraints[key] = `${parentError.property}.${error.constraints[key]}`;
    }
    return {
        ...error,
        constraints,
    };
}
const mapChildrenToValidationErrors = (error: ValidationError): ValidationError[] => {
    if (!(error.children && error.children.length)) {
        return [error];
    }
    const validationErrors = [];
    for (const item of error.children) {
        if (item.children && item.children.length) {
            validationErrors.push(...mapChildrenToValidationErrors(item));
        }
        validationErrors.push(prependConstraintsWithParentProp(error, item));
    }
    return validationErrors;
}
const flattenValidationErrors = (validationErrors: ValidationError[]): string[] => {
    return iterate(validationErrors)
        .map(error => mapChildrenToValidationErrors(error))
        .flatten()
        .filter(item => !!item.constraints)
        .map(item => Object.values(item.constraints))
        .flatten()
        .toArray();
}

export const validationHandler = (scheme: any, check = 'body') => {
    return async (req: any, res: Response, next: NextFunction) => {
        if (!scheme) {
            return next();
        }
        const data = plainToClass(scheme, req[check], { excludeExtraneousValues: true } );
        req[check] = data;
        try {
            await validateOrReject(data, { skipMissingProperties: true });
            next()
        } catch (errors) {
            next(badRequest('invalid request', flattenValidationErrors(errors)));
        }
    }
}
