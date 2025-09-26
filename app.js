// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js")
      .then(() => console.log("✅ Service Worker registered"))
      .catch(err => console.log("❌ SW registration failed: ", err));
  });
}

// Demo button
document.getElementById("btn").addEventListener("click", () => {
  alert("Hello from PWA!");
});