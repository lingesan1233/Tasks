// script.js
document.addEventListener("DOMContentLoaded", () => {
    const gameBoard = document.getElementById("gameBoard");
    const restartButton = document.getElementById("restart");
    
    const cardsArray = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H"];
    let cards = [];
    let flippedCards = [];
    let matchedCards = 0;

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    function createBoard() {
        gameBoard.innerHTML = "";
        cards = shuffle(cardsArray).map(value => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.dataset.value = value;
            card.addEventListener("click", flipCard);
            gameBoard.appendChild(card);
            return card;
        });
    }

    function flipCard() {
        if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
            this.innerText = this.dataset.value;
            this.classList.add("flipped");
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                checkMatch();
            }
        }
    }

    function checkMatch() {
        const [card1, card2] = flippedCards;
        if (card1.dataset.value === card2.dataset.value) {
            card1.classList.add("matched");
            card2.classList.add("matched");
            matchedCards += 2;
            flippedCards = [];
        } else {
            card1.classList.add("incorrect");
            card2.classList.add("incorrect");
            setTimeout(() => {
                card1.innerText = "";
                card2.innerText = "";
                card1.classList.remove("flipped", "incorrect");
                card2.classList.remove("flipped", "incorrect");
                flippedCards = [];
            }, 1000);
        }
        if (matchedCards === cardsArray.length) {
            setTimeout(() => alert("Congratulations! You won!"), 500);
        }
    }

    restartButton.addEventListener("click", () => {
        matchedCards = 0;
        flippedCards = [];
        createBoard();
    });

    createBoard();
});