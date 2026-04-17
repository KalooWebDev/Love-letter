const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.3
});

// Seleciona todas as seções de comparação
document.querySelectorAll(".comparison-section").forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});