(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chronicles-list></app-chronicles-list>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_chronicles_list_chronicles_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/chronicles-list/chronicles-list.component */ "./src/components/chronicles-list/chronicles-list.component.ts");
/* harmony import */ var _components_chronicles_list_chronicles_year_component_chronicles_year_component_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/chronicles-list/chronicles-year-component/chronicles-year-component.component */ "./src/components/chronicles-list/chronicles-year-component/chronicles-year-component.component.ts");
/* harmony import */ var _components_chronicles_list_chronicles_year_component_chronicles_month_component_chronicles_month_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-month-component.component */ "./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-month-component.component.ts");
/* harmony import */ var _components_chronicles_list_chronicles_year_component_chronicles_month_component_chronicles_day_component_chronicles_day_component_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-day-component/chronicles-day-component.component */ "./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-day-component/chronicles-day-component.component.ts");
/* harmony import */ var _components_chronicles_list_chronicles_year_component_chronicles_month_component_chronicles_day_component_chronicles_note_component_chronicles_note_component_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-day-component/chronicles-note-component/chronicles-note-component.component */ "./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-day-component/chronicles-note-component/chronicles-note-component.component.ts");
/* harmony import */ var _components_chronicles_add_new_component_chronicles_add_new_component_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/chronicles-add-new-component/chronicles-add-new-component.component */ "./src/components/chronicles-add-new-component/chronicles-add-new-component.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_chronicles_list_chronicles_list_component__WEBPACK_IMPORTED_MODULE_9__["ChroniclesListComponent"],
                _components_chronicles_list_chronicles_year_component_chronicles_year_component_component__WEBPACK_IMPORTED_MODULE_10__["ChroniclesYearComponentComponent"],
                _components_chronicles_list_chronicles_year_component_chronicles_month_component_chronicles_month_component_component__WEBPACK_IMPORTED_MODULE_11__["ChroniclesMonthComponentComponent"],
                _components_chronicles_list_chronicles_year_component_chronicles_month_component_chronicles_day_component_chronicles_day_component_component__WEBPACK_IMPORTED_MODULE_12__["ChroniclesDayComponentComponent"],
                _components_chronicles_list_chronicles_year_component_chronicles_month_component_chronicles_day_component_chronicles_note_component_chronicles_note_component_component__WEBPACK_IMPORTED_MODULE_13__["ChroniclesNoteComponentComponent"],
                _components_chronicles_add_new_component_chronicles_add_new_component_component__WEBPACK_IMPORTED_MODULE_14__["ChroniclesAddNewComponentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/components/chronicles-add-new-component/chronicles-add-new-component.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/components/chronicles-add-new-component/chronicles-add-new-component.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"button\" class=\"add-new\" (click)=\"onAddNew()\" [value]=\"value\"/>\n"

/***/ }),

