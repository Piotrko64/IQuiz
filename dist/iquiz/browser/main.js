"use strict";
(self["webpackChunkiquiz"] = self["webpackChunkiquiz"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/start/start.component */ 4380);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _go_quiz_go_quiz_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./go-quiz/go-quiz.component */ 8954);
/* harmony import */ var _creating_creating_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creating/creating.component */ 2170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    { path: '', component: _pages_start_start_component__WEBPACK_IMPORTED_MODULE_0__.StartComponent },
    { path: 'quiz-one/:id', component: _go_quiz_go_quiz_component__WEBPACK_IMPORTED_MODULE_1__.GoQuizComponent },
    { path: 'creating', component: _creating_creating_component__WEBPACK_IMPORTED_MODULE_2__.CreatingComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {
                initialNavigation: 'enabledBlocking',
            }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["body {\n  background-color: #3d3d3d;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDNkM2Q7XG59XG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _create_one_que_create_one_que_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-one-que/create-one-que.component */ 2332);
/* harmony import */ var _quiz_one_quiz_one_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz-one/quiz-one.component */ 2980);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ 9067);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/start/start.component */ 4380);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _creating_creating_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./creating/creating.component */ 2170);
/* harmony import */ var _go_quiz_go_quiz_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./go-quiz/go-quiz.component */ 8954);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button-toggle */ 1959);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__.MatButtonToggleModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent,
        _pages_start_start_component__WEBPACK_IMPORTED_MODULE_5__.StartComponent,
        _list_list_component__WEBPACK_IMPORTED_MODULE_2__.ListComponent,
        _quiz_one_quiz_one_component__WEBPACK_IMPORTED_MODULE_1__.QuizOneComponent,
        _creating_creating_component__WEBPACK_IMPORTED_MODULE_6__.CreatingComponent,
        _go_quiz_go_quiz_component__WEBPACK_IMPORTED_MODULE_7__.GoQuizComponent,
        _create_one_que_create_one_que_component__WEBPACK_IMPORTED_MODULE_0__.CreateOneQueComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__.MatButtonToggleModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__.MatRadioModule] }); })();


/***/ }),

/***/ 2332:
/*!************************************************************!*\
  !*** ./src/app/create-one-que/create-one-que.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateOneQueComponent": () => (/* binding */ CreateOneQueComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);





