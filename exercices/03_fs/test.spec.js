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

    it('Create a file "run.js"', () => {
        assert(fs.existsSync(path.join(__dirname, 'run.js')), 'The file "run.js" is missing');
    });

    it('Show the path to "coucou.txt"', (done) => {
      const filepath = path.resolve(__dirname, 'coucou.txt');
      require('./run.js');
      setTimeout(() => {
        expect(stubConsoleLog).toHaveBeenCalledWith(filepath);
        done();
      }, 10);
    });

    it('A folder "jtutu" has been created', (done) => {
        setTimeout(() => {
            assert(fs.statSync(path.resolve(__dirname, 'jtutu')).isDirectory);
            done();
        }, 10);
    });

    it('A file "coucou.txt" has been created', (done) => {
        setTimeout(() => {
            assert(fs.existsSync(path.resolve(__dirname, './jtutu/coucou.txt')));
            done();
        }, 10);
    });

    it('The content of the files must be the same', async () => {
        await new Promise(resolve => setTimeout(resolve, 10))
        const oldfile = fs.createReadStream(path.resolve(__dirname, './coucou.txt'));
        const newfile = fs.createReadStream(path.resolve(__dirname, './jtutu/coucou.txt'));
        await streamEqual(oldfile, newfile, (err, result) => {
            assert(result);
        });
    });

});
