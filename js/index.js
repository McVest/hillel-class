
const inputField = document.getElementById("inputField");
const infoDiv = document.getElementById("infoDiv");

inputField.addEventListener("focus", function() {
  infoDiv.style.display = "block";
});

inputField.addEventListener("blur", function() {
  infoDiv.style.display = "none";
});
