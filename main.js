var elForm = document.querySelector(".form");
var elInputFirst = elForm.querySelector(".input__first-js");
var elInputSecond = elForm.querySelector(".input__second-js");
var elBtnBefore = document.querySelector(".btn__js");
var elBtnAfter = document.querySelector(".btn__back-js");
var text = document.querySelector(".list");

var fruits = ["Olma" ,"limon" , "nok"]; 

var newMyFunction = function(){

    for (var fruit of fruits){
    
        var newItem = document.createElement("li");
        text.classList.add("list-js")
    
        var newText = document.createElement("p");
        newText.textContent = fruit;
    
        newItem.appendChild(newText);
        text.appendChild(newItem)
    
    }
}

newMyFunction();

elForm.addEventListener("submit" , function(evt){
    evt.preventDefault();

    text.textContent = "";

    var elInputFirstValue = elInputFirst.value.trim();
    var elInputSecondValue = elInputSecond.value.trim();

    fruits.unshift(elInputFirstValue);
    fruits.push(elInputSecondValue);

    newMyFunction();

})

elBtnBefore.addEventListener("click" , function(){

    text.textContent = "";

    var elInputFirstValue = elInputFirst.value.trim();
    fruits.shift(elInputFirstValue);


    newMyFunction()

})

elBtnAfter.addEventListener("click" , function(){

    text.textContent = "";

    var elInputFirstValue = elInputFirst.value.trim();
    fruits.pop(elInputFirstValue);


    newMyFunction()

})
