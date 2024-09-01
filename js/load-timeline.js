document.addEventListener("DOMContentLoaded", function () {
  fetch("timeline-history.html")
    .then((response) => response.text())
    .then((data) => {
      const navbarPlaceholder = document.getElementById("timeline-placeholder");
      navbarPlaceholder.innerHTML = data;
      //navbarPlaceholder.querySelector(".navbar").classList.add("fixed-top");
    });
});
