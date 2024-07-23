document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const closeBtn = document.getElementById("closeBtn");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });

  document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
      navLinks.classList.remove("open");
    }
  });

  console.log("DOM fully loaded and parsed");
  console.log("navToggle:", navToggle);
  console.log("navLinks:", navLinks);
  console.log("closeBtn:", closeBtn);
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".activity-card");
  let maxHeight = 0;

  // Calculate the max height
  cards.forEach((card) => {
    const cardHeight = card.offsetHeight;
    if (cardHeight > maxHeight) {
      maxHeight = cardHeight;
    }
  });

  // Set all cards to the max height
  cards.forEach((card) => {
    card.style.height = `${maxHeight}px`;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll(".news-article");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");
  let maxHeight = 0;

  // Calculate the max height
  articles.forEach((article) => {
    const articleHeight = article.offsetHeight;
    if (articleHeight > maxHeight) {
      maxHeight = articleHeight;
    }
  });

  // Set all articles to the max height
  articles.forEach((article) => {
    article.style.height = `${maxHeight}px`;
  });

  // Scroll to the next article on arrow right click
  arrowRight.addEventListener("click", function () {
    const container = document.querySelector(".news-container");
    const scrollAmount = container.offsetWidth;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  // Scroll to the previous article on arrow left click
  arrowLeft.addEventListener("click", function () {
    const container = document.querySelector(".news-container");
    const scrollAmount = container.offsetWidth;
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
});
