const binInput = document.querySelector(".binNumber");
const decInput = document.querySelector(".decNumber");
const btn = document.querySelector(".btn");


binInput.addEventListener("input", () => {
  let inputValue = binInput.value;
  let lastInput = inputValue.substr(inputValue.length - 1);
  if (!(lastInput != "0" && lastInput != "1")) {
    //verifies if the last entered number is either 0 or 1
    if (inputValue.length > 8) {
      let temp = inputValue.slice(0, -1); //this part of the code is responsible to remove the invalid number
      binInput.value = temp;
    }
  } else {
    alert(`${lastInput} is not a valid binary number :)`);
    let temp = inputValue.slice(0, -1); //this part of the code is responsible to remove the invalid number
    binInput.value = temp;
  }
});

btn.addEventListener("click", () => {
  let inputValue = binInput.value;
  inputValue = Number(inputValue);
  decInput.value = bin2dec(inputValue);
  clean();
});




function bin2dec(n){
    return parseInt(n, 2);
}

function clean(){
    binInput.value = "";
}