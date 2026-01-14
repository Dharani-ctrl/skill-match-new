const request = require('supertest');
const express = require('express');
const app = express();

// Mock a simple route for testing
app.get('/api/health', (req, res) => res.status(200).json({ status: 'OK' }));

describe('Server API Tests', () => {
  it('should return 200 for health check', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe('OK');
  });
});