/***/ "./src/components/chronicles-add-new-component/chronicles-add-new-component.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/components/chronicles-add-new-component/chronicles-add-new-component.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9jaHJvbmljbGVzLWFkZC1uZXctY29tcG9uZW50L2Nocm9uaWNsZXMtYWRkLW5ldy1jb21wb25lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/components/chronicles-add-new-component/chronicles-add-new-component.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/components/chronicles-add-new-component/chronicles-add-new-component.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ChroniclesAddNewComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChroniclesAddNewComponentComponent", function() { return ChroniclesAddNewComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChroniclesAddNewComponentComponent = /** @class */ (function () {
    function ChroniclesAddNewComponentComponent() {
        this.addNew = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ChroniclesAddNewComponentComponent.prototype.ngOnInit = function () {
    };
    ChroniclesAddNewComponentComponent.prototype.onAddNew = function () {
        this.addNew.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ChroniclesAddNewComponentComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChroniclesAddNewComponentComponent.prototype, "addNew", void 0);
    ChroniclesAddNewComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chronicles-add-new-component',
            template: __webpack_require__(/*! ./chronicles-add-new-component.component.html */ "./src/components/chronicles-add-new-component/chronicles-add-new-component.component.html"),
            styles: [__webpack_require__(/*! ./chronicles-add-new-component.component.scss */ "./src/components/chronicles-add-new-component/chronicles-add-new-component.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChroniclesAddNewComponentComponent);
    return ChroniclesAddNewComponentComponent;
}());



/***/ }),

/***/ "./src/components/chronicles-list/chronicles-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/components/chronicles-list/chronicles-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chronicles-add-new-component (addNew)=\"addNew($event)\" [value]=\"'Add year'\"></app-chronicles-add-new-component>\n\n<ul>\n  <li *ngFor=\"let year of years\">\n    <app-chronicles-year-component [year]=\"year\" (newYearAdded)=\"onYearAdded()\" [allYears]=\"years\"></app-chronicles-year-component>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/components/chronicles-list/chronicles-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/components/chronicles-list/chronicles-list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9jaHJvbmljbGVzLWxpc3QvY2hyb25pY2xlcy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/components/chronicles-list/chronicles-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/components/chronicles-list/chronicles-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ChroniclesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChroniclesListComponent", function() { return ChroniclesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_services_chronicles_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/chronicles-storage.service */ "./src/services/chronicles-storage.service.ts");
/* harmony import */ var src_models_year_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/year.model */ "./src/models/year.model.ts");





var ChroniclesListComponent = /** @class */ (function () {
    function ChroniclesListComponent(db, firebaseService) {
        this.db = db;
        this.firebaseService = firebaseService;
    }
    ChroniclesListComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.firebaseService.getAll()];
                    case 1:
                        _a.years = _b.sent();
                        if (!this.years)
                            this.years = [];
                        this.sort();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChroniclesListComponent.prototype.addNew = function () {
        var newYear = new src_models_year_model__WEBPACK_IMPORTED_MODULE_4__["Year"]();
        newYear.isEditing = true;
        if (this.years)
            this.years.unshift(newYear);
    };
    ChroniclesListComponent.prototype.onYearAdded = function () {
        this.sort();
        return false;
    };
    ChroniclesListComponent.prototype.sort = function () {
        this.years.sort(function (x, y) { return y.id - x.id; });
    };
    ChroniclesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chronicles-list',
            template: __webpack_require__(/*! ./chronicles-list.component.html */ "./src/components/chronicles-list/chronicles-list.component.html"),
            styles: [__webpack_require__(/*! ./chronicles-list.component.scss */ "./src/components/chronicles-list/chronicles-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], src_services_chronicles_storage_service__WEBPACK_IMPORTED_MODULE_3__["ChroniclesStorageService"]])
    ], ChroniclesListComponent);
    return ChroniclesListComponent;
}());



/***/ }),

/***/ "./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-day-component/chronicles-day-component.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-day-component/chronicles-day-component.component.html ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!day.isEditing\" class=\"flex\">\n  {{ day.id }}\n  <app-chronicles-add-new-component (addNew)=\"addNewNote($event)\" [value]=\"'Add note'\"></app-chronicles-add-new-component>\n</div>\n<div *ngIf=\"day.isEditing\" class=\"flex\">\n  <select [(ngModel)]=\"newDay\">\n    <option *ngFor=\"let dayOption of days\" [value]=\"dayOption\" >{{dayOption}}</option>\n  </select>\n  <input type=\"button\" value=\"Add\" (click)=\"onDayAdded()\"/>\n</div>\n\n<ul>\n  <li *ngFor=\"let note of day.notes\">\n    <app-chronicles-note-component [note]=\"note\" (newNoteAdded)=\"onNoteAdded()\"></app-chronicles-note-component>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-day-component/chronicles-day-component.component.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-day-component/chronicles-day-component.component.scss ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9jaHJvbmljbGVzLWxpc3QvY2hyb25pY2xlcy15ZWFyLWNvbXBvbmVudC9jaHJvbmljbGVzLW1vbnRoLWNvbXBvbmVudC9jaHJvbmljbGVzLWRheS1jb21wb25lbnQvY2hyb25pY2xlcy1kYXktY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-day-component/chronicles-day-component.component.ts":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-day-component/chronicles-day-component.component.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: ChroniclesDayComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChroniclesDayComponentComponent", function() { return ChroniclesDayComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_models_day_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/day.model */ "./src/models/day.model.ts");
/* harmony import */ var src_models_note_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/note.model */ "./src/models/note.model.ts");
/* harmony import */ var src_services_chronicles_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/chronicles-storage.service */ "./src/services/chronicles-storage.service.ts");





