import { getVersion, getDeckNames, getModelNames, getModelFieldNames} from '../../../src/util/actions';

import axios from 'axios';
function tryHandler(done, fn) {
  try {
    fn();
    done();
  } catch (err) {
    done(err);
  }
}

let expect = require('chai').expect;
describe('aync functions test ', function () {
  it('test', function (done) {
    getDeckNames()
      .then(val => {
        tryHandler(done, function () {
          expect(val).to.be.a('array');
        });
      })
  })

  it('axios get baidu(prevent cors)', function (done) {
    axios('http://www.baidu.com')
      .then(val => val.data)
      .then(val => {
        tryHandler(done, function () {
          expect(val).to.not.be.null;
        })
      })
  })

  it('simple promise resolve test', function (done) {
    Promise.resolve(2)
      .then(val => {
        expect(val).to.be.equal(2);
        done();
      })
  });

})

describe('anki connect api test', function () {
  it('version should be 3(current anki-connect version is 3)', (done) => {
    getVersion().then(val => {
      tryHandler(done, () => {
        expect(val).to.be.equal(3);
      })
    });
  })

 it('deckNames should not be empty', function (done) {
    getDeckNames().then(val => {
      tryHandler(done, () => {
        expect(val).to.not.be.null;
      })
    })
  })

  it('deckNames should not be array', function (done) {
    getDeckNames()
      .then(data => {
        tryHandler(done, () => {
          expect(data).to.be.a('array');
        })
      })
  })

  it('names in deckNames array should be string', done => {
    getDeckNames()
      .then(data => {
        tryHandler(done, () => {
          data.map(deckName => {
            expect(deckName).to.be.a('string');
            expect(deckName).to.not.be.null;
          })
        })
      })
  })
});