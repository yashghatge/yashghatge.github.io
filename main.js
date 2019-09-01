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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-3 col-sm-12 col-12 float-left\">\n        <img src=\"../Stand.jpg\" title=\"user pic\" />\n      </div>\n      <div class=\"col-lg-9 col-md-9 col-sm-12 col-12 float-left\">\n        <div class=\"content\">\n          <div class=\"border-bottom w-100 float-left\">\n            <h1>Yash\n              <strong>Ghatge</strong>\n            </h1>\n            <h6 class=\"text-primary font-weight-bold\">Student</h6>\n            <p>About Myself</p>\n          </div>\n          <div class=\"w-100 float-left\">\n            <p>From  Childhood I am very keen with Technology, I used to destruct every Toy I got and find out\n              how it works, but once opened it can't get backed to it's original State!, And when I started to study Computers\n              I was so much fascinated with it that I started to Code and my First Program was Hello World only.\n            </p>\n            <p>\n              I am currently pursuing my undergraduate study and discovered that I am passionate towards the wide field of data science. I am very much fascinated about the areas that require an analytical approach. In my school days, maths always lured me. I likes to tackle challenging problems and to get a required solution to the problem. Also, I am very much interested in analysing the problems with programming approach. I am a kind of person who will give her all to achieve my goals. This lead me to pursue my undergraduate program in computer science at SRM Institute of Science and Technology, NCR Campus. I believe that my hardwork and my methodical approach towards finding a solution to a complex problem best suits this field for me.\n            </p>\n            <p>In this field I learned so much that how a Computer works, how it analyze our code and then it prints on a Standard Output Screen along this I learnt many\n              Languages some are C/C++/JAVA and currently I am learning a very beautiful language that is Angular.\n            </p>\n            <!-- <button type=\"button\" class=\"btn btn-primary system_btn quick_btn\"  >Profile View</button> -->\n            <button mat-raised-button color=\"primary\" (click)=\"openDialog()\"><b>Profile View</b></button>\n          </div>\n          <!-- <div class=\"w-100 float-left smo mt-4 mb-4\"> -->\n            <div class=\"row\">\n              <div class=\"col-sm-12\">\n                <div  class=\"w-100 float-left smo mt-4 mb-4\">\n                    <ul class=\"p-0 m-0\">\n                        <li class=\"float-left d-block mr-2\" *ngFor=\"let smoDetail of smoIcon\">\n                          <a href=\"{{smoDetail.smoLink}}\" class=\"d-block p-2\"[innerHTML]=\"smoDetail.smoLogo\">&nbsp;                  \n                          </a>\n                        </li>              \n                      </ul>\n                </div>\n              </div>\n            </div>\n            \n\n          <!-- </div> -->\n        <!-- </div> -->\n        <div class=\"w-100 float-left mt-4 mb-4\">\n            <div *ngFor=\"let record of progressBarList\" class=\"col-md-3 col-sm-6 float-left\">\n              <div class=\"progress-circle position-relative\">\n                <round-progress [current]=\"record.skill\" [max]=\"100\" [color]=\"'red'\" [background]=\"'white'\" [radius]=\"40\" [stroke]=\"3\" [semicircle]=\"false\"\n                  [rounded]=\"true\" [clockwise]=\"true\" [responsive]=\"true\" [duration]=\"800\" [animation]=\"'easeInOutQuart'\" [animationDelay]=\"25\">\n                </round-progress>\n                <div class=\"progress-value position-absolute\">\n                    {{record.skill}}%                \n                  </div>\n                  <h5 class=\"text-center mt-2 mb-2\">{{record.skillName}}</h5>\n              </div>              \n            </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <h3 class=\"border-bottom mt-4 mb-4 pb-2\">Bio <strong>info</strong></h3>\n      <p>Yash Ghatge is a Developer along with he is currently Pursuing B.Tech in CSE from \n        <strong>SRM Institute of Science and Technology and Energy Studies</strong>.He is very much active on online \n        Coding Platforms like Hackerrank.And he has learnt Angular while doing Internship.\n      </p>\n        </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"col-lg-5 col-md-5 col-sm-12 col-12 float-left\">\n          <img src=\"../Still.jpg\" title=\"bio pic\" />\n        </div>\n        <div class=\"col-lg-7 col-md-7 col-sm-12 col-12 float-left\">\n          <ul class=\"p-0 m-0\">\n            <li class=\"float-left d-block w-100 pb-3\"\n             *ngFor=\"let bioDetail of bioiInfo\">\n             <span class=\"d-block w-50 float-left font-weight-bold\">\n               {{bioDetail.bioTitle}}<span class=\"float-right pr-4\">:</span>\n              </span>\n              <span class=\"d-block w-50 float-left\">{{bioDetail.bioValue}}</span></li>\n          </ul>\n        </div>\n    </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n        <h3 class=\"border-bottom mt-4 mb-4 pb-2\">Who <strong>am i ?</strong></h3>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 text-center\">\n          <p>So who am I really? I will try to answer this question myself. I am a person! I am the one and only. And I do not understand why I should not have my opinion, but I should only listen to someone else. \n            I am a man of my time and a representative of this generation. I’m not bad, and maybe not very good. I’m not a prodigy, but not without abilities. I’m just me.In one thing I can assure you. \n            And the music I listen to,clothes I wear and my hairstyle absolutely do not affect what type of man i am.This lead me to pursue my undergraduate program in computer science at SRM Institute of Science and Technology, NCR Campus. I believe in my myself.</p>\n          </div>\n      </div>\n    </div>\n  </div>\n "

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_profileDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog/profileDialog */ "./src/app/dialog/profileDialog.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    // animal: string="Cat";
    // name: string="Varun";
    function AppComponent(dialog, titleService) {
        this.dialog = dialog;
        this.titleService = titleService;
        this.title = 'app';
        this.progressBarList = [
            { id: 4, skill: '60', skillName: 'Angular' },
            { id: 3, skill: '70', skillName: 'PYTHON' },
            { id: 1, skill: '90', skillName: 'C/C++' },
        ];
        this.bioiInfo = [
            { bioTitle: 'Name', bioValue: 'Yash Ghatge' },
            { bioTitle: 'Date Of Birth', bioValue: '09/09/1997' },
            { bioTitle: 'Email', bioValue: 'ghatge.yash@yahoo.com' },
            { bioTitle: 'Address', bioValue: 'DA-54B,Hari Nagar,New Delhi, India-110064' },
            { bioTitle: 'Phone', bioValue: '+91-9810016447' }
        ];
        this.smoIcon = [
            { smoLink: 'https://www.facebook.com/yash.ghatge', smoLogo: '<i class="fa fa-facebook" aria-hidden="true"></i>' },
            { smoLink: 'https://www.linkedin.com/in/yash-ghatge-76075b169/', smoLogo: '<i class="fa fa-linkedin" aria-hidden="true"></i>' },
        ];
        this.titleService.setTitle("Resume");
    }
    AppComponent.prototype.openDialog = function () {
        debugger;
        var dialogRef = this.dialog.open(_dialog_profileDialog__WEBPACK_IMPORTED_MODULE_2__["ProfileDialog"], {
            width: '600px', height: '500px'
            // data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
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
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _master_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./master.component */ "./src/app/master.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _dialog_profileDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog/profileDialog */ "./src/app/dialog/profileDialog.ts");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.router */ "./src/app/app.router.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ui_resume_resume_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/resume/resume.component */ "./src/app/ui/resume/resume.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _dialog_profileDialog__WEBPACK_IMPORTED_MODULE_8__["ProfileDialog"],
                _master_component__WEBPACK_IMPORTED_MODULE_5__["MasterComponent"],
                _ui_resume_resume_component__WEBPACK_IMPORTED_MODULE_11__["ResumeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_2__["RoundProgressModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTreeModule"],
                _app_router__WEBPACK_IMPORTED_MODULE_9__["AppRouter"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTreeModule"],
            ],
            entryComponents: [_dialog_profileDialog__WEBPACK_IMPORTED_MODULE_8__["ProfileDialog"]],
            providers: [],
            bootstrap: [_master_component__WEBPACK_IMPORTED_MODULE_5__["MasterComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.ts":
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/*! exports provided: AppRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouter", function() { return AppRouter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ui_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/resume/resume.component */ "./src/app/ui/resume/resume.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
    { path: 'resume', component: _ui_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"] }
];
var AppRouter = /** @class */ (function () {
    function AppRouter() {
    }
    AppRouter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            declarations: [],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRouter);
    return AppRouter;
}());



/***/ }),

/***/ "./src/app/dialog/profileDialog.html":
/*!*******************************************!*\
  !*** ./src/app/dialog/profileDialog.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-title class=\"profile-title\">Profile View\r\n    <button mat-button class=\"float-right\" color=\"warn\" (click)=\"onNoClick()\">x</button>\r\n  </mat-card-title><br>\r\n  <mat-divider></mat-divider>\r\n  <mat-card-content>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\">\r\n        <div>\r\n          <br>  <img class=\"profile_pic img img-responsive\" src=\"../../newResize.png\" alt=\"Yashimage\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <h5>Yash Ghatge</h5>\r\n        <p>Pursuing B.Tech in Computer Science</p>\r\n        <p>\r\n            <i class=\"fa fa-map-marker\" aria-hidden=\"true\">New Delhi,India.</i>\r\n        </p>\r\n        <div class=\"modal_profile_tag\">\r\n            <span>C</span>\r\n            <span>C++</span>\r\n            <span>JAVA</span>\r\n            <span>Python</span>\r\n            <span>Angular</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <mat-divider></mat-divider>\r\n    <div class=\"row\">\r\n      <div class=\"float-left\">\r\n        <h6 class=\"system_font_color\"><i class=\"fa fa-volume-control-phone\" aria-hidden=\"true\"></i>Language</h6>\r\n        <h6 class=\"text-primary\">English,Hindi,Marathi.</h6><br>\r\n        <h6 class=\"system_font_color\"><i class=\"fa fa-handshake-o\" aria-hidden=\"true\"></i>Connect with Me On!</h6>\r\n        <ul>\r\n          <li><a href=\"https://www.facebook.com/yash.ghatge\" ><i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i></a></li>\r\n          <li><a href=\"https://www.linkedin.com/in/yash-ghatge-76075b169/\" ><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a></li>\r\n          \r\n        </ul>\r\n      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n      <div class=\"float-right\">\r\n          <h6 class=\"system_font_color\"><i class=\"fa fa-code\" aria-hidden=\"true\"></i>Online Coding Performance</h6>\r\n          <ul>\r\n            <li><a href=\"https://www.hackerrank.com/ghatge_yash\"><h6>Hackerrank</h6></a></li>\r\n          </ul>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"mb40\">\r\n        <h6 class=\"system_font_color\">Language</h6>\r\n        <h6>English,Hindi,Punjabi.</h6>\r\n      </div>\r\n      <div class=\"mb40\">\r\n          <h6 class=\"system_font_color\">Connect with Me On!</h6>\r\n           <!-- <ul>\r\n            <li *ngFor=\"let icones of JoinMe\"></li>\r\n            <a href=\"{{icones.smoLink}}\" class=\"d-block p-2\"[innerHTML]=\"icones.smoLogo\"></a>\r\n\r\n          </ul>  -->\r\n          <!-- <ul>\r\n            <li><a href=\"#\" ><i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i></a></li>\r\n            <li><a href=\"#\" ><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\r\n            <li><a href=\"#\" ><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a></li>\r\n            <li><a href=\"#\" ><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a></li>\r\n          </ul>\r\n          <div class=\"float-right\">\r\n            <p>Hello I AM RIGHT</p>\r\n          </div> -->\r\n        <!-- </div> -->\r\n        \r\n\r\n  </mat-card-content>\r\n<!-- <h1 mat-dialog-title>Hi {{data.name}}</h1>\r\n<div mat-dialog-content>\r\n  <p>What's your favorite animal?</p>\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"data.animal\">\r\n  </mat-form-field>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/dialog/profileDialog.ts":
/*!*****************************************!*\
  !*** ./src/app/dialog/profileDialog.ts ***!
  \*****************************************/
/*! exports provided: ProfileDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDialog", function() { return ProfileDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ProfileDialog = /** @class */ (function () {
    function ProfileDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.JoinMe = [
            { smoLink: '#', smoLogo: '<i class="fa fa-facebook" aria-hidden="true"></i>' },
            { smoLink: '#', smoLogo: '<i class="fa fa-linkedin" aria-hidden="true"></i>' },
        ];
    }
    ProfileDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ProfileDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./profileDialog.html */ "./src/app/dialog/profileDialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ProfileDialog);
    return ProfileDialog;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"footer-copyright text-center py-3\">© For any Query, please Mail me on:\n    <a href=\"#\">ghatge.yash@yahoo.com</a>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/master.component.ts":
/*!*************************************!*\
  !*** ./src/app/master.component.ts ***!
  \*************************************/
/*! exports provided: MasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterComponent", function() { return MasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MasterComponent = /** @class */ (function () {
    function MasterComponent() {
    }
    MasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: '<app-sidebar></app-sidebar> <div class="content-area"><router-outlet></router-outlet></div>'
        })
    ], MasterComponent);
    return MasterComponent;
}());

