describe('regcheck' , function(){
    it('Registration numbers from Cape Town' , function(){
        assert.equal(regcheck('DC 55 YU GP', 'GP'),true);

        assert.deepEqual(regcheck('DV 23 NB GP', 'GP'),false);
    });

});