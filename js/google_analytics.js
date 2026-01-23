// Load the gtag script dynamically
(function () {
  var gtagScript = document.createElement("script");
  gtagScript.async = true;
  gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-EFPT5EJVYB";
  document.head.appendChild(gtagScript);
})();

// Initialize dataLayer and gtag
window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}

// Configure GA
gtag("js", new Date());
gtag("config", "G-EFPT5EJVYB");