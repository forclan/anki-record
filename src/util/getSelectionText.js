export default function getSelectionText () {
  if (!window) {
    throw Error('can not find window');
  }

  if (!window.getSelection()) {
    throw Error('not supported for getSelection');
  }

  return window.getSelection().toString();
}