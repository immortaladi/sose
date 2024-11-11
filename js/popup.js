document.addEventListener("DOMContentLoaded", function() {
  if (!sessionStorage.getItem("popupShown")) {
    setTimeout(showPopup, 6000); // Show popup after 6 seconds
  }
});

function showPopup() {
  document.getElementById("popup").style.display = "block";
  sessionStorage.setItem("popupShown", "true"); // Prevent popup from showing again in the same session
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
}
