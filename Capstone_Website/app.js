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

setTimeout("showIt()", 4050); // after 4.05 seconds


document.querySelector('#recoverBtn').disabled = true;

window.onload=function(){
    //openVidModal();

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
         if (typeof vidModal.style !== 'undefined') vidModal.style.display = "none";    
       }
    }
   }
   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
       if (event.target.classList.contains('modal')) {
        for (var index in modals) {
         if (typeof vidModal.style !== 'undefined') vidModal.style.display = "none";    
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






  function showIt() {
    document.getElementById("hid").style.visibility = "visible";
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




const buttonPressed = e => { 
  result.innerHTML = `ID of <em>${e.target.innerHTML}</em> is <strong>${e.currentTarget.id}</strong>`;
}
