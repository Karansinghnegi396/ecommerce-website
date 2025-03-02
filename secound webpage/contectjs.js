document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let statusMessage = document.getElementById("statusMessage");

    if (name === "" || email === "" || message === "") {
        statusMessage.innerText = "All fields are required!";
        statusMessage.style.color = "red";
        return;
    }

    // Simulating form submission (You can replace this with an actual backend call)
    setTimeout(() => {
        statusMessage.innerText = "Message sent successfully!";
        statusMessage.style.color = "green";
        document.getElementById("contactForm").reset();
    }, 1000);
});
