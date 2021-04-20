describe("test radio-bill factory function", function(){
    it("once a string sms is selected, it should return a total cost of a selected string and update the overalltotal", function(){
        var checkedItemTotal = radioBillTotal();

        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');

        console.log(checkedItemTotal.getOverallCost());

        assert.equal(3.75, checkedItemTotal.getOverallCost());
        assert.equal(3.75, checkedItemTotal.getSmsCostTotal()); 
        assert.equal(0, checkedItemTotal.getCallCostTotal());
    })

    it("once a string call is selected, it should return a total cost of a selected string and update the overalltotal", function(){
        var checkedItemTotal = radioBillTotal();

        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');


        console.log(checkedItemTotal.getOverallCost());

        assert.equal(8.25, checkedItemTotal.getOverallCost());
        assert.equal(0.00, checkedItemTotal.getSmsCostTotal()); 
        assert.equal(8.25, checkedItemTotal.getCallCostTotal());
    })

    it("this instance, should return a warningLevel class if the warningLevel is reached", function(){
        var checkedItemTotal = radioBillTotal();

        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');

        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');



        console.log(checkedItemTotal.getOverallCost());

        assert.equal(35.00, checkedItemTotal.getOverallCost());
        assert.equal(7.50, checkedItemTotal.getSmsCostTotal()); 
        assert.equal(27.50, checkedItemTotal.getCallCostTotal());
    })

    it("this instance, should return a criticalLevel class if the criticalLevel is reached", function(){
        var checkedItemTotal = radioBillTotal();

        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');
        checkedItemTotal.checkedBillType('call');

        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');
        checkedItemTotal.checkedBillType('sms');



        console.log(checkedItemTotal.getOverallCost());

        assert.equal(51.50, checkedItemTotal.getOverallCost());
        assert.equal(7.50, checkedItemTotal.getSmsCostTotal()); 
        assert.equal(44.00, checkedItemTotal.getCallCostTotal());
    })
})