let input=document.getElementById("input");
let button=document.getElementById("button");
let result=document.getElementById("result");
button.addEventListener("click", function(){
    let brithday = input.value;
    if (brithday === "") {
        result.textContent="Please enter your birth year";
        return;
    }
    let age = 2026 - brithday;
    result.textContent="Your age is " + age;

    input.value = "";
})






















