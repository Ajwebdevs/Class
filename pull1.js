// Simple Calculator
function calculator() {
    const num1 = parseFloat(prompt("Enter the first number: "));
    const num2 = parseFloat(prompt("Enter the second number: "));
    const operation = prompt("Choose an operation (+, -, *, /): ");
  
    let result;
  
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          alert("Division by zero is not allowed! 🤨");
          return;
        }
        break;
      default:
        alert("Invalid operation! 😏");
        return;
    }
  
    alert(`The result is: ${result}`);
  }
  
  // Call the calculator function
  calculator();
  