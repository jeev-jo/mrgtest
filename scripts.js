// Function to add a message to the list
function addMessage() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value.trim();
    if (message) {
        const messagesList = document.getElementById("messagesList");
        const newMessage = document.createElement("li");
        newMessage.textContent = message;
        messagesList.appendChild(newMessage);
        messageInput.value = ""; // Clear input
    }
}

// Lightbox functions to open and close
function openLightbox(imgSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    lightboxImg.src = imgSrc;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
