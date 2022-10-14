const fs = require('fs');
const path = require('path');
const assert = require('assert');

describe('Exercice 1', () => {
    let stubConsoleLog;

    beforeEach(() => {
        stubConsoleLog = jest.spyOn(console, 'log').mockReturnThis();
    })

    it('Créez un ficher "run.js"', () => {
        assert(fs.existsSync(path.join(__dirname, 'run.js')), 'Le fichier "run.js" est manquant');
    });
    it('Exécuter "run.js" doit afficher du texte', () => {
        let error = null;
        try {
            require('./run.js');
        } catch (e) {
            error = e;
        } finally {
            if (error) {
                throw error;
            }
            expect(stubConsoleLog).toHaveBeenCalled();
        }
    });
});