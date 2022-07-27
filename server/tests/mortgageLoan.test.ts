import request from 'supertest';
import app from '../src/app';
import {
  mortgagePayload,
  mortgageWrongPayload
} from '../fixtures/payload';
import { setupTestDB } from './utils/setupTestDB';

setupTestDB();

describe('MortgageLoan APIS', () => {
  describe('GET /v1/mortgage-loan', () => {
    test('should return 200 OK', async () => {
      await request(app).get('/api/mortgage-loan/').expect(200);
    });
  });

  describe('POST /v1/mortgage-loan', () => {
    test('should return 201 and successfully create new mortgage loan if data is ok', async () => {
      const {
        body: { data }
      } = await request(app)
        .post('/api/mortgage-loan/')
        .send(mortgagePayload)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201);
      expect(data.loanNo).toBe(mortgagePayload.loanNo);
    });
  });

  describe('GET /v1/mortgage-loan/:loanNo', () => {
    test('should return 200 OK and the loan data', async () => {
      const {
        body: { data }
      } = await request(app)
        .get(`/api/mortgage-loan/${mortgagePayload.loanNo}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);
      expect(data.loanNo).toBe(mortgagePayload.loanNo);
    });
  });

  describe('POST /v1/mortgage-loan/', () => {
    test('should return 403 validation error and the updated loan data', async () => {
      await request(app)
        .post(`/api/mortgage-loan/`)
        .send(mortgageWrongPayload)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403);
    });
  });

  describe('DELETE /v1/mortgage-loan/:loanNo', () => {
    test('should return 202 OK and the loan data', async () => {
      await request(app)
        .delete(`/api/mortgage-loan/${mortgagePayload.loanNo}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(202);
    });
  });

  describe('DELETE /v1/mortgage-loan/:loanNo', () => {
    test('should return 204 NOT FOUND', async () => {
      await request(app).delete(`/api/mortgage-loan/123456789`).expect(204);
    });
  });
});
