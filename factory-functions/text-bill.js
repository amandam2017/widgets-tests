function textBillTotal(){

    //warning and criticalLevel variables
    var callsTotal = 0;
    var smsTotal = 0;
    // update the correct total
    function billType(billTypeEntered){
        if (billTypeEntered === "call"){
            callsTotal += 2.75;
        }
    
        else if (billTypeEntered === "sms"){
            smsTotal += 0.75;
        }
    }

    function getTotalCost(){
        return callsTotal + smsTotal;

    }
    function getCallCostTotal(){
        return callsTotal;
    }
    function getSmsCostTotal(){
        return smsTotal;
    }

      //add color

    // if (totalCost >= 50){
    //     // adding the danger class will make the text red
    //     totalCostElem.classList.add("danger");
    // }
    // else if (totalCost >= 30){
    //     totalCostElem.classList.add("warning");
    // }


    return{
        getCallCostTotal,
        getSmsCostTotal,
        getTotalCost,
        billType
    }

}

