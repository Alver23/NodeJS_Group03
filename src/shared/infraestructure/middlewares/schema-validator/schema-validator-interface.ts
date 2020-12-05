import { Request } from "express";

export interface ISchemaValidator {
	body?: any;
	params?: any;
	query?: any;
	[key: string]: any;
}


export interface CustomType extends Request {
	[key: string]: any;
}
