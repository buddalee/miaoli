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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
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

module.exports = ".l-nav {\n  height: 128px;\n}\n.nav {\n  align-items: center;\n}\n.navbar.nav-toggler {\n  margin: 0px 40px 0px 30px ;\n  font-size: 20px;\n  color: #8c0e03;\n  padding: 0;\n  cursor: pointer;\n}\n.mat-drawer {\n  width: 65%;\n}\n.sidenav-container {\n  padding: 50px 0;\n  height: 100%;\n}\n.header-logo {\n  display: inline-block;\n  width: 150px;\n  height: 60px;\n}\n.logo-icon {\n  display: inline-block;\n  vertical-align: middle;\n  width: 100%;\n  height: 100%;\n  background-image: url(\"/assets/logo.svg\");\n  background-position: left center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.nav-logo {\n  width: 140px;\n  height: 39px;\n  display: inline-block;\n}\n.sidenav-list {\n  list-style: none;\n  padding: 0;\n}\n.sidenav-list > li {\n  padding: 15px;\n  text-indent: 15%;\n}\n.nav-list--en {\n  color: #b5b5b5;\n  font-size: 12px;\n}\n.nav-list--en:hover {\n  color: #a0a0a0;\n}\n.nav-list--item {\n  color: #666;\n  font-size: 14px;\n  font-weight: 400;\n  cursor: pointer;\n}\n.nav-list--item:hover {\n  color: #000;\n}\n@media (min-width: 768px) {\n  .header-logo {\n    width: 250px;\n    height: 72px;\n  }\n  .sidenav-list > li {\n    text-indent: 22%;\n  }\n  .navbar.nav-toggler {\n    margin: 0px 0px 0px 50px ;\n    position: absolute;\n  }\n  .nav-logo {\n    margin: 0 auto;\n  }\n}\n@media(min-width: 1440px) {\n  .mat-drawer {\n    width: 270px;\n    background-color: #f9f9f9;\n  }\n  .nav.l-nav {\n    display: none;\n  }\n  .logo-icon {\n    background-image: url(\"/assets/1440-logo.svg\");\n  }\n  .header-logo {\n    width: 140px;\n    height: 149px;\n  }\n  .sidenav-list > li {\n    text-indent: 26%;\n  }\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container (window:resize)=\"onResize($event, sideNav)\" >\n  <mat-sidenav #sideNav opened={{isOpend}} mode={{sideMode}}>\n    <div class=\"sidenav-container\">\n      <div style=\"display: flex;justify-content: center\">\n        <div class=\"header-logo\">\n          <span class=\"logo-icon\">\n            幸福銅鏡\n          </span>\n        </div>        \n      </div>\n\n      \n      <div style=\"margin-top: 74px\">\n        <ul class=\"sidenav-list\">\n          <li class=\"nav-list--item\">首頁 <span class=\"nav-list--en\">Home</span></li>\n          <li class=\"nav-list--item\">關於 <span class=\"nav-list--en\">About</span></li>\n          <li class=\"nav-list--item\">故事 <span class=\"nav-list--en\">Stories</span></li>\n          <li class=\"nav-list--item\">景點 <span class=\"nav-list--en\">Viewpoint</span></li>\n          <li class=\"nav-list--item\">活動 <span class=\"nav-list--en\">Activity</span></li>       \n          <li class=\"nav-list--item\">交通 <span class=\"nav-list--en\">Acces</span></li>          \n          <li class=\"nav-list--item\">預約 <span class=\"nav-list--en\">Reservation</span></li> \n        </ul>       \n      </div>\n\n    </div>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <nav class=\"nav l-nav\">\n      <div class=\"navbar nav-toggler\" (click)=\"sideNav.toggle()\">\n        <span>\n          <i class=\"fa fa-bars fa-1x\"></i>\n        </span>\n      </div>\n      <div class=\"nav-logo\">\n        <span class=\"logo-icon\">\n            幸福銅鏡\n        </span>        \n      </div>\n    </nav>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>"

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
        this.title = 'app';
        this.sideMode = 'over';
        this.isOpend = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (window.innerWidth >= 1440) {
            this.sideMode = 'side';
            this.isOpend = true;
        }
    };
    AppComponent.prototype.onResize = function (event, sideNav) {
        if (event.target.innerWidth < 1440) {
            this.sideMode = 'over';
            this.isOpend = false;
        }
        else {
            this.sideMode = 'side';
            this.isOpend = true;
        }
    };
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared-material/shared-material.module */ "./src/app/shared-material/shared-material.module.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _shared_material_shared_material_module__WEBPACK_IMPORTED_MODULE_6__["SharedMaterialModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/fakeData.ts":
/*!*********************************************!*\
  !*** ./src/app/components/home/fakeData.ts ***!
  \*********************************************/
