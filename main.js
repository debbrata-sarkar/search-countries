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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_components_country_info_country_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/components/country-info/country-info.component */ "./src/app/modules/components/country-info/country-info.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'countries', component: _modules_components_country_info_country_info_component__WEBPACK_IMPORTED_MODULE_2__["CountryInfoComponent"] },
    { path: '', redirectTo: 'countries', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-right: auto;\n    margin-left: auto;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.content {\n    margin: 2rem 4rem;\n    overflow-y: auto;\n    flex: 1 1 auto;\n    position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0lBQ2QsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGVudCB7XG4gICAgbWFyZ2luOiAycmVtIDRyZW07XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-header></app-header>\n  <div class=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'infrrd';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules */ "./src/app/modules/index.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
                _modules__WEBPACK_IMPORTED_MODULE_2__["ModulesModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/components/header/header.component.css":
/*!*************************************************************!*\
  !*** ./src/app/core/components/header/header.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: row;\n    padding: 0 2rem;\n    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), \n    0 3px 1px -2px rgba(0,0,0,.2), \n    0 1px 5px 0 rgba(0,0,0,.12);\n    background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQjs7Z0NBRTRCO0lBQzVCLHVCQUF1QjtDQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZzogMCAycmVtO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgXG4gICAgMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIFxuICAgIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/components/header/header.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/components/header/header.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <h2>Infrrd</h2>\n</header>\n"

/***/ }),

/***/ "./src/app/core/components/header/header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/core/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/components/index.ts":
/*!******************************************!*\
  !*** ./src/app/core/components/index.ts ***!
  \******************************************/
/*! exports provided: components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/core/components/header/header.component.ts");

var components = [
    _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"]
];


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/app/core/services/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/app/core/components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
            ],
            providers: _services__WEBPACK_IMPORTED_MODULE_2__["services"].slice(),
            declarations: _components__WEBPACK_IMPORTED_MODULE_3__["components"].slice(),
            exports: _components__WEBPACK_IMPORTED_MODULE_3__["components"].slice()
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: CoreModule, services, HttpApiService, StatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/app/core/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "services", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["services"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpApiService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["HttpApiService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatsService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["StatsService"]; });





/***/ }),

/***/ "./src/app/core/services/http-api.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/http-api.service.ts ***!
  \***************************************************/
/*! exports provided: HttpApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpApiService", function() { return HttpApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpApiService = /** @class */ (function () {
    function HttpApiService(http) {
        this.http = http;
    }
    HttpApiService.prototype.getCountries = function (name) {
        return this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].COUNTRIES_API_URL + "rest/v2/name/" + name);
    };
    HttpApiService.prototype.getCountry = function (name) {
        return this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].COUNTRIES_API_URL + "rest/v2/name/" + name + "?fullText=true");
    };
    HttpApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpApiService);
    return HttpApiService;
}());



/***/ }),

/***/ "./src/app/core/services/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/*! exports provided: services, HttpApiService, StatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var _services_http_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/http-api.service */ "./src/app/core/services/http-api.service.ts");
/* harmony import */ var _services_stats_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/stats.service */ "./src/app/core/services/stats.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpApiService", function() { return _services_http_api_service__WEBPACK_IMPORTED_MODULE_0__["HttpApiService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatsService", function() { return _services_stats_service__WEBPACK_IMPORTED_MODULE_1__["StatsService"]; });



var services = [
    _services_http_api_service__WEBPACK_IMPORTED_MODULE_0__["HttpApiService"],
    _services_stats_service__WEBPACK_IMPORTED_MODULE_1__["StatsService"]
];




/***/ }),

/***/ "./src/app/core/services/stats.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/stats.service.ts ***!
  \************************************************/
/*! exports provided: StatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsService", function() { return StatsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_http_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http-api.service */ "./src/app/core/services/http-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatsService = /** @class */ (function () {
    function StatsService(httpService) {
        this.httpService = httpService;
        this.countries = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.country = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    StatsService.prototype.getCountries = function (name) {
        var _this = this;
        this.httpService.getCountries(name).subscribe(function (data) {
            return _this.countries.next(data);
        });
    };
    ;
    StatsService.prototype.getCountry = function (fullName) {
        var _this = this;
        this.httpService.getCountry(fullName).subscribe(function (data) {
            return _this.country.next(data);
        });
    };
    ;
    StatsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_http_api_service__WEBPACK_IMPORTED_MODULE_2__["HttpApiService"]])
    ], StatsService);
    return StatsService;
}());



/***/ }),

