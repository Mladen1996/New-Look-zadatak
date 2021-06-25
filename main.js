/*var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}*/


  var x = document.getElementById("mobile-menu");
  var nav= document.getElementById("main-menu");
  var content=document.getElementsByTagName('body')[0];
  var mobileicon=document.getElementById("mobile-icon");

 

  x.onclick=function(){
    if (nav.className === "active") {
      nav.style.display="none";
      nav.classList.remove("active");
      content.style.overflow="initial";
      mobileicon.setAttribute("src", "images/mobile-menu.png");
    } else {
      nav.style.display="block";
      nav.classList.add("active");
      content.style.overflow="hidden";
      mobileicon.setAttribute("src", "images/cancel.png");
    }

    
  }
  
