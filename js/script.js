const search = document.getElementById("search");
const filter = document.getElementById("filter");
const cards = document.querySelectorAll(".card");

function update() {
  if(!search || !filter) return;

  const text = search.value.toLowerCase();
  const cat = filter.value;

  cards.forEach(card => {
    const title = card.querySelector("h2").textContent.toLowerCase();
    const category = card.dataset.cat;

    const matchText = title.includes(text);
    const matchCat = cat === "todas" || cat === category;

    card.style.display = matchText && matchCat ? "block" : "none";
  });
}

if(search) search.addEventListener("input", update);
if(filter) filter.addEventListener("change", update);