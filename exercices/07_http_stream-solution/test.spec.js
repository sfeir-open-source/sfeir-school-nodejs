const fs = require('fs');
const path = require('path');
const request = require('supertest');

describe('Http', () => {

  it('Create a file "run-04.js"', () => {
    expect(fs.existsSync(path.join(__dirname, 'run-04.js'))).toBeTruthy();
  });

  it('The server must return the logo of google when call the url "/google"', async () => {
    const server = require('./run-04.js');
    const response = await request('http://localhost:9000').get('/google');
    expect(response.status).toBe(200);
    expect(response.header['content-type']).toBe('image/png');
    server.close();
  });
});
