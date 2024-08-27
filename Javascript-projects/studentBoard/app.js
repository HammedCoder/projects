let studentInput = document.querySelector(".name");
let ageInput = document.querySelector(".age");
let rollInput = document.querySelector(".roll");
let studInfo = [];
const div = document.querySelector(".displayInfo");
document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault();
  const studName = studentInput.value;
  const age = ageInput.value;
  const roll = rollInput.value;
  //   console.log(studName, age, roll);
  if (studName.trim() === "" || age == "" || roll === "") {
    alert("All field are required");
  } else if (isNaN(age) || isNaN(roll)) {
    alert("Value must be a number!");
  } else {
    let studObj = { studentName: studName, age: age, roll: roll };
    studInfo.push(studObj);

    displayInfo();
  }
});

function displayInfo() {
  localStorage.setItem(
    "students",
    JSON.stringify(studInfo)
  );
  div.innerHTML = "";

const studString = JSON.parse(localStorage.getItem('students'));
 
  studString.forEach((student, index) => {
    const info = `<h2>Student ${index + 1}: <span>${
      student.studentName
    }</span></h2>
      <p><b>Age:</b> ${student.age}</p>
      <p><b>Roll no:</b> ${student.roll}</p>`;
    div.innerHTML += info;
    studentInput.value = "";
    rollInput.value = "";
    ageInput.value = "";
    studentInput.focus();
  });
}
