let playerName = '';
function startQuiz(){
    playerName = document.getElementById('player-name').value.trim();
    if (playerName){
        document.getElementById('name-input').style.display = 'none';
        document.querySelector('.quiz-container').style.display = 'block';
        alert(`Welcome to Westeros, ${playerName}! Steel yourself for the challenge ahead!`);
    } else {
        alert('Even a Lannister wouldn`t forget their own name. Try again!');
    }
}

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

let currentQuoteIndex = 0;

function displayQuotes() {
    const quoteGrid = document.querySelector('.quote-grid');
    quoteGrid.innerHTML = ''; // Clear existing content

    quotes.forEach((item, index) => {
        const quoteBox = document.createElement('div');
        quoteBox.classList.add('quote-box');
        quoteBox.innerHTML = `
            <p>"${item.quote}"</p>
            <button onclick="showAnswerPopup(${index})">Answer</button>
        `;
        quoteGrid.appendChild(quoteBox);
    });
}


function showAnswerPopup(index) {
    currentQuoteIndex = index;
    document.getElementById('popup').style.display = 'block';
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

function closePopup(){
    document.getElementById('popup').style.display = 'none';
}

window.onload = function(){
    displayQuote();
};

