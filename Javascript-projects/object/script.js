const users = [
  {
    name: "Hammed Rafiu",
    pic: "images/avatar.jpg",
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  {
    name: "Kehinde Durujola",
    pic: "images/avatar-2.jpg",
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  {
    name: "Hassan Elude",
    pic: "images/avatar-3.jpg",
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  {
    name: "Komolafe Olaiya",
    pic: "images/avatar-4.jpg",
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "Akinade Atoyebi",
    pic: "images/avatar.jpg",
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  {
    name: "Akanni Alayande",
    pic: "images/avatar.jpg",
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "Owolarafe Mujeeb",
    pic: "images/avatar.jpg",
    pic: "images/avatar.jpg",
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
];

let currentIndex = 0;
display();
function display() {
  let info = `
  <div class="image"><img src="${users[currentIndex].pic}" alt="" class="img-pic"/></div>
  <div class="info">
<h1 class="name">Name: ${users[currentIndex].name}</h1>
<p class="email">Email: ${users[currentIndex].email}</p>
<p class="skills">Skills: 
${users[currentIndex].skills}
  </p>
<p>Age: <span>$${users[currentIndex].age}</span> | <span>Point: ${users[currentIndex].points}</span></p>
<p>Status:${users[currentIndex].isLoggedIn}</p>
</div>`;
  document.querySelector(".card").innerHTML = info;
}
// btn[0].addEventListener("click", next);
function next() {
  if (currentIndex === users.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  display();
}
function previous() {
  if (currentIndex === 0) {
    currentIndex = users.length - 1;
  } else {
    currentIndex--;
  }
  display();
}
// for (const key in users) {
//   if (Object.hasOwnProperty.call(users, key)) {
//     const element = users[key];
//     if (element.points > 40 && element.isLoggedIn) {
//       console.log(
//         `${key} has ${
//           element.points - 40
//         } points greater than 40 and status of ${element.isLoggedIn}`
//       );
//     } else {
//       console.log(
//         `${key} has ${
//           40 - element.points
//         } points lower than 40 points and status of ${element.isLoggedIn}`
//       );
//     }
//   }
// }
