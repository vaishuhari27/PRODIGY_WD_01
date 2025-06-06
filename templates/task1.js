window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#222"; // Darker background on scroll
    navbar.style.boxShadow = "0 2px 5px rgba(0,0,0,0.3)";
  } else {
    navbar.style.backgroundColor = "#333"; // Original background
    navbar.style.boxShadow = "none";
  }
});
