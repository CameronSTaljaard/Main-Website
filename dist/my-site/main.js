(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Yuuki\OneDrive\Desktop\Main-Website\src\main.ts */"zUnb");


/***/ }),

/***/ "Ar6i":
/*!************************************************!*\
  !*** ./src/app/pages/page1/page1.component.ts ***!
  \************************************************/
/*! exports provided: Page1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1Component", function() { return Page1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Page1Component {
    constructor() { }
    ngOnInit() {
    }
}
Page1Component.ɵfac = function Page1Component_Factory(t) { return new (t || Page1Component)(); };
Page1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page1Component, selectors: [["app-page1"]], decls: 9, vars: 0, consts: [[1, "page-content"], [1, "container-fluid"], [1, "row"], [1, "form-group", "col-md-12"]], template: function Page1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Page contents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Page 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding-left: 0px;\n  padding-top: 20px;\n  overflow-x: hidden;\n}\n.page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 20px 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwYWdlMS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RUFBQTtBQUVBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUtBLGtCQUFBO0FBSkY7QUFDRTtFQUNFLGtCQUFBO0FBQ0oiLCJmaWxlIjoicGFnZTEuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tcGFnZS1jb250ZW50LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi5wYWdlLXdyYXBwZXIgLnBhZ2UtY29udGVudFxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG4gIHdpZHRoOiAxMDAlXHJcbiAgcGFkZGluZy1sZWZ0OiAwcHhcclxuICBwYWRkaW5nLXRvcDogMjBweFxyXG5cclxuICA+IGRpdlxyXG4gICAgcGFkZGluZzogMjBweCA0MHB4XHJcblxyXG4gIG92ZXJmbG93LXg6IGhpZGRlbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page1',
                templateUrl: './page1.component.html',
                styleUrls: ['./page1.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false
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

/***/ "M79O":
/*!*************************************************************!*\
  !*** ./src/app/components/main-body/main-body.component.ts ***!
  \*************************************************************/
/*! exports provided: MainBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBodyComponent", function() { return MainBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MainBodyComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainBodyComponent.ɵfac = function MainBodyComponent_Factory(t) { return new (t || MainBodyComponent)(); };
MainBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainBodyComponent, selectors: [["app-main-body"]], decls: 9, vars: 0, consts: [[1, "page-content"], [1, "container-fluid"], [1, "row"], [1, "form-group", "col-md-12"]], template: function MainBodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Page contents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "One day I'll actually have content here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding-left: 0px;\n  padding-top: 20px;\n  overflow-x: hidden;\n}\n.page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 20px 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYWluLWJvZHkuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUVBQUE7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFLQSxrQkFBQTtBQUpGO0FBQ0U7RUFDRSxrQkFBQTtBQUNKIiwiZmlsZSI6Im1haW4tYm9keS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1wYWdlLWNvbnRlbnQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLnBhZ2Utd3JhcHBlciAucGFnZS1jb250ZW50XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbiAgd2lkdGg6IDEwMCVcclxuICBwYWRkaW5nLWxlZnQ6IDBweFxyXG4gIHBhZGRpbmctdG9wOiAyMHB4XHJcblxyXG4gID4gZGl2XHJcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHhcclxuXHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainBodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-body',
                templateUrl: './main-body.component.html',
                styleUrls: ['./main-body.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'my-site';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], null, null); })();


/***/ }),

/***/ "XgbT":
/*!************************************************!*\
  !*** ./src/app/pages/page2/page2.component.ts ***!
  \************************************************/