class CreateOneQueComponent {
    constructor() {
        this.selectedStatus = '';
    }
    ngOnInit() { }
}
CreateOneQueComponent.ɵfac = function CreateOneQueComponent_Factory(t) { return new (t || CreateOneQueComponent)(); };
CreateOneQueComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateOneQueComponent, selectors: [["app-create-one-que"]], decls: 34, vars: 1, consts: [["appearance", "fill", 1, "example-full-width"], ["matInput", "", "maxlength", "256", "placeholder", "url of image"], ["message", ""], ["aria-label", "Select an option", "name", "some", 3, "ngModel", "ngModelChange"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"]], template: function CreateOneQueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-radio-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateOneQueComponent_Template_mat_radio_group_ngModelChange_8_listener($event) { return ctx.selectedStatus = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-radio-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-radio-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-radio-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-radio-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedStatus);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInput, _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__.MatRadioButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtb25lLXF1ZS5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ 2170:
/*!************************************************!*\
  !*** ./src/app/creating/creating.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatingComponent": () => (/* binding */ CreatingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _create_one_que_create_one_que_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-one-que/create-one-que.component */ 2332);






function CreatingComponent_app_create_one_que_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-create-one-que");
} }
class CreatingComponent {
    constructor() {
        this.arrayAmountQue = [1, 2, 3];
    }
    ngOnInit() { }
}
CreatingComponent.ɵfac = function CreatingComponent_Factory(t) { return new (t || CreatingComponent)(); };
CreatingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreatingComponent, selectors: [["app-creating"]], decls: 37, vars: 1, consts: [[1, "create"], [1, "example-form"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "maxlength", "256", "placeholder", "Your Nickname"], ["message", ""], ["matInput", "", "maxlength", "256", "placeholder", "Title of your new quiz"], ["matInput", "", "maxlength", "256", "placeholder", ""], ["matInput", "", "maxlength", "256", "placeholder", "url of image"], [4, "ngFor", "ngForOf"]], template: function CreatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Create Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Basic information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Nick");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "describe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 6, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 7, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Remember to select correct answer!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, CreatingComponent_app_create_one_que_36_Template, 1, 0, "app-create-one-que", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.arrayAmountQue);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _create_one_que_create_one_que_component__WEBPACK_IMPORTED_MODULE_0__.CreateOneQueComponent], styles: [".mat-focused .mat-form-field-label {\n  \n  color: #d9008f !important;\n}\n .mat-form-field-underline {\n  \n  background-color: #d9008f !important;\n}\n .mat-radio-outer-circle {\n  border-color: #d9008f !important;\n}\n .mat-radio-label {\n  margin-right: 40px;\n}\n .mat-form-field-ripple {\n  \n  background-color: #d9008f !important;\n}\n  mat-form-field.example-full-width {\n  background-color: white;\n  color: #231821;\n}\n  mat-form-field.example-full-width .mat-form-field-underline {\n  position: static;\n  background-color: #d9008f;\n}\n  mat-form-field.example-full-width .mat-form-field-wrapper {\n  padding-bottom: 0em !important;\n}\n.create[_ngcontent-%COMP%] {\n  background-color: #231821;\n  width: 100vw;\n  height: 100%;\n  color: white;\n}\n.create[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  padding: 100px 0;\n  margin-left: auto;\n  justify-content: center;\n  display: flex;\n}\n.create[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.create[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding-left: 10vw;\n}\n.create[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .create[_ngcontent-serverApp-c82][_ngcontent-%COMP%]   form[_ngcontent-serverApp-c82][_ngcontent-%COMP%]   mat-form-field[_ngcontent-serverApp-c82][_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0aW5nLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBTkUsd0JBQXdCO0VBUXhCLHlCQUFBO0FBTkY7QUFTQTtFQVBFLDRCQUE0QjtFQVM1QixvQ0FBQTtBQVBGO0FBU0E7RUFDRSxnQ0FBQTtBQVBGO0FBU0E7RUFDRSxrQkFBQTtBQVBGO0FBU0E7RUFQRSx5Q0FBeUM7RUFTekMsb0NBQUE7QUFQRjtBQVNBO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0FBUEY7QUFLQTtFQUlJLGdCQUFBO0VBQ0EseUJBQUE7QUFOSjtBQUNBO0VBUUksOEJBQUE7QUFOSjtBQVlBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFWRjtBQU1BO0VBT0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFWSjtBQURBO0VBY0ksZUFBQTtBQVZKO0FBSkE7RUFpQkksa0JBQUE7QUFWSjtBQVBBO0VBd0JNLGdCQUFBO0FBZE4iLCJmaWxlIjoiY3JlYXRpbmcuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAYmxhY2s6IHJnYmEoMzUsIDI0LCAzMywgMSk7XG5AYmxhY2tsZXNzOiByZ2IoNDYsIDQ2LCA0Nik7XG5AZmF2b3VyaXRlOiAjZDkwMDhmO1xuQGZhdmxlc3M6ICNkOTAwOTE0MDtcbkB3aGl0ZTogd2hpdGU7XG5Ad2hpdGVsZXNzOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuLy8gQ3VzdG9tIGlucHV0IHdpdGggOjpuZy1kZWVwXG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cbiAgY29sb3I6IEBmYXZvdXJpdGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSovXG4gIGJhY2tncm91bmQtY29sb3I6IEBmYXZvdXJpdGUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiBAZmF2b3VyaXRlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAubWF0LXJhZGlvLWxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBAZmF2b3VyaXRlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBAYmxhY2s7XG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGZhdm91cml0ZTtcbiAgfVxuICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDBlbSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8vXG5cbi5jcmVhdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBAYmxhY2s7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICBwYWRkaW5nOiAxMDBweCAwO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxuICBmb3JtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwdnc7XG4gICAgbWF0LWZvcm0tZmllbGQge1xuICAgIH1cblxuICAgIC5jcmVhdGVbX25nY29udGVudC1zZXJ2ZXJBcHAtYzgyXVxuICAgICAgZm9ybVtfbmdjb250ZW50LXNlcnZlckFwcC1jODJdXG4gICAgICBtYXQtZm9ybS1maWVsZFtfbmdjb250ZW50LXNlcnZlckFwcC1jODJdIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 9623:
/*!***************************************!*\
  !*** ./src/app/data/examples-quiz.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quizzes": () => (/* binding */ quizzes)
