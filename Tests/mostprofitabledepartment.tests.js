describe('mostprofitabledepartment' , function(){
    it('A local shop want some help to determine which of their departments are the most profitable and which day of the week is the most profitable', function(){
        assert.equal('outdoor', mostProfitableDepartment(salesData), "Most profitable department is 'outdoor' for dataset 1");
    });
    it('A local shop want some help to determine which of their departments are the most profitable and which day of the week is the most profitable', function(){
        assert.equal('electronics', mostProfitableDepartment(salesData2), "Most profitable department is 'electronics' for dataset 2");
    });
    it('A local shop want some help to determine which of their departments are the most profitable and which day of the week is the most profitable', function(){
        assert.equal('Thursday', mostProfitableDay(salesData), "Most profitable day is 'Thursday' for dataset 1");
    });
it('A local shop want some help to determine which of their departments are the most profitable and which day of the week is the most profitable', function(){
assert.equal('Wednesday', mostProfitableDay(salesData2), "Most profitable day is 'Wednesday' for dataset 2");
});
});