

  

function calculate(data){
    let output=document.getElementById("result");
let input=document.getElementById("num");
if(data=='AC'){
    input.innerHTML=" ";
    output.innerHTML="0";
}
else if(data=='C'){
    input.innerHTML=input.innerHTML.substr(0,input.innerHTML.length -1); 
}
else if(data=='='){
    output.innerHTML=eval(input.innerHTML);
}
        else {
            input.innerHTML+=data;
        }
}