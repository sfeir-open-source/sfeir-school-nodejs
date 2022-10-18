const fs = require('fs');
const path = require('path');
const request = require('supertest');

describe('Http', () => {

  it('Create a file "run-01.js"', () => {
    expect(fs.existsSync(path.join(__dirname, 'run-01.js'))).toBeTruthy();
  });

  it('Execute "run-01.js" a server must start in port 9001', async () => {
    const server = require('./run-01.js');
    const response = await request('http://localhost:9001').get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('coucou.js');
    server.close();
  });

  it('Create a file "run-02.js"', () => {
    expect(fs.existsSync(path.join(__dirname, 'run-02.js'))).toBeTruthy();
  });

  it('The server must return the method and content of each request it receives', async () => {
    const server = require('./run-02.js');
    const response = await request('http://localhost:9001').get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Kikou ! Tu as fait un GET sur / !');
    server.close();
  });

  it('Create a file "run-03.js"', () => {
    expect(fs.existsSync(path.join(__dirname, 'run-03.js'))).toBeTruthy();
  });

  it('The server must return "404" when we call "/404" url', async () => {
    const server = require('./run-03.js');
    const response = await request('http://localhost:9001').get('/404');
    expect(response.status).toBe(404);
    server.close();
  });
});
