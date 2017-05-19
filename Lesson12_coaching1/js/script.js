
/////////////FUNCTION WORKS BY SUBMIT FORM1 BUTTON/////////////////////////////////////////////
var myOut1 = document.getElementById("form1Output");
var formFirst = document.getElementById("textForm1");
var myOut2 = document.getElementById("form2Output");
var myOut3 = document.getElementById("form3Output");
var myOut4 = document.getElementById("form4Output");
var textFormTwo = document.getElementById("textForm2"); 
var textFormThree = document.getElementById("textForm4"); 
var textFormFive = document.getElementById("textForm5"); 
var mySecondMessage = "";

function textAction() {
        if (formFirst.classList.contains("formError")) {formFirst.classList.remove("formError"); }
//CHECK IF THE FIRST FORM FILLED//////////////////////////////////////////////////////
    if (!formFirst.value) {
    alert("Type your text, please!");
     console.log("No entered First form text");
     formFirst.classList.add("formError");
    } else { 
        var myFirstMessageLog = "Ваш текст: " + formFirst.value + "\n" + "Количество символов: " + formFirst.value.length;
        var myFirstMessageHTML = "Ваш текст: " +formFirst.value + "<br>" + "Количество символов: " + formFirst.value.length;
        console.log(myFirstMessageLog);
        myOut1.innerHTML = myFirstMessageHTML;
    }

}

function restoreForm1(){
    myOut1.innerHTML = "";
    formFirst.value = "";
    console.clear();
} 

//////////////Task2////////////////////

function textAction2(){
    if (textFormTwo.classList.contains("formError")) {textFormTwo.classList.remove("formError"); }
//CHECK IF THE FIRST FORM FILLED//////////////////////////////////////////////////////
    if (!textFormTwo.value) {
    alert("Type your text into task2-form, please!");
     console.log("No entered Second form text");
     textFormTwo.classList.add("formError");
    } else { 
        mySecondMessage = textFormTwo.value;
        console.log("Ваш исходный текст: " + mySecondMessage);
        myOut2.innerHTML = "Ваш исходный текст: " + mySecondMessage;
    }
}

function myChangeText(form3){
        if(!textFormTwo.value){
        alert("Type and submit your text into form2 first, please!");
        textFormTwo.classList.add("formError");
        }else{
        var form3Elements = form3.elements;
    
        for(var i=0; i<form3Elements.length; i++){
            if(form3Elements[i].classList.contains("formError")){form2Elements[i].classList.remove("formError")};
        }

       if (textFormTwo.classList.contains("formError")) {formFirst.classList.remove("formError"); }
//CHECK IF THE FORM2 search FILLED//////////////////////////////////////////////////////
        if(!form3Elements.searchText.value){
        alert("Type your search text, please!");
         console.log("No search text entered");
         document.getElementById("searchText").classList.add("formError");
        }
//CHECK IF THE FORM2 change FILLED///////////////////////////////////////////////////////
        if(!form3Elements.changeText.value){
        alert("Type your change text, please!");
         console.log("No changeText entered");
         document.getElementById("changeText").classList.add("formError");
        }
    
            if(textFormTwo.value&&form3Elements.searchText.value&&form3Elements.changeText.value){
           var myNewText = mySecondMessage.replace(searchText.value, changeText.value);
           var myNewMessageLog = "Ваш исходный текст: " + mySecondMessage + "\n" + "Что заменить: " + searchText.value + "\n" + "На что заменить: " + changeText.value + "\n" + "Новый текст: " + myNewText;
           var myNewMessageHTML = "Ваш исходный текст: " + mySecondMessage + "<br>" + "Что заменить: " + searchText.value + "<br>" + "На что заменить: " + changeText.value + "<br>" + "Новый текст: " + myNewText;
           if(myNewMessageHTML){
               myOut3.innerHTML = myNewMessageHTML;
                console.log(myNewMessageLog);
                           }
        }
    }
}

///////////////////reset for task 2 - forms 2 and 3
function restoreForm2(){
    textFormTwo.value = "";
    myOut2.innerHTML = "";
    myOut3.innerHTML = "";
    changeText.value = "";
    searchText.value = "";
    console.clear();
} 


///////////////////Task 3///////////////////////////////
function textAction4(){
    if (textFormThree.classList.contains("formError")) {textFormThree.classList.remove("formError"); }
//CHECK IF THE FIRST FORM FILLED//////////////////////////////////////////////////////
    if (!textFormThree.value) {
    alert("Type your text into task2-form, please!");
     console.log("No entered Second form text");
     textFormThree.classList.add("formError");
    } else { 
        myThirdMessage = textFormThree.value;
        console.log("Ваш исходный текст: " + myThirdMessage);
        myOut4.innerHTML = "Ваш исходный текст: " + myThirdMessage;
    }
}

function myChangeText3(){
        if(!textFormThree.value){
        alert("Type and submit your text into form3 first, please!");
        textFormThree.classList.add("formError");
        }else if(!textFormFive.value){
            alert("Type and submit your text into search form first, please!");
            textFormFive.classList.add("formError");
            console.log("No search text entered");
            textFormFive.classList.add("formError");
        }else{
           textFormFive.classList.remove("formError")
            if (textFormThree.classList.contains("formError")) {textFormThree.classList.remove("formError"); }
//CHECK IF THE FORM3 search FILLED//////////////////////////////////////////////////////
        
           var myNewText3 = myThirdMessage.search(textFormFive.value);
           var myNewMessage3Log = "Ваш исходный текст: " + myThirdMessage + "\n" + "Что найти: " + textFormFive.value + "\n" + "Позиция в тексте: " + myNewText3;
           var myNewMessage3HTML = "Ваш исходный текст: " + myThirdMessage + "<br>" + "Что найти: " + textFormFive.value + "<br>" + "Позиция в тексте: " + myNewText3;
           if(myNewMessage3HTML){
               myOut4.innerHTML = myNewMessage3HTML;
                console.log(myNewMessage3Log);
                           }
        }
    }


///////////////////reset for task 3 - forms 4 and 5
function restoreForm4(){
    textFormThree.value = "";
    textFormFive.value = "";
    myOut4.innerHTML = "";
    changeText.value = "";
    searchText.value = "";
    console.clear();
} 
