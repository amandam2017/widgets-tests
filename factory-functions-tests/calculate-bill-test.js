describe("test calculateBill function using the available cost for billItems(sms and calls)", function(){
    it("take a string both call and sms and should return the total cost of call/sms", function(){
        let stringTotal = totalPhoneBill();

        stringTotal.billItemType("sms,sms,sms,sms,call,call,call");


        assert.equal(11.25,stringTotal.getbillTotal());  

    });

    it("this instance should return the warnigLevel class if a warningLevel is reached.", function(){
        let stringTotal = totalPhoneBill();

        stringTotal.billItemType("sms,sms,sms,sms,call,call,call,sms,sms,sms,sms,call,call,call");


        assert.equal(22.50,stringTotal.getbillTotal());  

    });

    it("this instance should return the danger class if a criticalLevel is reached.", function(){
        let stringTotal = totalPhoneBill();

        stringTotal.billItemType("sms,sms,sms,sms,call,call,call,sms,sms,sms,sms,call,call,call,call,call,sms,sms,call");


        assert.equal(32.25,stringTotal.getbillTotal());  

    });

} )