namespace ZufallsGedicht {
    let strawHatPirates: string[] =
        ["Ruffy ", "Zorro ", "Sanji ", "Nami ", "Robin ", "Usopp ", "Franky ", "Chopper ", "Brook ", "Jinbei "];

    let ordersOfTheCaptain: string[] =
        ["attacks ", "loves ", "fears ", "honors ", "hates ", "steals ", "heals ", "eats ", "follows ", "shares "];

    let devilFruits: string[] =
        ["Beer", "Cake", "Marines", "Books", "Knees", "Sea", "Pirates", "Fruits", "Supernovas", "Animes"];

    // console.log(strawHatPirates);
    // console.log(ordersOfTheCaptain);
    // console.log(devilFruits);

    for (let x: number = 10; x > 0; x--) {
        // console.log(strawHatPirates[x - 1]);
        // console.log(getVerse);
        // console.log (x);
        console.log(getVerse(strawHatPirates, ordersOfTheCaptain, devilFruits));
    }

    function getVerse(_strawHatPirates: string[], _ordersOfTheCaptain: string[], _devilFruits: string[]) {
        let verse: string = "";
        let randomNumberOne: number = Math.floor(Math.random() * _strawHatPirates.length);
        let randomNumberTwo: number = Math.floor(Math.random() * _ordersOfTheCaptain.length);
        let randomNumberThree: number = Math.floor(Math.random() * _devilFruits.length);
        verse = _strawHatPirates[randomNumberOne] + _ordersOfTheCaptain[randomNumberTwo] + _devilFruits[randomNumberThree];
        _strawHatPirates.splice(randomNumberOne, 1);
        _ordersOfTheCaptain.splice(randomNumberTwo, 1);
        _devilFruits.splice(randomNumberThree, 1);
        return verse;
    }
    
}
