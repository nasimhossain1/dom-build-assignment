document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money');

    const balance = getTextFieldValueById('account-balance');
    const newBalance = balance + addMoney;

    document.getElementById('account-balance').innerText = newBalance;

    // add to transaction history
    const p = document.createElement('p');
    p.innerText = ` ${addMoney}  Taka is Donated for famine-2024 at Feni, Bangladesh`;
    console.log(p);

    // should be a common function
    document.getElementById('transaction-container').appendChild(p);
    // add to transaction history
    const today = new Date();
    today.setDate(today.getDate());
    console.log(today);
    // should be a common function
    document.getElementById('transaction-container').appendChild(today);
    
})