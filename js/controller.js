window.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  sections.forEach(section => {
    const sec = document.createElement("section");
    sec.classList.add("fade-section");

    const h2 = document.createElement("h2");
    h2.textContent = section.title;

    const p = document.createElement("p");
    p.textContent = section.text;

    const img = document.createElement("img");
    img.src = section.image;
    img.alt = section.title;
    img.style.width = "100%";
    img.style.borderRadius = "12px";
    img.style.margin = "20px 235px";

    sec.appendChild(h2);
    sec.appendChild(img);
    sec.appendChild(p);

    content.appendChild(sec);
  });

  const allSections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  allSections.forEach(sec => observer.observe(sec));
});
