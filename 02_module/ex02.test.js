const fs = require('fs');
const path = require('path');
const assert = require('assert');

function getType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
}

describe('Exercice 2', () => {

    let stubConsoleLog;

    beforeEach(() => {
        stubConsoleLog = jest.spyOn(console, 'log').mockReturnThis();
    })

    it('Créez un ficher "hello.js"', () => {
        assert(fs.existsSync(path.join(__dirname, 'hello.js')), 'Le fichier "hello.js" est manquant');
    });
    it('Le fichier "hello.js" doit exporter une fonction', () => {
        const hello = require('./hello.js');
        assert(getType(hello) === 'Function', '"module.exports" n\'exporte pas une fonction');
    });
    it('La fonction exportée par "hello.js" doit emettre sur la console : "Hello, {nom}!"', () => {
        const string = 'testString'
        const hello = require('./hello.js');
        hello(string);
        expect(stubConsoleLog).toHaveBeenCalledWith('Hello, testString!');
    });
    it('Créez un ficher "run.js"', () => {
        assert(fs.existsSync(path.join(__dirname, 'run.js')), 'Le fichier "run.js" est manquant');
    });
    it('"run.js" doit exécuter la fonction exportée par "hello.js" avec l\'argument "Sfeir"', () => {
        const mockHello = jest.fn()
        jest.mock('./hello', () => mockHello);
        require('./run.js');
        expect(mockHello).toHaveBeenCalledWith('Sfeir');
    });
});