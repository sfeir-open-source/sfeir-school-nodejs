const fs = require('fs');
const path = require('path');
const request = require('supertest');

describe('Exercice 4', () => {

  it('Créez un ficher "run-01.js"', () => {
    expect(fs.existsSync(path.join(__dirname, 'run-01.js'))).toBeTruthy();
  });

  it('Exécuter "run-01.js" doit démarrer un serveur qui écoute sur le port 9000', async () => {
    const server = require('./run-01.js');
    const response = await request('http://localhost:9000').get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('coucou.js');
    server.close();
  });

  it('Créez un ficher "run-02.js"', () => {
    expect(fs.existsSync(path.join(__dirname, 'run-02.js'))).toBeTruthy();
  });

  it('Le serveur doit retourner la méthode et le contenu de chaque requête qu\'il reçoit', async () => {
    const server = require('./run-02.js');
    const response = await request('http://localhost:9000').get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Kikou ! Tu as fait un GET sur / !');
    server.close();
  });

  it('Créez un ficher "run-03.js"', () => {
    expect(fs.existsSync(path.join(__dirname, 'run-03.js'))).toBeTruthy();
  });

  it('Le serveur doit retourner "404" quand on appelle l\'url "/404"', async () => {
    const server = require('./run-03.js');
    const response = await request('http://localhost:9000').get('/404');
    expect(response.status).toBe(404);
    server.close();
  });

  it('Créez un ficher "run-04.js"', () => {
    expect(fs.existsSync(path.join(__dirname, 'run-04.js'))).toBeTruthy();
  });

  it('Le serveur doit retourner le logo google quand on appelle l\'url "/google"', async () => {
    const server = require('./run-04.js');
    const response = await request('http://localhost:9000').get('/google');
    expect(response.status).toBe(200);
    expect(response.header['content-type']).toBe('image/png');
    server.close();
  });
});
