const quotes = [
  {
    quote:
      "A ruler who hides behind paid executioners soon forgets what death is.",
    character: "Ned",
    house: "Stark",
    sigil: "images/1090px-House_Stark.webp",
  },
  {
    quote:
      "Oaths are meaningless words with no real hold upon any man, except those too weak to pick up a sword.",
    character: "Jaime",
    house: "Lannister",
    sigil: "images/1090px-House_Lannister.webp",
  },
  {
    quote: "Let it be fear.",
    character: "Daenerys",
    house: "Targaryen",
    sigil: "images/1090px-House_Targaryen.webp",
  },
  {
    quote: "A lion does not concern himself with the opinion of sheep.",
    character: "Tywin",
    house: "Lannister",
    sigil: "images/1090px-House_Lannister.webp",
  },
  {
    quote: "We don’t mutilate little girls for vengeance.",
    character: "Doran",
    house: "Martell",
    sigil: "images/1200px-House_Martell.webp",
  },
  {
    quote:
      "The people are hungry for more than just food. They crave distractions..",
    character: "Margaery",
    house: "Tyrell",
    sigil: "images/1090px-House_Tyrell.svg.png",
  },
  {
    quote: "Yes. All men must die, but we are not men.",
    character: "Daenerys",
    house: "Targaryen",
    sigil: "images/1090px-House_Targaryen.webp",
  },
  {
    quote:
      "A mind needs books as a sword needs a whetstone, if it is to keep its edge.",
    character: "Tyrion",
    house: "Lannister",
    sigil: "images/1090px-House_Lannister.webp",
  },
  {
    quote: "First lesson: stick them with the pointy end.",
    character: "Jon",
    house: "Stark",
    sigil: "images/1090px-House_Stark.webp",
  },
];

// Once DOM is ready, build the card
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("quotes-container");

  const whiteWalker = document.createElement("div");
  whiteWalker.classList.add("white-walker");
  document.body.appendChild(whiteWalker);

  function showWhiteWalker() {
    whiteWalker.style.transition = "opacity 5s ease-in-out"; // Slow fade-in effect
    whiteWalker.style.opacity = "0.1"; // Start at 10% opacity

    setTimeout(() => {
      whiteWalker.style.opacity = "0.4"; // Gradually becomes more noticeable
    }, 4000);

    setTimeout(() => {
      whiteWalker.style.opacity = "0.7"; // After 7 seconds, he's very noticeable
    }, 7000);

    setTimeout(() => {
      whiteWalker.style.opacity = "0"; // Slowly fades away
    }, 10000);
  }

  // Start the random white walker appearance
  function randomWalkerAppearance() {
    const randomTime = Math.floor(Math.random() * (20000 - 5000) + 1) + 5000;
    // random intervall between 5 and 20 seconds

    setTimeout(() => {
      showWhiteWalker(); // Trigger White Walker randomly
      randomWalkerAppearance(); // Call the function again
    }, randomTime);
  }

  function checkAnswer(guessInput, correctAnswer, feedback) {
    if (guessInput.toLowerCase() === correctAnswer.toLowerCase()) {
      feedback.innerHTML = "Correct!";
      feedback.classList.add("correct");
    } else if (guessInput.toLowerCase() === "jon snow") {
      feedback.innerHTML = "You know nothing, Jon Snow.";
      feedback.classList.add("jon-snow");
    } else {
      feedback.innerHTML = `Incorrect! The correct answer is ${correctAnswer}.`;
      feedback.classList.add("incorrect");
    }

    // Remove effect after 2 seconds
    setTimeout(() => {
      feedbackElement.classList.remove("jon-snow", "correct", "incorrect");
      feedbackElement.innerHTML = "";
    }, 2000);
  }

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
    guessInput.type = "text";
    guessInput.placeholder = "Guess the character";

    // Check answer button
    const checkBtn = document.createElement("button");
    checkBtn.classList.add("check-btn");
    checkBtn.textContent = "Check Answer";

    // Hidden answer container
    const answerContainer = document.createElement("div");
    answerContainer.classList.add("answer-container");

    // Feedback message (correct / not quite)
    const feedback = document.createElement("p");
    feedback.classList.add("feedback");

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
    answerContainer.appendChild(feedback);
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

      // Check if the answer is correct or incorrect
      if (guess === correctAnswer) {
        feedback.textContent = "Correct!";
        feedback.classList.add("correct");

        increaseScore(); // Increase score if the answer is correct
      } else {
        alert(`Incorrect! The correct answer is ${item.character}.`);

        // Show white walker if the answer is incorrect
        showWhiteWalker();
      }

      answerContainer.style.display = "block"; // Show the answer container

      // Remove effect after 2 seconds
      setTimeout(() => {
        feedback.classList.remove("correct", "incorrect");
        feedback.textContent = "";
      }, 2000);
    });

    let score = 0;
    const scoreCount = document.getElementById("score-count");

    function increaseScore() {
      score++;
      scoreCount.textContent = score;
    }

    // Music Integration
    const musicToggle = document.getElementById("music-toggle");
    const backgroundMusic = new Audio("sounds/GOT3.wav");
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.1; // Set to 20% volume

    musicToggle.addEventListener("click", function () {
      if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicToggle.textContent = "Pause Music";
      } else {
        backgroundMusic.pause();
        musicToggle.textContent = "Play Music";
      }
    });
  });
});
