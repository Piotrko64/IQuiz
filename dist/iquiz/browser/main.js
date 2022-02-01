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
    { path: 'quiz-one/1', component: _go_quiz_go_quiz_component__WEBPACK_IMPORTED_MODULE_1__.GoQuizComponent },
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
/* harmony import */ var _quiz_one_quiz_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz-one/quiz-one.component */ 2980);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/list.component */ 9067);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/start/start.component */ 4380);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _creating_creating_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./creating/creating.component */ 2170);
/* harmony import */ var _go_quiz_go_quiz_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./go-quiz/go-quiz.component */ 8954);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
        _pages_start_start_component__WEBPACK_IMPORTED_MODULE_4__.StartComponent,
        _list_list_component__WEBPACK_IMPORTED_MODULE_1__.ListComponent,
        _quiz_one_quiz_one_component__WEBPACK_IMPORTED_MODULE_0__.QuizOneComponent,
        _creating_creating_component__WEBPACK_IMPORTED_MODULE_5__.CreatingComponent,
        _go_quiz_go_quiz_component__WEBPACK_IMPORTED_MODULE_6__.GoQuizComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ 3365);



class CreatingComponent {
    constructor() { }
    ngOnInit() {
    }
}
CreatingComponent.ɵfac = function CreatingComponent_Factory(t) { return new (t || CreatingComponent)(); };
CreatingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatingComponent, selectors: [["app-creating"]], decls: 11, vars: 0, consts: [["appearance", "fill"], ["matInput", ""]], template: function CreatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "textarea", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInput], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGluZy5jb21wb25lbnQubGVzcyJ9 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _quiz_one_quiz_one_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quiz-one/quiz-one.component */ 2980);




