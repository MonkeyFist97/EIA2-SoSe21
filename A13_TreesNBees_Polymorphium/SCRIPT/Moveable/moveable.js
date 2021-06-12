"use strict";
//Inspired and Supported by Huu Thien Phan Ngoc - Made with Mariia Kolkutova, Mona Kabelka & Christina Däschner
var L11_TreesNBees;
(function (L11_TreesNBees) {
    class Moveable {
        constructor(_position, _velocity) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        draw() {
            //Draw
        }
        update() {
            //Update
        }
    }
    L11_TreesNBees.Moveable = Moveable;
})(L11_TreesNBees || (L11_TreesNBees = {}));
//# sourceMappingURL=moveable.js.map