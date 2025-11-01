const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  // Show user message
  const userMsg = document.createElement("div");
  userMsg.classList.add("user-message");
  userMsg.textContent = message;
  chatBox.appendChild(userMsg);

  userInput.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  // Simulate AI response
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.classList.add("bot-message");
    botMsg.textContent = getBotResponse(message);
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 800);
}

// Simple AI Logic
function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("hello") || input.includes("hi")) {
    return "Hello there! 😊";
  } else if (input.includes("how are you")) {
    return "I'm great! How about you?";
  } else if (input.includes("your name")) {
    return "I'm ChatBot, your virtual assistant!";
  } else if (input.includes("bye")) {
    return "Goodbye! Have a great day 👋";
  } else {
    return "I'm not sure about that, but I'm learning!";
  }
}
