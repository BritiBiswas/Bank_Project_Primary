document.getElementById("deposit-button").addEventListener("click",function(){
    const depositInputField =document.getElementById("deposit-input");
    const inputText=depositInputField.value;
    const newDepositAmount=parseFloat(inputText);
   

    const depositTotal=document.getElementById("deposit-total");
    const previousDepositText=depositTotal.innerText;
    const previousDepositAmount=parseFloat(previousDepositText);
    const newDepositTotal=previousDepositAmount+ newDepositAmount;
    
    depositTotal.innerText=newDepositTotal;
    
    
    depositInputField.innerText= '';
   

    const previousBalanceTotal=document.getElementById("balance-total");
    const previousBalanceTotalText=previousBalanceTotal.innerText;
    const previousBalanceTotalAmount=parseFloat(previousBalanceTotalText);
    const newBalanceTotal= previousBalanceTotalAmount + newDepositAmount;
    previousBalanceTotal.innerText=newBalanceTotal;
})

document.getElementById("withdraw-button").addEventListener("click",function(){
    const withdrawInputField=document.getElementById("withdraw-input");
    const withdrawInputText=withdrawInputField.value;
    const newWithdrawAmount =parseFloat(withdrawInputText);

    const withdrawTotal =document.getElementById("withdraw-total");
    const withdrawTotalText=withdrawTotal.innerText;
    const previousWithdrawTotal=parseFloat(withdrawTotalText);

    const newWithdrawTotal=previousWithdrawTotal +newWithdrawAmount;
    withdrawTotal.innerText=newWithdrawTotal;
    withdrawInputField.innerText=' ';
    
    const previousBalanceTotal=document.getElementById("balance-total");
    const previousBalanceTotalText=previousBalanceTotal.innerText;
    const previousBalanceTotalAmount=parseFloat(previousBalanceTotalText);
    const newBalanceTotal= previousBalanceTotalAmount - newWithdrawAmount;
    previousBalanceTotal.innerText=newBalanceTotal;

}) 