/* harmony export */ });
const quizzes = [
    {
        meta: {
            title: 'Front-end Quiz',
            author: 'Front-Flex',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
            describe: 'Simple quiz for beginner front-end developers',
            date: '1/6/2022',
            levelDifficulty: 'easy',
        },
        questions: [
            {
                question: 'What is not a css preprocessor?',
                answers: ['Sass', 'Stylus', 'Tailwind', 'Less'],
                correct: 'Tailwind',
            },
            {
                question: 'What notation can be used angular interpolation?',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png',
                answers: [
                    '[(interpolation)]',
                    '{{interpolation}}',
                    '@interpolation',
                    '{interpolation}',
                ],
                correct: '{{interpolation}}',
            },
            {
                question: 'Choose no framework',
                answers: ['Remix', 'NuxtJS', 'Prettier', 'Vue.js'],
                correct: 'Prettier',
            },
            {
                question: 'Find example angular directive',
                answers: ['*NgIf', '*NgxFor', '*NpmAngular', '*NgSwift'],
                correct: '*NgIf',
            },
            {
                question: 'What command will create a new branch?',
                image: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
                answers: [
                    'git branch',
                    'git init',
                    'git new branch',
                    'git checkout -b',
                ],
                correct: 'git checkout -b',
            },
        ],
        rating: [
            {
                author: 'Front-Flex',
                comment: 'Well, not bad',
                rate: 3,
            },
            {
                author: 'FrontJS',
                comment: 'Very Simple!',
                rate: 5,
            },
        ],
        score: [
            {
                winner: 'Front-Flex',
                score: 275,
            },
            {
                winner: 'FrontJS',
                score: 280,
            },
        ],
    },
    {
        meta: {
            title: 'Musical Instruments',
            author: 'Sound_Architecture',
            image: 'https://soundarchitecture.netlify.app/static/media/logosawhite.75a96919.webp',
            describe: 'Quiz about intruments from the whole world',
            date: '1/2/2022',
            levelDifficulty: 'hard',
        },
        questions: [
            {
                question: 'Cor anglais evolved from what type of instrument?',
                image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/English_Horn_picture.jpg',
                answers: ['Flute', 'Oboe', 'Clarinet', 'Bassoon'],
                correct: 'Oboe',
            },
            {
                question: 'Sitar came from:',
                image: 'https://art-srebro.pl/images/sitar.jpg',
                answers: ['Anatolia', 'South Asia', 'Northern Africa', 'Balkans'],
                correct: 'South Asia',
            },
            {
                question: 'What is this instrument?',
                image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Lira.jpg',
                answers: ['Octobass', 'Baritone', 'Hurdy-gurdy', 'Bagpipes'],
                correct: 'Hurdy-gurdy',
            },
            {
                question: 'Theramin is special because:',
                image: 'https://ichef.bbci.co.uk/images/ic/1200x675/p01f73n5.jpg',
                answers: [
                    'It made of ivory',
                    'It is not possible to control volume',
                    'You need to use water to play it properly',
                    'You do not have to touch it to play it',
                ],
                correct: 'You do not have to touch it to play it',
            },
            {
                question: 'What is this instrument?',
                image: 'https://ethnictune.com/wp-content/uploads/2016/03/Duduk-D-Alto-Professional.jpg',
                answers: ['Shawm', 'Duduk', 'Flute', 'Oboe'],
                correct: 'Duduk',
            },
            {
                question: 'What is this instrument?',
                image: 'http://www.nyckelharpa.com/images/harpa_hh4.jpg',
                answers: ['Fiddle', 'Nyckelharpa', 'Viola', 'Byzantine lyra'],
                correct: 'Nyckelharpa',
            },
            {
                question: 'What is Celesta ensemble section?',
                image: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Celesta_Schiedmayer_Studio.jpg',
                answers: ['Brass', 'String', 'Woodwind', 'Percussion'],
                correct: 'Percussion',
            },
            {
                question: 'The sound in armonica is created by:',
                image: 'https://musictales.club/sites/musictales.club/files/styles/mt_large/public/field/image/glass_armonica_by_robert_comploj_0.jpg',
                answers: ['Glass bowls', 'Water', 'Fingers', 'All answers are correct'],
                correct: 'All answers are correct',
            },
            {
                question: 'The Japanese koto is derived from the Chinese instrument:',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Japanese_Koto.jpg/1200px-Japanese_Koto.jpg',
                answers: ['Gusqin', 'Erhu', 'Pipa', 'Guzheng'],
                correct: 'Guzheng',
            },
            {
                question: 'What is the most common problem for harpist during concerts?',
                image: 'https://harpadepoveste.ro/wp-content/uploads/2021/01/harpa-de-poveste1-1.jpg',
                answers: [
                    'Breaking strings',
                    'Instrument out of tune',
                    'Pain in the fingers',
                    'Cracked fingernails',
                ],
                correct: 'Breaking strings',
            },
        ],
        rating: [
            {
                author: 'Sound_Architecture',
                comment: 'You know the vibe',
                rate: 4,
            },
            {
                author: 'Sound_Architecture',
                comment: 'You are real musical globtrotter',
                rate: 5,
            },
        ],
        score: [
            {
                winner: 'SA',
                score: 275,
            },
            {
                winner: 'SA',
                score: 280,
            },
        ],
    },
];


/***/ }),

/***/ 8954:
/*!**********************************************!*\
  !*** ./src/app/go-quiz/go-quiz.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoQuizComponent": () => (/* binding */ GoQuizComponent)
/* harmony export */ });
/* harmony import */ var _data_examples_quiz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/examples-quiz */ 9623);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_service_que_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/service-que.service */ 5638);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ 1959);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _quiz_one_quiz_one_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quiz-one/quiz-one.component */ 2980);







