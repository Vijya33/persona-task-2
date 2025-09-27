function calculateArea() {
  const radius = parseFloat(document.getElementById("radius").value);
  if (isNaN(radius) || radius <= 0) {
    document.getElementById("result").innerText = "Please enter a valid positive number.";
    return;
  }
  const area = Math.PI * radius * radius;
  document.getElementById("result").innerText = `Area: ${area.toFixed(2)}`;
}