const celsiusInput = document.getElementById("celsius");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", function() {
  const celsius = parseFloat(celsiusInput.value);
  
  if (isNaN(celsius)) {
    result.innerText = "Please enter a valid number!";
    return;
  }

  const fahrenheit = (celsiuss * 9/5) + 32; // ❌ Bug: 'celsiuss' is misspelled
  result.innerText = "Result: " + fahrenheit.toFixed(2) + " °F";
});

console.log("Temperature Converter Loaded");

