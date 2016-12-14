window.onload = setAccordionDefault;

function setAccordionDefault() {
  var acc = document.getElementsByClassName("accordion");
  acc[0].classList.toggle("active");
  acc[0].nextElementSibling.classList.toggle("show");

  }



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    var active = document.querySelector(".accordion.active");
    if (active && active != this) {
      active.classList.remove("active");
      active.nextElementSibling.classList.remove("show");
    }
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  }
}
