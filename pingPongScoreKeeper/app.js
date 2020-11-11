const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const reset = document.querySelector('#reset');
const maxPoint = document.querySelector('#maxPoint');
const p1Span = document.querySelector('.p1S');
const p2Span = document.querySelector('.p2S');

var winnigScore = 4
var pOneScore = 0
var pTwoScore = 0

btn1.addEventListener('click', () => {
    if(pOneScore !== winnigScore){
        pOneScore += 1
        p1Span.textContent = pOneScore
        if(pOneScore === winnigScore){
            p1Span.classList.add('green')
            p2Span.classList.add('red')
            btn1.disabled = true;
            btn2.disabled = true;
        }
    }
      
})
btn2.addEventListener('click', () => {
    if(pTwoScore !== winnigScore){
        pTwoScore += 1
        p2Span.textContent = pTwoScore
        if(pTwoScore === winnigScore){
            p2Span.classList.add('green')
            p1Span.classList.add('red')
            btn1.disabled = true;
            btn2.disabled = true;
        }
    }
})

maxPoint.addEventListener('change', ()=>{
    winnigScore = parseInt(maxPoint.value);
    resetBtn()
})
reset.addEventListener('click', resetBtn)

function resetBtn() {
    pOneScore = 0
    pTwoScore = 0
    p1Span.textContent = pOneScore
    p2Span.textContent = pTwoScore
    p1Span.classList.remove('green', 'red')
    p2Span.classList.remove('red', 'green')
    btn1.disabled = false;
    btn2.disabled = false;
}