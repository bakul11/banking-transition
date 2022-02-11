// ============================
// Handle Desposit Button
// ============================

document.getElementById('depositBtn').addEventListener('click', function () {
    let depositInput = document.getElementById('depositInput').value;
    let depositInputTotal = parseFloat(depositInput)
    //if user give me negative value
    if (depositInputTotal > 0) {
        let depositAmount = document.getElementById('depositAmount');
        let depositAmountTotal = depositAmount.innerText;
        let depositAmountConvertTotal = parseFloat(depositAmountTotal);
        //handle main balance 
        let totalDeposit = depositInputTotal + depositAmountConvertTotal;
        let totalBalance = document.getElementById('totalBalance');
        let totalBalanceText = totalBalance.innerText;
        let totalBalanceConvert = parseFloat(totalBalanceText);
        //handle total main balance
        const totalBalanceAdd = totalBalanceConvert + depositInputTotal;
        console.log(totalBalanceAdd);
        //set main balance
        totalBalance.innerText = totalBalanceAdd;
        depositAmount.innerText = totalDeposit;
    } else {
        alert('Deposit Positive Amount..Please Try aggain')
    }
    //Clean the Deposit Fill
    document.getElementById('depositInput').value = '';


})


// ============================
// Handle Withdrow Button
// ============================

document.getElementById('withdrowBtn').addEventListener('click', function () {
    let withdrowInput = document.getElementById('withdrowInput').value;
    let withdrowInputConvert = parseFloat(withdrowInput);

    if (withdrowInputConvert > 0) {
        let widthdrowAmount = document.getElementById('widthdrowAmount');
        let widthdrowAmountText = widthdrowAmount.innerText;
        let widthdrowAmountTotal = parseFloat(widthdrowAmountText);

        let totalWidthdrowBalance = withdrowInputConvert + widthdrowAmountTotal;
        console.log(totalWidthdrowBalance);
        widthdrowAmount.innerText = totalWidthdrowBalance;

        //handle main balance 
        let totalBalance = document.getElementById('totalBalance');
        let totalBalanceText = totalBalance.innerText;
        let totalBalanceConvert = parseFloat(totalBalanceText);

        const totalDepositMinas = totalBalanceConvert - withdrowInputConvert;
        totalBalance.innerText = totalDepositMinas;
    } else {
        alert('Withdrow Positive Amount..Please Try aggain')
    }
    //Clean the Withdrow Fill
    document.getElementById('withdrowInput').value = '';
})


