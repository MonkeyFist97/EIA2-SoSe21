"use strict";
// Der Code wurde zusammen mit Huu Thien Phan Ngoc, Mona Kabelka, Chrissi Däschner und Mariia Kolkutova erstellt
var Endabgabe;
(function (Endabgabe) {
    class Human {
        constructor(_position, _jerseyColor) {
            this.position = _position;
            this.jerseyColor = _jerseyColor;
            this.draw();
        }
        get playerPosition() {
            return this.position;
        }
        draw() {
            //polymorphie
        }
        update() {
            //polymorphie
        }
        setJersey(_color) {
            this.jerseyColor = _color;
        }
    }
    Endabgabe.Human = Human;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=human.js.map