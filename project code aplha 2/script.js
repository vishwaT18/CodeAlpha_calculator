const display = document.getElementById("display");
const historyList = document.getElementById("historyList");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        let result = eval(display.value);

        addHistory(display.value + " = " + result);

        display.value = result;
    }
    catch{
        display.value = "Error";
    }
}

function addHistory(text){
    const li = document.createElement("li");
    li.textContent = text;

    historyList.prepend(li);

    if(historyList.children.length > 10){
        historyList.removeChild(historyList.lastChild);
    }
}

function clearHistory(){
    historyList.innerHTML = "";
}

document.addEventListener("keydown",function(event){

    const key = event.key;

    if(
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
    ){
        display.value += key;
    }

    if(key === "Enter"){
        calculate();
    }

    if(key === "Backspace"){
        deleteLast();
    }

    if(key === "Escape"){
        clearDisplay();
    }

});