/***/ "./src/app/modules/components/components.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/components/components.module.ts ***!
  \*********************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _country_info_country_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./country-info/country-info.component */ "./src/app/modules/components/country-info/country-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_country_info_country_info_component__WEBPACK_IMPORTED_MODULE_5__["CountryInfoComponent"]],
            imports: [
                _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _core__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            exports: [],
            providers: []
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/modules/components/country-info/country-info.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/components/country-info/country-info.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* SEARCH */\n\n.search {\n    display: flex;\n    flex-direction: row;\n}\n\n.search input {\n    flex: 4;\n    border: none;\n    height: 3rem;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px,\n     rgba(0, 0, 0, 0.12) 0px 1px 4px;\n    padding: 0 2rem; \n}\n\n.search input:focus {\n    outline: none !important;\n}\n\n.search button {\n    border: none;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;\n    font-size: 0.8rem;\n    background: black;\n    color: #fff;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.search button:focus {\n    outline: none !important;\n}\n\n.searched-countries {\n    padding: 1rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    max-height: 200px;\n    overflow-y: auto;\n}\n\n.searched-countries .country {\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;\n    background: #fff;\n    padding: 0 0.5rem;\n    margin: 0 0.5rem 0.5rem 0;\n    border-radius: 10px;\n    display: flex;\n    cursor: pointer;\n}\n\n.searched-countries .country:hover {\n    background: grey;\n}\n\nsection {\n    margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2NvdW50cnktaW5mby9jb3VudHJ5LWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOztBQUVaO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLFFBQVE7SUFDUixhQUFhO0lBQ2IsYUFBYTtJQUNiO3FDQUNpQztJQUNqQyxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSx5QkFBeUI7Q0FDNUI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsNkVBQTZFO0lBQzdFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSx5QkFBeUI7Q0FDNUI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSw2RUFBNkU7SUFDN0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbXBvbmVudHMvY291bnRyeS1pbmZvL2NvdW50cnktaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU0VBUkNIICovXG5cbi5zZWFyY2gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLnNlYXJjaCBpbnB1dCB7XG4gICAgZmxleDogNDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCA2cHgsXG4gICAgIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCA0cHg7XG4gICAgcGFkZGluZzogMCAycmVtOyBcbn1cblxuLnNlYXJjaCBpbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCA0cHg7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VhcmNoIGJ1dHRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoZWQtY291bnRyaWVzIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5zZWFyY2hlZC1jb3VudHJpZXMgLmNvdW50cnkge1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCA0cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICBtYXJnaW46IDAgMC41cmVtIDAuNXJlbSAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWFyY2hlZC1jb3VudHJpZXMgLmNvdW50cnk6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGdyZXk7XG59XG5cbnNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/components/country-info/country-info.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/components/country-info/country-info.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search\">\n  <button><i class=\"material-icons\">search</i></button>\n  <input type=\"text\" id=\"search\" (keyup)=\"getCountryList($event)\" placeholder=\"Search for country name or partial name\" />\n</div>\n\n<section class=\"searched-countries\">\n  <div class=\"country\" (click)=\"showCountryDetails($event,user)\" *ngFor=\"let user of countryList\">\n    <app-search-card [user]=\"user\"></app-search-card>\n  </div>\n</section>\n\n<section class=\"country-details\">\n  <div *ngFor=\"let country of countryDetails\">\n    <app-country-card *ngIf=\"country\" [country]=\"country\"></app-country-card>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/modules/components/country-info/country-info.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/components/country-info/country-info.component.ts ***!
  \***************************************************************************/
/*! exports provided: CountryInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryInfoComponent", function() { return CountryInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_stats_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/stats.service */ "./src/app/core/services/stats.service.ts");
/* harmony import */ var _core_services_http_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/http-api.service */ "./src/app/core/services/http-api.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CountryInfoComponent = /** @class */ (function () {
    function CountryInfoComponent(statsService, httspService) {
        this.statsService = statsService;
        this.httspService = httspService;
        this.countryList = [];
        this.countryDetails = [];
        this.toggleCountryCard = false;
    }
    CountryInfoComponent.prototype.getCountryList = function (event) {
        this.countryList = [];
        var name = event.target.value;
        if (!!name) {
            this.statsService.getCountries(event.target.value);
        }
    };
    CountryInfoComponent.prototype.showCountryDetails = function (event, user) {
        event.stopPropagation();
        this.selectedCountry = user.name;
        if (this.countryDetails.length == 1) {
            var result = confirm("Do you want to overwrite current country details ? Press 'OK' if you want or Press 'CANCEL if you want to keep existing country details!");
            if (result == true) {
                this.countryDetails = [];
                this.statsService.getCountry(user.name.trim());
            }
            else {
                this.statsService.getCountry(user.name.trim());
            }
        }
        else {
            this.statsService.getCountry(user.name.trim());
        }
    };
    CountryInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // GET COUNTRIES
        this.statsService.countries.subscribe(function (data) {
            _this.countryList = [];
            data.forEach(function (c) {
                var flagURL = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].FLAGS_API_URL + c['alpha2Code'] + "/flat/64.png";
                // const countryObj = { 'name': c['name'], 'flag': c['flag'] };
                var countryObj = { 'name': c['name'], 'flag': flagURL };
                _this.countryList.push(countryObj);
            });
        });
        // GET COUNTRY DETAILS
        this.statsService.country.subscribe(function (data) {
            if (!!data[0]) {
                if (_this.countryDetails.length === 2) {
                    _this.countryDetails = [];
                }
                _this.countryDetails.push(data[0]);
            }
        });
    };
    CountryInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country-info',
            template: __webpack_require__(/*! ./country-info.component.html */ "./src/app/modules/components/country-info/country-info.component.html"),
            styles: [__webpack_require__(/*! ./country-info.component.css */ "./src/app/modules/components/country-info/country-info.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services_stats_service__WEBPACK_IMPORTED_MODULE_1__["StatsService"], _core_services_http_api_service__WEBPACK_IMPORTED_MODULE_2__["HttpApiService"]])
    ], CountryInfoComponent);
    return CountryInfoComponent;
}());



