let res = document.querySelector('span');
const toCount = document.querySelector('.container__submit');
toCount.addEventListener('click', countFunc);

function countFunc(){
    const bcValue = document.getElementById('bcPrice').value;
    const dollarValue = document.getElementById('dollarPrice').value;
    let valueResult = bcValue !== '' && dollarValue !== '' && bcValue > 0 && dollarValue > 0 ? dollarValue / bcValue : 0;
    res.innerHTML = valueResult;
}