function updateGreeting() {
  const greetingElement = document.getElementById("greeting");
  const now = new Date();
  const hour = now.getHours();

  let greeting;
  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  greetingElement.textContent = greeting;
  console.log("updated greeting");
}

updateGreeting();
