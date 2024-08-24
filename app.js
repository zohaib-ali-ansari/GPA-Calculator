let noOfCoursesBtn = document.getElementById("no-of-courses-btn");
let noOfCoursesField = document.getElementById("no-of-courses-field");
let subContainer2 = document.getElementById("sub-container-2");
let calculateBtn = document.getElementById("calculate-btn");
let mainContainer = document.querySelector("#main-container");
let outputContainer = document.querySelector("#output-container");
let cancelBtn = document.getElementById("cancel-btn");
let body = document.querySelector("body");
let subContainer1 = document.getElementById("sub-container-1");
let themeChanger = document.getElementById("theme-changer");
let mainHeading = document.getElementById("main-heading");

let noOfCourses;
noOfCoursesBtn.addEventListener("click", function () {
  noOfCourses = noOfCoursesField.value;
  if (noOfCourses == "" || noOfCourses == 0) {
    alert("Please fill out the field");
  } else {
    mainContainer.style.backgroundColor = "#31363F";
    subContainer1.style.borderBottomLeftRadius = "0";
    subContainer1.style.borderBottomRightRadius = "0";
    subContainer2.innerHTML = "";
    for (let i = 1; i <= noOfCourses; i++) {
      let inputs = `
            <br>
            <label for="gp-of-course-${i}">Enter Numeric Grades of Course ${i}</label>
            <br>
            <input type="number" name="gp-of-course-${i}" id="gp-of-course-${i}" placeholder="For example:3.66">
            <br><br>
            <label for="credit-hours-of-course-${i}">Enter Credit Hours of Course ${i}</label>
            <br>
            <input type="number" name="credit-hours-of-course-${i}" id="credit-hours-of-course-${i}" placeholder="For example:3">
            <br><br><hr>
            `;
      subContainer2.innerHTML += inputs;
    }
    calculateBtn.style.display = "block";
  }
});

let darktheme = false;

calculateBtn.addEventListener("click", function () {
  let gpa = 0;
  let totalHours = 0;
  for (let i = 1; i <= noOfCourses; i++) {
    let gpOfCoursefield = document.getElementById("gp-of-course-" + i);
    let creditHoursOfCoursefield = document.getElementById(
      "credit-hours-of-course-" + i
    );
    let gpOfCourse = parseFloat(gpOfCoursefield.value);
    let creditHoursOfCourse = parseInt(creditHoursOfCoursefield.value);

    if (isNaN(gpOfCourse) || isNaN(creditHoursOfCourse)) {
      alert("Please fill out all the fields");
      return;
    } else if (creditHoursOfCourse <= 0) {
      alert(
        "Credit Hours cannot be zero or equal to zero. Please enter valid values."
      );
      return;
    } else if (gpOfCourse > 4) {
      alert("Grade Points cannot be greater than 4.00");
      return;
    } else {
      gpa += gpOfCourse * creditHoursOfCourse;
      totalHours += parseInt(creditHoursOfCourse);
    }
  }

  let tagForGPA = document.getElementById("gpa");
  mainContainer.style.display = "none";
  outputContainer.style.display = "block";
  body.style.backgroundColor = "white";

  let finalGPA = gpa / totalHours;
  tagForGPA.innerText = finalGPA.toFixed(2);
  if (!darktheme) {
    body.style.backgroundColor = "white";
  } else {
    body.style.backgroundColor = "black";
  }
});

cancelBtn.addEventListener("click", function () {
  mainContainer.style.display = "block";
  outputContainer.style.display = "none";
  if (!darktheme) {
    body.style.backgroundColor = "white";
  } else {
    body.style.backgroundColor = "black";
  }
});

themeChanger.addEventListener("click", function () {
  let subContainer2Content = subContainer2.innerHTML.trim();
  if (!darktheme) {
    body.style.backgroundColor = "black";
    darktheme = true;
    mainHeading.style.color = "white";
    mainContainer.style.backgroundColor =
      subContainer2Content === "" ? "black" : "#31363F";
  } else {
    body.style.backgroundColor = "white";
    darktheme = false;
    mainHeading.style.color = "#31363F";

    mainContainer.style.backgroundColor =
      subContainer2Content === "" ? "white" : "#31363F";
  }
});
