const input=document.getElementById('inputBox');
const historyList=document.getElementById('historyList');
function Display(val){
    input.value+=val;
}
function Calculate(){
    try{
        const result=eval(input.value);
        saveToHistory(`${input.value} = ${result}`);
        input.value=result;
    }
    catch{
        input.value="Invalid";
    }
}
function Exponential(){
    input.value += "10*";
}
function ClearDisplay(){
    input.value="";
}
function saveToHistory(operation){
    let history=JSON.parse(localStorage.getItem('calcHistory')) || [];
    history.unshift(operation);
    if(history.length>10){
        history.pop();
    }
    localStorage.setItem('calcHistory', JSON.stringify(history));
}
function toggleHistory(){
    const historyDiv=document.getElementById('history');
    if(historyDiv.style.display==='none'){
        showHistory();
        historyDiv.style.display='block';
    } 
    else{
        historyDiv.style.display='none';
    }
}

function showHistory(){
    historyList.innerHTML="";
    const history=JSON.parse(localStorage.getItem('calcHistory')) || [];
    history.forEach(entry=>{
        const li=document.createElement('li');
        li.textContent=entry;
        historyList.appendChild(li);
    });
}
function factorial(){
    try{
        const val=parseInt(input.value);
        if(isNaN(val) || val<0){
            input.value="Invalid";
            return;
        }
        let fact=1;
        for(let i=1;i<=val;i++){
            fact*=i;
        }
        saveToHistory(`${val}! = ${fact}`);
        input.value=fact;
    } 
    catch{
        input.value="Invalid";
    }
}



let isDegree=true;
function SinFunction(){
    const value=parseFloat(input.value);
    if(isNaN(value)){
        input.value="Invalid";
        return;
    }
    const result=isDegree?Math.sin(value*(Math.PI/180)):Math.sin(value);
    saveToHistory(`sin(${value}) = ${result}`);
    input.value=result;
}
function CosFunction(){
    const value=parseFloat(input.value);
    if(isNaN(value)){
        input.value="Invalid";
        return;
    }
    const result=isDegree?Math.cos(value*(Math.PI/180)):Math.cos(value);
    saveToHistory(`cos(${value}) = ${result}`);
    input.value=result;
}
function TanFunction(){
    const value=parseFloat(input.value);
    if(isNaN(value)){
        input.value="Invalid";
        return;
    }
    const result=isDegree?Math.tan(value*(Math.PI/180)):Math.tan(value);
    saveToHistory(`tan(${value}) = ${result}`);
    input.value=result;
}
function LogFunction(){
    const value=parseFloat(input.value);
    if(isNaN(value) || value <= 0){
        input.value="Invalid";
        return;
    }
    const result=Math.log10(value);
    saveToHistory(`log(${value}) = ${result}`);
    input.value=result;
}
function LnFunction(){
    const value=parseFloat(input.value);
    if(isNaN(value) || value<=0){
        input.value="Invalid";
        return;
    }
    const result=Math.log(value);
    saveToHistory(`ln(${value}) = ${result}`);
    input.value=result;
}
function InvFunction() { 
    const value = parseFloat(input.value); 
    if (isNaN(value) || value === 0) { 
        input.value = "Invalid"; return; 
    } 
    const result = 1 / value;
    saveToHistory(`1/${value} = ${result}`);
    input.value = result; 
} 

function PowFunction() { 
    input.value += "**"; 
}
function SqrtFunction() { 
    const value = parseFloat(input.value); 
    if (isNaN(value) || value < 0) { 
    input.value = "Invalid"; return; 
    } 
    const result = Math.sqrt(value);
    saveToHistory(`√${value} = ${result}`);
    input.value = result;
}
function PiFunction() {
    input.value = Math.PI; 
}
function EFunction() { 
    input.value = Math.E; 
}
function toggleDeg() {
    const degreeValue = parseFloat(input.value);
    if (isNaN(degreeValue)) {
        input.value = "Invalid";
        return;
    }
    const radianValue = degreeToRadian(degreeValue);
    saveToHistory(`Degree: ${degreeValue} = Radian: ${radianValue}`);
    input.value = radianValue;
}
function radianToDegree(radian) {
    return radian * (180 / Math.PI);
}
function degreeToRadian(degree) {
    return degree * (Math.PI / 180);
}
function Remove(){
    if(input.value==="Invalid" || input.value==="Infinity" || input.value==="undefined"){
        input.value="";
    }
    input.value=input.value.slice(0,-1);
}

function flipCalculator() {
    const calculator = document.querySelector('.calculator');
    calculator.classList.toggle('flipped');

    const digits = document.querySelectorAll('.digits');
    const opr = document.querySelectorAll('.opr');
    const scientific = document.querySelectorAll('.scientific');

    if (calculator.classList.contains('flipped')) {
        digits.forEach(button => button.style.display = 'none');
        opr.forEach(button => button.style.display = 'none');
        scientific.forEach(button => button.style.display = 'inline-block');
    } else {
        digits.forEach(button => button.style.display = 'inline-block');
        opr.forEach(button => button.style.display = 'inline-block');
        scientific.forEach(button => button.style.display = 'none');
    }
}
function adjustCalculatorLayout() {
    const flipButton = document.querySelector("#flip");
    const digits = document.querySelectorAll('.digits');
    const opr = document.querySelectorAll('.opr');
    const scientific = document.querySelectorAll('.scientific');
    const arithmetic = document.querySelectorAll('.arithmetic');
    const body = document.getElementsByClassName('calculator');

    if (window.innerWidth > 501) {
        flipButton.style.display = 'none';
        digits.forEach(button => button.style.display = 'inline-block');
        opr.forEach(button => button.style.display = 'inline-block');
        scientific.forEach(button => button.style.display = 'inline-block');
        arithmetic.forEach(button => button.style.display = 'inline-block');
    } else {
        flipButton.style.display = 'inline-block';
        const calculator = document.querySelector('.calculator');
        if (!calculator.classList.contains('flipped')) {
            scientific.forEach(button => button.style.display = 'none');
        }
    }
}
window.addEventListener('resize', adjustCalculatorLayout);
window.addEventListener('load', adjustCalculatorLayout);
