document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-add-money');
    const balance = getTextFieldValueById('total-balance');

    const newBalance = balance - cashOut;
    document.getElementById('total-balance').innerText = newBalance;
})