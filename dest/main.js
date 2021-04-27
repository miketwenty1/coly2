"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yo_1 = require("./yo");
var Person_1 = require("./classes/Person");
var bill = new Person_1.default('Bill');
console.log(yo_1.sayHello('Bill'));
console.log(yo_1.sayGoodbye('Mike'));
console.log(bill.sayGoodbye);