var ChroniclesDayComponentComponent = /** @class */ (function () {
    function ChroniclesDayComponentComponent(storageService) {
        this.storageService = storageService;
        this.newDayAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.days = [];
    }
    ChroniclesDayComponentComponent.prototype.ngOnInit = function () {
        if (!this.day.notes)
            this.day.notes = [];
        this.sort();
        this.refreshDaysCount();
    };
    ChroniclesDayComponentComponent.prototype.addNewNote = function () {
        var newNote = new src_models_note_model__WEBPACK_IMPORTED_MODULE_3__["Note"](this.day);
        newNote.isEditing = true;
        newNote.id = this.day.notes && this.day.notes.length ? this.day.notes.reduce(function (max, day) { return day.id > max ? day.id : max; }, 0) + 1 : 0;
        this.day.notes.push(newNote);
        return false;
    };
    ChroniclesDayComponentComponent.prototype.onNoteAdded = function () {
        this.sort();
        return false;
    };
    ChroniclesDayComponentComponent.prototype.onDayAdded = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.addDay(this.day.month.year.id, this.day.month.id, this.newDay)];
                    case 1:
                        _a.sent();
                        this.day.id = this.newDay;
                        this.day.isEditing = false;
                        this.newDayAdded.emit();
                        return [2 /*return*/, false];
                }
            });
        });
    };
    ChroniclesDayComponentComponent.prototype.sort = function () {
        this.day.notes.sort(function (x, y) { return x.id - y.id; });
    };
    ChroniclesDayComponentComponent.prototype.refreshDaysCount = function () {
        var daysCount = new Date(this.day.month.year.id, this.day.month.id + 1, 0).getDate();
        var _loop_1 = function (i) {
            if (!this_1.allDays || !this_1.allDays.find(function (x) { return x.id === i; }))
                this_1.days.push(i);
        };
        var this_1 = this;
        for (var i = daysCount; i > 0; i--) {
            _loop_1(i);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_models_day_model__WEBPACK_IMPORTED_MODULE_2__["Day"])
    ], ChroniclesDayComponentComponent.prototype, "day", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ChroniclesDayComponentComponent.prototype, "allDays", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChroniclesDayComponentComponent.prototype, "newDayAdded", void 0);
    ChroniclesDayComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chronicles-day-component',
            template: __webpack_require__(/*! ./chronicles-day-component.component.html */ "./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-day-component/chronicles-day-component.component.html"),
            styles: [__webpack_require__(/*! ./chronicles-day-component.component.scss */ "./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-day-component/chronicles-day-component.component.scss"), __webpack_require__(/*! ../../../../../styles/app-shared.scss */ "./src/styles/app-shared.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_chronicles_storage_service__WEBPACK_IMPORTED_MODULE_4__["ChroniclesStorageService"]])
    ], ChroniclesDayComponentComponent);
    return ChroniclesDayComponentComponent;
}());



/***/ }),

/***/ "./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-day-component/chronicles-note-component/chronicles-note-component.component.html":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-day-component/chronicles-note-component/chronicles-note-component.component.html ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!note.isEditing\">{{ note.note }}</div>\n<div *ngIf=\"note.isEditing\" class=\"flex\">\n  <textarea rows=\"4\" cols=\"50\" [(ngModel)]=\"note.note\"></textarea>\n  <input type=\"button\" value=\"Add\" (click)=\"onNoteAdded()\"/>\n</div>\n"

