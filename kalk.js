function plus() {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let result = Number(input1) + Number(input2);
  document.getElementById("result").textContent = result;
}

function minus() {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let result = Number(input1) - Number(input2);
  document.getElementById("result").textContent = result;
}

function multiply() {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let result = Number(input1) * Number(input2);
  document.getElementById("result").textContent = result;
}

function divide() {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let result = Number(input1) / Number(input2);
  document.getElementById("result").textContent = result;
}
