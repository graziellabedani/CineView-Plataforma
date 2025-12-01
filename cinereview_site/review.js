document.getElementById("year").textContent = new Date().getFullYear();

const defaultReviews = [
    { text: "Oppenheimer é uma obra-prima visual e emocional!", date: "12/01/2024 19:22" },
    { text: "Barbie é surpreendentemente inteligente e divertida!", date: "10/01/2024 14:30" },
    { text: "Duna 2 é épico e visualmente impressionante.", date: "15/01/2024 21:10" }
];

function loadReviews() {
    const list = document.getElementById("reviewList");
    list.innerHTML = "";

    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const allReviews = [...defaultReviews, ...savedReviews];

    allReviews.forEach(r => {
        const item = document.createElement("div");
        item.className = "review-item";
        item.innerHTML = `
            <p class="review-text">"${r.text}"</p>
            <p class="review-date">${r.date}</p>
        `;
        list.appendChild(item);
    });

    allReviews.forEach(r => {
        const clone = document.createElement("div");
        clone.className = "review-item";
        clone.innerHTML = `
            <p class="review-text">"${r.text}"</p>
            <p class="review-date">${r.date}</p>
        `;
        list.appendChild(clone);
    });
}

function addReview() {
    const textarea = document.getElementById("reviewText");
    const text = textarea.value.trim();
    if (text === "") return alert("Escreva algo!");

    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    const data = new Date();
    const formatDate = data.toLocaleDateString("pt-BR") + " " + data.toLocaleTimeString("pt-BR");

    reviews.unshift({ text, date: formatDate });
    localStorage.setItem("reviews", JSON.stringify(reviews));

    textarea.value = "";
    loadReviews();
}

loadReviews();