/***/ }),

/***/ "./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-day-component/chronicles-note-component/chronicles-note-component.component.scss":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-day-component/chronicles-note-component/chronicles-note-component.component.scss ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9jaHJvbmljbGVzLWxpc3QvY2hyb25pY2xlcy15ZWFyLWNvbXBvbmVudC9jaHJvbmljbGVzLW1vbnRoLWNvbXBvbmVudC9jaHJvbmljbGVzLWRheS1jb21wb25lbnQvY2hyb25pY2xlcy1ub3RlLWNvbXBvbmVudC9jaHJvbmljbGVzLW5vdGUtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-day-component/chronicles-note-component/chronicles-note-component.component.ts":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-day-component/chronicles-note-component/chronicles-note-component.component.ts ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: ChroniclesNoteComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChroniclesNoteComponentComponent", function() { return ChroniclesNoteComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_models_note_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/note.model */ "./src/models/note.model.ts");
/* harmony import */ var src_services_chronicles_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/chronicles-storage.service */ "./src/services/chronicles-storage.service.ts");




var ChroniclesNoteComponentComponent = /** @class */ (function () {
    function ChroniclesNoteComponentComponent(storageService) {
        this.storageService = storageService;
        this.newNoteAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ChroniclesNoteComponentComponent.prototype.ngOnInit = function () {
    };
    ChroniclesNoteComponentComponent.prototype.onNoteAdded = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.addNote(this.note)];
                    case 1:
                        _a.sent();
                        this.note.isEditing = false;
                        this.newNoteAdded.emit();
                        return [2 /*return*/, false];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_models_note_model__WEBPACK_IMPORTED_MODULE_2__["Note"])
    ], ChroniclesNoteComponentComponent.prototype, "note", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChroniclesNoteComponentComponent.prototype, "newNoteAdded", void 0);
    ChroniclesNoteComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chronicles-note-component',
            template: __webpack_require__(/*! ./chronicles-note-component.component.html */ "./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-day-component/chronicles-note-component/chronicles-note-component.component.html"),
            styles: [__webpack_require__(/*! ./chronicles-note-component.component.scss */ "./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-day-component/chronicles-note-component/chronicles-note-component.component.scss"), __webpack_require__(/*! ../../../../../../styles/app-shared.scss */ "./src/styles/app-shared.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_chronicles_storage_service__WEBPACK_IMPORTED_MODULE_3__["ChroniclesStorageService"]])
    ], ChroniclesNoteComponentComponent);
    return ChroniclesNoteComponentComponent;
}());



/***/ }),

/***/ "./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-month-component.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-month-component.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex\" *ngIf=\"!month.isEditing\">\n  {{ monthsService.getMonthTitleByNumber(month.id) }}\n  <app-chronicles-add-new-component (addNew)=\"addNewDay($event)\" [value]=\"'Add day'\"></app-chronicles-add-new-component>\n</div>\n<div *ngIf=\"month.isEditing\" class=\"flex\">\n  <select [(ngModel)]=\"newMonth\">\n    <option *ngFor=\"let monthOption of months\" [value]=\"monthOption.id\" >{{monthOption.title}}</option>\n  </select>\n  <input type=\"button\" value=\"Add\" (click)=\"onMonthAdded()\"/>\n</div>\n\n<ul>\n  <li *ngFor=\"let day of month.days\">\n    <app-chronicles-day-component [day]=\"day\" (newDayAdded)=\"onDayAdded()\" [allDays]=\"month.days\"></app-chronicles-day-component>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-month-component.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-month-component.component.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9jaHJvbmljbGVzLWxpc3QvY2hyb25pY2xlcy15ZWFyLWNvbXBvbmVudC9jaHJvbmljbGVzLW1vbnRoLWNvbXBvbmVudC9jaHJvbmljbGVzLW1vbnRoLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-month-component.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-month-component.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: ChroniclesMonthComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChroniclesMonthComponentComponent", function() { return ChroniclesMonthComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_models_month_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/month.model */ "./src/models/month.model.ts");
/* harmony import */ var src_services_chronicles_months_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/chronicles-months.service */ "./src/services/chronicles-months.service.ts");
/* harmony import */ var src_services_chronicles_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/chronicles-storage.service */ "./src/services/chronicles-storage.service.ts");
/* harmony import */ var src_models_day_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/day.model */ "./src/models/day.model.ts");






