const users = {
  Alex: {
    pic:'images/avatar.jpg',
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    pic:'images/avatar-2.jpg',
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
    pic:'images/avatar-3.jpg',
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    pic:'images/avatar-4.jpg',
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    pic:'images/avatar.jpg',
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
    pic:'images/avatar.jpg',
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

  let info = `
  <div class="image"><img src="${element.pic}" alt="" class="img-pic"/></div>
  <div class="info">
<h1 class="name">Name: ${key}</h1>
<p class="email">Email: ${element.email}</p>
<p class="skills">Skills: 
  ${element.skills}
</p>
<p>Age: <span>${element.age}</span> | <span>Point: ${element.points}</span></p>
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
        `${key} has ${
          element.points - 40
        } points greater than 40 and status of ${element.isLoggedIn}`
      );
    } else {
      console.log(
        `${key} has ${
          40 - element.points
        } points lower than 40 points and status of ${element.isLoggedIn}`
      );
    }
  }
}
for (const key in users) {
  if (Object.hasOwnProperty.call(users, key)) {
    console.log((users[key].skills.length));
  }
}
