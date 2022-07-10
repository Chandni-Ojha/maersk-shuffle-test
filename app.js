const displayNum = document.querySelector("#displayNum");
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numArray.length; i++) {
  displayNum.innerHTML += `<div class='color-${numArray[i]} small'></div><div class='large color-${numArray[i]}'>${numArray[i]}</div>`;
}

function shuffleNumber() {
  let array = numArray;
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  displayNum.innerHTML = "";
  for (let i = 0; i < numArray.length; i++) {
    displayNum.innerHTML += `<div class='color-${array[i]} small'></div><div class='large color-${array[i]}'>${array[i]}</div>`;
  }
}

function sortNumber() {
  numArray.sort();
  displayNum.innerHTML = "";
  for (let i = 0; i < numArray.length; i++) {
    displayNum.innerHTML += `<div class='color-${numArray[i]} small'></div><div class='large color-${numArray[i]}'>${numArray[i]}</div>`;
  }
}
