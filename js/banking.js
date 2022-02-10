//Handle Desposit Button
document.getElementById('depositBtn').addEventListener('click', function () {
    let depositInput = document.getElementById('depositInput').value;
    let depositInputTotal = parseFloat(depositInput)


    let depositAmount = document.getElementById('depositAmount');
    let depositAmountTotal = depositAmount.innerText;
    let depositAmountConvertTotal = parseFloat(depositAmountTotal);

    let totalDeposit = depositInputTotal + depositAmountConvertTotal;
    console.log(totalDeposit);


    //handle main balance 
    let totalBalance = document.getElementById('totalBalance');
    let totalBalanceText = totalBalance.innerText;
    let totalBalanceConvert = parseFloat(totalBalanceText);

    const totalBalanceAdd = totalBalanceConvert + depositInputTotal;
    console.log(totalBalanceAdd);

    totalBalance.innerText = totalBalanceAdd;


    depositAmount.innerText = totalDeposit;
    //Clean the Deposit Fill
    document.getElementById('depositInput').value = '';


})


//Handle Withdrow Button
document.getElementById('withdrowBtn').addEventListener('click', function () {
    let withdrowInput = document.getElementById('withdrowInput').value;
    let withdrowInputConvert = parseFloat(withdrowInput);

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

    //Clean the Withdrow Fill
    document.getElementById('withdrowInput').value = '';
})


