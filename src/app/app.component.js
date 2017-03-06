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
var WOODBURNINGS = [
    { id: 1, name: 'Maid Deadpool - Door Hanger', size: '4.5" x 4.5"', material: 'Pinewood',
        date_finished: 'February 28th, 2017', total_time_to_make_in_minutes: 93, total_time_to_make_abbreviated: 1.5 },
    { id: 2, name: 'Deadpool Arms Crossed', size: '5" x 7"', material: 'Birch Plywood',
        date_finished: 'February 27th, 2017', total_time_to_make_in_minutes: 193, total_time_to_make_abbreviated: 3.25 },
    { id: 3, name: 'Mouthy Canadian Deadpool', size: '5" x 7"', material: 'Birch Plywood',
        date_finished: 'September 23rd, 2016', total_time_to_make_in_minutes: 87, total_time_to_make_abbreviated: 1.5 },
    { id: 4, name: 'I have Comiks Issues Deadpool', size: '5" x 7"', material: 'Birch Plywood',
        date_finished: 'September 23rd, 2016', total_time_to_make_in_minutes: 101, total_time_to_make_abbreviated: 1.75 },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'All Woodburning Entries';
        this.all_woodburnings = WOODBURNINGS;
    }
    AppComponent.prototype.onSelect = function (woodburning) {
        this.selectedWoodburning = woodburning;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>My Woodburnings</h2>\n    <ul class=\"woodburnings_list\">\n      <li *ngFor=\"let woodburning of all_woodburnings\" [class.selected]=\"woodburning === selectedWoodburning\" (click)=\"onSelect(woodburning)\">\n        <span class=\"badge\">{{woodburning.id}}: </span> {{woodburning.name}}\n      </li>\n    </ul>\n    <br/>\n    <my-woodburning-detail [woodburning]=\"selectedWoodburning\"></my-woodburning-detail>\n  ",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .woodburnings_list {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 20em;\n    }\n    .woodburnings_list li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .woodburnings_list li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .woodburnings_list li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .woodburnings_list .text {\n      position: relative;\n      top: -3px;\n    }\n    .woodburnings_list .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n    .input-styling {\n      width: 20em;\n    }"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map