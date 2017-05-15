/////////////////////On page laad function/////////////////////////////////////////////////////////
/*
window.onload = OnMyPageLoad;
function OnMyPageLoad(){
    var patt = /.+\.+/ig;
    var myPath = "\.\.\/img\/gallery\/";
    var myFiles = myPath.search(patt);
    alert(myFiles);
}
*/
/*   var patt = /\.\.\/img\/gallery\/.*\.{jpg,gif,png}/ig;
    var myFiles = search(patt);
    alert(myFiles[0]);
}*/

/////////////////////Varriables/////////////////////////////////////////////////////////
    var myGalleryBig = ["img/gallery/pict_1.jpg", "img/gallery/pict_2.jpg", "img/gallery/pict_3.jpg", "img/gallery/pict_4.jpg", "img/gallery/pict_5.jpg"];
    var myGallerySmall = ["img/gallery/pict_1_small.jpg", "img/gallery/pict_2_small.jpg", "img/gallery/pict_3_small.jpg", "img/gallery/pict_4_small.jpg", "img/gallery/pict_5_small.jpg"];
    var num = 0;

/////////////FUNCTION WORKS BY SUBMIT BUTTON/////////////////////////////////////////////
function nameAction(form) {
    var formElements = form.elements;
       
    for(var i=0; i<formElements.length; i++){
        if(formElements[i].classList.contains("formError")){formElements[i].classList.remove("formError")};
    }
//CHECK IF THE FORM FIRST NAME FILLED//////////////////////////////////////////////////////
    if(!formElements.firstNameForm1.value){
    alert("Type your name, please!");
     console.log("Don't entered First name");
     document.getElementById("firstNameForm1").classList.add("formError");
    }
//CHECK IF THE FORM LAST NAME FILLED///////////////////////////////////////////////////////
    if(!formElements.lastNameForm1.value){
    alert("Type your last name, please!");
     console.log("Don't entered Last name");
     document.getElementById("lastNameForm1").classList.add("formError");
    }

//CHECK IF THE BOHT FORMS HAVEN'T GOT CLASS FORM ERROR AND MAKE OUTPUT//////////////////////
    if(!formElements.lastNameForm1.classList.contains("formError")&!formElements.firstNameForm1.classList.contains("formError")){
     var myMessage1 = "Доброго дня, " + formElements.lastNameForm1.value + " " + formElements.firstNameForm1.value +"!";
     var myMessage2 = "Приветствую вас, " + formElements.firstNameForm1.value + " на уроке 11!";
     alert(myMessage1);
     console.log("Введены First name: " +this.firstNameForm1.value+" and Last name: "+  this.lastNameForm1.value);
     var myH1=document.getElementsByTagName("H1");
     myH1[0].textContent = myMessage2;
     formElements.lastNameForm1.value = "";
     formElements.firstNameForm1.value = "";
     document.getElementById("dolphin").style.display = "inherit";
    }
}

/////////////FUNCTION WORKS BY RESET BUTTON ////////////////////////////////////////////////

function restoreAll(){
    var myH1=document.getElementsByTagName("H1");
    myH1[0].textContent = "Урок 11";
    document.getElementById("dolphin").style.display = "none";
}


/////////////FUNCTION WORKS BY Left Arrow pseudo button at the first Gallery ////////////////////////////////////////////////

function myLeftArr(){
    var slider=document.getElementById("slider");
    num--;
    if(num<0){num=myGallerySmall.length-1;}
    slider.src=myGallerySmall[num];
}

function myRightArr(){
    var slider=document.getElementById("slider");
    num++;
    if(num>myGallerySmall.length-1){num=0;}
    slider.src=myGallerySmall[num];
}



/////////////FUNCTION WORKS BY Right Arrow pseudo button at the first Gallery //////////////////swiper//////////////////////////////
 $(document).ready(function () {
    //initialize swiper when document ready  
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
      loop: true
    })        
  });

function myBigImage(){
    var myMainDiv=document.getElementById("main");
    var sweepSlider=document.getElementsByClassName("swiper-container");
    var sliderBig=document.createElement("div");
    var sliderBigImg=document.createElement("img");
    myMainDiv.appendChild(sliderBig);
    sliderBig.appendChild(sliderBigImg);
    //document.getElementById("firstNameForm1").classList.add("BigPict");
    sliderBig.classList.add("BigPict_shown");
    sliderBig.id="BigPict_shown";
    sliderBigImg.src=myGalleryBig[num];
    //sweepSlider.classList.remove("swiper-container");
    sweepSlider[0].classList.add("swiper-container2");
    document.addEventListener("onkeypress",  myGalleryEsc(e, sweepSlider, myMainDiv, sliderBig));}

function myGalleryEsc(e, sweepSlider, myMainDiv, sliderBig){ 
    if(e.key=='Escape'||e.key=='Esc'||e.keyCode==27){ 
    sweepSlider[0].classList.remove("swiper-container2");
    myMainDiv.removeChild(sliderBig);
    alert("@@");
    }
}


