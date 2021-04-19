describe("test textBill...takes sms or call and return the amount and return an updated amount as more strings are added", function(){
    it("should take a string call and return the total of 10 calls", function(){

        var callStringTotal = textBillTotal();
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')

        //console.log(callStringTotal.getTotalCost())
        
        assert.equal(0, callStringTotal.getSmsCostTotal());
        assert.equal(27.50, callStringTotal.getTotalCost());
        assert.equal(27.50, callStringTotal.getCallCostTotal());

    })

    it("should take a string call and return the total of 5 sms", function(){

        var callStringTotal = textBillTotal();
        callStringTotal.billType('sms')
        callStringTotal.billType('sms')
        callStringTotal.billType('sms')
        callStringTotal.billType('sms')
        callStringTotal.billType('sms')

        // console.log(callStringTotal.getTotalCost());
        
        assert.equal(3.75, callStringTotal.getSmsCostTotal());
        assert.equal(3.75, callStringTotal.getTotalCost());
        assert.equal(0.00, callStringTotal.getCallCostTotal());

    })

    it("should return a warning level class if a warningLevel is reached", function(){

     //   let textBill = textBillTotal();

        var callStringTotal = textBillTotal();
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')
        callStringTotal.billType('call')

       
        assert.equal("warning", (callStringTotal.getWarningLevel()));
    })

    it("should return a ganger level class if a criticalLevel is reached", function(){

        //   let textBill = textBillTotal();
   
           var callStringTotal = textBillTotal();
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
           callStringTotal.billType('call')
   
          
           assert.equal("danger", (callStringTotal.getCriticalLevel()));
       })
    
})