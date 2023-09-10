const link = document.getElementById("myLink");

link.addEventListener("click", function() {
    alert("Welcome to my page");
});

var logo = document.getElementById("logo");
var viewportWidth = window.innerWidth;
if (viewportWidth < 768) {
  logo.style.width = "100%";
}
