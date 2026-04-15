function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

function submitForm() {
    alert("Message Sent!");
    return false;
}

// Scroll animation
window.addEventListener("scroll", () => {
    document.querySelectorAll(".fade").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});