function GoQuizComponent_app_quiz_one_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-quiz-one");
} }
class GoQuizComponent {
    constructor() {
        this.List = _data_examples_quiz__WEBPACK_IMPORTED_MODULE_0__.quizzes[0].questions;
        this.quizMeta = _data_examples_quiz__WEBPACK_IMPORTED_MODULE_0__.quizzes[0].meta;
        this.playActive = false;
    }
    ngOnInit() { }
}
GoQuizComponent.ɵfac = function GoQuizComponent_Factory(t) { return new (t || GoQuizComponent)(); };
GoQuizComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GoQuizComponent, selectors: [["app-go-quiz"]], decls: 15, vars: 6, consts: [[1, "quiz"], [3, "src", "alt"], [1, "quiz__describe"], [3, "click"], [4, "ngIf"]], template: function GoQuizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " created by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GoQuizComponent_Template_button_click_12_listener() { return ctx.playActive = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Play!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, GoQuizComponent_app_quiz_one_14_Template, 1, 0, "app-quiz-one", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.quizMeta.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", ctx.quizMeta.describe);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.quizMeta.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.quizMeta.author, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.quizMeta.describe, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.playActive);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _quiz_one_quiz_one_component__WEBPACK_IMPORTED_MODULE_1__.QuizOneComponent], styles: [".quiz {\n  background: #3d3d3d;\n}\n.quiz header {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 400px;\n  top: 0;\n  background-color: #3d3d3d;\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n}\n.quiz header button {\n  border-radius: 10px;\n  font-size: 1.5rem;\n  background-color: #d9008f;\n  padding: 10px 15px;\n  border: none;\n  color: white;\n  cursor: pointer;\n  position: absolute;\n  bottom: 60px;\n}\n.quiz header img {\n  height: 300px;\n}\n.quiz header .quiz__describe {\n  margin-left: 40px;\n  color: white;\n}\n.quiz header .quiz__describe span {\n  color: #d9008f;\n  font-size: 1.2em;\n}\n.quiz header .quiz__describe h1 {\n  margin-top: 10px;\n  font-size: 4rem;\n  font-weight: 500;\n}\n.quiz__content {\n  margin-top: 400px;\n  position: relative;\n  z-index: 2;\n}\n.quiz__content .quiz__question {\n  background: #1b141a;\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n}\n.quiz__content .quiz__question:nth-child(1) {\n  border-top-left-radius: 40px;\n  border-top-right-radius: 40px;\n}\n.quiz__content .quiz__question h1 {\n  color: white;\n  font-size: 2.5rem;\n  margin-top: 50px;\n  margin-bottom: 40px;\n}\n.quiz__content .quiz__question img {\n  max-height: 300px;\n  margin-bottom: 30px;\n}\n.quiz__content .quiz__question .quiz__buttons {\n  display: flex;\n  margin-bottom: 40px;\n}\n.quiz__content .quiz__question .quiz__buttons button {\n  transition: all 0.15s ease;\n  padding: 10px 15px;\n  margin: 0px 5px;\n  border-radius: 10px;\n  font-size: 1.2rem;\n  width: 200px;\n  color: white;\n  border: 2px solid rgba(255, 255, 255, 0.25);\n  background-color: #3d3d3d;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvLXF1aXouY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxtQkFBQTtBQUxGO0FBSUE7RUFHSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUpKO0FBUkE7RUFjTSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUhOO0FBbkJBO0VBeUJNLGFBQUE7QUFITjtBQXRCQTtFQTRCTSxpQkFBQTtFQUNBLFlBQUE7QUFITjtBQTFCQTtFQStCUSxjQUFBO0VBQ0EsZ0JBQUE7QUFGUjtBQTlCQTtFQW1DUSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtBQUhSO0FBT0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUxKO0FBRUU7RUFLSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFKTjtBQUtNO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtBQUhSO0FBVEU7RUFlTSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSFI7QUFmRTtFQXFCTSxpQkFBQTtFQUNBLG1CQUFBO0FBSFI7QUFuQkU7RUF5Qk0sYUFBQTtFQUNBLG1CQUFBO0FBSFI7QUF2QkU7RUE0QlEsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUZWIiwiZmlsZSI6ImdvLXF1aXouY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAYmxhY2s6ICMxYjE0MWE7XG5AYmxhY2tsZXNzOiByZ2IoNjEsIDYxLCA2MSk7XG5AZmF2b3VyaXRlOiAjZDkwMDhmO1xuQGZhdmxlc3M6IHJnYmEoMjE3LCAwLCAxNDUsIDAuMjUpO1xuQHdoaXRlOiB3aGl0ZTtcbkB3aGl0ZWxlc3M6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4ucXVpeiB7XG4gIGJhY2tncm91bmQ6IEBibGFja2xlc3M7XG4gIGhlYWRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHRvcDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYmxhY2tsZXNzO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBidXR0b24ge1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5MDA4ZjtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogNjBweDtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgfVxuICAgIC5xdWl6X19kZXNjcmliZSB7XG4gICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogQGZhdm91cml0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgIH1cbiAgICAgIGgxIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICZfX2NvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDQwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIC5xdWl6X19xdWVzdGlvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiBAYmxhY2s7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNDBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQwcHg7XG4gICAgICB9XG4gICAgICBoMSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICB9XG4gICAgICBpbWcge1xuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIH1cbiAgICAgIC5xdWl6X19idXR0b25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBAd2hpdGVsZXNzO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBibGFja2xlc3M7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"], encapsulation: 2 });


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
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx_r2.coloring.easy);
} }
function ListComponent_article_1_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "medium level of difficult");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx_r3.coloring.medium);
} }
function ListComponent_article_1_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Demanding quiz!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx_r4.coloring.hard);
} }
const _c0 = function (a0) { return { color: a0 }; };
function ListComponent_article_1_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, r_r6 - 1 < ctx_r5.CountRate() ? "yellow" : null));
} }
const _c1 = function () { return ["./quiz-one/1"]; };
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1));
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListComponent_article_1_Template, 26, 11, "article", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.List);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], styles: [".article[_ngcontent-%COMP%] {\n  background: #231821;\n  padding: 5px;\n}\n.article__for[_ngcontent-%COMP%] {\n  margin: 40px 5px 0px;\n  background: #2e2e2e;\n  color: white;\n  border-radius: 20px;\n  display: flex;\n  padding: 20px;\n  position: relative;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n}\n.article__for[_ngcontent-%COMP%]   .article__describe[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 5px;\n}\n.article__for[_ngcontent-%COMP%]   .article__describe[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .article__author[_ngcontent-%COMP%] {\n  color: #d9008f;\n}\n.article__for[_ngcontent-%COMP%]   .article__describe[_ngcontent-%COMP%]   .article__data[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-left: 0px;\n  color: rgba(255, 255, 255, 0.25);\n  margin-bottom: 5px;\n}\n.article__for[_ngcontent-%COMP%]   .article__describe[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 16px;\n  height: 16px;\n}\n.article__for[_ngcontent-%COMP%]   .article__describe[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 1.2rem;\n}\n.article__for[_ngcontent-%COMP%]   .article__describe[_ngcontent-%COMP%]   .article__buttons[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  bottom: 20px;\n}\n.article__for[_ngcontent-%COMP%]   .article__describe[_ngcontent-%COMP%]   .article__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  border-radius: 15px;\n  padding: 10px 15px;\n  font-weight: 700;\n  background: #d9008f;\n  color: white;\n  border: none;\n  cursor: pointer;\n  margin-right: 10px;\n}\n.article__for[_ngcontent-%COMP%]   .article__describe[_ngcontent-%COMP%]   .article__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\n  background: white;\n  color: #d9008f;\n}\n.article__for[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 180px;\n  margin-right: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFMRjtBQU1FO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFKSjtBQU5FO0VBYU0sZUFBQTtFQUNBLGtCQUFBO0FBSlI7QUFWRTtFQWdCUSxjQUFBO0FBSFY7QUFiRTtFQW9CTSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FBSlI7QUFuQkU7RUEwQk0sZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSlI7QUF4QkU7RUErQk0sZ0JBQUE7RUFDQSxpQkFBQTtBQUpSO0FBNUJFO0VBbUNNLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFKUjtBQWpDRTtFQXVDUSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUhWO0FBSVU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFGWjtBQWhERTtFQXdESSxZQUFBO0VBQ0Esa0JBQUE7QUFMTiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGJsYWNrOiByZ2JhKDM1LCAyNCwgMzMsIDEpO1xuQGJsYWNrbGVzczogcmdiKDQ2LCA0NiwgNDYpO1xuQGZhdm91cml0ZTogI2Q5MDA4ZjtcbkBmYXZsZXNzOiByZ2JhKDIxNywgMCwgMTQ1LCAwLjI1KTtcbkB3aGl0ZTogd2hpdGU7XG5Ad2hpdGVsZXNzOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuLmFydGljbGUge1xuICBiYWNrZ3JvdW5kOiBAYmxhY2s7XG4gIHBhZGRpbmc6IDVweDtcbiAgJl9fZm9yIHtcbiAgICBtYXJnaW46IDQwcHggNXB4IDBweDtcbiAgICBiYWNrZ3JvdW5kOiBAYmxhY2tsZXNzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIC5hcnRpY2xlX19kZXNjcmliZSB7XG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAuYXJ0aWNsZV9fYXV0aG9yIHtcbiAgICAgICAgICBjb2xvcjogQGZhdm91cml0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmFydGljbGVfX2RhdGEge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgIGNvbG9yOiBAd2hpdGVsZXNzO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICB9XG4gICAgICBtYXQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIH1cbiAgICAgIC5hcnRpY2xlX19idXR0b25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogQGZhdm91cml0ZTtcbiAgICAgICAgICBjb2xvcjogQHdoaXRlO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IEB3aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiBAZmF2b3VyaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function QuizOneComponent_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const el_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", el_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function QuizOneComponent_div_1_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuizOneComponent_div_1_button_5_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const btn_r6 = restoredCtx.$implicit; const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.push(btn_r6, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r6 = ctx.$implicit;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r4.getColor(btn_r6, ctx_r4.arrayAnswers[i_r2], ctx_r4.arrayCorrect[i_r2])));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", btn_r6, " ");
} }
const _c1 = function (a0) { return { background: a0 }; };
function QuizOneComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, QuizOneComponent_div_1_img_3_Template, 1, 1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, QuizOneComponent_div_1_button_5_Template, 2, 4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, i_r2 % 2 === 0 ? "black" : "rgb(42 39 42)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](el_r1.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", el_r1.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", el_r1.answers);
} }
class QuizOneComponent {
    constructor() {
        this.List = _data_examples_quiz__WEBPACK_IMPORTED_MODULE_0__.quizzes[0].questions;
        this.quizMeta = _data_examples_quiz__WEBPACK_IMPORTED_MODULE_0__.quizzes[0].meta;
        this.arrayAnswers = [];
        this.arrayCorrect = [];
        this.arrayChecking = [];
        this.Counting = 0;
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
        console.log('pkt', this.Counting);
        this.SwapAns();
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
        // Array with good answers
        this.Reordering();
    }
}
QuizOneComponent.ɵfac = function QuizOneComponent_Factory(t) { return new (t || QuizOneComponent)(); };
QuizOneComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QuizOneComponent, selectors: [["app-quiz-one"]], decls: 6, vars: 1, consts: [[1, "quiz__content"], ["class", "quiz__question", 3, "ngStyle", 4, "ngFor", "ngForOf"], [3, "click"], [1, "quiz__question", 3, "ngStyle"], ["alt", "", 3, "src", 4, "ngIf"], [1, "quiz__buttons"], [3, "ngStyle", "click", 4, "ngFor", "ngForOf"], ["alt", "", 3, "src"], [3, "ngStyle", "click"]], template: function QuizOneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QuizOneComponent_div_1_Template, 6, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuizOneComponent_Template_button_click_2_listener() { return ctx.Check(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Checking");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuizOneComponent_Template_button_click_4_listener() { return ctx.Reordering(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Reordering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.List);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWl6LW9uZS5jb21wb25lbnQubGVzcyJ9 */"], encapsulation: 2 });


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