
function toggleChat() {
    let display = document.getElementById("chat-container").style.display;

    document.getElementById("chat-container").style.display = display !== "block" ? "block" : "none"
}

function openChat(){
    document.getElementById("chat-container").style.display = "block";
}

function closeChat(){
    document.getElementById("chat-container").style.display = "none";
}

const chatHistory = document.getElementById("chat-history-text");
const userInput = document.getElementById("user-input");
const attrUser = document.createAttribute("class");
attrUser.value = "chat-user";

userInput.addEventListener("keyup", function(e) {
    if (e.which === 13) {
        const p = document.createElement("p");
        p.innerText = e.target.value;
        const attrUser = document.createAttribute("class");
        attrUser.value = "chat-user";
        p.setAttributeNode(attrUser);
        chatHistory.appendChild(p);
        //userInput.

    }
});