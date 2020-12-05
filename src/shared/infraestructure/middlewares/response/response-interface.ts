// Dependencies
import { Response } from 'express';

export interface ICustomResponse extends Response {
	responseJson: any;
}
