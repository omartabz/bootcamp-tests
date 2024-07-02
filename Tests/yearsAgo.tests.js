describe('yearsAgo' , function(){
    it('How many years ago that year is from the current year.' , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    });

    it('How many years ago is this year from that current year.', function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000))
    });

    it('How many years ago is the current year from that year', function(){
        assert.equal((new Date().getFullYear() - 1954), yearsAgo(1954))
    });

});