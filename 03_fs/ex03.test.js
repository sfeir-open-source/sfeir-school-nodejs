const fs = require('fs');
const path = require('path');
const assert = require('assert');
const sinon = require('sinon');
const rm = require('rimraf');
const streamEqual = require('stream-equal');

describe('Exercice 3', () => {

    before((done) => {
        rm(path.resolve(__dirname, 'jtutu'), done);
    });

    after((done) => {
        rm(path.resolve(__dirname, 'jtutu'), done);
    });

    it('Créez un ficher "run.js"', () => {
        assert(fs.existsSync(path.join(__dirname, 'run.js')), 'Le fichier "run.js" est manquant');
    });

    it('Affiche le chemin vers "coucou.txt"', () => {
        const stub = sinon.stub(console, 'log').callsFake((a) => {});
        const filepath = path.resolve(__dirname, 'coucou.txt');
        require('./run.js');
        stub.restore();
        assert(stub.calledWith(filepath));
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