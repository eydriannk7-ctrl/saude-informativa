const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        toggle.textContent = "☀️";
    } else {
        toggle.textContent = "🌙";
    }
});