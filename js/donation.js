document.getElementById('donate-now-btn'). addEventListener('click',function(event)
{event.preventDefault();
    const donateMoney= document.getElementById('input-add-money').value;
    const balance= document.getElementById('current-donation').innerText;
    const adddonationmoney=parseFloat(donateMoney);
    const balancenumber= parseFloat(balance);
    const newbalance= adddonationmoney+ balancenumber;
    document.getElementById('current-donation').innerText= newbalance;
})