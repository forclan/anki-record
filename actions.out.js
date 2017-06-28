'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var axios = _interopDefault(require('axios'));

let Promise = require('es6-promise').polyfill();

const VERSION = 'version';
const DECK_NAMES = 'deckNames';
const MODEL_NAMES = 'modelNames';
const MODEL_FIELD_NAMES = 'modelFieldNames';
const ANKI_CONNECT_PORT = 8765;
const mapPortToUrl = port => `http://localhost:${port}/`;

const ANKI_CONNECT_URL = mapPortToUrl(ANKI_CONNECT_PORT);

const invokeAction = method => (param = {}) => {
  return axios({
    url: ANKI_CONNECT_URL,
    // use post for default;
    method: 'post',
    data: Object.assign({}, param, {action: method})
  }).then(val => val.data)
};

const getVersion = invokeAction(VERSION);

const getDeckNames = invokeAction(DECK_NAMES);

const getModelNames = invokeAction(MODEL_NAMES);

const getModelFieldNames = invokeAction(MODEL_FIELD_NAMES);

exports.getVersion = getVersion;
exports.getDeckNames = getDeckNames;
exports.getModelNames = getModelNames;
exports.getModelFieldNames = getModelFieldNames;

getDeckNames().then(console.log);
var expect = require('chai').expect;

describe('anki ', function () {
  it('test', function (done) {
    getDeckNames()
      .then(val => {
        expect(val).to.be.a('array');
        done();
      })
  })
})