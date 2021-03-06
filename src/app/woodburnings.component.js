"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var woodburning_service_1 = require('./woodburning.service');
var WoodburningsComponent = (function () {
    function WoodburningsComponent(router, woodburningService) {
        this.router = router;
        this.woodburningService = woodburningService;
        this.title = 'All Woodburning Entries';
    }
    WoodburningsComponent.prototype.getWoodburnings = function () {
        var _this = this;
        this.woodburningService.getWoodburnings().then(function (all_woodburnings) { return _this.all_woodburnings = all_woodburnings; });
    };
    WoodburningsComponent.prototype.ngOnInit = function () {
        this.getWoodburnings();
    };
    WoodburningsComponent.prototype.onSelect = function (woodburning) {
        this.selectedWoodburning = woodburning;
    };
    WoodburningsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedWoodburning.id]);
    };
    WoodburningsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.woodburningService.create(name)
            .then(function (woodburning) {
            _this.all_woodburnings.push(woodburning);
            _this.selectedWoodburning = null;
        });
    };
    WoodburningsComponent.prototype.delete = function (woodburning) {
        var _this = this;
        this.woodburningService
            .delete(woodburning.id)
            .then(function () {
            _this.all_woodburnings = _this.all_woodburnings.filter(function (h) { return h !== woodburning; });
            if (_this.selectedWoodburning === woodburning) {
                _this.selectedWoodburning = null;
            }
        });
    };
    WoodburningsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-woodburnings',
            templateUrl: './woodburnings.component.html',
            styleUrls: ['./woodburnings.component.css'],
            providers: [woodburning_service_1.WoodburningService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, woodburning_service_1.WoodburningService])
    ], WoodburningsComponent);
    return WoodburningsComponent;
}());
exports.WoodburningsComponent = WoodburningsComponent;
//# sourceMappingURL=woodburnings.component.js.map