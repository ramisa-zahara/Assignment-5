
const donateButtonHandler = function(event)
{event.preventDefault();
    const donateMoney= document.getElementById('input-add-money').value;
    const balance= document.getElementById('current-donation').innerText;
    const adddonationmoney=parseFloat(donateMoney);
    const balancenumber= parseFloat(balance);
    const newbalance= adddonationmoney+ balancenumber;
    // document.getElementById('current-donation').innerText= newbalance;
    const availablemoney= document.getElementById('total-balance').innerText;
    const totalmoney= parseFloat(availablemoney);
    // const totalBDT= totalmoney-newbalance;
    // document.getElementById('total-balance').innerText=totalBDT;
    
    if(adddonationmoney <= totalmoney && newbalance>0 && newbalance!==NaN){
        document.getElementById('current-donation').innerText= newbalance;
        const totalBDT= totalmoney-adddonationmoney;
        document.getElementById('total-balance').innerText=totalBDT;
        document.getElementById('input-add-money').value=null;
        document.getElementById('my_modal_1').showModal()
    }
    
    else {
        alert("Balance Excedded!");  
        document.getElementById('input-add-money').value=null;
        // newbalance= balancenumber;
    }
    
    
}

document.getElementById('donate-now-btn'). addEventListener('click',donateButtonHandler)