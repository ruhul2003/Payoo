document.getElementById("cashout-btn").addEventListener("click", function () {
  //1- get the agent number & validate
  const cashoutNumber = getValueFromInput("cashout-number");
  if (cashoutNumber.length != 11) {
    alert("invalid number");
    return;
  }
  //2- get the amount
  const cashoutAmount = getValueFromInput("cashout-amount");

  const currentBalance = getBalance();
  //4 calculate Balance
  const newBalance = currentBalance - Number(cashoutAmount);
  console.log(newBalance);
  if (newBalance < 0) {
    alert("invalid Amount");
    return;
  }
  const pin = getValueFromInput("input-pin");
  if (pin === "1234") {
    alert("Cashout Successfull");
    setBalance(newBalance);

    const history = document.getElementById("history-container");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100 rounded-2xl"> 
        Cashout ${cashoutAmount} tk Successfull to ${cashoutAmount},
         at ${new Date().toLocaleString()}
    </div>`;
    history.appendChild(newHistory);
  } else {
    alert("invalid Pin");
    return;
  }
});













// document.getElementById("cashout-btn").addEventListener("click", function () {
//     const cashoutNumber = document.getElementById("cashout-number").value;
//     if (cashoutNumber.length != 11) {
//         alert("Invalid Agent Number");
//         return;
//     }

//     console.log(cashoutNumber);

//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);


//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
//     console.log(balance);


//     const newBalance = Number(balance) - Number(cashoutAmount);

//     if (newBalance < 0) {
//         alert("Insufficient Balance");
//         return;
//     }
//     balanceElement.innerText = newBalance;

//     const cashoutPinInput = document.getElementById("input-pin");
//     const Pin = cashoutPinInput.value;
    
//     if(Pin == "1234"){
//         alert("Cashout Successfully");
//             console.log("New balance is",newBalance);
//     }else{
//         alert("Invalid Pin");
//     }
//     return;


    

    
// });
