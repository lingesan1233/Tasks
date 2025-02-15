const board = document.getElementById("game-board");
const restartBtn = document.getElementById("restart");
const emojis = ["🍎", "🍌", "🍇", "🍉", "🍎", "🍌", "🍇", "🍉"];
let shuffledCards, flippedCards = [], matchedPairs = 0;

function shuffle() {
    shuffledCards = emojis.sort(() => Math.random() - 0.5);
}

function createBoard() {
    board.innerHTML = "";
    shuffle();
    shuffledCards.forEach((emoji, i) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.emoji = emoji;
        card.textContent = "?";
        card.addEventListener("click", flipCard);
        board.appendChild(card);
    });
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
        this.textContent = this.dataset.emoji;
        this.classList.add("flipped");
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }
}

function checkMatch() {
    let [card1, card2] = flippedCards;
    if (card1.dataset.emoji === card2.dataset.emoji) {
        matchedPairs++;
        flippedCards = [];
        if (matchedPairs === emojis.length / 2) alert("You win!");
    } else {
        card1.textContent = "?";
        card2.textContent = "?";
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        flippedCards = [];
    }
}

restartBtn.addEventListener("click", () => {
    matchedPairs = 0;
    flippedCards = [];
    createBoard();
});
createBoard();
