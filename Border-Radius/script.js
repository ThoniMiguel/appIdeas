new ClipboardJS(".copy"); //initiating clipboard.js!
const copyBtn = document.querySelector(".copy");
const copyArea = document.querySelector(".copy-to-clipboard");
const topLeft = document.querySelector(".border1");
const topRight = document.querySelector(".border2");
const botLeft = document.querySelector(".border3");
const botRight = document.querySelector(".border4");
let topLVal = [];
let topRVal = [];
let botLVal = [];
let botRVal = [];

topLeft.addEventListener("input", (e) => {
    if(!e.data){
        return
    }
    topLVal.push(e.data);
    let temp = topLVal.join("");
    console.log(temp);
});
topRight.addEventListener("input", (e) => {});
botLeft.addEventListener("input", (e) => {});
botRight.addEventListener("input", (e) => {});

function writesOnTextArea() {
  return `            border-top-left-radius: 
            border-top-right-radius:
            border-bottom-left-radius:
            border-bottom-right-radius:`;
}