/***/ }),

/***/ "./src/app/modules/index.ts":
/*!**********************************!*\
  !*** ./src/app/modules/index.ts ***!
  \**********************************/
/*! exports provided: ModulesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules.module */ "./src/app/modules/modules.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModulesModule", function() { return _modules_module__WEBPACK_IMPORTED_MODULE_0__["ModulesModule"]; });




/***/ }),

/***/ "./src/app/modules/modules.module.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/modules.module.ts ***!
  \*******************************************/
/*! exports provided: ModulesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesModule", function() { return ModulesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/components.module */ "./src/app/modules/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ModulesModule = /** @class */ (function () {
    function ModulesModule() {
    }
    ModulesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
            ],
            declarations: [],
            exports: [
                _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
            ]
        })
    ], ModulesModule);
    return ModulesModule;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>The page you are looking for can not be found</h2>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });




/***/ }),

/***/ "./src/app/shared/layout/country-card/country-card.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/shared/layout/country-card/country-card.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".countryDetails {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    background: #fff;\n    margin-bottom: 0.5rem;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;\n}\n\n.countryDetails > img {\n    width: 500px;\n    height: 200px;\n    margin-right: 1rem;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.countryDetails .details {\n    padding: 0 1rem;\n}\n\n.countryDetails .details h2 {\n    margin-bottom: 0;\n}\n\n.countryDetails .details p {\n    margin: 0.2rem 0 0.1rem 0;\n}\n\n@media only screen and (max-width: 950px) {\n    .countryDetails > img {\n        width: 300px;\n        height: 200px;\n    }\n}\n\n@media only screen and (max-width: 750px) {\n    .countryDetails > img {\n        width: 100%;\n        height: 200px;\n    }\n\n    .countryDetails{\n        flex-direction: column;\n    }\n\n    .countryDetails .details {\n        text-align: center;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dC9jb3VudHJ5LWNhcmQvY291bnRyeS1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLDZFQUE2RTtDQUNoRjs7QUFFRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHFCQUFrQjtPQUFsQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSTtRQUNJLGFBQWE7UUFDYixjQUFjO0tBQ2pCO0NBQ0o7O0FBRUQ7SUFDSTtRQUNJLFlBQVk7UUFDWixjQUFjO0tBQ2pCOztJQUVEO1FBQ0ksdUJBQXVCO0tBQzFCOztJQUVEO1FBQ0ksbUJBQW1CO0tBQ3RCO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbGF5b3V0L2NvdW50cnktY2FyZC9jb3VudHJ5LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3VudHJ5RGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggNHB4O1xufVxuXG4uY291bnRyeURldGFpbHMgPiBpbWcge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmNvdW50cnlEZXRhaWxzIC5kZXRhaWxzIHtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG59XG5cbi5jb3VudHJ5RGV0YWlscyAuZGV0YWlscyBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmNvdW50cnlEZXRhaWxzIC5kZXRhaWxzIHAge1xuICAgIG1hcmdpbjogMC4ycmVtIDAgMC4xcmVtIDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgICAuY291bnRyeURldGFpbHMgPiBpbWcge1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgLmNvdW50cnlEZXRhaWxzID4gaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxuXG4gICAgLmNvdW50cnlEZXRhaWxze1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5jb3VudHJ5RGV0YWlscyAuZGV0YWlscyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/layout/country-card/country-card.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/layout/country-card/country-card.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"countryDetails\">\n  <img src=\"{{country.flag}}\" alt=\"country.name\" />\n  <div class=\"details\" *ngIf=\"country\">\n    <h2>{{country.name}}</h2>\n    <p>Capital: {{country.capital}}</p>\n    <p>Region: {{country.region}}</p>\n    <p>Population: {{country.population}}</p>\n    <p>Area: {{country.area}}</p>\n    <p>Currencies: \n      <span *ngFor=\"let c of country.currencies\">\n        {{c.code}} ({{c.symbol}}) \n        <span *ngIf=\"country.currencies.length > 1\">,&nbsp;</span>\n      </span>\n    </p>\n    <p>Languages: \n      <span *ngFor=\"let l of country.languages\">\n        {{l.name}}\n        <span *ngIf=\"country.languages.length > 1\">,&nbsp;</span>\n      </span>\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/layout/country-card/country-card.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/layout/country-card/country-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: CountryCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryCardComponent", function() { return CountryCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_stats_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/stats.service */ "./src/app/core/services/stats.service.ts");
/* harmony import */ var _core_services_http_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/http-api.service */ "./src/app/core/services/http-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountryCardComponent = /** @class */ (function () {
    function CountryCardComponent(statsService, httspService) {
        this.statsService = statsService;
        this.httspService = httspService;
    }
    CountryCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CountryCardComponent.prototype, "country", void 0);
    CountryCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country-card',
            template: __webpack_require__(/*! ./country-card.component.html */ "./src/app/shared/layout/country-card/country-card.component.html"),
            styles: [__webpack_require__(/*! ./country-card.component.css */ "./src/app/shared/layout/country-card/country-card.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services_stats_service__WEBPACK_IMPORTED_MODULE_1__["StatsService"], _core_services_http_api_service__WEBPACK_IMPORTED_MODULE_2__["HttpApiService"]])
    ], CountryCardComponent);
    return CountryCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/index.ts":
