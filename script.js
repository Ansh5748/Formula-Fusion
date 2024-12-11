const input=document.getElementById('inputBox');
function Display(val){
    input.value+=val;
}
function Calculate(){
    try{
        input.value=eval(input.value);
    }
    catch{
        input.value="Invalid";
    }
}
function Exponential(){
    input.value += "*10**";
}
function ClearDisplay(){
    input.value="";
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
    input.value=result;
}
function CosFunction(){
    const value=parseFloat(input.value);
    if(isNaN(value)){
        input.value="Invalid";
        return;
    }
    const result=isDegree?Math.cos(value*(Math.PI/180)):Math.cos(value);
    input.value=result;
}
function TanFunction(){
    const value=parseFloat(input.value);
    if(isNaN(value)){
        input.value="Invalid";
        return;
    }
    const result=isDegree?Math.tan(value*(Math.PI/180)):Math.tan(value);
    input.value=result;
}
function LogFunction(){
    const value=parseFloat(input.value);
    if(isNaN(value) || value <= 0){
        input.value="Invalid";
        return;
    }
    input.value=Math.log10(value);
}
function LnFunction(){
    const value=parseFloat(input.value);
    if(isNaN(value) || value<=0){
        input.value="Invalid";
        return;
    }
    input.value=Math.log(value);
}
