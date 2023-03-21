document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log('withdraw button clicked');
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountString = withdrawAmount.value;
    const newWithdrawAMount = parseFloat(withdrawAmountString);

    const withdrawTotalAMount = document.getElementById('withdraw-total');
    const prevWithdrawtotalString = withdrawTotalAMount.innerText;
    const prevWithdrawTotal = parseFloat(prevWithdrawtotalString);
    // console.log(prevWithdrawTotal);

    const currentWithdrawTotal = prevWithdrawTotal + newWithdrawAMount;
    withdrawTotalAMount.innerText = currentWithdrawTotal;

    withdrawAmount.value = '';

    const balanceTotalElement = document.getElementById('balance-total');
    const prevBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(prevBalanceTotalString);
    
    balanceTotalElement.innerText = previousBalanceTotal - newWithdrawAMount;
    
})