/*! exports provided: wonderReviews, pttReviews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wonderReviews", function() { return wonderReviews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pttReviews", function() { return pttReviews; });
var wonderReviews = [
    {
        image: "https://s.zimedia.com.tw/s/NT2gmf-0",
        description: '客家老味道，橘餅饅頭',
        time: '2017.09.20'
    },
    {
        image: "http://iphoto.ipeen.com.tw/photo/comment/444208/753146/cgm5bf135cd171d569d5842ce3d61eb8b3b155.jpg",
        description: '客家老味道，？麵',
        time: '2018.05.16'
    }
];
var pttReviews = [
    {
        image: "http://pic.qiantucdn.com/58pic/28/44/63/358PICk58PICT58PICS26deF2j5fh_PIC2018.jpg!qt324",
        description: '空氣新鮮，街道很乾淨 希望下次還有機會造訪'
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVg1KG-UpfvQjOBFNvkEMu3JTrLGL5sbiEm57CTctvbpuPz3LFQ",
        description: '超好吃～～'
    },
    {
        image: "http://static.wixstatic.com/media/92b36f_87817020b7dd47f1b7178dcfd7c9d913~mv2.gif",
        description: '下次要大一家人去吃'
    }
];


/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-indicators {\n  bottom: -35px;\n}\n.carousel-indicators li {\n  border: 1px solid #8c0e03;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.carousel-indicators .active {\n  background-color: #8c0e03;\n}\n.photo-title {\n  display: flex;\n  margin-top: 71px;\n  margin-bottom: 50px;\n  justify-content: center;\n  align-items: center;\n}\n.photo-title--text {\n  font-weight: normal;\n  color: #333;\n  margin: 0 20px;\n}\n.line {\n  width: 30px;\n  height: 3px;\n  background-color:#bc2f36;\n  display: inline-block;\n}\n.wonderfulReview.carousel-inner {\n  width: 228px;\n  height: auto;\n  margin: 0 auto;\n}\n.photo-angle {\n  color: #999;\n  font-size: 40px;\n}\n.photo-description {\n  min-width: 228px;\n  text-align: center;\n  padding: 13px 36px;\n  margin: 14px auto 15px;\n  display: inline-block;\n  border: solid 1px rgba(188, 47, 54, .5);\n  font-size: 14px;\n  letter-spacing: 0.1px;\n  color: #333333;\n}\n.photo-time {\n  margin-left: calc((100% - 228px) /2);\n}\n.userReview {\n  width: 228px;\n  height: 110px;\n  background-color: #f9f9f9;\n  padding: 35px 40px;\n  font-size: 14px;\n  font-weight: normal;\n  color: #666666;\n  display: inline-block;\n  margin: 0 auto;\n}\n.footer {\n  height: 200px;\n  background-color: #343534;\n  color: #fff;\n  font-size: 14px;\n  padding: 90px 0px 0px 80px;\n}\n.home-container {\n  background-color: #fff;\n}\n.pptReview.carousel-inner {\n  max-width: 100%;\n  width: 220px;\n  height: auto;\n  margin: 0 auto;\n}\n@media(min-width: 768px) {\n  .wonderfulReview.carousel-inner {\n    width: 500px;\n  }\n  .photo-description {\n    width: 500px;\n  }\n  .photo-time {\n    margin-left: calc((100% - 500px) /2);\n  }\n  .userReview {\n    width: 330px;\n    height: 160px;\n    padding: 54px 95px;\n  }\n}\n@media(min-width: 1440px) {\n  .home-container {\n    padding: 50px 50px 186px;\n  }\n  .photo-recall {\n    display: inline-block;\n  }\n  .wonderfulReview.carousel-inner {\n    width: 330px;\n    height: 217px;\n  }\n  .photo-description {\n    margin: 25px 0 0 0;\n    text-align: center;\n    width: 330px;\n    height: 45px;\n  }\n  .photo-time {\n    margin: 13px 0 0 0;\n  }\n  .userReview {\n    width: 330px;\n    height: 160px;\n    padding: 54px 95px;\n  }\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container\" (window:resize)=\"onResize($event)\">\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img class=\"d-block w-100\" src=\"https://farm4.staticflickr.com/3950/15690111602_e82eb63535_o.jpg\" alt=\"First slide\">\n      </div>\n      <div class=\"carousel-item\">\n        <img class=\"d-block w-100\" src=\"https://farm4.staticflickr.com/3955/15069146693_64073561be_o.jpg\" alt=\"Second slide\">\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n  <div class=\"photo-title\">\n    <div class=\"line\"></div>\n    <h5 class=\"photo-title--text\">\n      精彩回顧\n    </h5>\n    <div class=\"line\"></div>\n  </div>\n  <ng-container *ngIf=\"!isScale\">\n    <div id=\"carouselExampleControls\" class=\"carousel slide\">\n      <div class=\"carousel-inner wonderfulReview\">\n        <div class=\"carousel-item active\">\n          <img class=\"d-block w-100\" src={{reviewDatas[reviewIdx].image}} alt=\"First slide\">\n        </div>\n      </div>\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\"\n        (click)=\"preReview()\"\n      >\n        <i class=\"fas fa-angle-left photo-angle\"></i>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\"\n        (click)=\"nextReview()\"\n      >\n        <i class=\"fas fa-angle-right photo-angle\"></i>\n      </a>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"photo-description\">\n        {{ reviewDatas[reviewIdx].description}}\n      </div>\n    </div>\n    <div class=\"photo-time\">\n        {{ reviewDatas[reviewIdx].time }}\n      </div>\n  </ng-container>\n  <div *ngIf=\"isScale\" style=\"display: flex;justify-content: space-around;\">\n    <div class=\"photo-recall\" *ngFor=\"let item of reviewDatas\">\n      <div id=\"carouselExampleControls\" class=\"carousel slide\">\n        <div class=\"carousel-inner wonderfulReview\">\n          <div class=\"carousel-item active\">\n            <img class=\"d-block w-100\" src={{item.image}} alt=\"First slide\">\n          </div>\n        </div>\n        <div class=\"d-flex\">\n          <div class=\"photo-description\">\n            {{ item.description}}\n          </div>\n        </div>\n        <div class=\"photo-time\">\n          {{ item.time }}\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"photo-title\" style=\"margin-top: 100px\">\n    <div class=\"line\"></div>\n    <h5 class=\"photo-title--text\">\n      鄉民回憶\n    </h5>\n    <div class=\"line\"></div>\n  </div>\n  <div *ngIf=\"isScale\" style=\"display:flex;justify-content: space-around;\">\n    <ng-container *ngFor=\"let ptt of pttDatas\">\n      <div>\n        <div class=\"d-flex\" style=\"justify-content: center;\">\n          <div class=\"userReview\">\n            {{ ptt.description }}\n          </div>\n        </div>\n        <div id=\"carouselExampleControls1\" class=\"carousel slide\">\n          <div class=\"carousel-inner pptReview\">\n            <div class=\"carousel-item active\">\n              <img class=\"d-block w-100\" src={{ptt.image}}>\n            </div>\n          </div>\n        </div>          \n      </div>\n        \n    </ng-container>\n  </div>\n  <ng-container *ngIf=\"!isScale\">\n    <div class=\"d-flex\" style=\"justify-content: center;\">\n      <div class=\"userReview\">\n        {{ pttDatas[pttIdx].description }}\n      </div>\n    </div>\n    <div id=\"carouselExampleControls1\" class=\"carousel slide\">\n      <div class=\"carousel-inner pptReview\">\n        <div class=\"carousel-item active\">\n          <img class=\"d-block w-100\" src={{pttDatas[pttIdx].image}}>\n        </div>\n      </div>\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleControls1\" role=\"button\" data-slide=\"prev\"\n        (click)=\"prePtt()\"\n      >\n        <i class=\"fas fa-angle-left photo-angle\"></i>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#carouselExampleControls1\" role=\"button\" data-slide=\"next\"\n        (click)=\"nextPtt()\"\n      >\n        <i class=\"fas fa-angle-right photo-angle\"></i>\n      </a>\n    </div>\n  </ng-container>\n</div>\n<footer class=\"footer\">\n  © 幸福銅鏡\n</footer>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fakeData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fakeData */ "./src/app/components/home/fakeData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.reviewDatas = _fakeData__WEBPACK_IMPORTED_MODULE_1__["wonderReviews"];
        this.isScale = false;
        this.pttDatas = _fakeData__WEBPACK_IMPORTED_MODULE_1__["pttReviews"];
        this.pttIdx = 0;
        this.reviewIdx = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (window.innerWidth >= 1440) {
            this.isScale = true;
        }
    };
    HomeComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < 1440) {
            this.isScale = false;
        }
        else {
            this.isScale = true;
        }
    };
    HomeComponent.prototype.prePtt = function () {
        if (this.pttIdx - 1 > -1) {
            this.pttIdx--;
        }
        else {
            this.pttIdx = this.pttDatas.length - 1;
        }
    };
    HomeComponent.prototype.nextPtt = function () {
        if (this.pttIdx + 1 !== this.pttDatas.length) {
            this.pttIdx++;
        }
        else {
            this.pttIdx = 0;
        }
    };
    HomeComponent.prototype.preReview = function () {
        if (this.reviewIdx - 1 > -1) {
            this.reviewIdx--;
        }
        else {
            this.reviewIdx = this.reviewDatas.length - 1;
        }
    };
    HomeComponent.prototype.nextReview = function () {
        if (this.reviewIdx + 1 !== this.reviewDatas.length) {
            this.reviewIdx++;
        }
        else {
            this.reviewIdx = 0;
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/shared-material/shared-material.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared-material/shared-material.module.ts ***!
  \***********************************************************/
/*! exports provided: SharedMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedMaterialModule", function() { return SharedMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedMaterialModule = /** @class */ (function () {
    function SharedMaterialModule() {
    }
    SharedMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"]] // 在export
        })
    ], SharedMaterialModule);
    return SharedMaterialModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/roy/Desktop/develop/miaoli/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map