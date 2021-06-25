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
  console.log(x);
  var nav= document.getElementById("main-menu");
  console.log(nav);

  x.onclick=function(){
    if (nav.className === "active") {
      nav.style.display="none";
      nav.classList.remove("active");
    } else {
      nav.style.display="block";
      nav.classList.add("active");
    }

    
  }
  
