//function billWithString(){
    function totalPhoneBill(billString){
        var smsCostTotal = 0;
        var callCostTotal = 0;
        var billItems = billString.split(",");
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
         var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    
     // round to two decimals
     var roundedBillTotal = billTotal.toFixed(2);
     return roundedBillTotal;
}
    //  return{
    //      totalPhoneBill
    //  }
    // }