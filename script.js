const quotes = [
    {
        quote: "A ruler who hides behind paid executioners soon forgets what death is.",
        character: "Ned",
        house: "Stark",
        sigil:"images/1090px-House_Stark.webp" 
    },
    {
        quote: "Oaths are meaningless words with no real hold upon any man, except those too weak to pick up a sword.",
        character: "Jaime",
        house: "Lannister",
        sigil:"images/1090px-House_Lannister.webp"
    },
    {
        quote: "Let it be fear.",
        character: "Daenerys",
        house: "Targaryen",
        sigil:"images/1090px-House_Targaryen.webp"
    },
    {
        quote: "A lion does not concern himself with the opinion of sheep.",
        character: "Tywin",
        house: "Lannister",
        sigil:"images/1090px-House_Lannister.webp"
    },
    {
        quote: "We don’t mutilate little girls for vengeance.",
        character: "Doran",
        house: "Martell",
        sigil:"images/1200px-House_Martell.webp"
    },
    {
        quote: "The people are hungry for more than just food. They crave distractions..",
        character: "Margaery",
        house: "Tyrell",
        sigil:"images/1090px-House_Tyrell.svg.png"
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
    const container = document.getElementById("quotes-container");

    quotes.forEach((item) => {
        // Create a card element
        const card = document.createElement("div");
        card.classList.add("quotes-card");

        // Quote text
        const quoteText = document.createElement("p");
        quoteText.classList.add("quotes-text");
        quoteText.textContent = `"${item.quote}"`;

        // Text input for user guess
        const guessInput = document.createElement("input");
        guessInput.classList.add("guess-input");
        guessInput.type ="text";
        guessInput.placeholder = "Guess the character";
        
        // Check answer button
        const checkBtn = document.createElement("button");
        checkBtn.classList.add("check-btn");
        checkBtn.textContent = "Check Answer";

        // Hidden answer container 
        const answerContainer = document.createElement("div");
        answerContainer.classList.add("answer-container");

        // Feedback 

        // Music Integration
        const musicToggle = document.getElementById("music-toggle");
        const backgroundMusic = new Audio("sounds/GOT3.wav");
        backgroundMusic.loop = true;
        backgroundMusic.volume = 0.1; // Set to 20% volume

        musicToggle.addEventListener("click", function() {
            if (backgroundMusic.paused) {
                backgroundMusic.play();
                musicToggle.textContent = "Pause Music";
            } else {
                backgroundMusic.pause();
                musicToggle.textContent = "Play Music";
            }
        });

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
        // sigilImg.src = `${item.house} Sigil`;
        // sigilImg.alt = `${item.house} Sigil`;
        sigilImg.src = item.sigil;

        // Append elements to the card
        answerContainer.appendChild(characterInfo);
        answerContainer.appendChild(houseName);
        answerContainer.appendChild(sigilImg);
        // need to add feedback to the answer container

        card.appendChild(quoteText);
        card.appendChild(guessInput);
        card.appendChild(checkBtn);
        card.appendChild(answerContainer);

        container.appendChild(card);

        // Check answer event listener 
        checkBtn.addEventListener("click", () => {
            const guess = guessInput.value.trim().toLowerCase(); 
            const correctAnswer = item.character.toLowerCase();
            if(guess === correctAnswer){
                alert("Correct!");
            } else {
                alert(`Incorrect! The correct answer is ${item.character}.`);
            }
            answerContainer.style.display = "block"; // Show the answer container
        });

        const whiteWalker = document.createElement("div");
whiteWalker.classList.add("white-walker");
document.body.appendChild(whiteWalker);

function showWhiteWalker() {
    whiteWalker.style.opacity = "1";  // Show full intensity
    setTimeout(() => {
        whiteWalker.style.opacity = "0"; // Fade out after 1.5s
    }, 1500);
}

document.querySelectorAll(".check-btn").forEach((button, index) => {
    button.addEventListener("click", () => {
        const userGuess = document.querySelectorAll(".guess-input")[index].value.toLowerCase();
        const correctAnswer = quotes[index].character.toLowerCase();
        
        if (userGuess !== correctAnswer) {
            showWhiteWalker();
        }
    });
});
    });
});