"use strict";
var ZufallsGedicht;
(function (ZufallsGedicht) {
    let strawHatPirates = ["Ruffy ", "Zorro ", "Sanji ", "Nami ", "Robin ", "Usopp ", "Franky ", "Chopper ", "Brook ", "Jinbei "];
    let ordersOfTheCaptain = ["attacks ", "loves ", "fears ", "honors ", "hates ", "steals ", "heals ", "eats ", "follows ", "shares "];
    let devilFruits = ["Beer", "Cake", "Marines", "Books", "Knees", "Sea", "Pirates", "Fruits", "Supernovas", "Animes"];
    // console.log(strawHatPirates);
    // console.log(ordersOfTheCaptain);
    // console.log(devilFruits);
    for (let x = 10; x > 0; x--) {
        // console.log(strawHatPirates[x - 1]);
        // console.log(getVerse);
        // console.log (x);
        console.log(getVerse(strawHatPirates, ordersOfTheCaptain, devilFruits));
    }
    function getVerse(_strawHatPirates, _ordersOfTheCaptain, _devilFruits) {
        let verse = "";
        let randomNumberOne = Math.floor(Math.random() * _strawHatPirates.length);
        let randomNumberTwo = Math.floor(Math.random() * _ordersOfTheCaptain.length);
        let randomNumberThree = Math.floor(Math.random() * _devilFruits.length);
        verse = _strawHatPirates[randomNumberOne] + _ordersOfTheCaptain[randomNumberTwo] + _devilFruits[randomNumberThree];
        _strawHatPirates.splice(randomNumberOne, 1);
        _ordersOfTheCaptain.splice(randomNumberTwo, 1);
        _devilFruits.splice(randomNumberThree, 1);
        return verse;
    }
})(ZufallsGedicht || (ZufallsGedicht = {}));
//# sourceMappingURL=quote.js.map