function GoQuizComponent_mat_button_toggle_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-button-toggle", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GoQuizComponent_mat_button_toggle_13_Template_mat_button_toggle_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const i_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.Action = i_r3; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", i_r3 === ctx_r0.Action ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r3);
} }
function GoQuizComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-quiz-one");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function GoQuizComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "output2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class GoQuizComponent {
    constructor(route, http) {
        this.route = route;
        this.http = http;
        this.id = 1;
        this.List = _data_examples_quiz__WEBPACK_IMPORTED_MODULE_0__.quizzes[this.id].questions;
        this.quizMeta = _data_examples_quiz__WEBPACK_IMPORTED_MODULE_0__.quizzes[this.id].meta;
        this.arrayAction = ['play', 'ratings', 'score'];
        this.Action = 'play';
    }
    // get data
    get() {
        this.http.getQuizzes().subscribe();
    }
    // change playActive
    ngOnInit() {
        this.get();
        this.id = this.route.snapshot.paramMap.get('id');
        // Id of subpage
        this.id = this.route.snapshot.paramMap.get('id');
        this.List = _data_examples_quiz__WEBPACK_IMPORTED_MODULE_0__.quizzes[this.id].questions;
        this.quizMeta = _data_examples_quiz__WEBPACK_IMPORTED_MODULE_0__.quizzes[this.id].meta;
    }
}
GoQuizComponent.ɵfac = function GoQuizComponent_Factory(t) { return new (t || GoQuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_service_que_service__WEBPACK_IMPORTED_MODULE_1__.ServiceQueService)); };
GoQuizComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GoQuizComponent, selectors: [["app-go-quiz"]], decls: 17, vars: 8, consts: [[1, "quiz"], [3, "src", "alt"], [1, "quiz__describe"], ["class", "matToggle", 3, "value", "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "matToggle", 3, "value", "ngClass", "click"]], template: function GoQuizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " created by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-button-toggle-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, GoQuizComponent_mat_button_toggle_13_Template, 2, 3, "mat-button-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, GoQuizComponent_div_15_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, GoQuizComponent_div_16_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.quizMeta.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("alt", ctx.quizMeta.describe);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.quizMeta.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.quizMeta.author, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.quizMeta.describe, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.arrayAction);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx.Action);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "play");
    } }, directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__.MatButtonToggleGroup, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__.MatButtonToggle, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchCase, _quiz_one_quiz_one_component__WEBPACK_IMPORTED_MODULE_2__.QuizOneComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchDefault], styles: [".quiz {\n  background: #3d3d3d;\n}\n.quiz header {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 400px;\n  top: 0;\n  background-color: #3d3d3d;\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n}\n.quiz header .mat-button-toggle-appearance-standard {\n  background-color: #3d3d3d;\n  border: none;\n}\n.quiz header .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,\n.quiz header .mat-button-toggle-group-appearance-standard {\n  border-radius: 20px;\n  position: absolute;\n  bottom: 50px;\n  border: none;\n}\n.quiz header .mat-button-toggle-group-appearance-standard .mat-button-toggle + .mat-button-toggle {\n  border-left: 4px solid #3d3d3d;\n}\n.quiz header .mat-button-toggle button {\n  transition: all 0.3s ease;\n}\n.quiz header .mat-button-toggle.active button {\n  background-color: #d9008f;\n  color: white;\n}\n.quiz header .mat-button-toggle.active button span {\n  color: white;\n}\n.quiz header button {\n  border-radius: 10px;\n  font-size: 1.5rem;\n  background-color: #2a272a;\n  text-transform: uppercase;\n  padding: 10px 15px;\n  border: none;\n  color: white;\n  cursor: pointer;\n}\n.quiz header .matToggle button {\n  color: red;\n  border-radius: 0;\n}\n.quiz header img {\n  height: 300px;\n}\n.quiz header .quiz__describe {\n  margin-left: 40px;\n  color: white;\n}\n.quiz header .quiz__describe span {\n  color: #d9008f;\n  font-size: 1.2em;\n}\n.quiz header .quiz__describe h1 {\n  margin-top: 10px;\n  font-size: 4rem;\n  font-weight: 500;\n}\n.quiz__content {\n  margin-top: 400px;\n  position: relative;\n  z-index: 2;\n}\n.quiz__content .quiz__question {\n  background: #1b141a;\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n}\n.quiz__content .quiz__question:nth-child(1) {\n  border-top-left-radius: 40px;\n  border-top-right-radius: 40px;\n}\n.quiz__content .quiz__question h1 {\n  color: white;\n  font-size: 2.5rem;\n  margin-top: 50px;\n  margin-bottom: 40px;\n}\n.quiz__content .quiz__question img {\n  max-height: 300px;\n  margin-bottom: 30px;\n}\n.quiz__content .quiz__question .quiz__buttons {\n  display: flex;\n  margin-bottom: 40px;\n}\n.quiz__content .quiz__question .quiz__buttons button {\n  transition: all 0.15s ease;\n  padding: 10px 15px;\n  margin: 0px 5px;\n  border-radius: 10px;\n  font-size: 1.2rem;\n  width: 200px;\n  color: white;\n  border: 2px solid rgba(255, 255, 255, 0.25);\n  background-color: #3d3d3d;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvLXF1aXouY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxtQkFBQTtBQUxGO0FBSUE7RUFJSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUxKO0FBUkE7RUFlTSx5QkFBQTtFQUNBLFlBQUE7QUFKTjtBQVpBOztFQW9CTSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFKTjtBQW5CQTtFQTRCTSw4QkFBQTtBQU5OO0FBdEJBO0VBK0JNLHlCQUFBO0FBTk47QUF6QkE7RUFrQ00seUJBQUE7RUFDQSxZQUFBO0FBTk47QUE3QkE7RUFzQ00sWUFBQTtBQU5OO0FBaENBO0VBeUNNLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFOTjtBQTFDQTtFQW9EUSxVQUFBO0VBQ0EsZ0JBQUE7QUFQUjtBQTlDQTtFQXlETSxhQUFBO0FBUk47QUFqREE7RUE0RE0saUJBQUE7RUFDQSxZQUFBO0FBUk47QUFyREE7RUErRFEsY0FBQTtFQUNBLGdCQUFBO0FBUFI7QUF6REE7RUFtRVEsZ0JBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7QUFSUjtBQVlFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFWSjtBQU9FO0VBTUksbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBVk47QUFZTTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUFWUjtBQUpFO0VBaUJNLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFWUjtBQVZFO0VBdUJNLGlCQUFBO0VBQ0EsbUJBQUE7QUFWUjtBQWRFO0VBMkJNLGFBQUE7RUFDQSxtQkFBQTtBQVZSO0FBbEJFO0VBOEJRLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFUViIsImZpbGUiOiJnby1xdWl6LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGJsYWNrOiAjMWIxNDFhO1xuQGJsYWNrbGVzczogcmdiKDYxLCA2MSwgNjEpO1xuQGZhdm91cml0ZTogI2Q5MDA4ZjtcbkBmYXZsZXNzOiByZ2JhKDIxNywgMCwgMTQ1LCAwLjI1KTtcbkB3aGl0ZTogd2hpdGU7XG5Ad2hpdGVsZXNzOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuLnF1aXoge1xuICBiYWNrZ3JvdW5kOiBAYmxhY2tsZXNzO1xuXG4gIGhlYWRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHRvcDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYmxhY2tsZXNzO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYmxhY2tsZXNzO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLFxuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDUwcHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkXG4gICAgICAubWF0LWJ1dHRvbi10b2dnbGVcbiAgICAgICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgQGJsYWNrbGVzcztcbiAgICB9XG4gICAgLm1hdC1idXR0b24tdG9nZ2xlIGJ1dHRvbiB7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIH1cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUuYWN0aXZlIGJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAZmF2b3VyaXRlO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUuYWN0aXZlIGJ1dHRvbiBzcGFuIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgMzksIDQyKTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5tYXRUb2dnbGUge1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIH1cbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgfVxuICAgIC5xdWl6X19kZXNjcmliZSB7XG4gICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogQGZhdm91cml0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgIH1cbiAgICAgIGgxIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICZfX2NvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDQwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgLnF1aXpfX3F1ZXN0aW9uIHtcbiAgICAgIGJhY2tncm91bmQ6IEBibGFjaztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAmOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQwcHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0MHB4O1xuICAgICAgfVxuICAgICAgaDEge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgfVxuICAgICAgaW1nIHtcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICB9XG4gICAgICAucXVpel9fYnV0dG9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgICAgIG1hcmdpbjogMHB4IDVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgQHdoaXRlbGVzcztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYmxhY2tsZXNzO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ 9067:
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var _data_examples_quiz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../data/examples-quiz */ 9623);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);





