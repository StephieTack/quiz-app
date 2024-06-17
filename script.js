document.querySelectorAll(".toggleButton").forEach((button) => {
  button.addEventListener("click", function () {
    var img = button.querySelector(".buttonImage");
    var currentSrc = img.getAttribute("src");
    if (currentSrc.endsWith("bookmark-white.svg")) {
      img.setAttribute("src", "assets/bookmark-black.svg");
    } else {
      img.setAttribute("src", "assets/bookmark-white.svg");
    }
  });
});
