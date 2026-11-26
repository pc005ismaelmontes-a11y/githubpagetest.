const rocket = document.getElementById("rocket");
const loginBox = document.getElementById("loginBox");
const landing = document.getElementById("landing");
const subtitle = document.getElementById("subtitle");
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");
const success = document.getElementById("success");

// INICIO DE LA MISION

window.addEventListener("load", () => {

    subtitle.textContent = "Rocket approaching from the Moon...";

    setTimeout(() => {
        rocket.classList.add("fly");
    }, 1000);

    setTimeout(() => {
        landing.classList.add("show");
        subtitle.textContent = "Rocket landed successfully!";
    }, 4500);

    setTimeout(() => {
        rocket.style.opacity = "0";
        loginBox.classList.add("show");
        subtitle.textContent = "Awaiting authentication...";
    }, 5500);

});

// LOGIN

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const astronaut = document.getElementById("astronaut").value;
    const password = document.getElementById("password").value;

    if (astronaut === "ASTRO-01" && password === "LUNA2026") {

        message.textContent = "Access granted!";
        message.style.color = "#42ffad";

        setTimeout(() => {
            success.style.display = "flex";
            loginBox.style.display = "none";
        }, 1000);

    } else {

        message.textContent = "Incorrect ID or password!";
        message.style.color = "#ff6464";

    }
});