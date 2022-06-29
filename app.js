var input=document.querySelector("#submitbtn");
var text=document.querySelector("#txt-inputs")

function eventhandler(){
    // console.log('clicked');
    var txtinput=text.value;
    
    console.log("clicked",txtinput);

        
}


input.addEventListener("click",eventhandler)