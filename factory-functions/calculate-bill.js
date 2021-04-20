    function totalPhoneBill(){
        //console.log(billString);
        // var call = 0;
        // var sms = 0;
        var billTotal = 0; 
 
 
    function billItemType(billString){

        var billItems = billString.split(",");
        for (var i=0;i<billItems.length;i++){
            var billItem = billItems[i].trim();
            if (billItem === "call"){
                billTotal += 2.75;
            }
            else if (billItem === "sms"){
                billTotal += 0.75;
            }
        }
    
    }


   function getbillTotal(){
       return billTotal;
   }

//    function getCallTotaCost(){
//        return call;
//    }
//    function getSmsTotaCost(){
//     return sms;
// }


    return{
        billItemType,
        getbillTotal,
        // getCallTotaCost,
        // getSmsTotaCost

    }
}
    // }