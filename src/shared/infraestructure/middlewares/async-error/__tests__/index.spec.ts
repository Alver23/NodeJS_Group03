// Dependencies
import express, {NextFunction, Request, Response} from "express";
import supertest from 'supertest';

// Mocks
import { fakeServer } from "@mocks/fake-server";

// Middlewares
import { catchErrors } from "../index";
import { errorHandler } from "@core/middlewares/error-handler";

describe('catchErrors', () => {
  fakeServer.use(express.json());
  fakeServer.get('/users', catchErrors.handler((req: Request, res: Response) => {
    res.status(200).json({ name: 'response' });
  }));

  fakeServer
    .get('/error', catchErrors.handler((req: Request, res: Response) => {
      throw new Error('fake error');
    }));

  fakeServer.use(errorHandler.wrapperError());
  fakeServer.use(errorHandler.handler());

  it('should execute the callback correctly', (done) => {
    supertest(fakeServer)
      .get('/users')
      .set('Accept', 'application/json')
      .expect(200, done)
  });

  it('should return error', (done) => {
    supertest(fakeServer)
      .get('/error')
      .set('Accept', 'application/json')
      .expect(500, done)
  });
});
