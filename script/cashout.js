document.getElementById("cashout-btn").addEventListener("click", function () {
    const cashoutNumber = document.getElementById("cashout-number").value;
    console.log(cashoutNumber);

    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);


    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);


    const newBalance = Number(balance) - Number(cashoutAmount);
    balanceElement.innerText = newBalance;
    console.log("New balance is",newBalance);

    

    
});
