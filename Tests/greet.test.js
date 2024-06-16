describe('greet function test' , function(){
    it('greet Omar' , function(){
        assert.equal(greet('Omar'), 'Hello, Omar');

        assert.equal(greet('Sam'),'Hello, Sam');
    });

});