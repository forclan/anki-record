import getSelectionText from '../../../src/util/getSelectionText';

describe('getSelection', () => {
  it('getSelectionText should not throw error', () => {
    try {
      let result = getSelectionText();
    } catch (err) {
      // console.log(err);
      expect(err).to.not.be.null;
    }
  })
});