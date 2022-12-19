const input = document.querySelector("#converter");
const conv = document.querySelector(".conv");
const res = document.querySelector(".reset");
const result = document.querySelector(".result");
const change = document.querySelector(".change");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

const swap = () => {
  if (one.textContent === "°C") {
    one.textContent = "°F";
    two.textContent = "°C";
  } else {
    one.textContent = "°C";
    two.textContent = "°F";
  }
};

const toF = () => {
  if (input.value !== "") {
    if (one.textContent === "°C") {
      let f = 0;
      f += input.value * 1.8 + 32;
      result.textContent = ` ${input.value}°C to ${f}°F`;
    } else {
      let f = 0;
      f += (input.value - 32) / 1.8;
      result.textContent = ` ${input.value}°F to ${f.toFixed(1)}°C`;
    }
  } else {
    result.textContent = "Wprowadź wartość";
  }
};
const reset = () => {
  input.value = "";
  result.textContent = "";
};
conv.addEventListener("click", toF);
res.addEventListener("click", reset);
change.addEventListener("click", swap);
