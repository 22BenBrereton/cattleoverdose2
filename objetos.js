/**
 * objetos.js
 * Base structure for JavaScript objects.
 */

// Example object constructor
function GameObject(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
}

GameObject.prototype.move = function(dx, dy) {
    this.x += dx;
    this.y += dy;
};