;


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  <ul class=\"p-0 m-0\">\n    <li *ngFor='let navIcon of navLink'>\n      <a routerLink=\"{{navIcon.navUrl}}\" class=\"text-white d-block text-center\"[innerHTML]=\"navIcon.navIconList\"></a></li>    \n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
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

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.navLink = [{ navUrl: '/', navIconList: '<i class="fa fa-home" aria-hidden="true"></i>' },
            { navUrl: '/resume', navIconList: '<i class="fa fa-id-card" aria-hidden="true"></i>' }
        ];
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/ui/resume/resume.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/resume/resume.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timeline {\r\n    box-sizing:border-box\r\n   }\r\n   .timeline::before {\r\n    box-sizing:border-box\r\n   }\r\n   .timeline * {\r\n    box-sizing:border-box\r\n   }\r\n   .timeline *::before {\r\n    box-sizing:border-box\r\n   }\r\n   .timeline {\r\n    position:relative;\r\n    font-size:1em;\r\n    width:100%;\r\n    height:100%;\r\n    margin:0 auto;\r\n    overflow-y:hidden;\r\n    margin-top:0\r\n   }\r\n   .timeline .timeline-block {\r\n    margin:40px 0\r\n   }\r\n   .timeline .timeline-icon {\r\n    position:absolute;\r\n    width:6px;\r\n    height:6px;\r\n    left:50%;\r\n    margin-left:-16px;\r\n    margin-top:-2px;\r\n    border:4px solid #0487cc;\r\n    border-radius:100%;\r\n    background-color:#fff;\r\n    text-align:center\r\n   }\r\n   .timeline .timeline-icon.timeline-icon-hide-border {\r\n    border:0\r\n   }\r\n   .timeline .timeline-icon.timeline-icon-hide-border i.fa,.timeline .timeline-icon.timeline-icon-hide-border img {\r\n    margin-left:0;\r\n    margin-top:0\r\n   }\r\n   .timeline .timeline-icon i.fa,.timeline .timeline-icon img {\r\n    display:inline-block;\r\n    width:32px;\r\n    height:32px;\r\n    margin-left:-4px;\r\n    margin-top:-4px;\r\n    vertical-align:bottom;\r\n    line-height:32px;\r\n    text-align:center;\r\n    font-size:30px\r\n   }\r\n   .timeline .timeline-icon img {\r\n    border-radius:100%\r\n   }\r\n   .timeline .timeline-content {\r\n    position:relative;\r\n    margin-left:35px\r\n   }\r\n   .timeline .timeline-date {\r\n    position:absolute;\r\n    width:auto;\r\n    top:0;\r\n    left:118%;\r\n    font-size:80%\r\n   }\r\n   .timeline::before {\r\n    position:absolute;\r\n    width:2px;\r\n    height:100%;\r\n    top:0;\r\n    left:50%;\r\n    margin-left:-1px;\r\n    font-family:fontawesome;\r\n    background-color:#cfcfc4;\r\n    content:\"\"\r\n   }\r\n   @media screen and (min-width:800px) {\r\n    .timeline.timeline-alternating:not(.timeline-left) .timeline-block:nth-of-type(2n) .timeline-content {\r\n     left:55%\r\n    }\r\n    .timeline.timeline-alternating:not(.timeline-left) .timeline-block:nth-of-type(2n) .timeline-date {\r\n     left:auto;\r\n     right:118%;\r\n     margin-left:-400px\r\n    }\r\n   }\r\n   @media screen and (max-width:800px) {\r\n    .timeline.timeline-collapsing::before {\r\n     left:auto;\r\n     margin-left:140px\r\n    }\r\n    .timeline.timeline-collapsing .timeline-block {\r\n     margin-left:174px;\r\n     margin-right:10px\r\n    }\r\n    .timeline.timeline-collapsing .timeline-icon {\r\n     left:auto;\r\n     margin-left:-49px\r\n    }\r\n    .timeline.timeline-collapsing .timeline-content {\r\n     width:auto\r\n    }\r\n    .timeline.timeline-collapsing .timeline-date {\r\n     width:auto;\r\n     left:0;\r\n     margin-left:-130px;\r\n     text-align:right\r\n    }\r\n   }\r\n   .timeline.timeline-left::before {\r\n    left:auto;\r\n    top:40px;\r\n    margin-left:170px\r\n   }\r\n   .timeline.timeline-left .timeline-block {\r\n    margin-left:174px;\r\n    margin-right:10px;\r\n    position:relative\r\n   }\r\n   .timeline-block i {\r\n    font-size:16px;\r\n    position:absolute;\r\n    left:-23px;\r\n    top:-40px;\r\n    border:1px solid #ccc;\r\n    border-radius:50px;\r\n    padding:3px;\r\n    height:40px;\r\n    width:40px;\r\n    text-align:center;\r\n    line-height:2\r\n   }\r\n   .timeline.timeline-left .timeline-icon {\r\n    left:auto;\r\n    margin-left:-7px;\r\n    top:10px\r\n   }\r\n   .timeline.timeline-left .timeline-content {\r\n    width:auto\r\n   }\r\n   .timeline.timeline-left .timeline-date {\r\n    width:auto;\r\n    left:0;\r\n    margin-left:-207px;\r\n    text-align:right\r\n   }\r\n   .timeline.gray-red::before {\r\n    background-color:#cfcfc4\r\n   }\r\n   .timeline.gray-red .timeline-icon {\r\n    border-color:#c23b22\r\n   }\r\n   .timeline.gray-red .timeline-icon.timeline-icon-text span {\r\n    border-color:#e5e5e5\r\n   }\r\n   .timeline.gray-red .timeline-content {\r\n    border-color:#e5e5e5\r\n   }\r\n   .timeline.gray-red.timeline-with-arrows .timeline-content::before {\r\n    border-left-color:#e5e5e5\r\n   }\r\n   .timeline.gray-red.timeline-with-arrows.timeline-left .timeline-content::before {\r\n    border-right-color:#e5e5e5\r\n   }\r\n   .timeline.gray-red.timeline-with-arrows.timeline-alternating .timeline-content::before {\r\n    border-left-color:#e5e5e5\r\n   }\r\n   .timeline.gray-red.timeline-with-arrows.timeline-alternating .timeline-block:nth-of-type(2n) .timeline-content::before {\r\n    border-right-color:#e5e5e5\r\n   }\r\n   @media screen and (max-width:800px) {\r\n    .timeline.gray-red.timeline-with-arrows.timeline-collapsing .timeline-content::before {\r\n     border-right-color:#e5e5e5\r\n    }\r\n   }\r\n   .timeline.gray-blue::before {\r\n    background-color:#ccc;\r\n   }\r\n   .timeline.gray-blue .timeline-icon {\r\n    border-color:#0487cc\r\n   }\r\n   .timeline.gray-blue .timeline-icon.timeline-icon-text span {\r\n    border-color:#e5e5e5\r\n   }\r\n   .timeline.gray-blue .timeline-content {\r\n    border-color:#e5e5e5\r\n   }\r\n   .timeline.gray-blue.timeline-with-arrows .timeline-content::before {\r\n    border-left-color:#e5e5e5\r\n   }\r\n   .timeline.gray-blue.timeline-with-arrows.timeline-left .timeline-content::before {\r\n    border-right-color:#e5e5e5\r\n   }\r\n   .timeline.gray-blue.timeline-with-arrows.timeline-alternating .timeline-content::before {\r\n    border-left-color:#e5e5e5\r\n   }\r\n   .timeline.gray-blue.timeline-with-arrows.timeline-alternating .timeline-block:nth-of-type(2n) .timeline-content::before {\r\n    border-right-color:#e5e5e5\r\n   }\r\n   @media screen and (max-width:800px) {\r\n    .timeline.gray-blue.timeline-with-arrows.timeline-collapsing .timeline-content::before {\r\n     border-right-color:#e5e5e5\r\n    }\r\n   }\r\n   .timeline.blue-yellow-yellow::before {\r\n    background-color:#aec6cf\r\n   }\r\n   .timeline.blue-yellow-yellow .timeline-icon {\r\n    border-color:#ffb347\r\n   }\r\n   .timeline.blue-yellow-yellow .timeline-icon.timeline-icon-text span {\r\n    border-color:#aec6cf\r\n   }\r\n   .timeline.blue-yellow-yellow .timeline-content {\r\n    border-color:#aec6cf\r\n   }\r\n   .timeline.blue-yellow-yellow.timeline-with-arrows .timeline-content::before {\r\n    border-left-color:#aec6cf\r\n   }\r\n   .timeline.blue-yellow-yellow.timeline-with-arrows.timeline-left .timeline-content::before {\r\n    border-right-color:#aec6cf\r\n   }\r\n   .timeline.blue-yellow-yellow.timeline-with-arrows.timeline-alternating .timeline-content::before {\r\n    border-left-color:#aec6cf\r\n   }\r\n   .timeline.blue-yellow-yellow.timeline-with-arrows.timeline-alternating .timeline-block:nth-of-type(2n) .timeline-content::before {\r\n    border-right-color:#aec6cf\r\n   }\r\n   @media screen and (max-width:800px) {\r\n    .timeline.blue-yellow-yellow.timeline-with-arrows.timeline-collapsing .timeline-content::before {\r\n     border-right-color:#aec6cf\r\n    }\r\n   }\r\n   .timeline.blue-red-red::before {\r\n    background-color:#779ecb\r\n   }\r\n   .timeline.blue-red-red .timeline-icon {\r\n    border-color:#c23b22\r\n   }\r\n   .timeline.blue-red-red .timeline-icon.timeline-icon-text span {\r\n    border-color:#c23b22\r\n   }\r\n   .timeline.blue-red-red .timeline-content {\r\n    border-color:#c23b22\r\n   }\r\n   .timeline.blue-red-red.timeline-with-arrows .timeline-content::before {\r\n    border-left-color:#c23b22\r\n   }\r\n   .timeline.blue-red-red.timeline-with-arrows.timeline-left .timeline-content::before {\r\n    border-right-color:#c23b22\r\n   }\r\n   .timeline.blue-red-red.timeline-with-arrows.timeline-alternating .timeline-content::before {\r\n    border-left-color:#c23b22\r\n   }\r\n   .timeline.blue-red-red.timeline-with-arrows.timeline-alternating .timeline-block:nth-of-type(2n) .timeline-content::before {\r\n    border-right-color:#c23b22\r\n   }\r\n   @media screen and (max-width:800px) {\r\n    .timeline.blue-red-red.timeline-with-arrows.timeline-collapsing .timeline-content::before {\r\n     border-right-color:#c23b22\r\n    }\r\n   }\r\n   .timeline.purple-flirt::before {\r\n    background-color:#b19cd9\r\n   }\r\n   .timeline.purple-flirt .timeline-icon {\r\n    border-color:#a2006d\r\n   }\r\n   .timeline.purple-flirt .timeline-icon.timeline-icon-text span {\r\n    border-color:#e5e5e5\r\n   }\r\n   .timeline.purple-flirt .timeline-content {\r\n    border-color:#e5e5e5\r\n   }\r\n   .timeline.purple-flirt.timeline-with-arrows .timeline-content::before {\r\n    border-left-color:#e5e5e5\r\n   }\r\n   .timeline.purple-flirt.timeline-with-arrows.timeline-left .timeline-content::before {\r\n    border-right-color:#e5e5e5\r\n   }\r\n   .timeline.purple-flirt.timeline-with-arrows.timeline-alternating .timeline-content::before {\r\n    border-left-color:#e5e5e5\r\n   }\r\n   .timeline.purple-flirt.timeline-with-arrows.timeline-alternating .timeline-block:nth-of-type(2n) .timeline-content::before {\r\n    border-right-color:#e5e5e5\r\n   }\r\n   @media screen and (max-width:800px) {\r\n    .timeline.purple-flirt.timeline-with-arrows.timeline-collapsing .timeline-content::before {\r\n     border-right-color:#e5e5e5\r\n    }\r\n   }\r\n   .timeline.blue-blue-blue::before {\r\n    background-color:#aec6cf\r\n   }\r\n   .timeline.blue-blue-blue .timeline-icon {\r\n    border-color:#aec6cf\r\n   }\r\n   .timeline.blue-blue-blue .timeline-icon.timeline-icon-text span {\r\n    border-color:#aec6cf\r\n   }\r\n   .timeline.blue-blue-blue .timeline-content {\r\n    border-color:#aec6cf\r\n   }\r\n   .timeline.blue-blue-blue.timeline-with-arrows .timeline-content::before {\r\n    border-left-color:#aec6cf\r\n   }\r\n   .timeline.blue-blue-blue.timeline-with-arrows.timeline-left .timeline-content::before {\r\n    border-right-color:#aec6cf\r\n   }\r\n   .timeline.blue-blue-blue.timeline-with-arrows.timeline-alternating .timeline-content::before {\r\n    border-left-color:#aec6cf\r\n   }\r\n   .timeline.blue-blue-blue.timeline-with-arrows.timeline-alternating .timeline-block:nth-of-type(2n) .timeline-content::before {\r\n    border-right-color:#aec6cf\r\n   }\r\n   @media screen and (max-width:800px) {\r\n    .timeline.blue-blue-blue.timeline-with-arrows.timeline-collapsing .timeline-content::before {\r\n     border-right-color:#aec6cf\r\n    }\r\n   }\r\n   .timeline.timeline-with-arrows .timeline-content::after,.timeline.timeline-with-arrows .timeline-content::before {\r\n    left:100%;\r\n    top:0;\r\n    border:solid transparent;\r\n    content:\" \";\r\n    height:0;\r\n    width:0;\r\n    position:absolute;\r\n    pointer-events:none;\r\n    border-color:transparent\r\n   }\r\n   .timeline.timeline-with-arrows .timeline-content::after {\r\n    border-left-color:#eee;\r\n    border-width:14px;\r\n    margin-left:0;\r\n    margin-top:0\r\n   }\r\n   .timeline.timeline-with-arrows .timeline-content::before {\r\n    border-left-color:#e5e5e5;\r\n    border-width:15px;\r\n    margin-left:1px;\r\n    margin-top:-1px\r\n   }\r\n   .timeline.timeline-with-arrows.timeline-left .timeline-content::after,.timeline.timeline-with-arrows.timeline-left .timeline-content::before {\r\n    left:0;\r\n    right:100%;\r\n    border-left-color:transparent!important\r\n   }\r\n   .timeline.timeline-with-arrows.timeline-left .timeline-content::after {\r\n    border-right-color:#eee;\r\n    margin-left:-28px\r\n   }\r\n   .timeline.timeline-with-arrows.timeline-left .timeline-content::before {\r\n    border-right-color:#e5e5e5;\r\n    margin-top:-1px;\r\n    margin-left:-31px\r\n   }\r\n   .timeline.timeline-with-arrows.timeline-alternating .timeline-block:nth-of-type(2n) .timeline-content::after,.timeline.timeline-with-arrows.timeline-alternating .timeline-block:nth-of-type(2n) .timeline-content::before {\r\n    left:0;\r\n    right:100%;\r\n    border-left-color:transparent!important\r\n   }\r\n   .timeline.timeline-with-arrows.timeline-alternating .timeline-block:nth-of-type(2n) .timeline-content::after {\r\n    border-right-color:#eee;\r\n    margin-left:-28px\r\n   }\r\n   .timeline.timeline-with-arrows.timeline-alternating .timeline-block:nth-of-type(2n) .timeline-content::before {\r\n    border-right-color:#e5e5e5;\r\n    margin-top:-1px;\r\n    margin-left:-31px\r\n   }\r\n   @media screen and (max-width:800px) {\r\n    .timeline.timeline-with-arrows .timeline-content::after,.timeline.timeline-with-arrows .timeline-content::before {\r\n     left:0;\r\n     right:100%;\r\n     border-left-color:transparent!important\r\n    }\r\n    .timeline.timeline-with-arrows .timeline-content::after {\r\n     border-right-color:#eee;\r\n     margin-left:-28px\r\n    }\r\n    .timeline.timeline-with-arrows .timeline-content::before {\r\n     border-right-color:#e5e5e5;\r\n     margin-top:-1px;\r\n     margin-left:-31px\r\n    }\r\n   }\r\n   .timeline-icon.timeline-icon-text {\r\n    left:0;\r\n    width:100%;\r\n    margin:0;\r\n    text-align:center;\r\n    height:40px;\r\n    line-height:40px;\r\n    border-radius:0;\r\n    background-color:transparent\r\n   }\r\n   .timeline-icon.timeline-icon-text span {\r\n    display:inline-block;\r\n    width:auto;\r\n    background-color:#eee;\r\n    border:1px solid #e5e5e5;\r\n    padding:0 10px\r\n   }\r\n   @media screen and (max-width:800px) {\r\n    .timeline-icon.timeline-icon-text {\r\n     left:auto;\r\n     width:auto;\r\n     margin-left:0!important\r\n    }\r\n   }\r\n   .timeline.timeline-left .timeline-icon.timeline-icon-text {\r\n    left:auto;\r\n    width:auto;\r\n    margin-left:0!important\r\n   }\r\n   .timeline-block.timeline-block-icon-only .timeline-content {\r\n    visibility:hidden\r\n   }\r\n   "

/***/ }),