/*!****************************************!*\
  !*** ./src/app/shared/layout/index.ts ***!
  \****************************************/
/*! exports provided: layouts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layouts", function() { return layouts; });
/* harmony import */ var _search_card_search_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-card/search-card.component */ "./src/app/shared/layout/search-card/search-card.component.ts");
/* harmony import */ var _country_card_country_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country-card/country-card.component */ "./src/app/shared/layout/country-card/country-card.component.ts");


var layouts = [
    _search_card_search_card_component__WEBPACK_IMPORTED_MODULE_0__["SearchCardComponent"],
    _country_card_country_card_component__WEBPACK_IMPORTED_MODULE_1__["CountryCardComponent"]
];


/***/ }),

/***/ "./src/app/shared/layout/layout.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/layout/layout.module.ts ***!
  \************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/app/shared/layout/index.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _search_card_search_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-card/search-card.component */ "./src/app/shared/layout/search-card/search-card.component.ts");
/* harmony import */ var _country_card_country_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./country-card/country-card.component */ "./src/app/shared/layout/country-card/country-card.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: _index__WEBPACK_IMPORTED_MODULE_1__["layouts"].concat([
                _search_card_search_card_component__WEBPACK_IMPORTED_MODULE_3__["SearchCardComponent"],
                _country_card_country_card_component__WEBPACK_IMPORTED_MODULE_4__["CountryCardComponent"],
            ]),
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"]
            ],
            exports: _index__WEBPACK_IMPORTED_MODULE_1__["layouts"].slice(),
            providers: []
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/shared/layout/search-card/search-card.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/shared/layout/search-card/search-card.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\nimg {\n    border-radius: 15px;\n    margin-right: 0.2rem;\n}\n\np {\n    float: right;\n    margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dC9zZWFyY2gtY2FyZC9zZWFyY2gtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIscUJBQXFCO0NBQ3hCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLFVBQVU7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvc2VhcmNoLWNhcmQvc2VhcmNoLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMnJlbTtcbn1cblxucCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbjogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/layout/search-card/search-card.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/layout/search-card/search-card.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <img src=\"{{user.flag}}\" alt=\"{{user.name}}\" width=\"40\" height=\"30\" />\n  <p>{{user.name}}</p>\n</div>"

/***/ }),

/***/ "./src/app/shared/layout/search-card/search-card.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/layout/search-card/search-card.component.ts ***!
  \********************************************************************/
/*! exports provided: SearchCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCardComponent", function() { return SearchCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchCardComponent = /** @class */ (function () {
    function SearchCardComponent() {
    }
    SearchCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SearchCardComponent.prototype, "user", void 0);
    SearchCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-card',
            template: __webpack_require__(/*! ./search-card.component.html */ "./src/app/shared/layout/search-card/search-card.component.html"),
            styles: [__webpack_require__(/*! ./search-card.component.css */ "./src/app/shared/layout/search-card/search-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchCardComponent);
    return SearchCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/shared/layout/layout.module.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"],
                _core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]
            ],
            declarations: [],
            exports: [
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"]
            ],
            providers: []
        })
    ], SharedModule);
    return SharedModule;
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
    COUNTRIES_API_URL: "https://restcountries.eu/",
    FLAGS_API_URL: "https://www.countryflags.io/"
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ded/Downloads/infrrd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map