/*! exports provided: Page2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Component", function() { return Page2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Page2Component {
    constructor() { }
    ngOnInit() {
    }
}
Page2Component.ɵfac = function Page2Component_Factory(t) { return new (t || Page2Component)(); };
Page2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page2Component, selectors: [["app-page2"]], decls: 9, vars: 0, consts: [[1, "page-content"], [1, "container-fluid"], [1, "row"], [1, "form-group", "col-md-12"]], template: function Page2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Page contents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Page 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding-left: 0px;\n  padding-top: 20px;\n  overflow-x: hidden;\n}\n.page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 20px 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwYWdlMi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RUFBQTtBQUVBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUtBLGtCQUFBO0FBSkY7QUFDRTtFQUNFLGtCQUFBO0FBQ0oiLCJmaWxlIjoicGFnZTIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tcGFnZS1jb250ZW50LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi5wYWdlLXdyYXBwZXIgLnBhZ2UtY29udGVudFxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG4gIHdpZHRoOiAxMDAlXHJcbiAgcGFkZGluZy1sZWZ0OiAwcHhcclxuICBwYWRkaW5nLXRvcDogMjBweFxyXG5cclxuICA+IGRpdlxyXG4gICAgcGFkZGluZzogMjBweCA0MHB4XHJcblxyXG4gIG92ZXJmbG93LXg6IGhpZGRlbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page2',
                templateUrl: './page2.component.html',
                styleUrls: ['./page2.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _components_main_body_main_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-body/main-body.component */ "M79O");
