let firstFeature = document.querySelector(".feature-1");
let secondFeature = document.querySelector(".feature-2");
let thirdFeature = document.querySelector(".feature-3");
let features = document.getElementsByClassName("features-feature");
let burger = document.querySelector(".nav-one__hamburger");
let cross = document.querySelector(".nav-two__close");
let nav = document.querySelector(".nav-two__container");
let questions = document.getElementsByClassName("question-arrow");
let answers = document.getElementsByClassName("qa-answer");
let arrows = document.getElementsByClassName("qa-arrow");
let form = document.querySelector(".signup-group");
let navOne = document.querySelector(".nav-one");

burger.addEventListener("click", () => {
    nav.classList.toggle("display-nav");
    navOne.classList.toggle("display-navOne");
})

cross.addEventListener("click", () => {
    nav.classList.toggle("display-nav");
    navOne.classList.toggle("display-navOne");
})

firstFeature.classList.add("red-border");
features[0].classList.add("display");

firstFeature.addEventListener("click", () => {
    firstFeature.classList.add("red-border");
    features[0].classList.add("display");
    secondFeature.classList.remove("red-border");
    features[1].classList.remove("display");
    thirdFeature.classList.remove("red-border");
    features[2].classList.remove("display");
});

secondFeature.addEventListener("click", () => {
    secondFeature.classList.add("red-border");
    features[1].classList.add("display");
    firstFeature.classList.remove("red-border");
    features[0].classList.remove("display");
    thirdFeature.classList.remove("red-border");
    features[0].classList.remove("display");
});

thirdFeature.addEventListener("click", () => {
    thirdFeature.classList.add("red-border");
    features[2].classList.add("display");
    secondFeature.classList.remove("red-border");
    features[1].classList.remove("display");
    firstFeature.classList.remove("red-border");
    features[0].classList.remove("display");
    
});

questions[0].addEventListener("click", () => {
    arrows[0].classList.toggle("flip-arrow");
    answers[0].classList.toggle("display-answer");
});

questions[1].addEventListener("click", () => {
    arrows[1].classList.toggle("flip-arrow");
    answers[1].classList.toggle("display-answer");
})

questions[2].addEventListener("click", () => {
    arrows[2].classList.toggle("flip-arrow");
    answers[2].classList.toggle("display-answer");
})

questions[3].addEventListener("click", () => {
    arrows[3].classList.toggle("flip-arrow");
    answers[3].classList.toggle("display-answer");
})

function submitForm(e) {
    e.preventDefault();
    document.querySelector(".input").value = "";
}

form.addEventListener('submit', submitForm);