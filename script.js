document.getElementById("toggleButton").addEventListener("click", function () {
  var img = document.getElementById("buttonImage");
  var currentSrc = img.getAttribute("src");
  if (currentSrc === "assets/bookmark-white.svg") {
    img.setAttribute("src", "assets/bookmark-black.svg");
  } else {
    img.setAttribute("src", "assets/bookmark-white.svg");
  }
});
