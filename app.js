
// alert("Connected");
var input = document.querySelector("#input-txt");
var btnClick = document.querySelector("#btn");
var otpt = document.querySelector(".output");
var server = "https://api.funtranslations.com/translate/minion.json";


function getTranslateURL(txt){
    return server + "?" + "text=" + txt;
}

function clickHandler(){
    var inputTxt = input.value;
    fetch(getTranslateURL(inputTxt))
        .then(response => response.json())
        .then(json =>{
        var translatedTxt = json.contents.translated;
    otpt.innerText = translatedTxt;
        
        }
    
    )
};

btnClick.addEventListener("click",clickHandler);





