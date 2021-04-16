describe("test calculateBill function using the available cost for billItems(sms and calls)", function(){
    it("take a string call/sms and return the cost of call/sms", function(){
     //   let calculateBill = billWithString();

        assert.equal(totalPhoneBill("sms,sms,sms"),2.25);
      

    });
} )