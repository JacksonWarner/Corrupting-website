const testBtn = document.getElementById("textButton");
const imagesBtn = document.getElementById("imagesButton");
const stylesBtn = document.getElementById("stylesButton");
var textIcon = document.getElementById("pTextIcon");
var imagesIcon = document.getElementById("pImagesIcon");
var stylesIcon = document.getElementById("pStylesIcon");
var recoverBtn = document.getElementById("recoverBtn");
const startBtn = document.querySelector("#startBtn");
var uxStarted = null;
var introVidModal = document.getElementById("introVid");
var introVidBtn = document.getElementById("vidButton");
var span = document.getElementsByClassName("close")[0];
let imgHeader = document.getElementById("imgHeader");
let textHeader = document.getElementById("textHeader");
let stylesHeader = document.getElementById("stylesHeader");
var imagesPuzzleSlot = document.getElementById("imageRewardSlot");
let textP = document.getElementById("textP");
let imagesP = document.getElementById("imagesP");
let stylesP = document.getElementById("stylesP");


//variables for rewards
const textReward = document.getElementById("textReward");
const imgReward = document.getElementById("imgReward");
const stylesReward = document.getElementById("stylesReward");
// Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");


//variable for pop-up cards on plugins page
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

const buttons = document.getElementsByTagName("button");
const result = document.getElementById("result");

let recoverProtocol = false;
let passcodeSubmit = false;
const passcode = "3048";

//variables for passcode
const inputs = document.querySelectorAll("input");
const codeBlock = document.getElementById("code-block");
const code = document.getElementById("code");
const form = document.querySelector("form");
setTimeout("showIt()", 4050); // after 4.05 seconds
setTimeout("showOutro()",500);

document.querySelector('#stylesButton').disabled = true;



document.querySelector('#recoverBtn').disabled = true;

window.onload=function(){
   // openVidModal();

    testBtn.addEventListener("click", function() {
        textIcon.className = "fa-solid fa-check";
        textReward.style.display = "block";
        textHeader.style.backgroundColor = 'green';
        textP.style.color="green";

        console.log(textIcon.className);
        if(recoverProtocol == false){
            if(textIcon.className == "fa-solid fa-check"){
                if(imagesIcon.className == "fa-solid fa-check"){
                    if(stylesIcon.className == "fa-solid fa-check"){
                        recoverProtocol = true;
                        recoverBtn.style.backgroundColor = "green";
                        recoverBtn.style.boxShadow = "rgba(250, 240, 230, 1)";
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
        imgHeader.style.backgroundColor = "green";
        document.getElementById("imageRewardSlot").src="./media/imgReward.png";
        imagesP.style.color="green";
        console.log(imagesIcon.className);
        if(recoverProtocol == false){
            if(textIcon.className == "fa-solid fa-check"){
                if(imagesIcon.className == "fa-solid fa-check"){
                    if(stylesIcon.className == "fa-solid fa-check"){
                        recoverProtocol = true;
                        recoverBtn.style.backgroundColor = "green";
                        recoverBtn.style.boxShadow = "rgba(250, 240, 230, 1)";
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
        stylesReward.style.display = "block";
        stylesHeader.style.backgroundColor = 'green';
        stylesP.style.color="green";
        console.log(stylesIcon.className);
        if(recoverProtocol == false){
            if(textIcon.className == "fa-solid fa-check"){
                if(imagesIcon.className == "fa-solid fa-check"){
                    if(stylesIcon.className == "fa-solid fa-check"){
                        recoverProtocol = true;
                        recoverBtn.style.backgroundColor = "green";
                        recoverBtn.style.boxShadow = "rgba(250, 240, 230, 1)";
                        console.log("recoverProtocol");
                        document.querySelector('#recoverBtn').disabled = false;
                    } 
                } 
            }
        }else{
            recoverProtocol = false;
        }
    }, false);



// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function(e) {
     e.preventDefault();
     modal = document.querySelector(e.currentTarget.getAttribute("href"));
     modal.style.display = "block";
  }
 }
 
 // When the user clicks on <span> (x), close the modal
 for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function() {
     for (var index in modals) {
       if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
  }
 }
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target.classList.contains('modal')) {
      for (var index in modals) {
       if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
      }
     }
 }

/*/used to redirect after 5 seconds of clicking the start button
startBtn.addEventListener("click", function() {
  setTimeout(function() {
    window.location.href = "index.html";
  }, 5000);
});*/

//used to to redirect after start button is pressed
document.getElementById("startBtn").onclick = function () {
    window.location.href = "index.html";
    uxStarted = true;
};

for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
       for (var index in modals) {
         if (typeof introVidModal.style !== 'undefined') introVidModal.style.display = "none";    
       }
    }
   }
   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
       if (event.target.classList.contains('modal')) {
        for (var index in modals) {
         if (typeof introVidModal.style !== 'undefined') introVidModal.style.display = "none";    
        }
       }
   }
   

   introVidBtn.onclick = function() {
    introVidModal.style.display = "block"; 
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    introVidModal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == introVidModal) {
      introVidModal.style.display = "none";
    }
  }

  }

  inputs.forEach((input, key) => {
    if (key !== 0) {
      input.addEventListener("click", function () {
        inputs[0].focus();
      });
    }
    input.addEventListener("keyup", function () {
      if (input.value) {
        if (key === 3) {
          const userCode = [...inputs].map((input) => input.value).join("");
          codeBlock.classList.remove("hidden");

          console.log(userCode);
          //userCode is the 4 digit pin put together
          if(userCode == passcode){
            passcodeSubmit = true;
            stylesBtn.style.backgroundColor = "green";
            document.querySelector('#stylesButton').disabled = false;

          }
        } else {
          inputs[key + 1].focus();
        }
      }
    });
  });

const reset = () => {
  form.reset();
  codeBlock.classList.add("hidden");
  code.innerText = "";
};
  
  




  function showIt() {
    document.getElementById("hid").style.visibility = "visible";
  }

  function showTextHint(){
    document.getElementById("textHint").style.display="flex";
  }

  function showImgHint(){
    document.getElementById("imgHint").style.display="flex";
  }

  function showStyleHint(){
    document.getElementById("styleHint").style.display="flex";
  }

  function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
  }
  
  function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
  }

  function showOutro(){
    document.getElementById("outroVid").style.visibility = "visible";
  }
  
  function hideOutro(){
    document.getElementById("outroVid").style.visibility = "hidden";
    document.getElementById("outroVideo").pause();
  }



const buttonPressed = e => { 
  result.innerHTML = `ID of <em>${e.target.innerHTML}</em> is <strong>${e.currentTarget.id}</strong>`;
}

function pageRedirect(){
  var delay = 7000; // time in milliseconds

  // Display message
  document.getElementById("loader").style.visibility= "visible";

  setTimeout(function(){
      window.location = "./indexFinal.html";
  },delay);

}
