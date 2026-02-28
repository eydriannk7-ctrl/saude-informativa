const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        toggle.textContent = "☀️";
    } else {
        toggle.textContent = "🌙";
    }
});
const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;

        if(content.style.display === "block"){
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});