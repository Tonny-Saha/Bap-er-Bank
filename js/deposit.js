document.getElementById('btn-deposit').addEventListener('click', function(){
    // deposit
    const depositField = document.getElementById('depositField');
    const depositAmountFloat = depositField.value;
    const depositAmount = parseFloat(depositAmountFloat);

    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalFloat = depositTotalElement.innerText;
    const depositTotal = parseFloat(depositTotalFloat);

    const currentDepositAmount = depositTotal + depositAmount;
    depositTotalElement.innerText = currentDepositAmount;
    
    // Balance
    const BalanceTotalFloat = document.getElementById('balance-total');
    const prevBalance = BalanceTotalFloat.innerText;
    const prevBalanceTotal = parseFloat(prevBalance);

    const currentBalance = prevBalanceTotal + depositAmount;
    BalanceTotalFloat.innerText = currentBalance;
    

    // withdraw

    
})