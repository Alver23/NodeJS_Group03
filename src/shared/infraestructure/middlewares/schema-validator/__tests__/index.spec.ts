// Dependencies
import 'reflect-metadata';
import express from "express";
import supertest from 'supertest';

// Mocks
import { fakeServer } from "@mocks/fake-server";

// Dto
import { ClassBodyMock } from "./class-body-mock";

// Middlewares
import { schemaValidator } from "@core/middlewares/schema-validator";
import { errorHandler } from "@core/middlewares/error-handler";

describe('SchemaValidator', () => {
  const schema = {
    body: ClassBodyMock,
  }

  fakeServer.use(express.json());
  fakeServer.get('/user', schemaValidator.handler({}), function(req, res) {
    res.status(200).json({ name: 'response' });
  });
  fakeServer.post('/user', schemaValidator.handler(schema), function(req, res) {
    res.status(200).json({ name: 'response' });
  });
  fakeServer.use(errorHandler.wrapperError());
  fakeServer.use(errorHandler.handler());

  it('should return status code 200 when the schema is empty', (done) => {
    supertest(fakeServer)
      .get('/user')
      .set('Accept', 'application/json')
      .expect(200, done)
  });

  describe('body validations', () => {

    it('should validate the simple schema', (done) => {
      supertest(fakeServer)
        .post('/user')
        .set('Accept', 'application/json')
        .expect(400, done);
    });

    it('should validate the complex schema with children', (done) => {
      supertest(fakeServer)
        .post('/user')
        .send({childrens: [{ name: undefined}]})
        .set('Accept', 'application/json')
        .expect(400, done);
    });

    it('should return status code 200 when there are no validation errors', (done) => {
      supertest(fakeServer)
        .post('/user')
        .send({childrens: [{ name: 'fake children name'}], name: 'fake name'})
        .set('Accept', 'application/json')
        .expect(200, done);
    })
  });

});