var ChroniclesMonthComponentComponent = /** @class */ (function () {
    function ChroniclesMonthComponentComponent(monthsService, storageService) {
        this.monthsService = monthsService;
        this.storageService = storageService;
        this.newMonthAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.months = [];
    }
    ChroniclesMonthComponentComponent.prototype.ngOnInit = function () {
        if (!this.month.days)
            this.month.days = [];
        this.sort();
        this.refreshMonthsList();
    };
    ChroniclesMonthComponentComponent.prototype.onMonthAdded = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.addMonth(this.month.year.id, this.newMonth)];
                    case 1:
                        _a.sent();
                        this.month.id = this.newMonth;
                        this.month.isEditing = false;
                        this.newMonthAdded.emit();
                        return [2 /*return*/, false];
                }
            });
        });
    };
    ChroniclesMonthComponentComponent.prototype.onDayAdded = function () {
        this.sort();
        return false;
    };
    ChroniclesMonthComponentComponent.prototype.addNewDay = function () {
        var newDay = new src_models_day_model__WEBPACK_IMPORTED_MODULE_5__["Day"](this.month);
        newDay.isEditing = true;
        this.month.days.unshift(newDay);
    };
    ChroniclesMonthComponentComponent.prototype.sort = function () {
        this.month.days.sort(function (x, y) { return y.id - x.id; });
    };
    ChroniclesMonthComponentComponent.prototype.refreshMonthsList = function () {
        var _loop_1 = function (i) {
            if (!this_1.allMonths || !this_1.allMonths.find(function (x) { return x.id === i; })) {
                this_1.months.push({ id: i, title: this_1.monthsService.getMonthTitleByNumber(i) });
            }
        };
        var this_1 = this;
        for (var i = 11; i >= 0; i--) {
            _loop_1(i);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_models_month_model__WEBPACK_IMPORTED_MODULE_2__["Month"])
    ], ChroniclesMonthComponentComponent.prototype, "month", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ChroniclesMonthComponentComponent.prototype, "allMonths", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChroniclesMonthComponentComponent.prototype, "newMonthAdded", void 0);
    ChroniclesMonthComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chronicles-month-component',
            template: __webpack_require__(/*! ./chronicles-month-component.component.html */ "./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-month-component.component.html"),
            styles: [__webpack_require__(/*! ./chronicles-month-component.component.scss */ "./src/components/chronicles-list/chronicles-year-component/chronicles-month-component/chronicles-month-component.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_chronicles_months_service__WEBPACK_IMPORTED_MODULE_3__["ChroniclesMonthsService"], src_services_chronicles_storage_service__WEBPACK_IMPORTED_MODULE_4__["ChroniclesStorageService"]])
    ], ChroniclesMonthComponentComponent);
    return ChroniclesMonthComponentComponent;
}());



/***/ }),

