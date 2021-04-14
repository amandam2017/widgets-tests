function BillWithSettings(){
    //create variable for settingsBill
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    var callCostTotal = 0;
    var smsCostTotal = 0;

    function setCallCost(callCost){
         theCallCost = callCost;
    }

    function getCallCost(callCost){
        return theCallCost;
   }

   function setSmsCost(smsCost){
        theSmsCost = smsCost;
    }

    function getSmsCost(smsCost){
        return theSmsCost;
    }
//set warningLevel function
    function setWarningLevel(warningLevel){
        theWarningLevel = warningLevel;
    }

    function getWarningLevel(warningLevel){
        return theWarningLevel;
    }


    //set warningLevel function
    function setCriticalLevel(criticalLevel){
        theCriticalLevel = criticalLevel;
    }

    function getCriticalLevel(criticalLevel){
        return theCriticalLevel;
    }

    function makeCall(){
        callCostTotal += theCallCost;
    }
    function getTotalCost(){
        return callCostTotal + smsCostTotal;
    }

    function getTotalCallCost(){
        return callCostTotal;
    }

    function getTotalSmsCost(){
        return 0;
    }

    function sendSms(){
        smsCostTotal += theSmsCost;
    }

    function sendSms(){
        return smsCostTotal;
    }

//expose functions into factory function
    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms

    }
}