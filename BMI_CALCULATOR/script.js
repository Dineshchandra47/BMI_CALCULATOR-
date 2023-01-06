let age = document.getElementById("age");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let male = document.getElementById("m");
let female = document.getElementById("f");
let form = document.getElementById("form");

function validateForm() {
  if (
    age.value == "" ||
    height.value == "" ||
    weight.value == "" ||
    (male.checked == false && female.checked == false)
  ) {
    alert("All fields are required!");
    document.getElementById("submit").removeEventListener("click", countBmi);
  } else {
    countBmi();
  }
}
document.getElementById("submit").addEventListener("click", validateForm);

function countBmi() {
  var p = [age.value, height.value, weight.value];
  if (age.value < 2 && age.value > 120) {
         alert("Please provide age between 2 and 120");
       }
  if (male.checked) {
    p.push("male");
  } else if (female.checked) {
    p.push("female");
  }
  form.reset();
  var bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);

  var result = "";
  if (bmi < 16) {
    result = "Severe Thinness";
  } else if (bmi > 16 && bmi <= 17) {
    result = "Moderate Thinness";
  } else if (bmi > 17 && bmi <= 18.5) {
    result = "Mild Thinness";
  } else if (bmi > 18.5 && bmi <= 25) {
    result = "NORMAL";
  } else if (bmi > 25 && bmi <= 30) {
    result = "OVERWEIGHT";
  } else if (bmi > 30 && bmi <= 35) {
    result = "Obese Class-I";
  } else if (bmi > 35 && bmi <= 40) {
    result = "Obese Class-II";
  } else if (bmi > 40) {
    result = "Obese Class-III";
  }

  var h1 = document.createElement("h1");
  var h2 = document.createElement("h2");

  var t = document.createTextNode(result);
  var b = document.createTextNode("BMI: ");
  var r = document.createTextNode(parseFloat(bmi).toFixed(2));

  h1.appendChild(t);
  h2.appendChild(b);
  h2.appendChild(r);

  document.body.appendChild(h1);
  document.body.appendChild(h2);
  document.getElementById("submit").removeEventListener("click", countBmi);
  document.getElementById("submit").removeEventListener("click", validateForm);
}
document.getElementById("submit").addEventListener("click", countBmi);
