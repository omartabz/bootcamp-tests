describe('isWeekday' , function(){
    it('if the parameter passed in is a day of the week' , function(){
        assert.equal(isWeekday('Saturday'), false);

        assert.deepEqual(isWeekday('Monday'), true);
    });

});