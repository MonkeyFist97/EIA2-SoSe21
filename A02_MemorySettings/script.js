"use strict";
var MemorySettings;
(function (MemorySettings) {
    // debugger;
    let pairsAmount;
    let cardSymbol = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    let createdDeck = [];
    let deckDOMElement;
    let clickedDeck = [];
    let foundPairs = 0;
    let startGame;
    let divForm;
    let cardProperties = [];
    let body = document.querySelector("body");
    let exampleCard = document.querySelector("#example");
    let seconds = 0;
    let minutes = 0;
    let timer = document.querySelector("#timer");
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        divForm = document.querySelector("#form");
        startGame = document.querySelector("#startGame");
        divForm.addEventListener("change", handleChange);
        deckDOMElement = document.querySelector("#deck");
        startGame.addEventListener("click", createCards);
        handleChange();
    }
    function handleChange() {
        let formData = new FormData(document.forms[0]);
        cardProperties = [];
        for (let entry of formData) {
            cardProperties.push(String(entry[1]));
        }
        exampleCard.style.width = cardProperties[1] + "px";
        exampleCard.style.height = cardProperties[1] + "px";
        body.style.background = cardProperties[2];
        exampleCard.style.background = cardProperties[3];
        exampleCard.style.color = cardProperties[4];
        exampleCard.style.fontFamily = cardProperties[5];
    }
    function createCards() {
        divForm.classList.add("gone");
        startGame.classList.add("gone");
        exampleCard.classList.add("gone");
        pairsAmount = Number(cardProperties[0]);
        for (let double = 0; double < 2; double++) {
            for (let i = 0; i < pairsAmount; i++) {
                createdDeck.push(cardSymbol[i]);
            }
        }
        createdDeck.sort(() => 0.5 - Math.random());
        deckDOMElement.innerHTML = "";
        body.style.background = cardProperties[2];
        body.style.fontFamily = cardProperties[5];
        for (let index = 0; index < createdDeck.length; index++) {
            let card = document.createElement("div");
            card.classList.add("card");
            card.style.width = cardProperties[1] + "px";
            card.style.height = cardProperties[1] + "px";
            card.style.background = cardProperties[3];
            card.style.color = cardProperties[4];
            card.innerHTML = "<span>" + createdDeck[index] + "</span>";
            deckDOMElement.appendChild(card);
            card.addEventListener("click", flipCard);
            let allSpans = deckDOMElement.querySelectorAll("span");
            allSpans[index].classList.add("invisible");
        }
        add();
    }
    function add() {
        setInterval(function () {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            timer.innerHTML = minutes + ":" + seconds;
        }, 1000);
    }
    function flipCard(_event) {
        let target = _event.target;
        clickedDeck.push(target);
        clickedDeck[0].style.background = "white";
        clickedDeck[0].querySelector("span")?.classList.remove("invisible");
        if (clickedDeck.length == 2) {
            clickedDeck[1].style.background = "white";
            clickedDeck[1].querySelector("span")?.classList.remove("invisible");
            setTimeout(compareCards, 2000);
        }
    }
    function compareCards() {
        let spanValue0 = clickedDeck[0].querySelector("span")?.innerHTML;
        let spanValue1 = clickedDeck[1].querySelector("span")?.innerHTML;
        if (spanValue0 == spanValue1) {
            clickedDeck[0].classList.add("invisible");
            clickedDeck[1].classList.add("invisible");
            clickedDeck = [];
            foundPairs++;
            checkWin();
        }
        else {
            clickedDeck[0].style.background = cardProperties[3];
            clickedDeck[1].style.background = cardProperties[3];
            clickedDeck[0].querySelector("span")?.classList.add("invisible");
            clickedDeck[1].querySelector("span")?.classList.add("invisible");
            clickedDeck = [];
        }
    }
    function checkWin() {
        if (foundPairs == pairsAmount) {
            window.alert("The game is over! You played with " + cardProperties[0] + " card pairs for " + minutes + ":" + seconds + "! Press F5 to play again!");
        }
    }
})(MemorySettings || (MemorySettings = {}));
//# sourceMappingURL=script.js.map