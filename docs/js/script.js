const res = document.querySelector('.result');
const toCount = document.querySelector('.container__submit');
toCount.addEventListener('click', countFunc);

function countFunc(){
    const bcValue = document.getElementById('bcPrice').value;
    const dollarValue = document.getElementById('dollarPrice').value;
    const valueResult = bcValue !== '' && dollarValue !== '' && bcValue >= 0 && dollarValue >= 0 ? dollarValue / bcValue : 0;
    const resultElem = document.createElement('div');
    resultElem.classList.toggle('all-result');
    resultElem.innerHTML = `You can buy ${valueResult} BTC`
    res.appendChild(resultElem);
    toCount.removeEventListener('click', countFunc);
    toCount.addEventListener('click', removeFunc);
    toCount.innerHTML = 'RETRY'
}
function removeFunc(){
    const resultElem = document.querySelector('.all-result');
    resultElem.remove();
    toCount.innerHTML = 'RESULT';
    toCount.removeEventListener('click', removeFunc);
    toCount.addEventListener('click', countFunc);
}