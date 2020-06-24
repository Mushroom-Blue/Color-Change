const colorSquare = document.getElementById("color_square");
const colorInput = document.getElementById("color_input");
const colorSubmitButton = document.getElementById("color_submit");

function ChangeColor(){
  let inputValue = colorInput.value;
  console.log("Previous value", inputValue);
  inputValue = inputValue.replace(/\s/g, "");
  console.log("After replace", inputValue);
  colorSquare.style.backgroundColor = inputValue;
  colorInput.style.color = inputValue;
}

function HandKeydown(event){
  // console.log(event.keyCode);
  if (event.keyCode === 13){
    ChangeColor();
  }
}


document.addEventListener("keydown", HandKeydown);
colorSubmitButton.addEventListener("click", ChangeColor)