/* harmony import */ var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/sidebar.service */ "vjQU");
/* harmony import */ var _pages_page1_page1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page1/page1.component */ "Ar6i");
/* harmony import */ var _pages_page2_page2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page2/page2.component */ "XgbT");
/* harmony import */ var _pages_page3_page3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/page3/page3.component */ "w0yg");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_sidebar_service__WEBPACK_IMPORTED_MODULE_6__["SidebarService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_main_body_main_body_component__WEBPACK_IMPORTED_MODULE_5__["MainBodyComponent"],
        _pages_page1_page1_component__WEBPACK_IMPORTED_MODULE_7__["Page1Component"],
        _pages_page2_page2_component__WEBPACK_IMPORTED_MODULE_8__["Page2Component"],
        _pages_page3_page3_component__WEBPACK_IMPORTED_MODULE_9__["Page3Component"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _components_main_body_main_body_component__WEBPACK_IMPORTED_MODULE_5__["MainBodyComponent"],
                    _pages_page1_page1_component__WEBPACK_IMPORTED_MODULE_7__["Page1Component"],
                    _pages_page2_page2_component__WEBPACK_IMPORTED_MODULE_8__["Page2Component"],
                    _pages_page3_page3_component__WEBPACK_IMPORTED_MODULE_9__["Page3Component"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [_services_sidebar_service__WEBPACK_IMPORTED_MODULE_6__["SidebarService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_main_body_main_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main-body/main-body.component */ "M79O");
/* harmony import */ var _pages_page1_page1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page1/page1.component */ "Ar6i");
/* harmony import */ var _pages_page2_page2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page2/page2.component */ "XgbT");
/* harmony import */ var _pages_page3_page3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page3/page3.component */ "w0yg");








const routes = [
    { path: '', component: _components_main_body_main_body_component__WEBPACK_IMPORTED_MODULE_2__["MainBodyComponent"] },
    { path: 'page1', component: _pages_page1_page1_component__WEBPACK_IMPORTED_MODULE_3__["Page1Component"] },
    { path: 'page2', component: _pages_page2_page2_component__WEBPACK_IMPORTED_MODULE_4__["Page2Component"] },
    { path: 'page3', component: _pages_page3_page3_component__WEBPACK_IMPORTED_MODULE_5__["Page3Component"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vjQU":
/*!*********************************************!*\
  !*** ./src/app/services/sidebar.service.ts ***!
  \*********************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SidebarService {
    constructor() { }
}
SidebarService.ɵfac = function SidebarService_Factory(t) { return new (t || SidebarService)(); };
SidebarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SidebarService, factory: SidebarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "w0yg":
/*!************************************************!*\
  !*** ./src/app/pages/page3/page3.component.ts ***!
  \************************************************/
/*! exports provided: Page3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page3Component", function() { return Page3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Page3Component {
    constructor() { }
    ngOnInit() {
    }
}
Page3Component.ɵfac = function Page3Component_Factory(t) { return new (t || Page3Component)(); };
Page3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page3Component, selectors: [["app-page3"]], decls: 9, vars: 0, consts: [[1, "page-content"], [1, "container-fluid"], [1, "row"], [1, "form-group", "col-md-12"]], template: function Page3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Page contents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Page 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding-left: 0px;\n  padding-top: 20px;\n  overflow-x: hidden;\n}\n.page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 20px 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwYWdlMy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RUFBQTtBQUVBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUtBLGtCQUFBO0FBSkY7QUFDRTtFQUNFLGtCQUFBO0FBQ0oiLCJmaWxlIjoicGFnZTMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tcGFnZS1jb250ZW50LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi5wYWdlLXdyYXBwZXIgLnBhZ2UtY29udGVudFxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG4gIHdpZHRoOiAxMDAlXHJcbiAgcGFkZGluZy1sZWZ0OiAwcHhcclxuICBwYWRkaW5nLXRvcDogMjBweFxyXG5cclxuICA+IGRpdlxyXG4gICAgcGFkZGluZzogMjBweCA0MHB4XHJcblxyXG4gIG92ZXJmbG93LXg6IGhpZGRlbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page3',
                templateUrl: './page3.component.html',
                styleUrls: ['./page3.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function HeaderComponent_ul_27_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_27_Template_a_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.navigateToPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Item 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_27_Template_a_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.navigateToPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Item 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_27_Template_a_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.navigateToPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Item 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.dashboardDropped = false;
    }
    toggleVisibility(event) {
        this.dashboardDropped = !this.dashboardDropped;
    }
    navigateToPage(event) {
        let elementId = event.target.id;
        let page = elementId.split('-');
        this.router.navigateByUrl(page[0]);
    }
    ngOnInit() { }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-sidebar"]], decls: 28, vars: 1, consts: [["charset", "utf-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["name", "description", "content", "Responsive sidebar template with sliding effect and dropdown menu based on bootstrap 3"], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"), "integrity", "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", "crossorigin", "anonymous"], ["href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://use.fontawesome.com/releases/v5.0.6/css/all.css"), "rel", "stylesheet"], [1, "page-wrapper", "chiller-theme", "toggled"], ["id", "show-sidebar", "href", "#", 1, "btn", "btn-sm", "btn-dark"], [1, "fas", "fa-bars"], ["id", "sidebar", 1, "sidebar-wrapper"], [1, "sidebar-content"], [1, "sidebar-brand"], ["href", "#"], [1, "sidebar-menu"], [1, "header-menu"], ["role", "button", 3, "click"], [1, "fa", "fa-tachometer-alt"], ["class", "dropdown", 4, "ngIf"], [1, "dropdown"], ["id", "page1-link", 1, "dropdown-item", 3, "click"], ["id", "page2-link", 1, "dropdown-item", 3, "click"], ["id", "page3-link", 1, "dropdown-item", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sidebar template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nav", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cameron Taljaard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_23_listener($event) { return ctx.toggleVisibility($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HeaderComponent_ul_27_Template, 10, 0, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dashboardDropped);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@charset \"UTF-8\";\n\n.page-wrapper[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 265px;\n  -webkit-user-select: none;\n          user-select: none;\n  float: left;\n}\n.page-wrapper[_ngcontent-%COMP%]   .theme[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: inline-block;\n  border-radius: 4px;\n  margin: 2px;\n}\n.page-wrapper[_ngcontent-%COMP%]   .theme.chiller-theme[_ngcontent-%COMP%] {\n  background: #1e2229;\n}\n.page-wrapper.toggled[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\n  left: 0px;\n}\n\n@media screen and (min-width: 768px) {\n  .page-wrapper.toggled[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\n    padding-left: 300px;\n  }\n}\n\n#show-sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 10px;\n  border-radius: 0 4px 4px 0px;\n  width: 35px;\n  transition-delay: 0.3s;\n}\n.page-wrapper.toggled[_ngcontent-%COMP%]   #show-sidebar[_ngcontent-%COMP%] {\n  left: -40px;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%] {\n  width: 260px;\n  height: 100%;\n  max-height: 100%;\n  position: fixed;\n  top: 0;\n  left: -300px;\n  z-index: 999;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.sidebar-content[_ngcontent-%COMP%] {\n  max-height: calc(100% - 30px);\n  height: calc(100% - 30px);\n  overflow-y: auto;\n  position: relative;\n}\n.sidebar-content.desktop[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n}\n\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  display: flex;\n  align-items: center;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: bold;\n  flex-grow: 1;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 20px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow: hidden;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-pic[_ngcontent-%COMP%] {\n  float: left;\n  width: 60px;\n  padding: 2px;\n  border-radius: 12px;\n  margin-right: 15px;\n  overflow: hidden;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  height: 100%;\n  width: 100%;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  float: left;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-top: 4px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 8px;\n  margin-right: 4px;\n  color: #5cb85c;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  padding: 15px 20px 5px 20px;\n  display: inline-block;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  text-decoration: none;\n  position: relative;\n  padding: 8px 30px 8px 20px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  font-size: 12px;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  border-radius: 4px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    > i[_ngcontent-%COMP%]::before {\n  display: inline-block;\n  animation: swing ease-in-out 0.5s 1 alternate;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  content: \"\uF105\";\n  font-style: normal;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  background: 0 0;\n  position: absolute;\n  right: 15px;\n  top: 14px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 5px 0;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left: 25px;\n  font-size: 13px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  content: \"\uF111\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n  font-style: normal;\n  display: inline-block;\n  text-align: center;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin-right: 10px;\n  font-size: 8px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: 8px;\n  margin-left: 5px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: 0px;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\n  transform: rotate(90deg);\n  right: 17px;\n}\n\n\n\n\n.sidebar-footer[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  display: flex;\n}\n.sidebar-footer[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  text-align: center;\n  height: 30px;\n  line-height: 30px;\n  position: relative;\n}\n.sidebar-footer[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n}\n.badge-sonar[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #980303;\n  border-radius: 50%;\n  height: 8px;\n  width: 8px;\n  position: absolute;\n  top: 0;\n}\n.badge-sonar[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: 2px solid #980303;\n  opacity: 0;\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n  animation: sonar 1.5s infinite;\n}\n\n.page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding-left: 0px;\n  padding-top: 20px;\n  overflow-x: hidden;\n}\n.page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 20px 40px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n  height: 7px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-button {\n  width: 0px;\n  height: 0px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #525965;\n  border: 0px none #ffffff;\n  border-radius: 0px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active {\n  background: #525965;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n  border: 0px none #ffffff;\n  border-radius: 50px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track:hover, [_ngcontent-%COMP%]::-webkit-scrollbar-track:active {\n  background: transparent;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background: transparent;\n}\n\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\n  background: #31353D;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%] {\n  border-top: 1px solid #3a3f48;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border-color: transparent;\n  box-shadow: none;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-status[_ngcontent-%COMP%] {\n  color: #818896;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  color: #818896;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #818896;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #818896;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #b8bfce;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #b8bfce;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #b8bfce;\n}\n.page-wrapper.chiller-theme.toggled[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%] {\n  color: #bdbdbd;\n}\n.page-wrapper.chiller-theme.toggled[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before, .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%]:focus    + span[_ngcontent-%COMP%] {\n  color: #16c7ff;\n  text-shadow: 0px 0px 10px rgba(22, 199, 255, 0.5);\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #16c7ff;\n  text-shadow: 0px 0px 10px rgba(22, 199, 255, 0.5);\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background: #3a3f48;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  background: #3a3f48;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6c7b88;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\n  background: #3a3f48;\n  box-shadow: 0px -1px 5px #282c33;\n  border-top: 1px solid #464a52;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:first-child {\n  border-left: none;\n}\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background: #282c33;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWRlYmFyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQixnREFBQTtBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDSTtFQUNFLG1CQUFBO0FBQ047QUFDRTtFQUNFLFNBQUE7QUFDSjtBQUNBLG9EQUFBO0FBRUE7RUFDRTtJQUNFLG1CQUFBO0VBQ0Y7QUFDRjtBQUFBLHVEQUFBO0FBRUE7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQ0E7RUFDRSxXQUFBO0FBRUY7QUFBQSxtREFBQTtBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFFRjtBQUFFO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUVKO0FBQUU7RUFDRSxxQkFBQTtBQUVKO0FBQUEsbURBQUE7QUFFQTtFQUNFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRUY7QUFBRTtFQUNFLGtCQUFBO0FBRUo7QUFBQSwyREFBQTtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDTjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFDTjtBQUNFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNOO0FBQ007RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ1I7QUFDSTtFQUNFLFdBQUE7QUFDTjtBQUNNO0VBQ0UsY0FBQTtBQUNSO0FBQ007RUFDRSxlQUFBO0FBQ1I7QUFDTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBQ1I7QUFDUTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDVjtBQUNFO0VBQ0Usa0JBQUE7QUFDSjtBQUNFO0VBQ0Usb0JBQUE7QUFDSjtBQUNJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtBQUNOO0FBQ0k7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFDTjtBQUNNO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUNNO0VBQ0UscUJBQUE7RUFDQSw2Q0FBQTtBQUNSO0FBRU07RUFDRSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUFSO0FBR1E7RUFDRSxjQUFBO0FBRFY7QUFHUTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQURWO0FBR1U7RUFDRSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQURaO0FBSU07RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRlI7QUFLTTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBSFI7QUFLSTtFQUNFLGFBQUE7QUFITjtBQUtJO0VBQ0Usd0JBQUE7RUFDQSxXQUFBO0FBSE47QUFLQSw0REFBQTtBQUVBLGlFQUFBO0FBRUEsK0RBQUE7QUFFQSx1RUFBQTtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFORjtBQVFFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQVFJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0FBTk47QUFRQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0FBTEY7QUFPRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBTEo7QUFPQSx1RUFBQTtBQUVBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUtBLGtCQUFBO0FBVEY7QUFNRTtFQUNFLGtCQUFBO0FBSko7QUFRQSx5Q0FBQTtBQUVDO0VBQ0MsVUFBQTtFQUNBLFdBQUE7QUFORjtBQVFDO0VBQ0MsVUFBQTtFQUNBLFdBQUE7QUFMRjtBQU9DO0VBQ0MsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FBSkY7QUFNRTtFQUNFLG1CQUFBO0FBSko7QUFNQztFQUNDLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQUhGO0FBS0U7RUFDRSx1QkFBQTtBQUhKO0FBS0M7RUFDQyx1QkFBQTtBQUZGO0FBSUEsK0ZBQUE7QUFHRTtFQUNFLG1CQUFBO0FBSEo7QUFLSTtFQUNFLDZCQUFBO0FBSE47QUFNTTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUFKUjtBQU9NO0VBQ0UsY0FBQTtBQUxSO0FBUU07RUFDRSxjQUFBO0FBTlI7QUFRSTtFQUNFLGNBQUE7QUFOTjtBQVFFO0VBQ0UsY0FBQTtBQU5KO0FBVU07RUFDRSxjQUFBO0FBUlI7QUFVSTtFQUNFLGNBQUE7QUFSTjtBQVVFO0VBQ0UsY0FBQTtBQVJKO0FBVUE7RUFDRSxjQUFBO0FBUEY7QUFTRTtFQUNFLGNBQUE7QUFQSjtBQVdJO0VBQ0UsY0FBQTtFQUNBLGlEQUFBO0FBUk47QUFXTTtFQUNFLGNBQUE7RUFDQSxpREFBQTtBQVRSO0FBV007RUFDRSxtQkFBQTtBQVRSO0FBWU07RUFDRSxtQkFBQTtBQVZSO0FBWUk7RUFDRSxjQUFBO0FBVk47QUFZRTtFQUNFLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQVZKO0FBYU07RUFDRSxpQkFBQTtBQVhSO0FBYU07RUFDRSxrQkFBQTtBQVhSO0FBYUE7RUFDRSxtQkFBQTtBQVZGIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKi0tLS0tLS0tLS0tLS0tLS1wYWdlLXdyYXBwZXItLS0tLS0tLS0tLS0tLS0tICovXG4ucGFnZS13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDI2NXB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ucGFnZS13cmFwcGVyIC50aGVtZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW46IDJweDtcbn1cbi5wYWdlLXdyYXBwZXIgLnRoZW1lLmNoaWxsZXItdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjMWUyMjI5O1xufVxuLnBhZ2Utd3JhcHBlci50b2dnbGVkIC5zaWRlYmFyLXdyYXBwZXIge1xuICBsZWZ0OiAwcHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLXRvZ2dlbGVkIHNpZGViYXItLS0tLS0tLS0tLS0tLS0tICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAucGFnZS13cmFwcGVyLnRvZ2dsZWQgLnBhZ2UtY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMDBweDtcbiAgfVxufVxuLyotLS0tLS0tLS0tLS0tLS0tc2hvdyBzaWRlYmFyIGJ1dHRvbi0tLS0tLS0tLS0tLS0tLS0gKi9cbiNzaG93LXNpZGViYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDBweDtcbiAgd2lkdGg6IDM1cHg7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XG59XG5cbi5wYWdlLXdyYXBwZXIudG9nZ2xlZCAjc2hvdy1zaWRlYmFyIHtcbiAgbGVmdDogLTQwcHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLXNpZGViYXItd3JhcHBlci0tLS0tLS0tLS0tLS0tLS0gKi9cbi5zaWRlYmFyLXdyYXBwZXIge1xuICB3aWR0aDogMjYwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IC0zMDBweDtcbiAgei1pbmRleDogOTk5O1xufVxuLnNpZGViYXItd3JhcHBlciB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLnNpZGViYXItd3JhcHBlciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS1zaWRlYmFyLWNvbnRlbnQtLS0tLS0tLS0tLS0tLS0tICovXG4uc2lkZWJhci1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zaWRlYmFyLWNvbnRlbnQuZGVza3RvcCB7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLXNpZGViYXItYnJhbmQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWJyYW5kIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1icmFuZCA+IGEge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZmxleC1ncm93OiAxO1xufVxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1icmFuZCAjY2xvc2Utc2lkZWJhciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItcGljIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA2MHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyIC51c2VyLXBpYyBpbWcge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyIC51c2VyLWluZm8ge1xuICBmbG9hdDogbGVmdDtcbn1cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyIC51c2VyLWluZm8gPiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1pbmZvIC51c2VyLXJvbGUge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1pbmZvIC51c2VyLXN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItaW5mbyAudXNlci1zdGF0dXMgaSB7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgY29sb3I6ICM1Y2I4NWM7XG59XG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCA+IGRpdiB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5oZWFkZXItbWVudSBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTVweCAyMHB4IDVweCAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA4cHggMzBweCA4cHggMjBweDtcbn1cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhIGkge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpIGE6aG92ZXIgPiBpOjpiZWZvcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGFuaW1hdGlvbjogc3dpbmcgZWFzZS1pbi1vdXQgMC41cyAxIGFsdGVybmF0ZTtcbn1cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biA+IGE6YWZ0ZXIge1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbnRlbnQ6IFwi74SFXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogMCAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDE0cHg7XG59XG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSB1bCB7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgbGkge1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biAuc2lkZWJhci1zdWJtZW51IGxpIGE6YmVmb3JlIHtcbiAgY29udGVudDogXCLvhJFcIjtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogOHB4O1xufVxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpIGEgc3Bhbi5sYWJlbCwgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpIGEgc3Bhbi5iYWRnZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgbGkgYSAuYmFkZ2UsIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biAuc2lkZWJhci1zdWJtZW51IGxpIGEgLmxhYmVsIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItc3VibWVudSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24uYWN0aXZlID4gYTphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgcmlnaHQ6IDE3cHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS1zaWRlYmFyLWhlYWRlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1zaWRlYmFyLXNlYXJjaC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tc2lkZWJhci1tZW51LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXNpZGUtZm9vdGVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uc2lkZWJhci1mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc2lkZWJhci1mb290ZXIgPiBhIHtcbiAgZmxleC1ncm93OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zaWRlYmFyLWZvb3RlciA+IGEgLm5vdGlmaWNhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuXG4uYmFkZ2Utc29uYXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6ICM5ODAzMDM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA4cHg7XG4gIHdpZHRoOiA4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuLmJhZGdlLXNvbmFyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5ODAzMDM7XG4gIG9wYWNpdHk6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYW5pbWF0aW9uOiBzb25hciAxLjVzIGluZmluaXRlO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tcGFnZS1jb250ZW50LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi5wYWdlLXdyYXBwZXIgLnBhZ2UtY29udGVudCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLnBhZ2Utd3JhcHBlciAucGFnZS1jb250ZW50ID4gZGl2IHtcbiAgcGFkZGluZzogMjBweCA0MHB4O1xufVxuXG4vKi0tLS0tLXNjcm9sbCBiYXItLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDdweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM1MjU5NjU7XG4gIGJvcmRlcjogMHB4IG5vbmUgI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciwgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjNTI1OTY1O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMHB4IG5vbmUgI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6aG92ZXIsIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1jaGlsbGVyLXRoZW1lLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICMzMTM1M0Q7XG59XG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciwgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2gsIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjM2EzZjQ4O1xufVxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnUsIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyIC51c2VyLWluZm8gLnVzZXItcm9sZSwgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItaW5mbyAudXNlci1zdGF0dXMge1xuICBjb2xvcjogIzgxODg5Njtcbn1cbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LCAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGNvbG9yOiAjODE4ODk2O1xufVxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1icmFuZCA+IGEsIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhIHtcbiAgY29sb3I6ICM4MTg4OTY7XG59XG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci1mb290ZXIgPiBhIHtcbiAgY29sb3I6ICM4MTg4OTY7XG59XG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGk6aG92ZXIgPiBhLCAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24uYWN0aXZlID4gYSB7XG4gIGNvbG9yOiAjYjhiZmNlO1xufVxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItaW5mbywgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1icmFuZCA+IGE6aG92ZXIge1xuICBjb2xvcjogI2I4YmZjZTtcbn1cbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLWZvb3RlciA+IGE6aG92ZXIgaSB7XG4gIGNvbG9yOiAjYjhiZmNlO1xufVxuXG4ucGFnZS13cmFwcGVyLmNoaWxsZXItdGhlbWUudG9nZ2xlZCAjY2xvc2Utc2lkZWJhciB7XG4gIGNvbG9yOiAjYmRiZGJkO1xufVxuLnBhZ2Utd3JhcHBlci5jaGlsbGVyLXRoZW1lLnRvZ2dsZWQgI2Nsb3NlLXNpZGViYXI6aG92ZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciB1bCBsaTpob3ZlciBhIGksIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSBsaSBhOmhvdmVyOmJlZm9yZSwgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnU6Zm9jdXMgKyBzcGFuIHtcbiAgY29sb3I6ICMxNmM3ZmY7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgyMiwgMTk5LCAyNTUsIDAuNSk7XG59XG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24uYWN0aXZlIGEgaSB7XG4gIGNvbG9yOiAjMTZjN2ZmO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMjIsIDE5OSwgMjU1LCAwLjUpO1xufVxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpIGEgaSwgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIGRpdiB7XG4gIGJhY2tncm91bmQ6ICMzYTNmNDg7XG59XG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCBpbnB1dC5zZWFyY2gtbWVudSwgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggLmlucHV0LWdyb3VwLXRleHQge1xuICBiYWNrZ3JvdW5kOiAjM2EzZjQ4O1xufVxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5oZWFkZXItbWVudSBzcGFuIHtcbiAgY29sb3I6ICM2YzdiODg7XG59XG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjM2EzZjQ4O1xuICBib3gtc2hhZG93OiAwcHggLTFweCA1cHggIzI4MmMzMztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0NjRhNTI7XG59XG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci1mb290ZXIgPiBhOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci1mb290ZXIgPiBhOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzI4MmMzMztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.sass'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map