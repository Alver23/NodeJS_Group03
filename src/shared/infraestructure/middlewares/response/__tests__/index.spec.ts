// Middleware
import { addResponseJsonToResponse } from "../index";

// Mocks
import { fakeServer } from "@mocks/fake-server";
import supertest from "supertest";

describe('addResponseJsonToResponse', () => {

  fakeServer.use(addResponseJsonToResponse.handler());
  fakeServer.get('/users', function(req, res) {
    res.responseJson({ data: [], status: 201, message: 'fake', options: {} });
  });

  fakeServer.get('/roles', function(req, res) {
    res.responseJson({ data: [], message: 'fake', options: {} });
  });

  it('should be able to use the function', () => {
    return supertest(fakeServer)
      .get('/users')
      .set('Accept', 'application/json')
      .expect(201)
      .then((response) => {
        expect(response.body)
          .toEqual(
            expect.objectContaining({
              message: expect.any(String),
              status: expect.any(Number),
              data: expect.any(Array),
            })
          )
      })
  });

  it('should be able to use the function when status is empty', () => {
    return supertest(fakeServer)
      .get('/roles')
      .set('Accept', 'application/json')
      .expect(200)
  });
});
