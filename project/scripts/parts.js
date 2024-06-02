const currentYear = document.getElementById('currentyear');
currentYear.textContent = new Date().getFullYear();

const lastModified = document.getElementById('lastModified');
lastModified.textContent = (document.lastModified);

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


// I have no clue why the below code/functions are not working. I've tried pretty much everything I could think of 
// but no matter what I do I can't get it to record the visit count here. The code below is almost the exact same as
// the one from last week's form but I've tried for ~3 hours only to get nowhere.

document.onload = function () {
    const form = document.querySelector("form");
    
    let counter = getCount() || 0;

    form.addEventListener("submit", () => {
        counter = counter + 1;
        setCount(counter)
    })
    
    function setCount(counter) {
        localStorage.setItem("reviewCount", counter)
    }
    function getCount() {
        return JSON.parse(localStorage.getItem('reviewCount'))
    }
}

// const button = document.getElementById("submit");

// let count = 0;

// button.addEventListener("submit", () => {

// })