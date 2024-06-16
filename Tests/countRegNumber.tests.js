describe('count Registration Number Test', function(){
    it('count Registration Numbers from Gauteng' , function(){
        assert.equal(isFromGauteng('DR 45 LR GP'), true); 

        assert.equal(isFromGauteng('CJ 123 908'), false);
    });

});