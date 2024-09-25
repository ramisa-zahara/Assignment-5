document.getElementById("history-btn").addEventListener("click", function () {
  document.getElementById("history-section").classList.remove("hidden");
  document.getElementById("history-section").classList.add("flex", "flex-col");
  document.getElementById("donation-section").classList.add("hidden");
});
document.getElementById("donate-btn").addEventListener("click", function () {
  document.getElementById("donation-section").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
  document
    .getElementById("history-section")
    .classList.remove("flex", "flex-col");
});
