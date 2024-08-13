let btn = document.getElementById("btnSensor");
let parag = document.getElementById("result");

let element;
let censoredWords = ["shit", "fuck", "bushit", "hell"];

btn.addEventListener("click", () => {
  const inputText = document.getElementById("sensor").value;
  let censorText = inputText;
  console.log(censorText);
  // let censordWords = ["shit", "fuck", "bushit", "hell"];
  for (let i = 0; i < censoredWords.length; i++) {
    let censoredText = censoredWords[i];


    if (censorText.includes(censoredText)) {
      censorText = censorText.replace(censoredText, "*****")
    } else {
      censorText = censorText;
    }
    parag.textContent = censorText;
  }
});















// btn.addEventListener("click", function () {
//   const inputText = document.getElementById("sensor").value;
//   let censorText = inputText
//   censordWords.forEach(word=>{
//     let regex = new RegExp(word, 'gi')
//     censorText= censorText.replace(regex, "****")
//   })
//   parag.textContent = censorText

// });