/***/ "./src/components/chronicles-list/chronicles-year-component/chronicles-year-component.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/components/chronicles-list/chronicles-year-component/chronicles-year-component.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex\" *ngIf=\"!year.isEditing\">\n  {{ year.id }}\n  <app-chronicles-add-new-component (addNew)=\"addNewMonth($event)\" [value]=\"'Add month'\"></app-chronicles-add-new-component>\n</div>\n<div *ngIf=\"year.isEditing\" class=\"flex\">\n  <select [(ngModel)]=\"newYear\">\n    <option *ngFor=\"let yearOption of years\" [value]=\"yearOption\" >{{yearOption}}</option>\n  </select>\n  <input type=\"button\" value=\"Add\" (click)=\"onYearAdded()\"/>\n</div>\n\n<ul>\n  <li *ngFor=\"let month of year.months\">\n    <app-chronicles-month-component [month]=\"month\" (newMonthAdded)=\"onMonthAdded()\" [allMonths]=\"year.months\"></app-chronicles-month-component>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/components/chronicles-list/chronicles-year-component/chronicles-year-component.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/components/chronicles-list/chronicles-year-component/chronicles-year-component.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9jaHJvbmljbGVzLWxpc3QvY2hyb25pY2xlcy15ZWFyLWNvbXBvbmVudC9jaHJvbmljbGVzLXllYXItY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/components/chronicles-list/chronicles-year-component/chronicles-year-component.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/components/chronicles-list/chronicles-year-component/chronicles-year-component.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ChroniclesYearComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChroniclesYearComponentComponent", function() { return ChroniclesYearComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_models_year_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/year.model */ "./src/models/year.model.ts");
/* harmony import */ var src_services_chronicles_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/chronicles-storage.service */ "./src/services/chronicles-storage.service.ts");
/* harmony import */ var src_models_month_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/month.model */ "./src/models/month.model.ts");





var ChroniclesYearComponentComponent = /** @class */ (function () {
    function ChroniclesYearComponentComponent(storageService) {
        this.storageService = storageService;
        this.newYearAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.years = [];
    }
    ChroniclesYearComponentComponent.prototype.ngOnInit = function () {
        if (!this.year.months)
            this.year.months = [];
        this.sort();
        var now = new Date();
        var _loop_1 = function (i) {
            if (!this_1.allYears || !this_1.allYears.find(function (x) { return x.id === i; }))
                this_1.years.push(i);
        };
        var this_1 = this;
        for (var i = now.getFullYear(); i >= 2000; i--) {
            _loop_1(i);
        }
    };
    ChroniclesYearComponentComponent.prototype.onYearAdded = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.addYear(this.newYear)];
                    case 1:
                        _a.sent();
                        this.year.id = this.newYear;
                        this.year.isEditing = false;
                        this.newYearAdded.emit();
                        return [2 /*return*/, false];
                }
            });
        });
    };
    ChroniclesYearComponentComponent.prototype.onMonthAdded = function () {
        this.sort();
        return false;
    };
    ChroniclesYearComponentComponent.prototype.addNewMonth = function () {
        var newMonth = new src_models_month_model__WEBPACK_IMPORTED_MODULE_4__["Month"](this.year);
        newMonth.isEditing = true;
        this.year.months.unshift(newMonth);
    };
    ChroniclesYearComponentComponent.prototype.sort = function () {
        this.year.months.sort(function (x, y) { return y.id - x.id; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_models_year_model__WEBPACK_IMPORTED_MODULE_2__["Year"])
    ], ChroniclesYearComponentComponent.prototype, "year", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ChroniclesYearComponentComponent.prototype, "allYears", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChroniclesYearComponentComponent.prototype, "newYearAdded", void 0);
    ChroniclesYearComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chronicles-year-component',
            template: __webpack_require__(/*! ./chronicles-year-component.component.html */ "./src/components/chronicles-list/chronicles-year-component/chronicles-year-component.component.html"),
            styles: [__webpack_require__(/*! ./chronicles-year-component.component.scss */ "./src/components/chronicles-list/chronicles-year-component/chronicles-year-component.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_chronicles_storage_service__WEBPACK_IMPORTED_MODULE_3__["ChroniclesStorageService"]])
    ], ChroniclesYearComponentComponent);
    return ChroniclesYearComponentComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAd1hS2AeDilqlA8MiLmkVylZcxHD9StkM',
        authDomain: 'letopis-b389c.firebaseapp.com',
        databaseURL: 'https://letopis-b389c.firebaseio.com',
        projectId: 'letopis-b389c',
        storageBucket: 'letopis-b389c.appspot.com',
        messagingSenderId: '175933791911'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/models/day.model.ts":
