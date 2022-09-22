const questions = document.querySelectorAll(".question");
const plusEl = document.getElementsByClassName(".plusIcon");


questions.forEach((question)=>{
    const btn = question.querySelector(".questionBtn");
    btn.addEventListener("click", ()=>{
        question.classList.toggle("showText");
    })
})