"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnModelObject = void 0;
const return_car_object_1 = require("../car/return-car.object");
exports.returnModelObject = {
    id: true,
    name: true,
    image: true,
    slug: true,
    car: { select: return_car_object_1.returnCarObject }
};
//# sourceMappingURL=return-model.object.js.map