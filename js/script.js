function navToggle() {
  var nav_left = document.getElementById("nav-left");
  var nav_right = document.getElementById("nav-right");
  if (nav_left.style.display == "block" && nav_right.style.display == "block") {
    nav_left.style.display = "none";
    nav_right.style.display = "none";
  }
  else {
    nav_left.style.display = "block";
    nav_right.style.display = "block";
  }
}
