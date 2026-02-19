document.getElementById("cashout-btn").addEventListener("click", function () {
    const cashoutNumber = document.getElementById("cashout-number").value;
    console.log(cashoutNumber);

    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);
});