/***/ "./src/app/ui/resume/resume.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/resume/resume.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-12 float-left\">\n      <div class=\"content\">\n        <div class=\"border-bottom w-100 float-left\">\n          <h1>Yash\n            <strong>Ghatge</strong>\n          </h1>\n          <h5 class=\"text-primary\">Intern | Web Developer | <br>\n            SRM | B.Tech| <br>\n            Specialization in Computer Science | Student</h5>\n          <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\">New Delhi,India.</i></p>\n        </div>\n        <div class=\"w-100 float-left\">\n          <p>Yash Ghatge is a student at <strong>SRM Insititute of Science and Technology</strong>, Delhi,NCR Persuing\n            Bachelor's Degree in \n            Computer Science Engineering. \n            Has done Internship with EDU Learning Zone as a Web Developer and Language enrolled with it is Angular.\n            He has experience in more Languages such as:-<strong>C, C++</strong>. \n            And for his Internship side-by-side Project you are just viewing his Resume Page which is fully Made in Angular version 6.</p>\n          <p>\n            \n          </p>\n          <!-- <button type=\"button\" class=\"btn btn-info\"  (click)=\"openDialog()\" >Profile View</button> -->\n        </div>        \n      </div>      \n    </div>\n  </div>\n  <div class=\"row mt-4 mb-4\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <h4 class=\"text-danger\">Professional Skills</h4>\n      <hr>\n      \n        <div class=\"w-100 float-left\">\n            <div class=\"col-lg-3 col-md-3 col-sm-12 pl-0 float-left\">\n              <div class=\"mt-3 mb-3\">\n                ANGULAR\n              </div>\n            </div>\n            <div class=\"col-lg-9 col-md-9 col-sm-12 float-left pl-0\">\n              <div class=\"progress mt-3 mb-3 w-100 float-left\">\n                <div class=\"progress-bar  progress-bar-striped bg-success\" style=\"width:60%\"></div>\n              </div>\n            </div>\n          </div>\n          <div class=\"w-100 float-left\">\n              <div class=\"col-lg-3 col-md-3 col-sm-12 pl-0 float-left\">\n                <div class=\"mt-3 mb-3\">\n                  PYTHON\n                </div>\n              </div>\n              <div class=\"col-lg-9 col-md-9 col-sm-12 float-left pl-0\">\n                <div class=\"progress mt-3 mb-3 w-100 float-left\">\n                  <div class=\"progress-bar  progress-bar-striped bg-success\" style=\"width:50%\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"w-100 float-left\">\n                <div class=\"col-lg-3 col-md-3 col-sm-12 pl-0 float-left\">\n                  <div class=\"mt-3 mb-3\">\n                    C/C++\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-12 float-left pl-0\">\n                  <div class=\"progress mt-3 mb-3 w-100 float-left\">\n                    <div class=\"progress-bar  progress-bar-striped bg-success\" style=\"width:95%\"></div>\n                  </div>\n                </div>\n              </div>\n    </div>\n  </div>  \n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n        <h4 class=\"text-danger\">Additional Skills</h4>\n        <hr>\n        <div class=\"w-100 float-left mt-4 mb-4\">\n            <div *ngFor=\"let record of progressBarList\" class=\"col-lg-3 col-md-3 col-sm-6 col-12 float-left\">\n              <div class=\"progress-circle position-relative\">\n                <round-progress [current]=\"record.skill\" [max]=\"100\" [color]=\"'purple'\" [background]=\"'white'\" [radius]=\"40\" [stroke]=\"3\" [semicircle]=\"false\"\n                  [rounded]=\"true\" [clockwise]=\"true\" [responsive]=\"true\" [duration]=\"800\" [animation]=\"'easeInOutQuart'\" [animationDelay]=\"25\">\n                </round-progress>\n                <div class=\"progress-value position-absolute\">\n                    {{record.skill}}%                \n                  </div>\n                  <h5 class=\"text-center mt-2 mb-2\">{{record.skillName}}</h5>\n              </div>              \n            </div>\n        </div>    \n  </div>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <div class=\" mt-4 mb-4\">\n      <h4 class=\"text-danger\">Experince</h4>\n      <hr>\n      <div class=\"timeline timeline-left gray-blue\">\n      <div class=\"timeline-block\">\n      <i class=\"fa fa-suitcase\"></i>\n      <div class=\"timeline-icon\"></div>\n      <div class=\"timeline-content\">\n      <h5 class=\"text-dark\">EDU Learning Zone</h5>\n      <p>\n      I have a Experience with Edu Learning Zone as on <strong>June 3<sup>th</sup>, 2016</strong> I recieved an Offer Letter which offered me \n      an Employement in their Organization as a Trainee/Intern. After I have joined their Organization I was given a title of Web Developer and \n      then I worked with a Team consisting of 6 Members and we working on Angular and building a Website for a Client.&nbsp;Side by Side I took help from\n      Seniors which guide me through  how to create my Personal Resume based on Angular. Working with this Organization I learnt some Technologies like \n      How to setup a Database in Google FireBase, Bootsrap, Font-Awesome, Angular Material. Also I learnt some good Communications Skills also.\n      In last I would like to close my article by saying that EDU provided me the best stage to showcase my abilities and along with it provided me \n      best Seniors to guide me through whole Internship.\n      <br>\n      <div class=\"timeline-date\">2018-2019\n      <h5 class=\"text-warning\">Web Developer</h5>\n      </div>\n      </div>\n      </div>\n      <!-- For Future Updation use below Commented Code:- -->\n      <!-- <div class=\"timeline-block\">\n      <div class=\"timeline-icon\"></div>\n      <div class=\"timeline-content\">\n      <h6>title</h6>\n      <p>\n      Assertively cultivate professional interfaces without synergistic etworks. Quickly erage existing customized ideas through client-based eliverables. Compellingly unleash fully tested outsourcing with prospective tunities. Uniquely maximize client-centric tals rather than focused\n      </p>\n      <div class=\"timeline-date\">2013-2014\n      <h6 class=\"system_font_color\" title=\"Hello Developer\">Web Developer</h6>\n      </div>\n      </div>\n      </div>\n      <div class=\"timeline-block\">\n      <div class=\"timeline-icon\"></div>\n      <div class=\"timeline-content\">\n      <h6>title</h6>\n      <p>\n      Assertively cultivate professional interfaces without synergistic etworks. Quickly erage existing customized ideas through client-based eliverables. Compellingly unleash fully tested outsourcing with prospective tunities. Uniquely maximize client-centric tals rather than focused\n      </p>\n      <div class=\"timeline-date\">2015-2016\n      <h6 class=\"system_font_color\" title=\"Hello Developer\">Web Developer</h6>\n      </div>\n      </div>\n      </div> -->\n      </div>\n      </div>\n    </div>\n  </div>\n  \n  \n  <div>\n      <h4 class=\"text-danger\">Education</h4>\n      <hr>\n      <div class=\"timeline timeline-left gray-blue\">\n      <div class=\"timeline-block\">\n      <i class=\"fa fa-graduation-cap\"></i>\n      <div class=\"timeline-icon\"></div>\n      <div class=\"timeline-content\">\n        <h5 class=\"text-dark\">SRM Institute of Science and Technology</h5>\n      <p>\n      I am currently studying in this College, I got admission in 2016. Presently it's my final Year.Currently my Average <strong>percentage is 74.97</strong>. Now coming towards faculty, Faculty is very helpful it really cares for every student as they know many are \n      outside from Delhi. Even my friends create an environment which is very friendly and homly. I really like my College.\n      </p>&nbsp;&nbsp;&nbsp;\n      <div class=\"timeline-date\">2016-2020\n        <h5 class=\"text-warning\">B.Tech-CSE</h5>&nbsp;&nbsp;&nbsp;\n      </div>\n      </div>\n      </div>\n      <div class=\"timeline-block\">\n      <div class=\"timeline-icon\"></div>\n      <div class=\"timeline-content\">\n      <h5 class=\"text-dark\">Guru Nanak Public School</h5>\n      <p>\n      I passed my Secondary Education in 2015 from Guru Nanak Public School and I got <strong>68%</strong> in Boards. In 11th Class I opted for <strong>Biology </strong>.\n     </p>\n      <div class=\"timeline-date\">2014-2015\n      <h5 class=\"text-warning\">Secondary<br>Education</h5>\n      </div>\n      </div>\n      </div>\n      \n      <!-- <div class=\"timeline-block\">\n      <div class=\"timeline-icon\"></div>\n      <div class=\"timeline-content\">\n      <h6>Sample Title</h6>\n      <p>\n      Assertively cultivate professional interfaces without synergistic etworks.\n       Quickly erage existing customized ideas through client-based eliverables. \n       Compellingly unleash fully tested outsourcing with prospective tunities. \n       Uniquely maximize client-centric tals rather than focused\n      </p>\n      <div class=\"timeline-date\">2015-2016\n      <h6 class=\"system_font_color\">Web Developer</h6>\n      </div>\n      </div>\n      </div> -->\n      </div>\n      </div>\n\n<!-- <div class=\"mt-4\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <div id=\"client-details\" class=\"carousel slide\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#client-details\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#client-details\" data-slide-to=\"1\"></li>\n          <li data-target=\"#client-details\" data-slide-to=\"2\"></li>\n        </ol>\n        <div class=\"carousel-inner bg-primary\">\n          <div class=\"carousel-item active p-5 text-white text-center\">\n            <h5>Lorem Ipsum is simply dummy text</h5>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n          </div>\n          <div class=\"carousel-item p-5 text-white text-center\">\n            <h5>Lorem Ipsum is simply dummy text</h5>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n          </div>\n          <div class=\"carousel-item p-5 text-white text-center\">\n            <h5>Lorem Ipsum is simply dummy text</h5>\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n          </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#client-details\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#client-details\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n    </div>\n  </div> -->\n  <hr>\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/ui/resume/resume.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/resume/resume.component.ts ***!
  \***********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
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

var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
        this.progressBarList = [
            { id: 2, skill: '80', skillName: 'DBMS' },
            { id: 4, skill: '70', skillName: 'SQL' },
        ];
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/ui/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/ui/resume/resume.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
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

module.exports = __webpack_require__(/*! C:\Demo Project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map