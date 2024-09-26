// Accessing the input field and square button
let an = document.form1.answer;
let p = document.getElementById("sq");
let pie = document.getElementById("pi");
let rounD2 = document.getElementById("round2");


an.disabled = true;

// Squaring the value when 'sq' button is clicked
p.addEventListener("click", () => {
    if (an.value == "") {
        an.value = "Error";
    } else {
        an.value = (Number(an.value)) ** 2; // Convert to number and square
    }
});
pie.addEventListener("click", () => {
    
        an.value =3.14; // Convert to number and square
    
});
rounD2.addEventListener("click", () => {

        an.value +=".00"; // Convert to number and square
    
});
// Percentage button handling
let per = document.getElementById("percen"); // Ensure there's a button with id 'percen'
per.addEventListener("click", () => {
    if (an.value == "") {
        an.value = "Error";
    } else {
        an.value = (Number(an.value)) / 100; // Convert to number and calculate percentage
    }
});

// Handling button clicks for number and operator buttons
let num = document.querySelectorAll(".b");
num.forEach((val) => {
    val.addEventListener("click", () => {
        document.form1.answer.value += val.value;
    });
});

// Clear button functionality
document.getElementById("clear").addEventListener("click", () => {
    document.form1.answer.value = ""; // Clear the input field
});

// Submit button functionality (evaluate the expression)
document.getElementById("submit").addEventListener("click", () => {
    try {
        document.form1.answer.value = eval(document.form1.answer.value); // Evaluate the expression
    } catch (e) {
        document.form1.answer.value = "Error"; // Handle invalid expressions
    }
});

// Keyboard keydown event handler
document.addEventListener("keydown", function (event) {
    let key = event.key;

    if (key >= "0" && key <= "9") {
        document.querySelector(`input[value="${key}"]`).click(); // Simulate click for numbers
    } else if (key === "+") {
        document.querySelector(`input[value="+"]`).click(); // Simulate click for '+'
    } else if (key === "-") {
        document.querySelector(`input[value="-"]`).click(); // Simulate click for '-'
    } else if (key === "/") {
        document.querySelector(`input[value="/"]`).click(); // Simulate click for '/'
    } else if (key === "*") {
        document.querySelector(`input[value="*"]`).click(); // Simulate click for 'X' (multiplication)
    } else if (key === ".") {
        document.querySelector(`input[value="."]`).click(); // Simulate click for '.'
    } else if (key === "Enter") {
        document.getElementById("submit").click(); // Simulate click for 'Submit'
    } else if (key === "Escape") {
        document.getElementById("clear").click();
    }
})