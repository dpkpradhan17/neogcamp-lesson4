var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

var serverUrl="https://api.funtranslations.com/translate/minion.json";
function urlConstructor(txt){
    return serverUrl +"?" + "text=" +txt;
};

function errorHandler(error){
    console.log("error occured: "+error);
    alert(" The Server is busy. Please try after some time");
}

function clickHandler(){
    var inputText= txtInput.value;
    fetch(urlConstructor(inputText))
        .then(response=>response.json())
        .then(json=>{
            var translatedTxt = json.contents.translated;
            outputDiv.innerText = translatedTxt;
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)