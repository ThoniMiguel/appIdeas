new ClipboardJS(".copy"); //initiating clipboard.js!
const copyBtn = document.querySelector(".copy");
const copyArea = document.querySelector(".copy-to-clipboard");
const topLeft = document.querySelector(".border1");
const topRight = document.querySelector(".border2");
const botLeft = document.querySelector(".border3");
const botRight = document.querySelector(".border4");
const myBox = document.querySelector(".box");
const unit = "px";

copyBtn.addEventListener("click", () => {
  copyArea.value = `{\nborder-top-left-radius:${topLeft.value}${unit};\nborder-top-right-radius:${topRight.value}${unit};\nborder-bottom-left-radius:${botLeft.value}${unit};\nborder-bottom-right-radius:${botRight.value}${unit};\n}`;
});

topLeft.addEventListener("input", (e) => {
  let borderValue = topLeft.value;
  myBox.style.borderTopLeftRadius = `${borderValue}${unit}`;
});
topRight.addEventListener("input", (e) => {
  let borderValue = topRight.value;
  myBox.style.borderTopRightRadius = `${borderValue}${unit}`;
});
botLeft.addEventListener("input", (e) => {
  let borderValue = botLeft.value;
  myBox.style.borderBottomLeftRadius = `${borderValue}${unit}`;
});
botRight.addEventListener("input", (e) => {
  let borderValue = botRight.value;
  myBox.style.borderBottomRightRadius = `${borderValue}${unit}`;
});
