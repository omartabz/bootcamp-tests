describe('fromWhere' , function(){
    it('Takes a car registration number as a parameter and returns the town the car is from. If the reg number starts with CY return Bellville' , function(){
        assert.equal(fromWhere('CY 567489'), 'Bellville');
    });
    it('Takes a car registration number as a parameter and returns the town the car is from.If the reg number starts with CJ return Paarl', function(){
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
    });
    it('Takes a car registration number as a parameter and returns the town the car is from. If the reg number starts with CA return Cape Town', function(){
        assert.equal(fromWhere('CA 987504'), 'Cape Town')
    });
    it('Takes a car registration number as a parameter and returns the town the car is from. If the reg number doesnt start with CY,CJ, or CA return Some other place!', function(){
        assert.equal(fromWhere(''),'Some other place!')
    });
});