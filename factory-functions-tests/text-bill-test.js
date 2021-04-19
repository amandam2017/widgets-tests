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

    it("should take a string call and return the total of 10 sms", function(){

        var callStringTotal = textBillTotal();
        callStringTotal.billType('sms')
        callStringTotal.billType('sms')
        callStringTotal.billType('sms')
        callStringTotal.billType('sms')
        callStringTotal.billType('sms')

        console.log(callStringTotal.getTotalCost());
        
        assert.equal(3.75, callStringTotal.getSmsCostTotal());
        assert.equal(3.75, callStringTotal.getTotalCost());
        assert.equal(0.00, callStringTotal.getCallCostTotal());

    })

    it("should return a warning level class if a warningLevel is reached", function(){

        let textBill = textBillTotal();

        setWarningLevel = 30;

        var callStringTotal = textBillTotal("call,call,call,call,call,call,call,call,call,call,call,call");
        assert.equal(33.00, callStringTotal);
        assert.equal("warning", (textBill));
    })
    
})