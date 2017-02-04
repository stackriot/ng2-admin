"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var theme_1 = require("../../../theme");
var BaKameleonPicturePipe = (function () {
    function BaKameleonPicturePipe() {
    }
    BaKameleonPicturePipe.prototype.transform = function (input) {
        return theme_1.layoutPaths.images.root + 'theme/icon/kameleon/' + input + '.svg';
    };
    return BaKameleonPicturePipe;
}());
BaKameleonPicturePipe = __decorate([
    core_1.Pipe({ name: 'baKameleonPicture' })
], BaKameleonPicturePipe);
exports.BaKameleonPicturePipe = BaKameleonPicturePipe;
//# sourceMappingURL=baKameleonPicture.pipe.js.map