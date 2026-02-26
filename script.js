function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function searchContent() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let sections = document.querySelectorAll(".searchable");

    sections.forEach(section => {
        let text = section.innerText.toLowerCase();
        section.style.display = text.includes(input) ? "block" : "none";
    });
}