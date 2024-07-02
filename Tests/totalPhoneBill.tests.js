describe('totalPhoneBill.test' , function(){
    it('Should calculate the total bill (R7.45) and what the individual can do with the remaining amount' , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'))
    });
    it('Should calculate the total bill (R3.40) and what the individual can do with the remaining amount', function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });

    it('Should calculate the total bill (R1.30) and what the individual can do with the remaining amount', function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });

});