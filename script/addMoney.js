document.getElementById("add-money-btn").addEventListener("click", function () {

    const bankAccount = getValueFromInput("add-money-bank");
    console.log(bankAccount);
    if(bankAccount == "Select Bank"){
        alert("Please Select a Bank");
        return;
    }

    // get account number

    const accountNumber =getValueFromInput("add-money-number");
    if(accountNumber.length != 11){
        alert("Invalid Account Number");
        return;
    }

    // get amount

    const amount = getValueFromInput("add-money-amount");
    if(amount.length < 1){
        alert("Invalid Amount");
        return;
    }

    const pin = getValueFromInput("add-money-pin");
    if(pin.length != 4){
        alert("Invalid Pin");
        return;
    }else{
        alert(`Add Money Successfull from ${bankAccount} bank to ${accountNumber} at ${new Date().toLocaleString()}`);
    }

    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);
    console.log(newBalance);
    setBalance(newBalance);

    const history = document.getElementById("history-container");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100 rounded-2xl"> 
        Add Money Successfull from ${bankAccount},Account Number ${accountNumber} bank
         to ${accountNumber} 
         at ${new Date().toLocaleString()}
    </div>`;
    history.appendChild(newHistory);
});