describe("test settings bill factory function", function(){
    it("should be able to set the call cost", function(){
        let settingsBill = BillWithSettings();
//testing callCost of 1.85
        settingsBill.setCallCost(1.85);     
        assert.equal(1.85, settingsBill.getCallCost());
//testing a different value of callCost
        let settingsBill2 = BillWithSettings();
        settingsBill2.setCallCost(2.75);     
        assert.equal(2.75, settingsBill2.getCallCost());
    });

    it("should be able to set the sms cost", function(){
        let settingsBill = BillWithSettings();
//testing smsCost of 1.85
        settingsBill.setSmsCost(0.85);     
        assert.equal(0.85, settingsBill.getSmsCost());
//testing a different value of smsCost
        let settingsBill2 = BillWithSettings();
        settingsBill2.setSmsCost(0.75);     
        assert.equal(0.75, settingsBill2.getSmsCost());
    });

    //testing both sms and calls

    it("should be able to set the sms and call cost", function(){
        let settingsBill = BillWithSettings();
//testing callCost of 2.75 and smsCost of 1.85
        settingsBill.setCallCost(2.75);                                                        
        settingsBill.setSmsCost(0.85); 

        assert.equal(2.75, settingsBill.getCallCost());
        assert.equal(0.85, settingsBill.getSmsCost());

        let settingsBill2 = BillWithSettings();

        settingsBill2.setCallCost(1.75);                                                        
        settingsBill2.setSmsCost(0.65);

        assert.equal(1.75, settingsBill2.getCallCost());
        assert.equal(0.65, settingsBill2.getSmsCost());
    });

    it("should be able to set the warningLevel and call cost", function(){
        let settingsBill = BillWithSettings();
        
//testing warningLevel 

        settingsBill.setWarningLevel(20);

        assert.equal(20, settingsBill.getWarningLevel());
    });

    it("should be able to set the criticalLevel", function(){
        let settingsBill = BillWithSettings();
        
//testing warningLevel 

        settingsBill.setCriticalLevel(30);

        assert.equal(30, settingsBill.getCriticalLevel());
    });

    //
    it("should be able to set the warning and criticalLevel", function(){
        let settingsBill = BillWithSettings();
        
//testing warningLevel 

        settingsBill.setWarningLevel(15);
        settingsBill.setCriticalLevel(25);

        assert.equal(15, settingsBill.getWarningLevel());
        assert.equal(25, settingsBill.getCriticalLevel());
    });

})

//done so far
//set all the prices that we going to need and 
//ways of SETTING and GETTING values

//we wanna use the values
describe("use values", function(){
    it("should be able to use the cost set", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.25);
        settingsBill.setSmsCost(0.85);
    // state: how many calls = 3 calls made
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(6.75, settingsBill.getTotalCost());
        assert.equal(6.75, settingsBill.getTotalCallCost());
        assert.equal(0.00, settingsBill.getTotalSmsCost());
    });

    it("should be able to use the call cost det for 2 calls at 1.35 each", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.85);
        // state: how many calls = 2 calls made
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(2.70, settingsBill.getTotalCost());
        assert.equal(2.70, settingsBill.getTotalCallCost());
        assert.equal(0.00, settingsBill.getTotalSmsCost());
    });


    it("should be able to send 2 sms's at 0.85 each", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.85);

        settingsBill.sendSms();
        settingsBill.sendSms();

        assert.equal(1.70, settingsBill.getTotalCost());
        assert.equal(0.00, settingsBill.getTotalCallCost());
        assert.equal(1.70, settingsBill.getTotalSmsCost());
    });

})