function ListComponent_article_1_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "easy quiz!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx_r3.coloring.easy);
} }
function ListComponent_article_1_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "medium level of difficult");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx_r4.coloring.medium);
} }
function ListComponent_article_1_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Demanding quiz!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx_r5.coloring.hard);
} }
const _c0 = function (a0) { return { color: a0 }; };
function ListComponent_article_1_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, r_r7 - 1 < ctx_r6.CountRate() ? "yellow" : null));
} }
const _c1 = function (a1) { return ["./quiz-one/", a1]; };
function ListComponent_article_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ListComponent_article_1_span_11_Template, 2, 2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ListComponent_article_1_span_12_Template, 2, 2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ListComponent_article_1_span_13_Template, 2, 2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ListComponent_article_1_span_15_Template, 3, 3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Play!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "See ratings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Score board");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", el_r1.meta.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", el_r1.meta.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](el_r1.meta.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", el_r1.meta.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", el_r1.meta.levelDifficulty === "easy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", el_r1.meta.levelDifficulty === "medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", el_r1.meta.levelDifficulty === "hard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.rate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", el_r1.meta.describe, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c1, i_r2));
} }
class ListComponent {
    constructor() {
        this.rate = [1, 2, 3, 4, 5];
        this.coloring = {
            easy: 'yellow',
            medium: 'orange',
            hard: 'red',
        };
        this.List = _data_examples_quiz__WEBPACK_IMPORTED_MODULE_0__.quizzes;
    }
    CountRate() {
        let countIndex = this.List[0].rating.length;
        let countRate = this.List[0].rating.reduce((a, b) => {
            return Number(a.rate + b.rate);
        });
        return Math.ceil(countRate / countIndex);
    }
    ngOnInit() {
        this.CountRate();
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(); };
ListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 2, vars: 1, consts: [[1, "article"], ["class", "article__for", 4, "ngFor", "ngForOf"], [1, "article__for"], ["alt", "", 3, "src"], [1, "article__describe"], [2, "color", "rgba(255, 255, 255, 0.25)"], [1, "article__author"], [1, "article__data"], [3, "color", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "article__buttons"], ["routerLinkActive", "router-link-active", 3, "routerLink"], [3, "ngStyle"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListComponent_article_1_Template, 26, 12, "article", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.List);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], styles: [".article[_ngcontent-%COMP%] {\n  background: #231821;\n  padding: 5px;\n}\n.article__for[_ngcontent-%COMP%] {\n  margin: 40px 5px 0px;\n  background: #2e2e2e;\n  color: white;\n  border-radius: 20px;\n  display: flex;\n  padding: 20px;\n  position: relative;\n  padding-left: 10vw;\n  margin-left: auto;\n  margin-right: auto;\n}\n.article__for[_ngcontent-%COMP%]   .article__describe[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 5px;\n}\n.article__for[_ngcontent-%COMP%]   .article__describe[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .article__author[_ngcontent-%COMP%] {\n  color: #d9008f;\n}\n.article__for[_ngcontent-%COMP%]   .article__describe[_ngcontent-%COMP%]   .article__data[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-left: 0px;\n  color: rgba(255, 255, 255, 0.25);\n  margin-bottom: 5px;\n}\n.article__for[_ngcontent-%COMP%]   .article__describe[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 16px;\n  height: 16px;\n}\n.article__for[_ngcontent-%COMP%]   .article__describe[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 1.2rem;\n}\n.article__for[_ngcontent-%COMP%]   .article__describe[_ngcontent-%COMP%]   .article__buttons[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  bottom: 20px;\n}\n.article__for[_ngcontent-%COMP%]   .article__describe[_ngcontent-%COMP%]   .article__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  border-radius: 15px;\n  padding: 10px 15px;\n  font-weight: 700;\n  background: #d9008f;\n  color: white;\n  border: none;\n  cursor: pointer;\n  margin-right: 10px;\n}\n.article__for[_ngcontent-%COMP%]   .article__describe[_ngcontent-%COMP%]   .article__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\n  background: white;\n  color: #d9008f;\n}\n.article__for[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 180px;\n  margin-right: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFMRjtBQU1FO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFKSjtBQU5FO0VBYU0sZUFBQTtFQUNBLGtCQUFBO0FBSlI7QUFWRTtFQWdCUSxjQUFBO0FBSFY7QUFiRTtFQW9CTSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FBSlI7QUFuQkU7RUEwQk0sZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSlI7QUF4QkU7RUErQk0sZ0JBQUE7RUFDQSxpQkFBQTtBQUpSO0FBNUJFO0VBbUNNLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFKUjtBQWpDRTtFQXVDUSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUhWO0FBSVU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFGWjtBQWhERTtFQXdESSxZQUFBO0VBQ0Esa0JBQUE7QUFMTiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGJsYWNrOiByZ2JhKDM1LCAyNCwgMzMsIDEpO1xuQGJsYWNrbGVzczogcmdiKDQ2LCA0NiwgNDYpO1xuQGZhdm91cml0ZTogI2Q5MDA4ZjtcbkBmYXZsZXNzOiByZ2JhKDIxNywgMCwgMTQ1LCAwLjI1KTtcbkB3aGl0ZTogd2hpdGU7XG5Ad2hpdGVsZXNzOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuLmFydGljbGUge1xuICBiYWNrZ3JvdW5kOiBAYmxhY2s7XG4gIHBhZGRpbmc6IDVweDtcbiAgJl9fZm9yIHtcbiAgICBtYXJnaW46IDQwcHggNXB4IDBweDtcbiAgICBiYWNrZ3JvdW5kOiBAYmxhY2tsZXNzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAuYXJ0aWNsZV9fZGVzY3JpYmUge1xuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgLmFydGljbGVfX2F1dGhvciB7XG4gICAgICAgICAgY29sb3I6IEBmYXZvdXJpdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5hcnRpY2xlX19kYXRhIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICBjb2xvcjogQHdoaXRlbGVzcztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgfVxuICAgICAgbWF0LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICB9XG4gICAgICAuYXJ0aWNsZV9fYnV0dG9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6IEBmYXZvdXJpdGU7XG4gICAgICAgICAgY29sb3I6IEB3aGl0ZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBAd2hpdGU7XG4gICAgICAgICAgICBjb2xvcjogQGZhdm91cml0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 4380:
/*!************************************************!*\
  !*** ./src/app/pages/start/start.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartComponent": () => (/* binding */ StartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../list/list.component */ 9067);




const _c0 = function () { return ["./quiz-one/1"]; };
const _c1 = function () { return ["./creating"]; };
class StartComponent {
    constructor() {
        this.textShadow = '10px 10px 2px rgba(255, 255, 255, 0.158)';
    }
    move(e) {
        this.textShadow = `${e.clientX / 30}px ${e.clientY / 20}px 2px rgba(255, 255, 255, 0.158)`;
    }
    ngOnInit() { }
}
StartComponent.ɵfac = function StartComponent_Factory(t) { return new (t || StartComponent)(); };
StartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StartComponent, selectors: [["app-start"]], decls: 22, vars: 6, consts: [[1, "header", 3, "mousemove"], [1, "header__title"], [1, "header__span"], [1, "header__buttons"], [1, "header__button"], ["routerLinkActive", "router-link-active", 1, "header__button", 3, "routerLink"], [1, "header__button", 3, "routerLink"]], template: function StartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousemove", function StartComponent_Template_header_mousemove_0_listener($event) { return ctx.move($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "IQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "uiz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Search Quiz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Quick Quiz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "flash_on");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Create Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "app-list");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("text-shadow", ctx.textShadow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _list_list_component__WEBPACK_IMPORTED_MODULE_0__.ListComponent], styles: [".header[_ngcontent-%COMP%] {\n  background: #231821;\n  color: white;\n  min-height: 100vh;\n  font-size: 220px;\n  box-sizing: border-box;\n  padding: 5px;\n}\n.header__title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 220px 0;\n}\n.header__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #d9008f;\n  text-shadow: 10px 10px 2px rgba(255, 255, 255, 0.158);\n}\n.header__buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.header__buttons[_ngcontent-%COMP%]   .header__button[_ngcontent-%COMP%] {\n  background: #d9008f;\n  flex: 1;\n  min-height: 250px;\n  border-radius: 20px;\n  border: none;\n  margin: 5px;\n  color: white;\n  font-size: 42px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  min-width: 300px;\n}\n.header__buttons[_ngcontent-%COMP%]   .header__button[_ngcontent-%COMP%]:nth-child(2) {\n  background: white;\n  color: #d9008f;\n}\n.header__buttons[_ngcontent-%COMP%]   .header__button[_ngcontent-%COMP%]:nth-child(2):hover {\n  flex: 1.4;\n}\n.header__buttons[_ngcontent-%COMP%]   .header__button[_ngcontent-%COMP%]:nth-child(2):hover   .mat-icon[_ngcontent-%COMP%] {\n  transform: none;\n}\n.header__buttons[_ngcontent-%COMP%]   .header__button[_ngcontent-%COMP%]:hover {\n  flex: 1.4;\n}\n.header__buttons[_ngcontent-%COMP%]   .header__button[_ngcontent-%COMP%]:hover   .mat-icon[_ngcontent-%COMP%] {\n  transform: rotateZ(45deg);\n}\n.header__buttons[_ngcontent-%COMP%]   .header__button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  font-size: 82px;\n  transition: all 0.3s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUpGO0FBS0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUhKO0FBQUU7RUFNSSxjQUFBO0VBQ0EscURBQUE7QUFITjtBQU1FO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFKSjtBQUVFO0VBSUksbUJBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUhOO0FBS007RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFIUjtBQUlRO0VBQ0UsU0FBQTtBQUZWO0FBQ1E7RUFHSSxlQUFBO0FBRFo7QUFLTTtFQUNFLFNBQUE7QUFIUjtBQUVNO0VBR0kseUJBQUE7QUFGVjtBQTNCRTtFQWlDTSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUhSIiwiZmlsZSI6InN0YXJ0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGJsYWNrOiByZ2JhKDM1LCAyNCwgMzMsIDEpO1xuQGZhdm91cml0ZTogI2Q5MDA4ZjtcbkBmYXZsZXNzOiByZ2JhKDIxNywgMCwgMTQ1LCAwLjI1KTtcbkB3aGl0ZTogd2hpdGU7XG5Ad2hpdGVsZXNzOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6IEBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1zaXplOiAyMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogNXB4O1xuICAmX190aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMjBweCAwO1xuXG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogQGZhdm91cml0ZTtcbiAgICAgIHRleHQtc2hhZG93OiAxMHB4IDEwcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNTgpO1xuICAgIH1cbiAgfVxuICAmX19idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAuaGVhZGVyX19idXR0b24ge1xuICAgICAgYmFja2dyb3VuZDogQGZhdm91cml0ZTtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICBtaW4td2lkdGg6IDMwMHB4O1xuXG4gICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IEB3aGl0ZTtcbiAgICAgICAgY29sb3I6IEBmYXZvdXJpdGU7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGZsZXg6IDEuNDtcbiAgICAgICAgICAubWF0LWljb24ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGZsZXg6IDEuNDtcbiAgICAgICAgLm1hdC1pY29uIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAubWF0LWljb24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICBmb250LXNpemU6IDgycHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 2980:
/*!************************************************!*\
  !*** ./src/app/quiz-one/quiz-one.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizOneComponent": () => (/* binding */ QuizOneComponent)
/* harmony export */ });
/* harmony import */ var _data_examples_quiz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../data/examples-quiz */ 9623);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




