// Dependencies
import 'reflect-metadata';
import express from "express";
import supertest from 'supertest';

// Mocks
import { ClassBodyMock } from "./class-body-mock";
import { fakeServer } from "@mocks/fake-server";

// Middlewares
import { schemaTransformer } from "../index";

describe('SchemaTransformer', () => {

  const schema = {
    body: ClassBodyMock,
  }

  fakeServer.use(express.json());
  fakeServer.post('/users', schemaTransformer.handler(schema), function(req, res) {
    res
      .status(200)
      .json(req.body);
  });

  fakeServer.post('/roles', schemaTransformer.handler({}), function(req, res) {
    res
      .status(200)
      .json(req.body);
  });


  it('should return status code 200 when the schema is empty', () => {
    return supertest(fakeServer)
      .post('/roles')
      .send({ fake: 'fake', name: 'Alver', email: 'fake@fake.com'})
      .set('Accept', 'application/json')
      .expect(200)
      .then((response) => {
        expect(
          response.body
        ).toEqual(
          expect.objectContaining({
            name: expect.any(String),
            email: expect.any(String),
            fake: expect.any(String),
          })
        )
      })
  });

  it('should return the schema model', () => {
    return supertest(fakeServer)
      .post('/users')
      .send({ fake: 'fake', name: 'Alver', email: 'fake@fake.com'})
      .set('Accept', 'application/json')
      .expect(200)
      .then((response) => {
        expect(
          response.body
        ).toEqual(
          expect.objectContaining({
            name: expect.any(String),
            email: expect.any(String),
          })
        )
      })
  });


});
