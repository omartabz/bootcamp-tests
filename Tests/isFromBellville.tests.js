describe('isFromBellville' , function(){
    it('Cars From Bellville' , function(){
        assert.equal(isFromBellville('CY 123'),true);

        assert.deepEqual(isFromBellville('CJ 123'),false);
    });

});