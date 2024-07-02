describe('transportfee',function Omar(){
    it('Should let the Omar know which mode of transport they can take based on how much they have' , function(){
        assert.equal(Omar('R80')),'use taxi';
    });
    it('Should let the Omar know which mode of transport they can take based on how much they have' , function(){
        assert.equal(Omar('R100')),'use uber';
    });
    it('Should let the Omar know which mode of transport they can take based on how much they have' , function(){
        assert.equal(Omar('R8000')),'use uber black';
    });
    it('Should let the Omar know which mode of transport they can take based on how much they have' , function(){
        assert.equal(Omar('R0')),'walk';
    });
    });