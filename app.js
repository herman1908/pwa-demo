// // Register Service Worker
// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker
//       .register("/sw.js")
//       .then(() => console.log("✅ Service Worker registered"))
//       .catch((err) => console.log("❌ SW registration failed: ", err));
//   });
// }

// // Demo button
// document.getElementById("btn").addEventListener("click", () => {
//   alert("Hello from PWA!");
// });

let deferredPrompt;
const installBtn = document.createElement("button");
installBtn.innerText = "Install App";
installBtn.style.padding = "12px 20px";
installBtn.style.marginTop = "20px";
installBtn.style.display = "none";
document.body.appendChild(installBtn);

// Tangkap event install prompt
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = "inline-block"; // tampilkan tombol
});

// Kalau tombol diklik → munculkan prompt install
installBtn.addEventListener("click", async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to install: ${outcome}`);
    deferredPrompt = null;
    installBtn.style.display = "none"; // sembunyikan lagi
  }
});
