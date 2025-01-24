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
        character: "Cersei",
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

let currentQuoteIndex = 0;

function showAnswerPopup(){
    document.getElementById('popup').style.display = 'block';
}

function closePopup(){
    document.getElementById('popup').style.display = 'none';
}

function checkAnswer(){
    const userAnswer = document.getElementById('user-answer').value.trim();
    const correctAnswer = quotes[currentQuoteIndex].character;
    
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()){
    document.getElementById('feedback').innerText = 'Correct!';
    document.getElementById('house-sigil').src = quotes[currentQuoteIndex].sigil;
    document.getElementById('house-sigil').style.display = 'block';
    } else {
    document.getElementById('feedback').innerText = 'Incorrect. Try again!';
    document.getElementById('house-sigil').style.display = 'none';
    }
    closePopup();
} 

// Function to load a new quote
function loadNewQuote(){
    currentQuoteIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-text').innerText = quotes[currentQuoteIndex].quote;
    document.getElementById('house-sigil').style.display = 'none';
}

window.onload = loadNewQuote;

