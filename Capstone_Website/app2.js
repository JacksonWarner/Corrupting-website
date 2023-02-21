var introVidModal = document.getElementById("introVid");
var introVidBtn = document.getElementById("vidButton");
var span = document.getElementsByClassName("close")[0];
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

const buttons = document.getElementsByTagName("button");

window.onload=function(){


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
