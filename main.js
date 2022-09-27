const submit = document.querySelector("#submit");
const buttons = Array.from(document.querySelectorAll(".button"));
const rating = document.querySelector(".rating");
const rated = document.querySelector(".rated");

let selectedNum;

let flag = false;

buttons.map(button => button.addEventListener("click", () => {
    selectedNum = +button.innerHTML;
    flag = true;

    buttons.forEach(button => button.classList.remove("active"));

    if (button.classList.contains("active")) {
        button.classList.remove("active")
    }
    else {
        button.classList.add("active")
    }
}))

submit.addEventListener("click", () => {
    if(!flag) {
        alert("You need to select number first!")
    } else {
        rated.classList.toggle("none");
        rating.classList.toggle("none");
        document.querySelector(".selected").innerHTML = `You selected ${selectedNum} out of 5`;
    }
})