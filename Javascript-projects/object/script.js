const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
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
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
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
};

let element;
for (const key in users) {
  if (Object.hasOwnProperty.call(users, key)) {
    element = users[key];
    // console.log(element);
  }

  let info = `<div class="info">
<h1 class="name">Name: ${key}</h1>
<p class="email">Email: ${element.email}</p>
<p class="skills">Skills: 
  ${element.skills}
</p>
<p>Age: <span>${element.age}</span> | Point: <span>Point: ${element.points}</span></p>
<p>Status: ${element.isLoggedIn}</p>
</div>`;
  document.querySelector(".card").innerHTML = info;
}
let btn = document.querySelectorAll(".btn button");
let count = 0;
btn[0].addEventListener("click", function () {
  for (count = element.length; count >= 0; count--) {
    console.log(count);
  }
});

for (const key in users) {
  if (Object.hasOwnProperty.call(users, key)) {
    const element = users[key];
    if (element.points > 40 && element.isLoggedIn) {
      console.log(
        `${key} has ${element.points - 40} points greater than 40 and status of ${element.isLoggedIn}`
      );
    } else {
        console.log(
            `${key} has ${40 - element.points} points lower than 40 points and status of ${element.isLoggedIn}`
          );
    }
  }
}
