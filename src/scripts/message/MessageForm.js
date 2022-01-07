import { getUsers, uploadNewMessage } from "../data/provider.js";

const applicationElement = document.querySelector(".giffygram");

export const sendNewMessage = () => {
  return newMessageDisplay;
};

applicationElement.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "directMessageIcon") {
      newMessageDisplay = newMessageForm();
    document
      .querySelector(".giffygram")
      .dispatchEvent(new CustomEvent("stateChanged"));
    }
  });
  
  applicationElement.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "directMessage__cancel") {
      newMessageDisplay = "";
      document
        .querySelector(".giffygram")
        .dispatchEvent(new CustomEvent("stateChanged"));
    }
  });

const newMessageForm = () => {
  const users = getUsers();
  let html = `
    <div class="directMessage">
        <h2>Direct Message</h2>
            <h3>Choose Recipient</h3>
                <select class="message__input" id="select--friends" label="Select Recipient">
                <option value="">Choose Recipient</option>
                ${users
                  .map((user) => {
                    return `<option value="${user.id}">${user.name}</option>`;
                  }).join("")}       
                </select>
            <h3>Message</h3>
                <div class="field">
                <input type="text" name="newMessage" placeholder="Write message here" class="message__input" />
                </div>    
                
                <button class="message_button" id="directMessage__submit">Send Message</button>
                <button class="message_button" id="directMessage__cancel">Cancel</button>
                </div>
    `;
  return html;
};

let newMessageDisplay = "";



applicationElement.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "directMessage__submit") {
      const messageUserId = localStorage.getItem("gg_user");
      const messageRecipientId = document.getElementById("select--friends").value;
      const messageText = document.querySelector("input[name='newMessage']").value;
      
  
      const dataToSendToAPI = {
        userId: parseInt(messageUserId),
        recipientId: parseInt(messageRecipientId),
        text: messageText,
      };
      uploadNewMessage(dataToSendToAPI);
    }
  });
  
