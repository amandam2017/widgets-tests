describe("test calculateBill function using the available cost for billItems(sms and calls)", function(){
    it("take a string both call and sms and should return the total cost of call/sms", function(){

        assert.equal(totalPhoneBill("sms,sms,sms,call,call,call"),10.50);  

    });

    it("take a string sms and should return the total cost of sms ", function(){
        //   let calculateBill = billWithString();
           var smsStringTotal = totalPhoneBill("sms,sms,sms,sms,sms")
   
           assert.equal(smsStringTotal,3.75);
       });

       it("take a string call and should return the total cost of call ", function(){
        //   let calculateBill = billWithString();
           var callStringTotal = totalPhoneBill("call,call,call,call")
   
           assert.equal(11.00,(callStringTotal));
       });
} )