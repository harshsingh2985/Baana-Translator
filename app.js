var input=document.querySelector("#submitbtn");
var text=document.querySelector("#txt-inputs")
var output=document.querySelector("#outputdiv");


function eventhandler(){
    // console.log('clicked');
    var txtinput=text.value;
    output.innerText="translated"+txtinput;

    
}


input.addEventListener("click",eventhandler)