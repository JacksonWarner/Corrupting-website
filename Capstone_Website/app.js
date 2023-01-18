const testBtn = document.getElementById("testButton");
const imagesBtn = document.getElementById("imagesButton");
const stylesBtn = document.getElementById("stylesButton");

let recoverProtocol = false;


window.onload=function(){
    var textIcon = document.getElementById("pTextIcon");
    var imagesIcon = document.getElementById("pImagesIcon");
    var stylesIcon = document.getElementById("pStylesIcon");


    testBtn.addEventListener("click", function() {
        textIcon.className = "fa-solid fa-check";
        console.log(textIcon.className);
       // protocolCheck();
    }, false);

        imagesBtn.addEventListener("click", function() {
        imagesIcon.className = "fa-solid fa-check";
        console.log(imagesIcon.className);
       // protocolCheck();
    }, false);

    stylesBtn.addEventListener("click", function() {
        stylesIcon.className = "fa-solid fa-check";
        console.log(stylesIcon.className);
        //protocolCheck();
    }, false); 
  }