/*!*********************************!*\
  !*** ./src/models/day.model.ts ***!
  \*********************************/
/*! exports provided: Day */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Day", function() { return Day; });
var Day = /** @class */ (function () {
    function Day(month) {
        this.month = month;
    }
    return Day;
}());



/***/ }),

/***/ "./src/models/month.model.ts":
/*!***********************************!*\
  !*** ./src/models/month.model.ts ***!
  \***********************************/
/*! exports provided: Month */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Month", function() { return Month; });
var Month = /** @class */ (function () {
    function Month(year) {
        this.year = year;
    }
    return Month;
}());



/***/ }),

/***/ "./src/models/note.model.ts":
/*!**********************************!*\
  !*** ./src/models/note.model.ts ***!
  \**********************************/
/*! exports provided: Note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
var Note = /** @class */ (function () {
    function Note(day) {
        this.day = day;
    }
    return Note;
}());



/***/ }),

/***/ "./src/models/year.model.ts":
/*!**********************************!*\
  !*** ./src/models/year.model.ts ***!
  \**********************************/
/*! exports provided: Year */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Year", function() { return Year; });
var Year = /** @class */ (function () {
    function Year() {
    }
    return Year;
}());



/***/ }),

/***/ "./src/services/chronicles-months.service.ts":
/*!***************************************************!*\
  !*** ./src/services/chronicles-months.service.ts ***!
  \***************************************************/
/*! exports provided: ChroniclesMonthsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChroniclesMonthsService", function() { return ChroniclesMonthsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChroniclesMonthsService = /** @class */ (function () {
    function ChroniclesMonthsService() {
    }
    ChroniclesMonthsService.prototype.getMonthTitleByNumber = function (id) {
        var date = new Date(2000, id);
        return date.toLocaleString('default', { month: 'long' });
    };
    ChroniclesMonthsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChroniclesMonthsService);
    return ChroniclesMonthsService;
}());



/***/ }),

/***/ "./src/services/chronicles-storage.service.ts":
/*!****************************************************!*\
  !*** ./src/services/chronicles-storage.service.ts ***!
  \****************************************************/
/*! exports provided: ChroniclesStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChroniclesStorageService", function() { return ChroniclesStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_models_year_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/year.model */ "./src/models/year.model.ts");
/* harmony import */ var src_models_month_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/month.model */ "./src/models/month.model.ts");
/* harmony import */ var src_models_day_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/day.model */ "./src/models/day.model.ts");
/* harmony import */ var src_models_note_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/models/note.model */ "./src/models/note.model.ts");







