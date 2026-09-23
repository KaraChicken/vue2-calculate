(()=>{"use strict";
const display=document.querySelector("#display"),keys=document.querySelector(".keys");
const operations={add:(a,b)=>a+b,subtract:(a,b)=>a-b,multiply:(a,b)=>a*b,divide:(a,b)=>a/b};
let current="0",stored=null,operator=null,waiting=false,error=false;
function render(){display.textContent=current}
function reset(){current="0";stored=null;operator=null;waiting=false;error=false;render()}
function inputNumber(n){if(error)reset();if(waiting){current=n;waiting=false}else current=current==="0"?n:current+n;render()}
function decimal(){if(error)reset();if(waiting){current="0.";waiting=false}else if(!current.includes("."))current+=".";render()}
function backspace(){if(error){reset();return}if(waiting)return;current=current.length>1?current.slice(0,-1):"0";render()}
function calculate(a,b,op){if(op==="divide"&&b===0)throw Error();const result=operations[op](a,b);if(!Number.isFinite(result))throw Error();return Number.parseFloat(result.toPrecision(12))}
function chooseOperator(next){if(error)reset();const input=Number(current);if(operator&&stored!==null&&!waiting){try{stored=calculate(stored,input,operator);current=String(stored);render()}catch{showError();return}}else if(stored===null)stored=input;operator=next;waiting=true}
function equals(){if(operator===null||stored===null||waiting)return;try{current=String(calculate(stored,Number(current),operator));stored=null;operator=null;waiting=true;render()}catch{showError()}}
function showError(){current="Error";stored=null;operator=null;waiting=true;error=true;render()}
keys.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;if(b.dataset.number!==undefined)return inputNumber(b.dataset.number);if(b.dataset.operator)return chooseOperator(b.dataset.operator);if(b.dataset.action==="decimal")return decimal();if(b.dataset.action==="backspace")return backspace();if(b.dataset.action==="clear")return reset();if(b.dataset.action==="equals")return equals()});
document.addEventListener("keydown",e=>{const map={"+":"add","-":"subtract","*":"multiply","/":"divide"};if(/^\d$/.test(e.key)){e.preventDefault();inputNumber(e.key)}else if(e.key==="."){e.preventDefault();decimal()}else if(map[e.key]){e.preventDefault();chooseOperator(map[e.key])}else if(e.key==="Enter"||e.key==="="){e.preventDefault();equals()}else if(e.key==="Escape"||e.key.toLowerCase()==="c"){e.preventDefault();reset()}else if(e.key==="Backspace"){e.preventDefault();backspace()}});
render();
})();