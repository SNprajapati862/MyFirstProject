// Fade in when the page loads
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

// Fade out before navigating to the next page
document.querySelectorAll(".transition-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.body.classList.remove("loaded");
    setTimeout(() => {
      window.location = link.href;
    }, 800); // matches CSS duration
  });
});
