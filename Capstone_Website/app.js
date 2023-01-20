const testBtn = document.getElementById("testButton");
const imagesBtn = document.getElementById("imagesButton");
const stylesBtn = document.getElementById("stylesButton");
var textIcon = document.getElementById("pTextIcon");
var imagesIcon = document.getElementById("pImagesIcon");
var stylesIcon = document.getElementById("pStylesIcon");
var recoverBtn = document.getElementById("recoverBtn");

let recoverProtocol = false;

document.querySelector('#recoverBtn').disabled = true;

window.onload=function(){
    testBtn.addEventListener("click", function() {
        textIcon.className = "fa-solid fa-check";
        console.log(textIcon.className);
        if(recoverProtocol == false){
            if(textIcon.className == "fa-solid fa-check"){
                if(imagesIcon.className == "fa-solid fa-check"){
                    if(stylesIcon.className == "fa-solid fa-check"){
                        recoverProtocol = true;
                        recoverBtn.style.backgroundColor = "green";
                        console.log("recoverProtocol");
                        document.querySelector('#recoverBtn').disabled = false;
                    } 
                } 
            }
        }else{
            recoverProtocol = false;
        }
    }, false);

        imagesBtn.addEventListener("click", function() {
        imagesIcon.className = "fa-solid fa-check";
        console.log(imagesIcon.className);
        if(recoverProtocol == false){
            if(textIcon.className == "fa-solid fa-check"){
                if(imagesIcon.className == "fa-solid fa-check"){
                    if(stylesIcon.className == "fa-solid fa-check"){
                        recoverProtocol = true;
                        recoverBtn.style.backgroundColor = "green";
                        console.log("recoverProtocol");
                        document.querySelector('#recoverBtn').disabled = false; 
                    } 
                } 
            }
        }else{
            recoverProtocol = false;
        }
    }, false);

    stylesBtn.addEventListener("click", function() {
        stylesIcon.className = "fa-solid fa-check";
        console.log(stylesIcon.className);
        if(recoverProtocol == false){
            if(textIcon.className == "fa-solid fa-check"){
                if(imagesIcon.className == "fa-solid fa-check"){
                    if(stylesIcon.className == "fa-solid fa-check"){
                        recoverProtocol = true;
                        recoverBtn.style.backgroundColor = "green";
                        console.log("recoverProtocol");
                        document.querySelector('#recoverBtn').disabled = false;

                    } 
                } 
            }
        }else{
            recoverProtocol = false;
        }
    }, false);

  }
