describe('isFromBellville', function() {
    it('returns true for cars starting with CY', function() {
      assert.equal(isFromBellville('CY 123'), true);
    });
  
    it('returns false for cars not starting with CY', function() {
      assert.equal(isFromBellville('CJ 123'), false);
    });
  
    it('returns false for an empty string', function() {
      assert.equal(isFromBellville(''), false);
    });
  });