const fs = require('fs');
const path = require('path');
const assert = require('assert');
const sinon = require('sinon');

describe('Exercice 1', () => {
    it('Créez un ficher "run.js"', () => {
        assert(fs.existsSync(path.join(__dirname, 'run.js')), 'Le fichier "run.js" est manquant');
    });
    it('Exécuter "run.js" doit afficher du texte', () => {
        const stub = sinon.stub(console, 'log').callsFake(() => {});
        let error = null;
        try {
            require('./run.js');
        } catch (e) {
            error = e;
        } finally {
            stub.restore();
            if (error) {
                throw error;
            }
            assert(stub.called, 'le code n\'a pas appelé console.log()');
        }
    });
});