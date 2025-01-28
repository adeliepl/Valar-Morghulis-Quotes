const quotes = [
    {
        quote: "Tell them the North remembers. Tell them winter came for House Frey.",
        character: "Arya",
        house: "Stark",
        sigil:"images/1090px-House_Stark.webp" 
    },
    {
        quote: "When you play the game of thrones, you win or you die.",
        character: "Cersei",
        house: "Lannister",
        sigil:"images/1090px-House_Lannister.webp"
    },
    {
        quote: "A lion does not concern himself with the opinion of sheep.",
        character: "Tywin",
        house: "Lannister",
        sigil:"images/1090px-House_Lannister.webp"
    },
    {
        quote: "The night is dark and full of terrors.",
        character: "Melisandre",
        house: "Baratheon",
        sigil:"images/1090px-House_Baratheon.webp"
    },
    {
        quote: "Power is power.",
        character: "Cercei",
        house: "Lannister",
        sigil:"images/1090px-House_Lannister.webp"
    },
    {
        quote: "Yes. All men must die, but we are not men.",
        character: "Daenerys",
        house: "Targaryen",
        sigil:"images/1090px-House_Targaryen.webp"
    },
    {
        quote: "A mind needs books as a sword needs a whetstone, if it is to keep its edge.",
        character: "Tyrion",
        house: "Lannister",
        sigil:"images/1090px-House_Lannister.webp"
    },
    {
        quote:"First lesson: stick them with the pointy end.",
        character: "Jon",
        house: "Stark",
        sigil:"images/1090px-House_Stark.webp"
    }
];

// Once DOM is ready, build the card
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("quote-container");

    quotes.forEach((item) => {
        // Create a card element
        const card = document.createElement("div");
        card.classList.add("quote-card");

        // Quote text
        const quoteText = document.createElement("p");
        quoteText.classList.add("quote-text");
        quoteText.textContent = `"${item.quote}"`;

        // Answer button
        const answerBtn = document.createElement("button");
        answerBtn.classList.add("answer-btn");
        answerBtn.textContent = "Answer";

        // Hidden answer container 
        const answerContainer = document.createElement("div");
        answerContainer.classList.add("answer-container");

        // Character & House info 
        const characterInfo = document.createElement("p");
        characterInfo.classList.add("character-info");
        characterInfo.textContent = item.character; 

        const houseName = document.createElement("span");
        houseName.classList.add("house-name");
        houseName.textContent = `House: ${item.house}`;

        // Sigil image
        const sigilImg = document.createElement("img");
        sigilImg.classList.add("sigil");
        sigilImg.src = `${item.house} Sigil`;

        // Append elements to the card
        answerContainer.appendChild(characterInfo);
        answerContainer.appendChild(houseName);
        answerContainer.appendChild(sigilImg);

        card.appendChild(quoteText);
        card.appendChild(answerBtn);
        card.appendChild(answerContainer);

        card.appendChild(quoteText);
        card.appendChild(answerBtn);
        card.appendChild(answerContainer);

        container.appendChild(card);

        // Reveal answer on button click 
        answerBtn.addEventListener("click", () => {
            answerContainer.classList.toggle("show");
            
        });
    });
});