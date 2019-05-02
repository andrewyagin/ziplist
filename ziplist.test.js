/* eslint-env mocha, chai */
/* global ZipList, ZipListTheSimpleWay, chai */

describe('ziplist', function () {
  const testArrayA = [1, 3, 5];
  const testArrayB = ['x', 'y', 'z'];
  const testResult = [1, 'x', 3, 'y', 5, 'z'];
  describe('ZipList', function () {
    it('should return an array of 6 elements', function () {
      chai.expect(ZipList(testArrayA, testArrayB)).to.have.lengthOf(6);
    });
    it('should deep equal the passed six element array', function () {
      chai.expect(ZipList(testArrayA, testArrayB)).to.deep.equal(testResult);
    });
  });

  describe('ZipListTheSimpleWay', function () {
    it('should return an array of 6 elements', function () {
      chai.expect(ZipListTheSimpleWay(testArrayA, testArrayB)).to.have.lengthOf(6);
    });
    it('should deep equal the passed six element array', function () {
      chai.expect(ZipListTheSimpleWay(testArrayA, testArrayB)).to.deep.equal(testResult);
    });
  });
});
