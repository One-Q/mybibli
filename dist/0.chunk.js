webpackJsonpac__name_([0],{

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__books_module__ = __webpack_require__(755);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BooksModule", function() { return __WEBPACK_IMPORTED_MODULE_0__books_module__["a"]; });



/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books_service__ = __webpack_require__(347);



var BookListComponent = (function () {
    function BookListComponent(booksService) {
        this.booksService = booksService;
    }
    BookListComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    BookListComponent.prototype.getBooks = function () {
        this.booksService.getBooks().subscribe(function (data) { return console.log(data); });
    };
    return BookListComponent;
}());
BookListComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* Component */])({
        selector: 'book-list',
        template: __webpack_require__(758),
        styles: [__webpack_require__(759)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__books_service__["a" /* BooksService */]])
], BookListComponent);



/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__books_routes__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_module__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__book_list_book_list_component__ = __webpack_require__(754);









var BooksModule = (function () {
    function BooksModule() {
    }
    return BooksModule;
}());
BooksModule.routes = __WEBPACK_IMPORTED_MODULE_3__books_routes__["a" /* routes */];
BooksModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__book_list_book_list_component__["a" /* BookListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__books_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__material_module__["a" /* MyMaterialModule */]
        ]
    })
], BooksModule);



/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_list_book_list_component__ = __webpack_require__(754);

var routes = [
    {
        path: '', children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_0__book_list_book_list_component__["a" /* BookListComponent */] }
        ]
    }
];


/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 758:
/***/ (function(module, exports) {

module.exports = "<h1>Books</h1>"

/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(757);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ })

});
//# sourceMappingURL=0.chunk.js.map