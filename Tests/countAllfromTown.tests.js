describe('countAllfromTown' , function(){
    it('It should return all the registration numbers in the string that are from Stellenbosch.' , function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        assert.equal(fromStellies, 3)
    });

    it('It should return all registration numbers from Kuilsriver',function(){
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        assert.equal(fromKuilsriver, 1)
    });
    it('it should return all registration numbers from Stellenbosch',function(){
        var fromStellies = countAllFromTown('CK 124,CY 567,CK 345, CJ 456,CK 341','CL');
        assert.equal(fromStellies,0)
    });

});