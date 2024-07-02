describe('isWeekday' , function(){
    it('return false if it is not a day of the week' , function(){
        assert.equal(isWeekday('Saturday'), false);
    });

    it('return true if it is a day of the week', function(){
        assert.equal(isWeekday('Monday'), true);

    });
    it('return false if it is not a day of the week',function(){
        assert.equal(isWeekday('Sunday'), false);
    });
});