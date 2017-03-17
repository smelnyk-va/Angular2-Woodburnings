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
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
// Observable class extensions
require('rxjs/add/observable/of');
// Observable operators
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
var woodburning_search_service_1 = require('./woodburning-search.service');
var WoodburningSearchComponent = (function () {
    function WoodburningSearchComponent(woodburningSearchService, router) {
        this.woodburningSearchService = woodburningSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    // Push a search term into the observable stream.
    WoodburningSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    WoodburningSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.all_woodburnings = this.searchTerms
            .debounceTime(200) // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time the term changes
            ? _this.woodburningSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: add real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    WoodburningSearchComponent.prototype.gotoDetail = function (woodburning) {
        var link = ['/detail', woodburning.id];
        this.router.navigate(link);
    };
    WoodburningSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'woodburning-search',
            templateUrl: './woodburning-search.component.html',
            styleUrls: ['./woodburning-search.component.css'],
            providers: [woodburning_search_service_1.WoodburningSearchService]
        }), 
        __metadata('design:paramtypes', [woodburning_search_service_1.WoodburningSearchService, router_1.Router])
    ], WoodburningSearchComponent);
    return WoodburningSearchComponent;
}());
exports.WoodburningSearchComponent = WoodburningSearchComponent;
//# sourceMappingURL=woodburning-search.component.js.map