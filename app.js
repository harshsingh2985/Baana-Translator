var input=document.querySelector("#submitbtn");
var text=document.querySelector("#txt-inputs")
var output=document.querySelector("#outputdiv");

// var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var url="https://api.funtranslations.com/translate/minion.json"

function geturl(text){
    return url+"?"+"text="+text;
}



function eventhandler(){
    // console.log('clicked');
    var txtinput=text.value;
    // output.innerText="translated"+txtinput;

    // calling server for processing
    fetch(geturl(txtinput))
    .then(Response=>Response.json())
    .then(json=>console.log(json.contents.translated));


}


input.addEventListener("click",eventhandler)