var ChroniclesStorageService = /** @class */ (function () {
    function ChroniclesStorageService(db) {
        this.db = db;
        this.yearsCollectionName = '/years';
        this.monthsCollectionName = '/months';
        this.daysCollectionName = '/days';
        this.notesCollectionName = '/notes';
    }
    ChroniclesStorageService.prototype.getAll = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getYears()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChroniclesStorageService.prototype.addNote = function (note) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var day, month, year;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        day = note.day;
                        month = day.month;
                        year = month.year;
                        return [4 /*yield*/, this.db
                                .collection(this.yearsCollectionName).doc(year.id.toString())
                                .collection(this.monthsCollectionName).doc(month.id.toString())
                                .collection(this.daysCollectionName).doc(day.id.toString())
                                .collection(this.notesCollectionName).doc(note.id.toString())
                                .set({
                                note: note.note
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChroniclesStorageService.prototype.addYear = function (year) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.db.collection(this.yearsCollectionName).doc(year.toString()).set({})];
            });
        });
    };
    ChroniclesStorageService.prototype.addMonth = function (year, month) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getMonthDocumentOfYear(year, month).set({})];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChroniclesStorageService.prototype.addDay = function (year, month, day) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDayDocumentOfMonthAndYear(year, month, day).set({})];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChroniclesStorageService.prototype.getMonthDocumentOfYear = function (year, month) {
        return this.db
            .collection(this.yearsCollectionName).doc(year.toString())
            .collection(this.monthsCollectionName).doc(month.toString());
    };
    ChroniclesStorageService.prototype.getDayDocumentOfMonthAndYear = function (year, month, day) {
        return this.getMonthDocumentOfYear(year, month)
            .collection(this.daysCollectionName).doc(day.toString());
    };
    ChroniclesStorageService.prototype.getYears = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var years, collection, i, year, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        years = [];
                        return [4 /*yield*/, this.db.collection(this.yearsCollectionName).get().toPromise()];
                    case 1:
                        collection = _b.sent();
                        i = 0;
                        _b.label = 2;
                    case 2:
                        if (!(i < collection.docs.length)) return [3 /*break*/, 5];
                        year = new src_models_year_model__WEBPACK_IMPORTED_MODULE_3__["Year"]();
                        year.id = +collection.docs[i].id;
                        _a = year;
                        return [4 /*yield*/, this.getMonths(collection.docs[i], year)];
                    case 3:
                        _a.months = _b.sent();
                        years.push(year);
                        _b.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, years];
                }
            });
        });
    };
    ChroniclesStorageService.prototype.getMonths = function (year, yearRef) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var months, collection, i, month, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        months = [];
                        return [4 /*yield*/, year.ref.collection(this.monthsCollectionName).get()];
                    case 1:
                        collection = _b.sent();
                        i = 0;
                        _b.label = 2;
                    case 2:
                        if (!(i < collection.docs.length)) return [3 /*break*/, 5];
                        month = new src_models_month_model__WEBPACK_IMPORTED_MODULE_4__["Month"](yearRef);
                        month.id = +collection.docs[i].id;
                        _a = month;
                        return [4 /*yield*/, this.getDays(collection.docs[i], month)];
                    case 3:
                        _a.days = _b.sent();
                        months.push(month);
                        _b.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, months];
                }
            });
        });
    };
    ChroniclesStorageService.prototype.getDays = function (month, monthRef) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var days, collection, i, day, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        days = [];
                        return [4 /*yield*/, month.ref.collection(this.daysCollectionName).get()];
                    case 1:
                        collection = _b.sent();
                        i = 0;
                        _b.label = 2;
                    case 2:
                        if (!(i < collection.docs.length)) return [3 /*break*/, 5];
                        day = new src_models_day_model__WEBPACK_IMPORTED_MODULE_5__["Day"](monthRef);
                        day.id = +collection.docs[i].id;
                        _a = day;
                        return [4 /*yield*/, this.getNotes(collection.docs[i], day)];
                    case 3:
                        _a.notes = _b.sent();
                        days.push(day);
                        _b.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, days];
                }
            });
        });
    };
    ChroniclesStorageService.prototype.getNotes = function (day, dayRef) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var notes;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        notes = [];
                        return [4 /*yield*/, day.ref.collection(this.notesCollectionName).get().then(function (querySnapshot) {
                                querySnapshot.forEach(function (doc) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                    var note;
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        note = new src_models_note_model__WEBPACK_IMPORTED_MODULE_6__["Note"](dayRef);
                                        note.id = +doc.id;
                                        note.note = doc.data().note;
                                        notes.push(note);
                                        return [2 /*return*/];
                                    });
                                }); });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, notes];
                }
            });
        });
    };
    ChroniclesStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], ChroniclesStorageService);
    return ChroniclesStorageService;
}());



/***/ }),

/***/ "./src/styles/app-shared.scss":
/*!************************************!*\
  !*** ./src/styles/app-shared.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvQzpcXFVzZXJzXFxOaWtvbGF5X0ZpbGF0b3ZcXHNvdXJjZVxccmVwb3NcXGNocm9uaWNsZXMtdXBkYXRlci9zcmNcXHN0eWxlc1xcYXBwLXNoYXJlZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9zdHlsZXMvYXBwLXNoYXJlZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nikolay_Filatov\source\repos\chronicles-updater\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map