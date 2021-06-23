alert("To check you Driving License Eligibity click ok");
let txt = "";
if (confirm("Are you above 18 years of age!")) {
    let person = prompt("Please enter your name");
    txt = person + ", you are eligible for Driving License.";
} else {
    txt = "Sorry, you are not eligible for Driving License now";
}

document.querySelector('h1').innerText = txt;