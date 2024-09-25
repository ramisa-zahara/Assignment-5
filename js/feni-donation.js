const donateButtonHandlerfeni = function (event) {
  event.preventDefault();
  const donateMoney = document.getElementById("input-add-money2").value;
  const balance = document.getElementById("current-donation-feni").innerText;
  const adddonationmoney = parseFloat(donateMoney);
  const balancenumber = parseFloat(balance);
  const newbalance = adddonationmoney + balancenumber;
  // document.getElementById('current-donation').innerText= newbalance;
  const availablemoney = document.getElementById("total-balance").innerText;
  const totalmoney = parseFloat(availablemoney);
  // const totalBDT= totalmoney-newbalance;
  // document.getElementById('total-balance').innerText=totalBDT;

  if (adddonationmoney <= totalmoney && newbalance > 0 && newbalance !== NaN) {
    document.getElementById("current-donation-feni").innerText = newbalance;
    const totalBDT = totalmoney - adddonationmoney;
    document.getElementById("total-balance").innerText = totalBDT;
    document.getElementById("input-add-money2").value = null;
    document.getElementById("my_modal_2").showModal();

    // transaction-history
    const div = document.createElement("div");
    div.classList.add(
      "flex",
      "flex-col",
      "gap-4",
      "border",
      "border-solid",
      "border-gray-300",
      "p-8",
      "text-xl",
      "font-bold",
      "rounded-xl"
    );
    const name = document.createElement("span");
    name.textContent = `${adddonationmoney} Taka is donated for Famine-2024 at Feni, Bangladesh`;
    const date = document.createElement("span");
    date.className += "font-light text-gray-500 text-sm";
    date.textContent = new Date().toString();

    div.appendChild(name);
    div.appendChild(date);

    document.getElementById("history-section").appendChild(div);
  } else {
    alert("Invalid amount!");
    document.getElementById("input-add-money2").value = null;
    // newbalance= balancenumber;
  }
};

document
  .getElementById("donate-now-btn-feni")
  .addEventListener("click", donateButtonHandlerfeni);
