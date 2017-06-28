import axios from 'axios';

let Promise = require('es6-promise').polyfill();

const VERSION = 'version';
const DECK_NAMES = 'deckNames';
const MODEL_NAMES = 'modelNames';
const MODEL_FIELD_NAMES = 'modelFieldNames';
const ADD_NOTE = 'addNote';
const ADD_NOTES = 'addNotes';
const CAN_ADD_NOTES = 'canAddNotes';

const ACTIONS = [
  'version',
  'deckNames',
  'modelNames',
  'modelFieldNames',
  'addNote',
  // do not use addNotes
  'addNotes',
  'canAddNotes'
];

// the api version of anki-connect is 3;
const ANKI_CONNECT_VERSION = 3;

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
}

export const getVersion = invokeAction(VERSION);

export const getDeckNames = invokeAction(DECK_NAMES);

export const getModelNames = invokeAction(MODEL_NAMES);

export const getModelFieldNames = invokeAction(MODEL_FIELD_NAMES);