function QuizOneComponent_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const el_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", el_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function QuizOneComponent_div_1_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuizOneComponent_div_1_button_5_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const btn_r7 = restoredCtx.$implicit; const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.push(btn_r7, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r7 = ctx.$implicit;
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r5.disabled)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx_r5.getColor(btn_r7, ctx_r5.arrayAnswers[i_r3], ctx_r5.arrayCorrect[i_r3])));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", btn_r7, " ");
} }
const _c1 = function (a0) { return { background: a0 }; };
const _c2 = function (a0) { return { color: a0 }; };
function QuizOneComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, QuizOneComponent_div_1_img_3_Template, 1, 1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, QuizOneComponent_div_1_button_5_Template, 2, 5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, i_r3 % 2 === 0 ? "black" : "rgb(42 39 42)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c2, ctx_r0.coloringQue(ctx_r0.arrayAnswers[i_r3], ctx_r0.arrayCorrect[i_r3])));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", el_r2.question, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", el_r2.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", el_r2.answers);
} }
function QuizOneComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.giveCount(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.procentCounting, " %");
} }
class QuizOneComponent {
    constructor(route) {
        this.route = route;
        this.isOpen = false;
        this.id = 1;
        this.List = _data_examples_quiz__WEBPACK_IMPORTED_MODULE_0__.quizzes[this.id].questions;
        this.quizMeta = _data_examples_quiz__WEBPACK_IMPORTED_MODULE_0__.quizzes[this.id].meta;
        this.arrayAnswers = [];
        this.arrayCorrect = [];
        this.Counting = 0;
        this.procentCounting = 0;
        this.disabled = false;
    }
    // PUSH TO ARRAY
    push(ans, i) {
        this.arrayAnswers[i] = ans;
        // console.log(this.List.length);
    }
    // Swap the answers
    SwapAns() {
        for (let s = 0; s < this.List.length; s++) {
            const random1 = Math.floor(Math.random() * 3);
            const random2 = Math.floor(Math.random() * 3);
            const swapAns = this.List[s].answers[random1];
            this.List[s].answers[random1] = this.List[s].answers[random2];
            this.List[s].answers[random2] = swapAns;
            console.log(random1, random2);
        }
    }
    // reordering of questions
    Reordering() {
        this.List = this.List.map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    }
    //Function to create array with good answers
    correct() {
        for (let i = 0; i < this.List.length; i++) {
            const newPush = this.List[i].correct;
            this.arrayCorrect.push(newPush);
        }
        return this.arrayCorrect;
    }
    // Coloring Questions
    coloringQue(a, b) {
        if (this.disabled === false) {
            return 'white';
        }
        if (a === b) {
            return 'green';
        }
        if (a !== b) {
            return 'red';
        }
        return;
    }
    // Check good answers and counting point
    Check() {
        this.correct();
        for (let j = 0; j < this.List.length; j++) {
            if (this.arrayAnswers[j] === this.arrayCorrect[j]) {
                this.Counting++;
            }
            else {
                console.log('No! Good answer is ' + this.arrayCorrect[j]);
            }
        }
        this.procentCounting = (this.Counting / this.arrayCorrect.length) * 100;
        this.disabled = true;
        setTimeout(() => {
            window.scrollTo({
                left: 0,
                top: document.body.scrollHeight,
                behavior: 'smooth',
            });
        }, 100);
    }
    // Notification about amount points
    giveCount() {
        const count = (this.Counting / this.arrayCorrect.length) * 100;
        if (count > 80) {
            return 'Awesome! You got ' + this.Counting + ' points!';
        }
        if (count > 45) {
            return 'Not Bad! You got ' + this.Counting + ' points!';
        }
        if (count > 0) {
            return 'Ooops..! You got only ' + this.Counting + ' points';
        }
        else {
            return 'Zero points!';
        }
    }
    // Play again
    again() {
        this.arrayAnswers = [];
        this.arrayCorrect = [];
        this.Counting = 0;
        this.procentCounting = 0;
        this.disabled = false;
        this.Reordering();
        this.SwapAns();
        window.scrollTo(0, 0);
    }
    // Coloring good and bad answer
    getColor(btn, answer, correct) {
        if (btn === correct) {
            return 'green';
        }
        if (btn === answer && btn !== correct && correct !== undefined) {
            return 'red';
        }
        if (btn === answer) {
            return '#d9008f';
        }
    }
    ngOnInit() {
        // Id of subpage
        this.id = this.route.snapshot.paramMap.get('id');
        this.List = _data_examples_quiz__WEBPACK_IMPORTED_MODULE_0__.quizzes[this.id].questions;
        this.quizMeta = _data_examples_quiz__WEBPACK_IMPORTED_MODULE_0__.quizzes[this.id].meta;
        this.SwapAns();
        this.Reordering();
    }
}
QuizOneComponent.ɵfac = function QuizOneComponent_Factory(t) { return new (t || QuizOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
QuizOneComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QuizOneComponent, selectors: [["app-quiz-one"]], decls: 8, vars: 3, consts: [[1, "quiz__content"], ["class", "quiz__question", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["class", "quiz__counting", 4, "ngIf"], [1, "quiz__buttons"], [3, "disabled", "click"], [3, "click"], [1, "quiz__question", 3, "ngStyle"], [3, "ngStyle"], ["alt", "", 3, "src", 4, "ngIf"], [3, "disabled", "ngStyle", "click", 4, "ngFor", "ngForOf"], ["alt", "", 3, "src"], [3, "disabled", "ngStyle", "click"], [1, "quiz__counting"], [1, "color"]], template: function QuizOneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QuizOneComponent_div_1_Template, 6, 9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, QuizOneComponent_div_2_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuizOneComponent_Template_button_click_4_listener() { return ctx.Check(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Checking");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuizOneComponent_Template_button_click_6_listener() { return ctx.again(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Play Again");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.List);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disabled);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".quiz__buttons {\n  max-width: 800px;\n  display: flex;\n  justify-content: space-around;\n  align-items: normal;\n  padding: 40px 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n.quiz__buttons button {\n  padding: 10px 15px;\n  background-color: #d9008f;\n  color: white;\n  font-size: 1.5rem;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.1s ease;\n}\n.quiz__buttons button:hover {\n  transform: scale(1.05);\n}\n.quiz__counting {\n  padding-top: 40px;\n  font-size: 3rem;\n  color: white;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n.quiz__counting div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 70px;\n}\n.quiz__counting .color {\n  color: #d9008f;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXotb25lLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTkY7QUFEQTtFQVNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFMSjtBQU1JO0VBQ0Usc0JBQUE7QUFKTjtBQVFBO0VBQ0UsaUJBQUE7RUFFQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVBGO0FBQUE7RUFTSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFOSjtBQU5BO0VBZUksY0FBQTtBQU5KIiwiZmlsZSI6InF1aXotb25lLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGJsYWNrOiByZ2JhKDM1LCAyNCwgMzMsIDEpO1xuQGJsYWNrbGVzczogcmdiKDQ2LCA0NiwgNDYpO1xuQGZhdm91cml0ZTogI2Q5MDA4ZjtcbkBmYXZsZXNzOiByZ2JhKDIxNywgMCwgMTQ1LCAwLjI1KTtcbkB3aGl0ZTogd2hpdGU7XG5Ad2hpdGVsZXNzOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuXG4ucXVpel9fYnV0dG9ucyB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogbm9ybWFsO1xuICBwYWRkaW5nOiA0MHB4IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBmYXZvdXJpdGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlO1xuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICB9XG4gIH1cbn1cbi5xdWl6X19jb3VudGluZyB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuXG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNzBweDtcbiAgfVxuICAuY29sb3Ige1xuICAgIGNvbG9yOiBAZmF2b3VyaXRlO1xuICB9XG59XG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 5638:
/*!*************************************************!*\
  !*** ./src/app/services/service-que.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceQueService": () => (/* binding */ ServiceQueService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class ServiceQueService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:3000';
    }
    getQuizzes() {
        return this.http.get(this.url + '/quiezzes').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.tap)(console.log));
    }
}
ServiceQueService.ɵfac = function ServiceQueService_Factory(t) { return new (t || ServiceQueService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ServiceQueService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ServiceQueService, factory: ServiceQueService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
function bootstrap() {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
}
;
if (document.readyState === 'complete') {
    bootstrap();
}
else {
    document.addEventListener('DOMContentLoaded', bootstrap);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map