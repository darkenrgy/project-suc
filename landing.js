console.log(1)
//  HTML elements
const chatbotContainer = document.getElementById('chatbot-container');
const messageList = document.getElementById('message-list');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Initialize  array
let conversation = [];

//  event listener to the send button
sendButton.addEventListener('click', () => {
  // Get the user input value
  const userInputValue = userInput.value.trim();

  // Check if the user input value is not empty
  if (userInputValue!== '') {
    // Add the user input value to the conversation array
    conversation.push({ type: 'user', text: userInputValue });

    // Clear the user input field
    userInput.value = '';

    // Simulate a response from the chatbot
    setTimeout(() => {
      const response = generateResponse(userInputValue);
      conversation.push({ type: 'bot', text: response });
      renderConversation();
    }, 1000);
  }
});

//  generate a response from the chatbot
function generateResponse(userInputValue) {
  // TO DO: Implement the logic to generate a response based on the user input
  return 'I\'m not sure I understand. Can you please rephrase?';
}

// render the conversation
function renderConversation() {
  // Clear the message list
  messageList.innerHTML = '';

  // Loop through the conversation array and render each message
  conversation.forEach((message) => {
    const messageHTML = `
      <li class="${message.type === 'user'? 'user-message' : 'bot-message'}">
        ${message.text}
      </li>
    `;
    messageList.innerHTML += messageHTML;
  });
}




