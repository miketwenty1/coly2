"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Object.defineProperty(Person.prototype, "sayHello", {
        get: function () {
            return "Hello " + this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "sayGoodbye", {
        get: function () {
            return "Goodbye " + this.name;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
exports.default = Person;
