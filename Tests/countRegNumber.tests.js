describe('count Registration Number Test', function(){
    it('counts Registration Numbers from Gauteng and return true if from Gauteng' , function(){
        assert.equal(isFromGauteng('DR 45 LR GP'), true); 
    });
    it('counts Registration Numbers from Gauteng and returns false if not from Gauteng',function(){
        assert.equal(isFromGauteng('CJ 123 908'), false);
    });
    it ('return false if there is no plate from anywhere',function(){
        assert.equal(isFromGauteng(''),false);
    });

});