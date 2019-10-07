const fs = require('fs');
const path = require('path');
const assert = require('assert');
const rm = require('rimraf');
const streamEqual = require('stream-equal');

describe('Exercice 3', () => {

    let stubConsoleLog
    beforeAll((done) => {
        rm(path.resolve(__dirname, 'jtutu'), done);
        stubConsoleLog = jest.spyOn(console, 'log').mockReturnThis();
    });

    afterAll((done) => {
        rm(path.resolve(__dirname, 'jtutu'), done);
        stubConsoleLog.mockRestore();
    });

    it('Créez un ficher "run.js"', () => {
        assert(fs.existsSync(path.join(__dirname, 'run.js')), 'Le fichier "run.js" est manquant');
    });

    it('Affiche le chemin vers "coucou.txt"', (done) => {
      const filepath = path.resolve(__dirname, 'coucou.txt');
      require('./run.js');
      setTimeout(() => {
        expect(stubConsoleLog).toHaveBeenCalledWith(filepath);
        done();
      }, 10);
    });

    it('A créé un dossier "jtutu"', (done) => {
        setTimeout(() => {
            assert(fs.statSync(path.resolve(__dirname, 'jtutu')).isDirectory);
            done();
        }, 10);
    });

    it('A créé un fichier "coucou.txt"', (done) => {
        setTimeout(() => {
            assert(fs.existsSync(path.resolve(__dirname, './jtutu/coucou.txt')));
            done();
        }, 10);
    });

    it('Le contenu des fichiers est identique', (done) => {
        setTimeout(() => {
            const oldfile = fs.createReadStream(path.resolve(__dirname, './coucou.txt'));
            const newfile = fs.createReadStream(path.resolve(__dirname, './jtutu/coucou.txt'));
            streamEqual(oldfile, newfile, (err, result) => {
                assert(result);
                done(err)
            });
        }, 10);
    });

});