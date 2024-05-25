const currentYear = document.getElementById('currentyear');
currentYear.textContent = new Date().getFullYear();

const lastModified = document.getElementById('lastModified');
lastModified.textContent = (document.lastModified);

const postsElement = document.querySelector("#reviews");
let reviewCount = Number(window.localStorage.getItem("reviewCount")) || 0;
postsElement.textContent = reviewCount;

reviewCount = reviewCount + 1;
localStorage.setItem("reviewCount", reviewCount);