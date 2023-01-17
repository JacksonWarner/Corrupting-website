const textz = "pTextIcon";
const testBtn = document.getElementById("testButton");

window.onload=function(){
    var textIcon = document.getElementById("pTextIcon");
    testBtn.addEventListener("click", function() {
        textIcon.className = "fa-solid fa-check";
    }, false);
  }

