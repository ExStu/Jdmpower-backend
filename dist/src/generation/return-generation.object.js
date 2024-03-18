"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnGenerationObject = void 0;
const return_model_object_1 = require("../model/return-model.object");
exports.returnGenerationObject = {
    id: true,
    name: true,
    image: true,
    slug: true,
    chassis: true,
    engine: true,
    engineVolume: true,
    yearFrom: true,
    yearTo: true,
    model: { select: return_model_object_1.returnModelObject }
};
//# sourceMappingURL=return-generation.object.js.map