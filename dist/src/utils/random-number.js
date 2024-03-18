"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDiscount = exports.getRandomNumber = void 0;
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
exports.getRandomNumber = getRandomNumber;
const getRandomInteger = (a = 0, b = 1) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    return Math.floor(lower + Math.random() * (upper - lower + 1));
};
const generateDiscount = () => {
    const discounts = [
        0.3,
        0.2,
        0.1,
        0
    ];
    const randomIndex = getRandomInteger(0, discounts.length - 1);
    return discounts[randomIndex];
};
exports.generateDiscount = generateDiscount;
//# sourceMappingURL=random-number.js.map