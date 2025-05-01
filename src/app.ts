function displayWelcomeMessage() {
    const message = "Welcome to the Simple TypeScript App!";
    console.log(message);
    
    const welcomeElement = document.createElement('h1');
    welcomeElement.textContent = message;
    document.body.appendChild(welcomeElement);
}

window.onload = displayWelcomeMessage;