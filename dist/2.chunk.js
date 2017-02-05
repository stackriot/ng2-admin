webpackJsonpac__name_([2],{

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(2);
var common_1 = __webpack_require__(15);
var forms_1 = __webpack_require__(11);
var nga_module_1 = __webpack_require__(31);
var ng2_smart_table_1 = __webpack_require__(641);
var tables_routing_1 = __webpack_require__(722);
var tables_component_1 = __webpack_require__(625);
var basicTables_component_1 = __webpack_require__(622);
var basicTables_service_1 = __webpack_require__(503);
var responsiveTable_1 = __webpack_require__(718);
var stripedTable_1 = __webpack_require__(720);
var borderedTable_1 = __webpack_require__(711);
var hoverTable_1 = __webpack_require__(717);
var condensedTable_1 = __webpack_require__(713);
var contextualTable_1 = __webpack_require__(715);
var smartTables_component_1 = __webpack_require__(623);
var smartTables_service_1 = __webpack_require__(624);
var TablesModule = (function () {
    function TablesModule() {
    }
    return TablesModule;
}());
TablesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            nga_module_1.NgaModule,
            tables_routing_1.routing,
            ng2_smart_table_1.Ng2SmartTableModule,
        ],
        declarations: [
            tables_component_1.Tables,
            basicTables_component_1.BasicTables,
            hoverTable_1.HoverTable,
            borderedTable_1.BorderedTable,
            condensedTable_1.CondensedTable,
            stripedTable_1.StripedTable,
            contextualTable_1.ContextualTable,
            responsiveTable_1.ResponsiveTable,
            smartTables_component_1.SmartTables,
        ],
        providers: [
            basicTables_service_1.BasicTablesService,
            smartTables_service_1.SmartTablesService,
        ]
    })
], TablesModule);
exports.TablesModule = TablesModule;


/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(443);

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Rx_1 = __webpack_require__(500);
var DataSource = (function () {
    function DataSource() {
        this.onChangedSource = new Rx_1.Subject();
        this.onAddedSource = new Rx_1.Subject();
        this.onUpdatedSource = new Rx_1.Subject();
        this.onRemovedSource = new Rx_1.Subject();
    }
    DataSource.prototype.refresh = function () {
        this.emitOnChanged('refresh');
    };
    DataSource.prototype.load = function (data) {
        this.emitOnChanged('load');
        return Promise.resolve();
    };
    DataSource.prototype.onChanged = function () {
        return this.onChangedSource.asObservable();
    };
    DataSource.prototype.onAdded = function () {
        return this.onAddedSource.asObservable();
    };
    DataSource.prototype.onUpdated = function () {
        return this.onUpdatedSource.asObservable();
    };
    DataSource.prototype.onRemoved = function () {
        return this.onRemovedSource.asObservable();
    };
    DataSource.prototype.prepend = function (element) {
        this.emitOnAdded(element);
        this.emitOnChanged('prepend');
        return Promise.resolve();
    };
    DataSource.prototype.append = function (element) {
        this.emitOnAdded(element);
        this.emitOnChanged('append');
        return Promise.resolve();
    };
    DataSource.prototype.add = function (element) {
        this.emitOnAdded(element);
        this.emitOnChanged('add');
        return Promise.resolve();
    };
    DataSource.prototype.remove = function (element) {
        this.emitOnRemoved(element);
        this.emitOnChanged('remove');
        return Promise.resolve();
    };
    DataSource.prototype.update = function (element, values) {
        this.emitOnUpdated(element);
        this.emitOnChanged('update');
        return Promise.resolve();
    };
    DataSource.prototype.empty = function () {
        this.emitOnChanged('empty');
        return Promise.resolve();
    };
    DataSource.prototype.setSort = function (conf, doEmit) {
        if (doEmit) {
            this.emitOnChanged('sort');
        }
    };
    DataSource.prototype.setFilter = function (conf, andOperator, doEmit) {
        if (doEmit) {
            this.emitOnChanged('filter');
        }
    };
    DataSource.prototype.addFilter = function (fieldConf, andOperator, doEmit) {
        if (doEmit) {
            this.emitOnChanged('filter');
        }
    };
    DataSource.prototype.setPaging = function (page, perPage, doEmit) {
        if (doEmit) {
            this.emitOnChanged('paging');
        }
    };
    DataSource.prototype.setPage = function (page, doEmit) {
        if (doEmit) {
            this.emitOnChanged('page');
        }
    };
    DataSource.prototype.emitOnRemoved = function (element) {
        this.onRemovedSource.next(element);
    };
    DataSource.prototype.emitOnUpdated = function (element) {
        this.onUpdatedSource.next(element);
    };
    DataSource.prototype.emitOnAdded = function (element) {
        this.onAddedSource.next(element);
    };
    DataSource.prototype.emitOnChanged = function (action) {
        var _this = this;
        this.getElements().then(function (elements) { return _this.onChangedSource.next({
            action: action,
            elements: elements,
            paging: _this.getPaging(),
            filter: _this.getFilter(),
            sort: _this.getSort()
        }); });
    };
    return DataSource;
}());
exports.DataSource = DataSource;


/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtrCompleter; });

var CtrCompleter = (function () {
    function CtrCompleter() {
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.highlighted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._hasHighlited = false;
        this.hasSelected = false;
    }
    CtrCompleter.prototype.ngOnInit = function () {
        //
    };
    CtrCompleter.prototype.registerList = function (list) {
        this.list = list;
    };
    CtrCompleter.prototype.registerDropdown = function (dropdown) {
        this.dropdown = dropdown;
    };
    CtrCompleter.prototype.onHighlighted = function (item) {
        this.highlighted.emit(item);
        this._hasHighlited = true;
    };
    CtrCompleter.prototype.onSelected = function (item) {
        this.selected.emit(item);
        this.hasSelected = true;
        this.clear();
    };
    CtrCompleter.prototype.search = function (term) {
        if (this.hasSelected) {
            this.selected.emit(null);
            this.hasSelected = false;
        }
        if (this.list) {
            this.list.search(term);
        }
    };
    CtrCompleter.prototype.clear = function () {
        if (this.dropdown) {
            this.dropdown.clear();
        }
        if (this.list) {
            this.list.clear();
        }
        this._hasHighlited = false;
    };
    CtrCompleter.prototype.selectCurrent = function () {
        if (this.dropdown) {
            this.dropdown.selectCurrent();
        }
    };
    CtrCompleter.prototype.nextRow = function () {
        if (this.dropdown) {
            this.dropdown.nextRow();
        }
    };
    CtrCompleter.prototype.prevRow = function () {
        if (this.dropdown) {
            this.dropdown.prevRow();
        }
    };
    CtrCompleter.prototype.hasHighlited = function () {
        return this._hasHighlited;
    };
    CtrCompleter.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: "[ctrCompleter]",
                },] },
    ];
    /** @nocollapse */
    CtrCompleter.ctorParameters = function () { return []; };
    CtrCompleter.propDecorators = {
        'selected': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'highlighted': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return CtrCompleter;
}());
//# sourceMappingURL=ctr-completer.js.map

/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var BasicTablesService = (function () {
    function BasicTablesService() {
        this.smartTablePageSize = 10;
        this.smartTableData = [
            {
                id: 1,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28'
            },
            {
                id: 2,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45'
            },
            {
                id: 3,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18'
            },
            {
                id: 4,
                firstName: 'John',
                lastName: 'Snow',
                username: '@snow',
                email: 'snow@gmail.com',
                age: '20'
            },
            {
                id: 5,
                firstName: 'Jack',
                lastName: 'Sparrow',
                username: '@jack',
                email: 'jack@yandex.ru',
                age: '30'
            },
            {
                id: 6,
                firstName: 'Ann',
                lastName: 'Smith',
                username: '@ann',
                email: 'ann@gmail.com',
                age: '21'
            },
            {
                id: 7,
                firstName: 'Barbara',
                lastName: 'Black',
                username: '@barbara',
                email: 'barbara@yandex.ru',
                age: '43'
            },
            {
                id: 8,
                firstName: 'Sevan',
                lastName: 'Bagrat',
                username: '@sevan',
                email: 'sevan@outlook.com',
                age: '13'
            },
            {
                id: 9,
                firstName: 'Ruben',
                lastName: 'Vardan',
                username: '@ruben',
                email: 'ruben@gmail.com',
                age: '22'
            },
            {
                id: 10,
                firstName: 'Karen',
                lastName: 'Sevan',
                username: '@karen',
                email: 'karen@yandex.ru',
                age: '33'
            },
            {
                id: 11,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mark',
                email: 'mark@gmail.com',
                age: '38'
            },
            {
                id: 12,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@jacob',
                email: 'jacob@yandex.ru',
                age: '48'
            },
            {
                id: 13,
                firstName: 'Haik',
                lastName: 'Hakob',
                username: '@haik',
                email: 'haik@outlook.com',
                age: '48'
            },
            {
                id: 14,
                firstName: 'Garegin',
                lastName: 'Jirair',
                username: '@garegin',
                email: 'garegin@gmail.com',
                age: '40'
            },
            {
                id: 15,
                firstName: 'Krikor',
                lastName: 'Bedros',
                username: '@krikor',
                email: 'krikor@yandex.ru',
                age: '32'
            },
            {
                "id": 16,
                "firstName": "Francisca",
                "lastName": "Brady",
                "username": "@Gibson",
                "email": "franciscagibson@comtours.com",
                "age": 11
            },
            {
                "id": 17,
                "firstName": "Tillman",
                "lastName": "Figueroa",
                "username": "@Snow",
                "email": "tillmansnow@comtours.com",
                "age": 34
            },
            {
                "id": 18,
                "firstName": "Jimenez",
                "lastName": "Morris",
                "username": "@Bryant",
                "email": "jimenezbryant@comtours.com",
                "age": 45
            },
            {
                "id": 19,
                "firstName": "Sandoval",
                "lastName": "Jacobson",
                "username": "@Mcbride",
                "email": "sandovalmcbride@comtours.com",
                "age": 32
            },
            {
                "id": 20,
                "firstName": "Griffin",
                "lastName": "Torres",
                "username": "@Charles",
                "email": "griffincharles@comtours.com",
                "age": 19
            },
            {
                "id": 21,
                "firstName": "Cora",
                "lastName": "Parker",
                "username": "@Caldwell",
                "email": "coracaldwell@comtours.com",
                "age": 27
            },
            {
                "id": 22,
                "firstName": "Cindy",
                "lastName": "Bond",
                "username": "@Velez",
                "email": "cindyvelez@comtours.com",
                "age": 24
            },
            {
                "id": 23,
                "firstName": "Frieda",
                "lastName": "Tyson",
                "username": "@Craig",
                "email": "friedacraig@comtours.com",
                "age": 45
            },
            {
                "id": 24,
                "firstName": "Cote",
                "lastName": "Holcomb",
                "username": "@Rowe",
                "email": "coterowe@comtours.com",
                "age": 20
            },
            {
                "id": 25,
                "firstName": "Trujillo",
                "lastName": "Mejia",
                "username": "@Valenzuela",
                "email": "trujillovalenzuela@comtours.com",
                "age": 16
            },
            {
                "id": 26,
                "firstName": "Pruitt",
                "lastName": "Shepard",
                "username": "@Sloan",
                "email": "pruittsloan@comtours.com",
                "age": 44
            },
            {
                "id": 27,
                "firstName": "Sutton",
                "lastName": "Ortega",
                "username": "@Black",
                "email": "suttonblack@comtours.com",
                "age": 42
            },
            {
                "id": 28,
                "firstName": "Marion",
                "lastName": "Heath",
                "username": "@Espinoza",
                "email": "marionespinoza@comtours.com",
                "age": 47
            },
            {
                "id": 29,
                "firstName": "Newman",
                "lastName": "Hicks",
                "username": "@Keith",
                "email": "newmankeith@comtours.com",
                "age": 15
            },
            {
                "id": 30,
                "firstName": "Boyle",
                "lastName": "Larson",
                "username": "@Summers",
                "email": "boylesummers@comtours.com",
                "age": 32
            },
            {
                "id": 31,
                "firstName": "Haynes",
                "lastName": "Vinson",
                "username": "@Mckenzie",
                "email": "haynesmckenzie@comtours.com",
                "age": 15
            },
            {
                "id": 32,
                "firstName": "Miller",
                "lastName": "Acosta",
                "username": "@Young",
                "email": "milleryoung@comtours.com",
                "age": 55
            },
            {
                "id": 33,
                "firstName": "Johnston",
                "lastName": "Brown",
                "username": "@Knight",
                "email": "johnstonknight@comtours.com",
                "age": 29
            },
            {
                "id": 34,
                "firstName": "Lena",
                "lastName": "Pitts",
                "username": "@Forbes",
                "email": "lenaforbes@comtours.com",
                "age": 25
            },
            {
                "id": 35,
                "firstName": "Terrie",
                "lastName": "Kennedy",
                "username": "@Branch",
                "email": "terriebranch@comtours.com",
                "age": 37
            },
            {
                "id": 36,
                "firstName": "Louise",
                "lastName": "Aguirre",
                "username": "@Kirby",
                "email": "louisekirby@comtours.com",
                "age": 44
            },
            {
                "id": 37,
                "firstName": "David",
                "lastName": "Patton",
                "username": "@Sanders",
                "email": "davidsanders@comtours.com",
                "age": 26
            },
            {
                "id": 38,
                "firstName": "Holden",
                "lastName": "Barlow",
                "username": "@Mckinney",
                "email": "holdenmckinney@comtours.com",
                "age": 11
            },
            {
                "id": 39,
                "firstName": "Baker",
                "lastName": "Rivera",
                "username": "@Montoya",
                "email": "bakermontoya@comtours.com",
                "age": 47
            },
            {
                "id": 40,
                "firstName": "Belinda",
                "lastName": "Lloyd",
                "username": "@Calderon",
                "email": "belindacalderon@comtours.com",
                "age": 21
            },
            {
                "id": 41,
                "firstName": "Pearson",
                "lastName": "Patrick",
                "username": "@Clements",
                "email": "pearsonclements@comtours.com",
                "age": 42
            },
            {
                "id": 42,
                "firstName": "Alyce",
                "lastName": "Mckee",
                "username": "@Daugherty",
                "email": "alycedaugherty@comtours.com",
                "age": 55
            },
            {
                "id": 43,
                "firstName": "Valencia",
                "lastName": "Spence",
                "username": "@Olsen",
                "email": "valenciaolsen@comtours.com",
                "age": 20
            },
            {
                "id": 44,
                "firstName": "Leach",
                "lastName": "Holcomb",
                "username": "@Humphrey",
                "email": "leachhumphrey@comtours.com",
                "age": 28
            },
            {
                "id": 45,
                "firstName": "Moss",
                "lastName": "Baxter",
                "username": "@Fitzpatrick",
                "email": "mossfitzpatrick@comtours.com",
                "age": 51
            },
            {
                "id": 46,
                "firstName": "Jeanne",
                "lastName": "Cooke",
                "username": "@Ward",
                "email": "jeanneward@comtours.com",
                "age": 59
            },
            {
                "id": 47,
                "firstName": "Wilma",
                "lastName": "Briggs",
                "username": "@Kidd",
                "email": "wilmakidd@comtours.com",
                "age": 53
            },
            {
                "id": 48,
                "firstName": "Beatrice",
                "lastName": "Perry",
                "username": "@Gilbert",
                "email": "beatricegilbert@comtours.com",
                "age": 39
            },
            {
                "id": 49,
                "firstName": "Whitaker",
                "lastName": "Hyde",
                "username": "@Mcdonald",
                "email": "whitakermcdonald@comtours.com",
                "age": 35
            },
            {
                "id": 50,
                "firstName": "Rebekah",
                "lastName": "Duran",
                "username": "@Gross",
                "email": "rebekahgross@comtours.com",
                "age": 40
            },
            {
                "id": 51,
                "firstName": "Earline",
                "lastName": "Mayer",
                "username": "@Woodward",
                "email": "earlinewoodward@comtours.com",
                "age": 52
            },
            {
                "id": 52,
                "firstName": "Moran",
                "lastName": "Baxter",
                "username": "@Johns",
                "email": "moranjohns@comtours.com",
                "age": 20
            },
            {
                "id": 53,
                "firstName": "Nanette",
                "lastName": "Hubbard",
                "username": "@Cooke",
                "email": "nanettecooke@comtours.com",
                "age": 55
            },
            {
                "id": 54,
                "firstName": "Dalton",
                "lastName": "Walker",
                "username": "@Hendricks",
                "email": "daltonhendricks@comtours.com",
                "age": 25
            },
            {
                "id": 55,
                "firstName": "Bennett",
                "lastName": "Blake",
                "username": "@Pena",
                "email": "bennettpena@comtours.com",
                "age": 13
            },
            {
                "id": 56,
                "firstName": "Kellie",
                "lastName": "Horton",
                "username": "@Weiss",
                "email": "kellieweiss@comtours.com",
                "age": 48
            },
            {
                "id": 57,
                "firstName": "Hobbs",
                "lastName": "Talley",
                "username": "@Sanford",
                "email": "hobbssanford@comtours.com",
                "age": 28
            },
            {
                "id": 58,
                "firstName": "Mcguire",
                "lastName": "Donaldson",
                "username": "@Roman",
                "email": "mcguireroman@comtours.com",
                "age": 38
            },
            {
                "id": 59,
                "firstName": "Rodriquez",
                "lastName": "Saunders",
                "username": "@Harper",
                "email": "rodriquezharper@comtours.com",
                "age": 20
            },
            {
                "id": 60,
                "firstName": "Lou",
                "lastName": "Conner",
                "username": "@Sanchez",
                "email": "lousanchez@comtours.com",
                "age": 16
            }
        ];
        this.peopleTableData = [
            {
                id: 1,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28',
                status: 'info'
            },
            {
                id: 2,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45',
                status: 'primary'
            },
            {
                id: 3,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18',
                status: 'success'
            },
            {
                id: 4,
                firstName: 'John',
                lastName: 'Snow',
                username: '@snow',
                email: 'snow@gmail.com',
                age: '20',
                status: 'danger'
            },
            {
                id: 5,
                firstName: 'Jack',
                lastName: 'Sparrow',
                username: '@jack',
                email: 'jack@yandex.ru',
                age: '30',
                status: 'warning'
            }
        ];
        this.metricsTableData = [
            {
                image: 'app/browsers/chrome.svg',
                browser: 'Google Chrome',
                visits: '10,392',
                isVisitsUp: true,
                purchases: '4,214',
                isPurchasesUp: true,
                percent: '45%',
                isPercentUp: true
            },
            {
                image: 'app/browsers/firefox.svg',
                browser: 'Mozilla Firefox',
                visits: '7,873',
                isVisitsUp: true,
                purchases: '3,031',
                isPurchasesUp: false,
                percent: '28%',
                isPercentUp: true
            },
            {
                image: 'app/browsers/ie.svg',
                browser: 'Internet Explorer',
                visits: '5,890',
                isVisitsUp: false,
                purchases: '2,102',
                isPurchasesUp: false,
                percent: '17%',
                isPercentUp: false
            },
            {
                image: 'app/browsers/safari.svg',
                browser: 'Safari',
                visits: '4,001',
                isVisitsUp: false,
                purchases: '1,001',
                isPurchasesUp: false,
                percent: '14%',
                isPercentUp: true
            },
            {
                image: 'app/browsers/opera.svg',
                browser: 'Opera',
                visits: '1,833',
                isVisitsUp: true,
                purchases: '83',
                isPurchasesUp: true,
                percent: '5%',
                isPercentUp: false
            }
        ];
        this.users = [
            {
                "id": 1,
                "name": "Esther Vang",
                "status": 4,
                "group": 3
            },
            {
                "id": 2,
                "name": "Leah Freeman",
                "status": 3,
                "group": 1
            },
            {
                "id": 3,
                "name": "Mathews Simpson",
                "status": 3,
                "group": 2
            },
            {
                "id": 4,
                "name": "Buckley Hopkins",
                "group": 4
            },
            {
                "id": 5,
                "name": "Buckley Schwartz",
                "status": 1,
                "group": 1
            },
            {
                "id": 6,
                "name": "Mathews Hopkins",
                "status": 4,
                "group": 2
            },
            {
                "id": 7,
                "name": "Leah Vang",
                "status": 4,
                "group": 1
            },
            {
                "id": 8,
                "name": "Vang Schwartz",
                "status": 4,
                "group": 2
            },
            {
                "id": 9,
                "name": "Hopkin Esther",
                "status": 1,
                "group": 2
            },
            {
                "id": 10,
                "name": "Mathews Schwartz",
                "status": 1,
                "group": 3
            }
        ];
        this.statuses = [
            { value: 1, text: 'Good' },
            { value: 2, text: 'Awesome' },
            { value: 3, text: 'Excellent' },
        ];
        this.groups = [
            { id: 1, text: 'user' },
            { id: 2, text: 'customer' },
            { id: 3, text: 'vip' },
            { id: 4, text: 'admin' }
        ];
        this.editableTableData = this.smartTableData.slice(0, 36);
    }
    return BasicTablesService;
}());
BasicTablesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], BasicTablesService);
exports.BasicTablesService = BasicTablesService;


/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(0);

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
function isSpecificValue(val) {
    return (val instanceof Buffer
        || val instanceof Date
        || val instanceof RegExp) ? true : false;
}
function cloneSpecificValue(val) {
    if (val instanceof Buffer) {
        var x = new Buffer(val.length);
        val.copy(x);
        return x;
    }
    else if (val instanceof Date) {
        return new Date(val.getTime());
    }
    else if (val instanceof RegExp) {
        return new RegExp(val);
    }
    else {
        throw new Error('Unexpected situation');
    }
}
/**
 * Recursive cloning array.
 */
function deepCloneArray(arr) {
    var clone = [];
    arr.forEach(function (item, index) {
        if (typeof item === 'object' && item !== null) {
            if (Array.isArray(item)) {
                clone[index] = deepCloneArray(item);
            }
            else if (isSpecificValue(item)) {
                clone[index] = cloneSpecificValue(item);
            }
            else {
                clone[index] = exports.deepExtend({}, item);
            }
        }
        else {
            clone[index] = item;
        }
    });
    return clone;
}
/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
exports.deepExtend = function () {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    if (arguments.length < 1 || typeof arguments[0] !== 'object') {
        return false;
    }
    if (arguments.length < 2) {
        return arguments[0];
    }
    var target = arguments[0];
    // convert arguments to array and cut off target object
    var args = Array.prototype.slice.call(arguments, 1);
    var val, src, clone;
    args.forEach(function (obj) {
        // skip argument if it is array or isn't object
        if (typeof obj !== 'object' || Array.isArray(obj)) {
            return;
        }
        Object.keys(obj).forEach(function (key) {
            src = target[key]; // source value
            val = obj[key]; // new value
            // recursion prevention
            if (val === target) {
                return;
            }
            else if (typeof val !== 'object' || val === null) {
                target[key] = val;
                return;
            }
            else if (Array.isArray(val)) {
                target[key] = deepCloneArray(val);
                return;
            }
            else if (isSpecificValue(val)) {
                target[key] = cloneSpecificValue(val);
                return;
            }
            else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
                target[key] = exports.deepExtend({}, val);
                return;
            }
            else {
                target[key] = exports.deepExtend(src, val);
                return;
            }
        });
    });
    return target;
};
var Deferred = (function () {
    function Deferred() {
        var _this = this;
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    return Deferred;
}());
exports.Deferred = Deferred;
// getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
function getDeepFromObject(object, name, defaultValue) {
    if (object === void 0) { object = {}; }
    var keys = name.split('.');
    // clone the object
    var level = exports.deepExtend({}, object);
    keys.forEach(function (k) {
        if (level && typeof level[k] !== 'undefined') {
            level = level[k];
        }
    });
    return typeof level === 'undefined' ? defaultValue : level;
}
exports.getDeepFromObject = getDeepFromObject;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(741).Buffer))

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Column = (function () {
    function Column(id, settings, dataSet) {
        this.id = id;
        this.settings = settings;
        this.dataSet = dataSet;
        this.title = '';
        this.type = '';
        this.class = '';
        this.isSortable = false;
        this.isEditable = true;
        this.isFilterable = false;
        this.sortDirection = '';
        this.defaultSortDirection = '';
        this.config = {};
        this.process();
    }
    Column.prototype.getCompareFunction = function () {
        return this.compareFunction;
    };
    Column.prototype.getValuePrepareFunction = function () {
        return this.valuePrepareFunction;
    };
    Column.prototype.getFilterFunction = function () {
        return this.filterFunction;
    };
    Column.prototype.getCellRenderFunction = function () {
        return this.cellRenderFunction;
    };
    Column.prototype.getConfig = function () {
        return this.config;
    };
    Column.prototype.process = function () {
        this.title = this.settings['title'];
        this.class = this.settings['class'];
        this.type = this.prepareType();
        this.config = this.settings['config'];
        this.isFilterable = typeof this.settings['filter'] === 'undefined' ? true : !!this.settings['filter'];
        this.defaultSortDirection = ['asc', 'desc'].indexOf(this.settings['sortDirection']) !== -1 ? this.settings['sortDirection'] : '';
        this.isSortable = typeof this.settings['sort'] === 'undefined' ? true : !!this.settings['sort'];
        this.isEditable = typeof this.settings['editable'] === 'undefined' ? true : !!this.settings['editable'];
        this.sortDirection = this.prepareSortDirection();
        this.compareFunction = this.settings['compareFunction'];
        this.valuePrepareFunction = this.settings['valuePrepareFunction'];
        this.filterFunction = this.settings['filterFunction'];
        this.cellRenderFunction = this.settings['cellRenderFunction'];
    };
    Column.prototype.prepareType = function () {
        return this.settings['type'] || this.determineType();
    };
    Column.prototype.prepareSortDirection = function () {
        return this.settings['sort'] === 'desc' ? 'desc' : 'asc';
    };
    Column.prototype.determineType = function () {
        // TODO: determine type by data
        return 'text';
    };
    return Column;
}());
exports.Column = Column;


/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var local_sorter_1 = __webpack_require__(657);
var local_filter_1 = __webpack_require__(655);
var local_pager_1 = __webpack_require__(656);
var data_source_1 = __webpack_require__(501);
var helpers_1 = __webpack_require__(552);
var LocalDataSource = (function (_super) {
    __extends(LocalDataSource, _super);
    function LocalDataSource(data) {
        if (data === void 0) { data = []; }
        var _this = _super.call(this) || this;
        _this.data = [];
        _this.filteredAndSorted = [];
        _this.sortConf = [];
        _this.filterConf = {
            filters: [],
            andOperator: true
        };
        _this.pagingConf = {};
        _this.data = data;
        return _this;
    }
    LocalDataSource.prototype.load = function (data) {
        this.data = data;
        return _super.prototype.load.call(this, data);
    };
    LocalDataSource.prototype.prepend = function (element) {
        this.reset(true);
        this.data.unshift(element);
        return _super.prototype.prepend.call(this, element);
    };
    LocalDataSource.prototype.append = function (element) {
        this.reset(true);
        this.data.push(element);
        return _super.prototype.append.call(this, element);
    };
    LocalDataSource.prototype.add = function (element) {
        this.data.push(element);
        return _super.prototype.add.call(this, element);
    };
    LocalDataSource.prototype.remove = function (element) {
        this.data = this.data.filter(function (el) { return el !== element; });
        return _super.prototype.remove.call(this, element);
    };
    LocalDataSource.prototype.update = function (element, values) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.find(element).then(function (found) {
                found = helpers_1.deepExtend(found, values);
                _super.prototype.update.call(_this, found, values).then(resolve).catch(reject);
            }).catch(reject);
        });
    };
    LocalDataSource.prototype.find = function (element) {
        var found = this.data.find(function (el) { return el === element; });
        if (found) {
            return Promise.resolve(found);
        }
        return Promise.reject(new Error('Element was not found in the dataset'));
    };
    LocalDataSource.prototype.getElements = function () {
        var data = this.data.slice(0);
        return Promise.resolve(this.prepareData(data));
    };
    LocalDataSource.prototype.getAll = function () {
        var data = this.data.slice(0);
        return Promise.resolve(data);
    };
    LocalDataSource.prototype.reset = function (silent) {
        if (silent === void 0) { silent = false; }
        if (silent) {
            this.filterConf = {
                filters: [],
                andOperator: true
            };
            this.sortConf = [];
            this.pagingConf['page'] = 1;
        }
        else {
            this.setFilter([], true, false);
            this.setSort([], false);
            this.setPage(1);
        }
    };
    LocalDataSource.prototype.empty = function () {
        this.data = [];
        return _super.prototype.empty.call(this);
    };
    LocalDataSource.prototype.count = function () {
        return this.filteredAndSorted.length;
    };
    /**
     *
     * Array of conf objects
     * [
     *  {field: string, direction: asc|desc|null, compare: Function|null},
     * ]
     * @param conf
     * @param doEmit
     * @returns {LocalDataSource}
     */
    LocalDataSource.prototype.setSort = function (conf, doEmit) {
        if (doEmit === void 0) { doEmit = true; }
        if (conf !== null) {
            conf.forEach(function (fieldConf) {
                if (!fieldConf['field'] || typeof fieldConf['direction'] === 'undefined') {
                    throw new Error('Sort configuration object is not valid');
                }
            });
            this.sortConf = conf;
        }
        _super.prototype.setSort.call(this, conf, doEmit);
        return this;
    };
    /**
     *
     * Array of conf objects
     * [
     *  {field: string, search: string, filter: Function|null},
     * ]
     * @param conf
     * @param andOperator
     * @param doEmit
     * @returns {LocalDataSource}
     */
    LocalDataSource.prototype.setFilter = function (conf, andOperator, doEmit) {
        var _this = this;
        if (andOperator === void 0) { andOperator = true; }
        if (doEmit === void 0) { doEmit = true; }
        if (conf && conf.length > 0) {
            conf.forEach(function (fieldConf) {
                _this.addFilter(fieldConf, andOperator, false);
            });
        }
        else {
            this.filterConf = {
                filters: [],
                andOperator: true
            };
        }
        this.filterConf.andOperator = andOperator;
        this.pagingConf['page'] = 1;
        _super.prototype.setFilter.call(this, conf, andOperator, doEmit);
        return this;
    };
    LocalDataSource.prototype.addFilter = function (fieldConf, andOperator, doEmit) {
        var _this = this;
        if (andOperator === void 0) { andOperator = true; }
        if (doEmit === void 0) { doEmit = true; }
        if (!fieldConf['field'] || typeof fieldConf['search'] === 'undefined') {
            throw new Error('Filter configuration object is not valid');
        }
        var found = false;
        this.filterConf.filters.forEach(function (currentFieldConf, index) {
            if (currentFieldConf['field'] === fieldConf['field']) {
                _this.filterConf.filters[index] = fieldConf;
                found = true;
            }
        });
        if (!found) {
            this.filterConf.filters.push(fieldConf);
        }
        this.filterConf.andOperator = andOperator;
        _super.prototype.addFilter.call(this, fieldConf, andOperator, doEmit);
        return this;
    };
    LocalDataSource.prototype.setPaging = function (page, perPage, doEmit) {
        if (doEmit === void 0) { doEmit = true; }
        this.pagingConf['page'] = page;
        this.pagingConf['perPage'] = perPage;
        _super.prototype.setPaging.call(this, page, perPage, doEmit);
        return this;
    };
    LocalDataSource.prototype.setPage = function (page, doEmit) {
        if (doEmit === void 0) { doEmit = true; }
        this.pagingConf['page'] = page;
        _super.prototype.setPage.call(this, page, doEmit);
        return this;
    };
    LocalDataSource.prototype.getSort = function () {
        return this.sortConf;
    };
    LocalDataSource.prototype.getFilter = function () {
        return this.filterConf;
    };
    LocalDataSource.prototype.getPaging = function () {
        return this.pagingConf;
    };
    LocalDataSource.prototype.prepareData = function (data) {
        data = this.filter(data);
        data = this.sort(data);
        this.filteredAndSorted = data.slice(0);
        return this.paginate(data);
    };
    LocalDataSource.prototype.sort = function (data) {
        if (this.sortConf) {
            this.sortConf.forEach(function (fieldConf) {
                data = local_sorter_1.LocalSorter
                    .sort(data, fieldConf['field'], fieldConf['direction'], fieldConf['compare']);
            });
        }
        return data;
    };
    // TODO: refactor?
    LocalDataSource.prototype.filter = function (data) {
        if (this.filterConf.filters) {
            if (this.filterConf.andOperator) {
                this.filterConf.filters.forEach(function (fieldConf) {
                    data = local_filter_1.LocalFilter
                        .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']);
                });
            }
            else {
                var mergedData_1 = [];
                this.filterConf.filters.forEach(function (fieldConf) {
                    mergedData_1 = mergedData_1.concat(local_filter_1.LocalFilter
                        .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']));
                });
                // remove non unique items
                data = mergedData_1.filter(function (elem, pos, arr) {
                    return arr.indexOf(elem) === pos;
                });
            }
        }
        return data;
    };
    LocalDataSource.prototype.paginate = function (data) {
        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
            data = local_pager_1.LocalPager.paginate(data, this.pagingConf['page'], this.pagingConf['perPage']);
        }
        return data;
    };
    return LocalDataSource;
}(data_source_1.DataSource));
exports.LocalDataSource = LocalDataSource;


/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ctr_completer__ = __webpack_require__(502);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CtrRowItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtrDropdown; });


var CtrRowItem = (function () {
    function CtrRowItem(row, index) {
        this.row = row;
        this.index = index;
    }
    return CtrRowItem;
}());
var CtrDropdown = (function () {
    function CtrDropdown(completer, el) {
        this.completer = completer;
        this.el = el;
        this.rows = [];
        this.completer.registerDropdown(this);
    }
    CtrDropdown.prototype.ngOnInit = function () {
        var css = getComputedStyle(this.el.nativeElement);
        this.isScrollOn = css.maxHeight && css.overflowY === "auto";
    };
    CtrDropdown.prototype.ngOnDestroy = function () {
        this.completer.registerDropdown(null);
    };
    CtrDropdown.prototype.registerRow = function (row) {
        this.rows.push(row);
    };
    CtrDropdown.prototype.highlightRow = function (index) {
        var highlited = this.rows.find(function (row) { return row.index === index; });
        if (index < 0) {
            if (this.currHighlited) {
                this.currHighlited.row.setHighlited(false);
            }
            this.currHighlited = undefined;
            return;
        }
        if (!highlited) {
            return;
        }
        if (this.currHighlited) {
            this.currHighlited.row.setHighlited(false);
        }
        this.currHighlited = highlited;
        this.currHighlited.row.setHighlited(true);
        this.completer.onHighlighted(this.currHighlited.row.getDataItem());
    };
    CtrDropdown.prototype.clear = function () {
        this.rows = [];
    };
    CtrDropdown.prototype.onSelected = function (item) {
        this.completer.onSelected(item);
    };
    CtrDropdown.prototype.selectCurrent = function () {
        if (this.currHighlited) {
            this.onSelected(this.currHighlited.row.getDataItem());
        }
        else if (this.rows.length > 0) {
            this.onSelected(this.rows[0].row.getDataItem());
        }
    };
    CtrDropdown.prototype.nextRow = function () {
        var nextRowIndex = 0;
        if (this.currHighlited) {
            nextRowIndex = this.currHighlited.index + 1;
        }
        this.highlightRow(nextRowIndex);
        if (this.isScrollOn && this.currHighlited) {
            var row = this.currHighlited.row.getNativeElement();
            if (this.dropdownHeight() < row.getBoundingClientRect().bottom) {
                this.dropdownScrollTopTo(this.dropdownRowOffsetHeight(row));
            }
        }
    };
    CtrDropdown.prototype.prevRow = function () {
        var nextRowIndex = -1;
        if (this.currHighlited) {
            nextRowIndex = this.currHighlited.index - 1;
        }
        this.highlightRow(nextRowIndex);
        if (this.isScrollOn && this.currHighlited) {
            var rowTop = this.dropdownRowTop();
            if (rowTop < 0) {
                this.dropdownScrollTopTo(rowTop - 1);
            }
        }
    };
    CtrDropdown.prototype.dropdownScrollTopTo = function (offset) {
        this.el.nativeElement.scrollTop = this.el.nativeElement.scrollTop + offset;
    };
    CtrDropdown.prototype.dropdownRowTop = function () {
        return this.currHighlited.row.getNativeElement().getBoundingClientRect().top -
            (this.el.nativeElement.getBoundingClientRect().top +
                parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10));
    };
    CtrDropdown.prototype.dropdownHeight = function () {
        return this.el.nativeElement.getBoundingClientRect().top +
            parseInt(getComputedStyle(this.el.nativeElement).maxHeight, 10);
    };
    CtrDropdown.prototype.dropdownRowOffsetHeight = function (row) {
        var css = getComputedStyle(row);
        return row.offsetHeight +
            parseInt(css.marginTop, 10) + parseInt(css.marginBottom, 10);
    };
    CtrDropdown.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: "[ctrDropdown]",
                },] },
    ];
    /** @nocollapse */
    CtrDropdown.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__ctr_completer__["a" /* CtrCompleter */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    return CtrDropdown;
}());
//# sourceMappingURL=ctr-dropdown.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleterBaseData; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var CompleterBaseData = (function (_super) {
    __extends(CompleterBaseData, _super);
    function CompleterBaseData() {
        _super.call(this);
    }
    CompleterBaseData.prototype.cancel = function () { };
    CompleterBaseData.prototype.searchFieldss = function (searchFields) {
        this._searchFields = searchFields;
        return this;
    };
    CompleterBaseData.prototype.titleField = function (titleField) {
        this._titleField = titleField;
        return this;
    };
    CompleterBaseData.prototype.descriptionField = function (descriptionField) {
        this._descriptionField = descriptionField;
        return this;
    };
    CompleterBaseData.prototype.imageField = function (imageField) {
        this._imageField = imageField;
        return this;
    };
    CompleterBaseData.prototype.extractMatches = function (data, term) {
        var matches = [];
        if (this._searchFields && this._searchFields != "" && term != "") {
            var searchFields = this._searchFields.split(",");
            for (var i = 0; i < data.length; i++) {
                var match = false;
                for (var s = 0; s < searchFields.length && !match; s++) {
                    var value = this.extractValue(data[i], searchFields[s]) || "";
                    match = value.toString().toLowerCase().indexOf(term.toString().toLowerCase()) >= 0;
                }
                if (match) {
                    matches.push(data[i]);
                }
            }
        }
        else {
            matches = data;
        }
        return matches;
    };
    CompleterBaseData.prototype.extractTitle = function (item) {
        var _this = this;
        // split title fields and run extractValue for each and join with ' '
        return this._titleField.split(",")
            .map(function (field) {
            return _this.extractValue(item, field);
        })
            .join(" ");
    };
    CompleterBaseData.prototype.extractValue = function (obj, key) {
        var keys;
        var result;
        if (key) {
            keys = key.split(".");
            result = obj;
            for (var i = 0; i < keys.length; i++) {
                if (result) {
                    result = result[keys[i]];
                }
            }
        }
        else {
            result = obj;
        }
        return result;
    };
    CompleterBaseData.prototype.processResults = function (matches) {
        var i;
        var description;
        var image;
        var text;
        var formattedText;
        var formattedDesc;
        var results = [];
        if (matches && matches.length > 0) {
            for (i = 0; i < matches.length; i++) {
                if (this.titleField && this._titleField !== "") {
                    text = formattedText = this.extractTitle(matches[i]);
                }
                description = "";
                if (this._descriptionField) {
                    description = formattedDesc = this.extractValue(matches[i], this._descriptionField);
                }
                image = null;
                if (this._imageField) {
                    image = this.extractValue(matches[i], this._imageField);
                }
                results.push({
                    title: formattedText,
                    description: formattedDesc,
                    image: image,
                    originalObject: matches[i]
                });
            }
        }
        return results;
    };
    return CompleterBaseData;
}(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]));
//# sourceMappingURL=completer-base-data.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__completer_base_data__ = __webpack_require__(582);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalData; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var LocalData = (function (_super) {
    __extends(LocalData, _super);
    function LocalData() {
        _super.call(this);
    }
    LocalData.prototype.data = function (data) {
        var _this = this;
        if (data instanceof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]) {
            data.subscribe(function (res) {
                _this._data = res;
                if (_this.savedTerm) {
                    _this.search(_this.savedTerm);
                }
            });
        }
        else {
            this._data = data;
        }
        return this;
    };
    LocalData.prototype.search = function (term) {
        if (!this._data) {
            this.savedTerm = term;
        }
        else {
            this.savedTerm = null;
            var matches = this.extractMatches(this._data, term);
            this.next(this.processResults(matches));
        }
    };
    LocalData.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    LocalData.ctorParameters = function () { return []; };
    return LocalData;
}(__WEBPACK_IMPORTED_MODULE_2__completer_base_data__["a" /* CompleterBaseData */]));
//# sourceMappingURL=local-data.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__completer_base_data__ = __webpack_require__(582);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteData; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




var RemoteData = (function (_super) {
    __extends(RemoteData, _super);
    function RemoteData(http) {
        _super.call(this);
        this.http = http;
        this._urlFormater = null;
        this._dataField = null;
    }
    RemoteData.prototype.remoteUrl = function (remoteUrl) {
        this._remoteUrl = remoteUrl;
        return this;
    };
    RemoteData.prototype.urlFormater = function (urlFormater) {
        this._urlFormater = urlFormater;
    };
    RemoteData.prototype.dataField = function (dataField) {
        this._dataField = dataField;
    };
    RemoteData.prototype.headers = function (headers) {
        this._headers = headers;
    };
    RemoteData.prototype.search = function (term) {
        var _this = this;
        this.cancel();
        // let params = {};
        var url = "";
        if (this._urlFormater) {
            url = this._urlFormater(term);
        }
        else {
            url = this._remoteUrl + encodeURIComponent(term);
        }
        this.remoteSearch = this.http.get(url, { headers: this._headers || new __WEBPACK_IMPORTED_MODULE_0__angular_http__["Headers"]() })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var matchaes = _this.extractValue(data, _this._dataField);
            return _this.extractMatches(matchaes, term);
        })
            .map(function (matches) {
            var results = _this.processResults(matches);
            _this.next(results);
            return results;
        })
            .catch(function (err) {
            _this.error(err);
            return null;
        })
            .subscribe();
    };
    RemoteData.prototype.cancel = function () {
        if (this.remoteSearch) {
            this.remoteSearch.unsubscribe();
        }
    };
    return RemoteData;
}(__WEBPACK_IMPORTED_MODULE_3__completer_base_data__["a" /* CompleterBaseData */]));
//# sourceMappingURL=remote-data.js.map

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ng2_smart_table_component_1 = __webpack_require__(594);
exports.NG2_SMART_TABLE_DIRECTIVES = [ng2_smart_table_component_1.Ng2SmartTableComponent];


/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Cell = (function () {
    function Cell(value, row, column, dataSet) {
        this.value = value;
        this.row = row;
        this.column = column;
        this.dataSet = dataSet;
        this.newValue = '';
        this.newValue = value;
    }
    Cell.prototype.getValue = function () {
        var valid = this.column.getValuePrepareFunction() instanceof Function;
        var prepare = valid ? this.column.getValuePrepareFunction() : Cell.PREPARE;
        return prepare.call(null, this.value, this.row.getData());
    };
    Cell.prototype.getColumn = function () {
        return this.column;
    };
    Cell.prototype.getRow = function () {
        return this.row;
    };
    return Cell;
}());
Cell.PREPARE = function (value) { return value; };
exports.Cell = Cell;


/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var data_set_1 = __webpack_require__(653);
var Rx_1 = __webpack_require__(500);
var helpers_1 = __webpack_require__(552);
var Grid = (function () {
    function Grid(source, settings) {
        this.createFormShown = false;
        this.onSelectRowSource = new Rx_1.Subject();
        this.setSettings(settings);
        this.setSource(source);
    }
    Grid.prototype.showActionColumn = function (position) {
        return this.isCurrentActionsPosition(position) && this.isActionsVisible();
    };
    Grid.prototype.isCurrentActionsPosition = function (position) {
        return position == this.getSetting('actions.position');
    };
    Grid.prototype.isActionsVisible = function () {
        return this.getSetting('actions.add') || this.getSetting('actions.edit') || this.getSetting('actions.delete');
    };
    Grid.prototype.getNewRow = function () {
        return this.dataSet.newRow;
    };
    Grid.prototype.setSettings = function (settings) {
        this.settings = settings;
        this.dataSet = new data_set_1.DataSet([], this.getSetting('columns'));
        if (this.source) {
            this.source.refresh();
        }
    };
    Grid.prototype.getDataSet = function () {
        return this.dataSet;
    };
    Grid.prototype.setSource = function (source) {
        var _this = this;
        this.source = this.prepareSource(source);
        this.source.onChanged().subscribe(function (changes) { return _this.processDataChange(changes); });
        this.source.onUpdated().subscribe(function (data) {
            var changedRow = _this.dataSet.findRowByData(data);
            changedRow.setData(data);
        });
    };
    Grid.prototype.getSetting = function (name, defaultValue) {
        return helpers_1.getDeepFromObject(this.settings, name, defaultValue);
    };
    Grid.prototype.getColumns = function () {
        return this.dataSet.getColumns();
    };
    Grid.prototype.getRows = function () {
        return this.dataSet.getRows();
    };
    Grid.prototype.selectRow = function (row) {
        this.dataSet.selectRow(row);
    };
    Grid.prototype.onSelectRow = function () {
        return this.onSelectRowSource.asObservable();
    };
    Grid.prototype.edit = function (row) {
        row.isInEditing = true;
    };
    Grid.prototype.create = function (row, confirmEmitter) {
        var _this = this;
        var deferred = new helpers_1.Deferred();
        deferred.promise.then(function (newData) {
            newData = newData ? newData : row.getNewData();
            _this.source.prepend(newData).then(function () {
                _this.createFormShown = false;
                _this.dataSet.createNewRow();
            });
        }).catch(function (err) {
            // doing nothing
        });
        if (this.getSetting('add.confirmCreate')) {
            confirmEmitter.emit({
                newData: row.getNewData(),
                source: this.source,
                confirm: deferred
            });
        }
        else {
            deferred.resolve();
        }
    };
    Grid.prototype.save = function (row, confirmEmitter) {
        var _this = this;
        var deferred = new helpers_1.Deferred();
        deferred.promise.then(function (newData) {
            newData = newData ? newData : row.getNewData();
            _this.source.update(row.getData(), newData).then(function () {
                row.isInEditing = false;
            });
        }).catch(function (err) {
            // doing nothing
        });
        if (this.getSetting('edit.confirmSave')) {
            confirmEmitter.emit({
                data: row.getData(),
                newData: row.getNewData(),
                source: this.source,
                confirm: deferred
            });
        }
        else {
            deferred.resolve();
        }
    };
    Grid.prototype.delete = function (row, confirmEmitter) {
        var _this = this;
        var deferred = new helpers_1.Deferred();
        deferred.promise.then(function () {
            _this.source.remove(row.getData());
        }).catch(function (err) {
            // doing nothing
        });
        if (this.getSetting('delete.confirmDelete')) {
            confirmEmitter.emit({
                data: row.getData(),
                source: this.source,
                confirm: deferred
            });
        }
        else {
            deferred.resolve();
        }
    };
    Grid.prototype.processDataChange = function (changes) {
        if (this.shouldProcessChange(changes)) {
            this.dataSet.setData(changes['elements']);
            var row = this.determineRowToSelect(changes);
            if (row) {
                this.onSelectRowSource.next(row);
            }
        }
    };
    Grid.prototype.shouldProcessChange = function (changes) {
        if (['filter', 'sort', 'page', 'remove', 'refresh', 'load', 'paging'].indexOf(changes['action']) !== -1) {
            return true;
        }
        else if (['prepend', 'append'].indexOf(changes['action']) !== -1 && !this.getSetting('pager.display')) {
            return true;
        }
        return false;
    };
    // TODO: move to selectable? Separate directive
    Grid.prototype.determineRowToSelect = function (changes) {
        if (['load', 'page', 'filter', 'sort', 'refresh'].indexOf(changes['action']) !== -1) {
            return this.dataSet.select();
        }
        if (changes['action'] === 'remove') {
            if (changes['elements'].length === 0) {
                // we have to store which one to select as the data will be reloaded
                this.dataSet.willSelectLastRow();
            }
            else {
                return this.dataSet.selectPreviousRow();
            }
        }
        if (changes['action'] === 'append') {
            // we have to store which one to select as the data will be reloaded
            this.dataSet.willSelectLastRow();
        }
        if (changes['action'] === 'add') {
            return this.dataSet.selectFirstRow();
        }
        if (changes['action'] === 'update') {
            return this.dataSet.selectFirstRow();
        }
        if (changes['action'] === 'prepend') {
            // we have to store which one to select as the data will be reloaded
            this.dataSet.willSelectFirstRow();
        }
        return null;
    };
    Grid.prototype.prepareSource = function (source) {
        var initialSource = this.getInitialSort();
        if (initialSource && initialSource['field'] && initialSource['direction']) {
            source.setSort([initialSource], false);
        }
        if (this.getSetting('pager.display') === true) {
            source.setPaging(1, this.getSetting('pager.perPage'), false);
        }
        source.refresh();
        return source;
    };
    Grid.prototype.getInitialSort = function () {
        var sortConf = {};
        this.getColumns().forEach(function (column) {
            if (column.isSortable && column.defaultSortDirection) {
                sortConf['field'] = column.id;
                sortConf['direction'] = column.defaultSortDirection;
                sortConf['compare'] = column.getCompareFunction();
            }
        });
        return sortConf;
    };
    return Grid;
}());
exports.Grid = Grid;


/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var grid_1 = __webpack_require__(593);
var data_source_1 = __webpack_require__(501);
var helpers_1 = __webpack_require__(552);
var local_data_source_1 = __webpack_require__(555);
var Ng2SmartTableComponent = (function () {
    function Ng2SmartTableComponent() {
        this.settings = {};
        this.rowSelect = new core_1.EventEmitter();
        this.userRowSelect = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
        this.edit = new core_1.EventEmitter();
        this.create = new core_1.EventEmitter();
        this.deleteConfirm = new core_1.EventEmitter();
        this.editConfirm = new core_1.EventEmitter();
        this.createConfirm = new core_1.EventEmitter();
        this.defaultSettings = {
            mode: 'inline',
            hideHeader: false,
            hideSubHeader: false,
            actions: {
                columnTitle: 'Actions',
                add: true,
                edit: true,
                delete: true,
                position: 'left' // left|right
            },
            filter: {
                inputClass: '',
            },
            edit: {
                inputClass: '',
                editButtonContent: 'Edit',
                saveButtonContent: 'Update',
                cancelButtonContent: 'Cancel',
                confirmSave: false
            },
            add: {
                inputClass: '',
                addButtonContent: 'Add New',
                createButtonContent: 'Create',
                cancelButtonContent: 'Cancel',
                confirmCreate: false
            },
            delete: {
                deleteButtonContent: 'Delete',
                confirmDelete: false
            },
            attr: {
                id: '',
                class: '',
            },
            noDataMessage: 'No data found',
            columns: {},
            pager: {
                display: true,
                perPage: 10
            }
        };
    }
    Ng2SmartTableComponent.prototype.ngOnChanges = function (changes) {
        if (this.grid) {
            if (changes['settings']) {
                this.grid.setSettings(this.prepareSettings());
            }
            if (changes['source']) {
                this.grid.setSource(this.source);
            }
        }
        else {
            this.initGrid();
        }
    };
    Ng2SmartTableComponent.prototype.onAdd = function (event) {
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.create.emit({
                source: this.source
            });
        }
        else {
            this.grid.createFormShown = true;
        }
        return false;
    };
    Ng2SmartTableComponent.prototype.onUserSelectRow = function (row) {
        this.grid.selectRow(row);
        this.userRowSelect.emit({
            data: row.getData(),
            source: this.source
        });
        this.onSelectRow(row);
    };
    Ng2SmartTableComponent.prototype.onSelectRow = function (row) {
        this.grid.selectRow(row);
        this.rowSelect.emit({
            data: row.getData(),
            source: this.source
        });
    };
    Ng2SmartTableComponent.prototype.onEdit = function (row, event) {
        event.stopPropagation();
        this.onSelectRow(row);
        if (this.grid.getSetting('mode') === 'external') {
            this.edit.emit({
                data: row.getData(),
                source: this.source
            });
        }
        else {
            this.grid.edit(row);
        }
        return false;
    };
    Ng2SmartTableComponent.prototype.onDelete = function (row, event) {
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.delete.emit({
                data: row.getData(),
                source: this.source
            });
        }
        else {
            this.grid.delete(row, this.deleteConfirm);
        }
        return false;
    };
    Ng2SmartTableComponent.prototype.onCreate = function (row, event) {
        event.stopPropagation();
        this.grid.create(row, this.createConfirm);
        return false;
    };
    Ng2SmartTableComponent.prototype.onSave = function (row, event) {
        event.stopPropagation();
        this.grid.save(row, this.editConfirm);
        return false;
    };
    Ng2SmartTableComponent.prototype.onCancelEdit = function (row, event) {
        event.stopPropagation();
        row.isInEditing = false;
        return false;
    };
    Ng2SmartTableComponent.prototype.initGrid = function () {
        var _this = this;
        this.source = this.prepareSource();
        this.grid = new grid_1.Grid(this.source, this.prepareSettings());
        this.grid.onSelectRow().subscribe(function (row) { return _this.onSelectRow(row); });
    };
    Ng2SmartTableComponent.prototype.prepareSource = function () {
        if (this.source instanceof data_source_1.DataSource) {
            return this.source;
        }
        else if (this.source instanceof Array) {
            return new local_data_source_1.LocalDataSource(this.source);
        }
        return new local_data_source_1.LocalDataSource();
    };
    Ng2SmartTableComponent.prototype.prepareSettings = function () {
        return helpers_1.deepExtend({}, this.defaultSettings, this.settings);
    };
    return Ng2SmartTableComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Ng2SmartTableComponent.prototype, "source", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Ng2SmartTableComponent.prototype, "settings", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Ng2SmartTableComponent.prototype, "rowSelect", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Ng2SmartTableComponent.prototype, "userRowSelect", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Ng2SmartTableComponent.prototype, "delete", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Ng2SmartTableComponent.prototype, "edit", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Ng2SmartTableComponent.prototype, "create", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Ng2SmartTableComponent.prototype, "deleteConfirm", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Ng2SmartTableComponent.prototype, "editConfirm", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Ng2SmartTableComponent.prototype, "createConfirm", void 0);
Ng2SmartTableComponent = __decorate([
    core_1.Component({
        selector: 'ng2-smart-table',
        styles: [__webpack_require__(770)],
        template: __webpack_require__(765),
    })
], Ng2SmartTableComponent);
exports.Ng2SmartTableComponent = Ng2SmartTableComponent;


/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
__webpack_require__(862);
var BasicTables = (function () {
    function BasicTables() {
    }
    return BasicTables;
}());
BasicTables = __decorate([
    core_1.Component({
        selector: 'basic-tables',
        template: __webpack_require__(827)
    }),
    __metadata("design:paramtypes", [])
], BasicTables);
exports.BasicTables = BasicTables;


/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var smartTables_service_1 = __webpack_require__(624);
var ng2_smart_table_1 = __webpack_require__(641);
var SmartTables = (function () {
    function SmartTables(service) {
        var _this = this;
        this.service = service;
        this.query = '';
        this.settings = {
            add: {
                addButtonContent: '<i class="ion-ios-plus-outline"></i>',
                createButtonContent: '<i class="ion-checkmark"></i>',
                cancelButtonContent: '<i class="ion-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="ion-edit"></i>',
                saveButtonContent: '<i class="ion-checkmark"></i>',
                cancelButtonContent: '<i class="ion-close"></i>',
            },
            delete: {
                deleteButtonContent: '<i class="ion-trash-a"></i>',
                confirmDelete: true
            },
            columns: {
                id: {
                    title: 'ID',
                    type: 'number'
                },
                firstName: {
                    title: 'First Name',
                    type: 'string'
                },
                lastName: {
                    title: 'Last Name',
                    type: 'string'
                },
                username: {
                    title: 'Username',
                    type: 'string'
                },
                email: {
                    title: 'E-mail',
                    type: 'string'
                },
                age: {
                    title: 'Age',
                    type: 'number'
                }
            }
        };
        this.source = new ng2_smart_table_1.LocalDataSource();
        this.service.getData().then(function (data) {
            _this.source.load(data);
        });
    }
    SmartTables.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    return SmartTables;
}());
SmartTables = __decorate([
    core_1.Component({
        selector: 'basic-tables',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [__webpack_require__(791)],
        template: __webpack_require__(834),
    }),
    __metadata("design:paramtypes", [smartTables_service_1.SmartTablesService])
], SmartTables);
exports.SmartTables = SmartTables;


/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(2);
var SmartTablesService = (function () {
    function SmartTablesService() {
        this.smartTableData = [
            {
                id: 1,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28'
            },
            {
                id: 2,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45'
            },
            {
                id: 3,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18'
            },
            {
                id: 4,
                firstName: 'John',
                lastName: 'Snow',
                username: '@snow',
                email: 'snow@gmail.com',
                age: '20'
            },
            {
                id: 5,
                firstName: 'Jack',
                lastName: 'Sparrow',
                username: '@jack',
                email: 'jack@yandex.ru',
                age: '30'
            },
            {
                id: 6,
                firstName: 'Ann',
                lastName: 'Smith',
                username: '@ann',
                email: 'ann@gmail.com',
                age: '21'
            },
            {
                id: 7,
                firstName: 'Barbara',
                lastName: 'Black',
                username: '@barbara',
                email: 'barbara@yandex.ru',
                age: '43'
            },
            {
                id: 8,
                firstName: 'Sevan',
                lastName: 'Bagrat',
                username: '@sevan',
                email: 'sevan@outlook.com',
                age: '13'
            },
            {
                id: 9,
                firstName: 'Ruben',
                lastName: 'Vardan',
                username: '@ruben',
                email: 'ruben@gmail.com',
                age: '22'
            },
            {
                id: 10,
                firstName: 'Karen',
                lastName: 'Sevan',
                username: '@karen',
                email: 'karen@yandex.ru',
                age: '33'
            },
            {
                id: 11,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mark',
                email: 'mark@gmail.com',
                age: '38'
            },
            {
                id: 12,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@jacob',
                email: 'jacob@yandex.ru',
                age: '48'
            },
            {
                id: 13,
                firstName: 'Haik',
                lastName: 'Hakob',
                username: '@haik',
                email: 'haik@outlook.com',
                age: '48'
            },
            {
                id: 14,
                firstName: 'Garegin',
                lastName: 'Jirair',
                username: '@garegin',
                email: 'garegin@gmail.com',
                age: '40'
            },
            {
                id: 15,
                firstName: 'Krikor',
                lastName: 'Bedros',
                username: '@krikor',
                email: 'krikor@yandex.ru',
                age: '32'
            },
            {
                "id": 16,
                "firstName": "Francisca",
                "lastName": "Brady",
                "username": "@Gibson",
                "email": "franciscagibson@comtours.com",
                "age": 11
            },
            {
                "id": 17,
                "firstName": "Tillman",
                "lastName": "Figueroa",
                "username": "@Snow",
                "email": "tillmansnow@comtours.com",
                "age": 34
            },
            {
                "id": 18,
                "firstName": "Jimenez",
                "lastName": "Morris",
                "username": "@Bryant",
                "email": "jimenezbryant@comtours.com",
                "age": 45
            },
            {
                "id": 19,
                "firstName": "Sandoval",
                "lastName": "Jacobson",
                "username": "@Mcbride",
                "email": "sandovalmcbride@comtours.com",
                "age": 32
            },
            {
                "id": 20,
                "firstName": "Griffin",
                "lastName": "Torres",
                "username": "@Charles",
                "email": "griffincharles@comtours.com",
                "age": 19
            },
            {
                "id": 21,
                "firstName": "Cora",
                "lastName": "Parker",
                "username": "@Caldwell",
                "email": "coracaldwell@comtours.com",
                "age": 27
            },
            {
                "id": 22,
                "firstName": "Cindy",
                "lastName": "Bond",
                "username": "@Velez",
                "email": "cindyvelez@comtours.com",
                "age": 24
            },
            {
                "id": 23,
                "firstName": "Frieda",
                "lastName": "Tyson",
                "username": "@Craig",
                "email": "friedacraig@comtours.com",
                "age": 45
            },
            {
                "id": 24,
                "firstName": "Cote",
                "lastName": "Holcomb",
                "username": "@Rowe",
                "email": "coterowe@comtours.com",
                "age": 20
            },
            {
                "id": 25,
                "firstName": "Trujillo",
                "lastName": "Mejia",
                "username": "@Valenzuela",
                "email": "trujillovalenzuela@comtours.com",
                "age": 16
            },
            {
                "id": 26,
                "firstName": "Pruitt",
                "lastName": "Shepard",
                "username": "@Sloan",
                "email": "pruittsloan@comtours.com",
                "age": 44
            },
            {
                "id": 27,
                "firstName": "Sutton",
                "lastName": "Ortega",
                "username": "@Black",
                "email": "suttonblack@comtours.com",
                "age": 42
            },
            {
                "id": 28,
                "firstName": "Marion",
                "lastName": "Heath",
                "username": "@Espinoza",
                "email": "marionespinoza@comtours.com",
                "age": 47
            },
            {
                "id": 29,
                "firstName": "Newman",
                "lastName": "Hicks",
                "username": "@Keith",
                "email": "newmankeith@comtours.com",
                "age": 15
            },
            {
                "id": 30,
                "firstName": "Boyle",
                "lastName": "Larson",
                "username": "@Summers",
                "email": "boylesummers@comtours.com",
                "age": 32
            },
            {
                "id": 31,
                "firstName": "Haynes",
                "lastName": "Vinson",
                "username": "@Mckenzie",
                "email": "haynesmckenzie@comtours.com",
                "age": 15
            },
            {
                "id": 32,
                "firstName": "Miller",
                "lastName": "Acosta",
                "username": "@Young",
                "email": "milleryoung@comtours.com",
                "age": 55
            },
            {
                "id": 33,
                "firstName": "Johnston",
                "lastName": "Brown",
                "username": "@Knight",
                "email": "johnstonknight@comtours.com",
                "age": 29
            },
            {
                "id": 34,
                "firstName": "Lena",
                "lastName": "Pitts",
                "username": "@Forbes",
                "email": "lenaforbes@comtours.com",
                "age": 25
            },
            {
                "id": 35,
                "firstName": "Terrie",
                "lastName": "Kennedy",
                "username": "@Branch",
                "email": "terriebranch@comtours.com",
                "age": 37
            },
            {
                "id": 36,
                "firstName": "Louise",
                "lastName": "Aguirre",
                "username": "@Kirby",
                "email": "louisekirby@comtours.com",
                "age": 44
            },
            {
                "id": 37,
                "firstName": "David",
                "lastName": "Patton",
                "username": "@Sanders",
                "email": "davidsanders@comtours.com",
                "age": 26
            },
            {
                "id": 38,
                "firstName": "Holden",
                "lastName": "Barlow",
                "username": "@Mckinney",
                "email": "holdenmckinney@comtours.com",
                "age": 11
            },
            {
                "id": 39,
                "firstName": "Baker",
                "lastName": "Rivera",
                "username": "@Montoya",
                "email": "bakermontoya@comtours.com",
                "age": 47
            },
            {
                "id": 40,
                "firstName": "Belinda",
                "lastName": "Lloyd",
                "username": "@Calderon",
                "email": "belindacalderon@comtours.com",
                "age": 21
            },
            {
                "id": 41,
                "firstName": "Pearson",
                "lastName": "Patrick",
                "username": "@Clements",
                "email": "pearsonclements@comtours.com",
                "age": 42
            },
            {
                "id": 42,
                "firstName": "Alyce",
                "lastName": "Mckee",
                "username": "@Daugherty",
                "email": "alycedaugherty@comtours.com",
                "age": 55
            },
            {
                "id": 43,
                "firstName": "Valencia",
                "lastName": "Spence",
                "username": "@Olsen",
                "email": "valenciaolsen@comtours.com",
                "age": 20
            },
            {
                "id": 44,
                "firstName": "Leach",
                "lastName": "Holcomb",
                "username": "@Humphrey",
                "email": "leachhumphrey@comtours.com",
                "age": 28
            },
            {
                "id": 45,
                "firstName": "Moss",
                "lastName": "Baxter",
                "username": "@Fitzpatrick",
                "email": "mossfitzpatrick@comtours.com",
                "age": 51
            },
            {
                "id": 46,
                "firstName": "Jeanne",
                "lastName": "Cooke",
                "username": "@Ward",
                "email": "jeanneward@comtours.com",
                "age": 59
            },
            {
                "id": 47,
                "firstName": "Wilma",
                "lastName": "Briggs",
                "username": "@Kidd",
                "email": "wilmakidd@comtours.com",
                "age": 53
            },
            {
                "id": 48,
                "firstName": "Beatrice",
                "lastName": "Perry",
                "username": "@Gilbert",
                "email": "beatricegilbert@comtours.com",
                "age": 39
            },
            {
                "id": 49,
                "firstName": "Whitaker",
                "lastName": "Hyde",
                "username": "@Mcdonald",
                "email": "whitakermcdonald@comtours.com",
                "age": 35
            },
            {
                "id": 50,
                "firstName": "Rebekah",
                "lastName": "Duran",
                "username": "@Gross",
                "email": "rebekahgross@comtours.com",
                "age": 40
            },
            {
                "id": 51,
                "firstName": "Earline",
                "lastName": "Mayer",
                "username": "@Woodward",
                "email": "earlinewoodward@comtours.com",
                "age": 52
            },
            {
                "id": 52,
                "firstName": "Moran",
                "lastName": "Baxter",
                "username": "@Johns",
                "email": "moranjohns@comtours.com",
                "age": 20
            },
            {
                "id": 53,
                "firstName": "Nanette",
                "lastName": "Hubbard",
                "username": "@Cooke",
                "email": "nanettecooke@comtours.com",
                "age": 55
            },
            {
                "id": 54,
                "firstName": "Dalton",
                "lastName": "Walker",
                "username": "@Hendricks",
                "email": "daltonhendricks@comtours.com",
                "age": 25
            },
            {
                "id": 55,
                "firstName": "Bennett",
                "lastName": "Blake",
                "username": "@Pena",
                "email": "bennettpena@comtours.com",
                "age": 13
            },
            {
                "id": 56,
                "firstName": "Kellie",
                "lastName": "Horton",
                "username": "@Weiss",
                "email": "kellieweiss@comtours.com",
                "age": 48
            },
            {
                "id": 57,
                "firstName": "Hobbs",
                "lastName": "Talley",
                "username": "@Sanford",
                "email": "hobbssanford@comtours.com",
                "age": 28
            },
            {
                "id": 58,
                "firstName": "Mcguire",
                "lastName": "Donaldson",
                "username": "@Roman",
                "email": "mcguireroman@comtours.com",
                "age": 38
            },
            {
                "id": 59,
                "firstName": "Rodriquez",
                "lastName": "Saunders",
                "username": "@Harper",
                "email": "rodriquezharper@comtours.com",
                "age": 20
            },
            {
                "id": 60,
                "firstName": "Lou",
                "lastName": "Conner",
                "username": "@Sanchez",
                "email": "lousanchez@comtours.com",
                "age": 16
            }
        ];
        this.metricsTableData = [
            {
                image: 'app/browsers/chrome.svg',
                browser: 'Google Chrome',
                visits: '10,392',
                isVisitsUp: true,
                purchases: '4,214',
                isPurchasesUp: true,
                percent: '45%',
                isPercentUp: true
            },
            {
                image: 'app/browsers/firefox.svg',
                browser: 'Mozilla Firefox',
                visits: '7,873',
                isVisitsUp: true,
                purchases: '3,031',
                isPurchasesUp: false,
                percent: '28%',
                isPercentUp: true
            },
            {
                image: 'app/browsers/ie.svg',
                browser: 'Internet Explorer',
                visits: '5,890',
                isVisitsUp: false,
                purchases: '2,102',
                isPurchasesUp: false,
                percent: '17%',
                isPercentUp: false
            },
            {
                image: 'app/browsers/safari.svg',
                browser: 'Safari',
                visits: '4,001',
                isVisitsUp: false,
                purchases: '1,001',
                isPurchasesUp: false,
                percent: '14%',
                isPercentUp: true
            },
            {
                image: 'app/browsers/opera.svg',
                browser: 'Opera',
                visits: '1,833',
                isVisitsUp: true,
                purchases: '83',
                isPurchasesUp: true,
                percent: '5%',
                isPercentUp: false
            }
        ];
    }
    SmartTablesService.prototype.getData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(_this.smartTableData);
            }, 2000);
        });
    };
    return SmartTablesService;
}());
SmartTablesService = __decorate([
    core_1.Injectable()
], SmartTablesService);
exports.SmartTablesService = SmartTablesService;


/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var Tables = (function () {
    function Tables() {
    }
    return Tables;
}());
Tables = __decorate([
    core_1.Component({
        selector: 'forms',
        styles: [],
        template: "<router-outlet></router-outlet>"
    }),
    __metadata("design:paramtypes", [])
], Tables);
exports.Tables = Tables;


/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_ctr_completer__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleterCmp; });






var noop = function () { };
var COMPLETER_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return CompleterCmp; }),
    multi: true
};
var CompleterCmp = (function () {
    function CompleterCmp() {
        this.inputName = "";
        this.pause = __WEBPACK_IMPORTED_MODULE_3__globals__["b" /* PAUSE */];
        this.minSearchLength = __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* MIN_SEARCH_LENGTH */];
        this.maxChars = __WEBPACK_IMPORTED_MODULE_3__globals__["d" /* MAX_CHARS */];
        this.overrideSuggested = false;
        this.clearSelected = false;
        this.fillHighlighted = true;
        this.placeholder = "";
        this.textSearching = __WEBPACK_IMPORTED_MODULE_3__globals__["e" /* TEXT_SEARCHING */];
        this.textNoResults = __WEBPACK_IMPORTED_MODULE_3__globals__["f" /* TEXT_NORESULTS */];
        this.autoMatch = false;
        this.disableInput = false;
        this.autofocus = false;
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.highlighted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.blur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.searchStr = "";
        this.control = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("");
        this.displaySearching = true;
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
    }
    Object.defineProperty(CompleterCmp.prototype, "value", {
        get: function () { return this.searchStr; },
        set: function (v) {
            if (v !== this.searchStr) {
                this.searchStr = v;
            }
            // Propagate the change in any case
            this._onChangeCallback(v);
        },
        enumerable: true,
        configurable: true
    });
    ;
    CompleterCmp.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    CompleterCmp.prototype.writeValue = function (value) {
        this.searchStr = value;
    };
    CompleterCmp.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    CompleterCmp.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    CompleterCmp.prototype.ngOnInit = function () {
        var _this = this;
        this.completer.selected.subscribe(function (item) {
            var title = item ? item.title : "";
            _this.selected.emit(item);
            _this._onChangeCallback(title);
        });
        this.completer.highlighted.subscribe(function (item) {
            _this.highlighted.emit(item);
        });
        if (this.textSearching === "false") {
            this.displaySearching = false;
        }
    };
    CompleterCmp.prototype.onBlur = function () {
        this.blur.emit();
        this.onTouched();
    };
    CompleterCmp.prototype.onChange = function (value) {
        this.value = value;
    };
    CompleterCmp.prototype.open = function (searchValue) {
        if (searchValue === void 0) { searchValue = ""; }
        this.completer.search(searchValue);
    };
    CompleterCmp.prototype.close = function () {
        this.completer.clear();
    };
    CompleterCmp.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: "ng2-completer",
                    template: "\n        <div class=\"completer-holder\" ctrCompleter>\n            <input type=\"search\" class=\"completer-input\" ctrInput [ngClass]=\"inputClass\" [(ngModel)]=\"searchStr\" (ngModelChange)=\"onChange($event)\" [attr.name]=\"inputName\" [placeholder]=\"placeholder\"\n                [attr.maxlength]=\"maxChars\" [tabindex]=\"fieldTabindex\" [disabled]=\"disableInput\" [clearSelected]=\"clearSelected\" [overrideSuggested]=\"overrideSuggested\" \n                [fillHighlighted]=\"fillHighlighted\" (blur)=\"onBlur()\" [autofocus]=\"autofocus\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" />\n\n            <div class=\"completer-dropdown-holder\" *ctrList=\"dataService; minSearchLength: minSearchLength; pause: pause; autoMatch: autoMatch; let items = results; let searchActive = searching; let isInitialized = searchInitialized;\">\n                <div class=\"completer-dropdown\" ctrDropdown *ngIf=\"isInitialized\">\n                    <div *ngIf=\"searchActive && displaySearching\" class=\"completer-searching\">{{textSearching}}</div>\n                    <div *ngIf=\"!searchActive && (!items || items.length === 0)\" class=\"completer-no-results\">{{textNoResults}}</div>\n                    <div class=\"completer-row-wrapper\" *ngFor=\"let item of items; let rowIndex=index\">\n                        <div class=\"completer-row\" [ctrRow]=\"rowIndex\" [dataItem]=\"item\">\n                            <div *ngIf=\"item.image || item.image === ''\" class=\"completer-image-holder\">\n                                <img *ngIf=\"item.image != ''\" src=\"{{item.image}}\" class=\"completer-image\" />\n                                <div *ngIf=\"item.image === ''\" class=\"completer-image-default\"></div>\n                            </div>\n                            <div class=\"completer-item-text\" [ngClass]=\"{'completer-item-text-image': item.image || item.image === '' }\">\n                                <completer-list-item class=\"completer-title\" [text]=\"item.title\" [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'title'\"></completer-list-item>\n                                <completer-list-item *ngIf=\"item.description && item.description != ''\" class=\"completer-description\" [text]=\"item.description\"\n                                    [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'description'\">\n                                </completer-list-item>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
                    styles: ["\n    .completer-dropdown {\n        border-color: #ececec;\n        border-width: 1px;\n        border-style: solid;\n        border-radius: 2px;\n        width: 250px;\n        padding: 6px;\n        cursor: pointer;\n        z-index: 9999;\n        position: absolute;\n        margin-top: -6px;\n        background-color: #ffffff;\n    }\n\n    .completer-row {\n        padding: 5px;\n        color: #000000;\n        margin-bottom: 4px;\n        clear: both;\n        display: inline-block;\n        width: 103%;\n    }\n\n    .completer-selected-row {\n        background-color: lightblue;\n        color: #ffffff;\n    }\n\n    .completer-description {\n        font-size: 14px;\n    }\n\n    .completer-image-default {\n        width: 16px; \n        height: 16px;\n        background-image: url(\"demo/res/img/default.png\");\n    }\n\n    .completer-image-holder {\n        float: left;\n        width: 10%;\n    }\n    .completer-item-text-image {\n        float: right;\n        width: 90%;\n    }\n    "],
                    providers: [COMPLETER_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    CompleterCmp.ctorParameters = function () { return []; };
    CompleterCmp.propDecorators = {
        'dataService': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'inputName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pause': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'minSearchLength': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxChars': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'overrideSuggested': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'clearSelected': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'fillHighlighted': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'placeholder': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'matchClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'textSearching': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'textNoResults': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'fieldTabindex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'autoMatch': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'disableInput': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'inputClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'autofocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'selected': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'highlighted': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'blur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'completer': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: [__WEBPACK_IMPORTED_MODULE_2__directives_ctr_completer__["a" /* CtrCompleter */],] },],
    };
    return CompleterCmp;
}());
//# sourceMappingURL=completer-cmp.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ctr_completer__ = __webpack_require__(502);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtrInput; });


// keyboard events
var KEY_DW = 40;
var KEY_RT = 39;
var KEY_UP = 38;
var KEY_LF = 37;
var KEY_ES = 27;
var KEY_EN = 13;
var KEY_TAB = 9;
var CtrInput = (function () {
    function CtrInput(completer) {
        var _this = this;
        this.completer = completer;
        this.clearSelected = false;
        this.overrideSuggested = false;
        this.fillHighlighted = true;
        this.ngModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._searchStr = "";
        this._displayStr = "";
        this._selectedItem = null;
        this.completer.selected.subscribe(function (item) {
            _this._selectedItem = item;
            if (!item) {
                return;
            }
            if (_this.clearSelected) {
                _this.searchStr = "";
            }
            else {
                _this.searchStr = item.title;
            }
            _this.ngModelChange.emit(_this.searchStr);
        });
        this.completer.highlighted.subscribe(function (item) {
            if (_this.fillHighlighted) {
                _this._displayStr = item.title;
                _this.ngModelChange.emit(item.title);
            }
        });
    }
    CtrInput.prototype.onInputChange = function (event) {
        this.searchStr = event.target.value;
    };
    CtrInput.prototype.keyupHandler = function (event) {
        if (event.keyCode === KEY_LF || event.keyCode === KEY_RT || event.keyCode === KEY_TAB) {
            // do nothing
            return;
        }
        if (event.keyCode === KEY_UP || event.keyCode === KEY_EN) {
            event.preventDefault();
        }
        else if (event.keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.search(this.searchStr);
        }
        else if (event.keyCode === KEY_ES) {
            this._searchStr = this._displayStr;
            this.completer.clear();
        }
        else {
            if (!this.searchStr) {
                this.completer.clear();
                return;
            }
            this.completer.search(this.searchStr);
        }
    };
    CtrInput.prototype.keydownHandler = function (event) {
        if (event.keyCode === KEY_EN) {
            if (this.completer.hasHighlited()) {
                event.preventDefault();
            }
            this.completer.selectCurrent();
        }
        else if (event.keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.nextRow();
        }
        else if (event.keyCode === KEY_UP) {
            event.preventDefault();
            this.completer.prevRow();
        }
        else if (event.keyCode === KEY_TAB) {
            if (this.overrideSuggested && this._selectedItem) {
                this.completer.onSelected({ title: this.searchStr, originalObject: null });
            }
            else {
                this.completer.selectCurrent();
            }
        }
        else if (event.keyCode === KEY_ES) {
            // This is very specific to IE10/11 #272
            // without this, IE clears the input text
            event.preventDefault();
        }
    };
    CtrInput.prototype.onBlur = function (event) {
        var _this = this;
        setTimeout(function () {
            if (_this.overrideSuggested) {
                _this.completer.onSelected({ title: _this.searchStr, originalObject: null });
            }
            _this.completer.clear();
        }, 200);
    };
    Object.defineProperty(CtrInput.prototype, "searchStr", {
        get: function () {
            return this._searchStr;
        },
        set: function (term) {
            this._searchStr = term;
            this._displayStr = term;
        },
        enumerable: true,
        configurable: true
    });
    CtrInput.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: "[ctrInput]",
                },] },
    ];
    /** @nocollapse */
    CtrInput.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__ctr_completer__["a" /* CtrCompleter */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
    ]; };
    CtrInput.propDecorators = {
        'clearSelected': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ["clearSelected",] },],
        'overrideSuggested': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ["overrideSuggested",] },],
        'fillHighlighted': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ["fillHighlighted",] },],
        'ngModelChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onInputChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ["input", ["$event"],] },],
        'keyupHandler': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ["keyup", ["$event"],] },],
        'keydownHandler': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ["keydown", ["$event"],] },],
        'onBlur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ["blur", ["$event"],] },],
    };
    return CtrInput;
}());
//# sourceMappingURL=ctr-input.js.map

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ctr_completer__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__(638);
/* unused harmony export CtrListContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtrList; });




var CtrListContext = (function () {
    function CtrListContext(results, searching, searchInitialized) {
        this.results = results;
        this.searching = searching;
        this.searchInitialized = searchInitialized;
    }
    return CtrListContext;
}());
var CtrList = (function () {
    function CtrList(completer, templateRef, viewContainer, cd) {
        this.completer = completer;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.ctrListMinSearchLength = __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* MIN_SEARCH_LENGTH */];
        this.ctrListPause = __WEBPACK_IMPORTED_MODULE_3__globals__["b" /* PAUSE */];
        this.ctrListAutoMatch = false;
        // private results: CompleterItem[] = [];
        this.term = null;
        // private searching = false;
        this.searchTimer = null;
        this.clearTimer = null;
        this.ctx = new CtrListContext([], false, false);
    }
    CtrList.hasTerm = function (term) {
        return term || term === "";
    };
    CtrList.prototype.ngOnInit = function () {
        this.completer.registerList(this);
        this.viewContainer.createEmbeddedView(this.templateRef, new CtrListContext([], false, false));
    };
    Object.defineProperty(CtrList.prototype, "dataService", {
        set: function (newService) {
            var _this = this;
            this._dataService = newService;
            if (this._dataService) {
                this._dataService
                    .catch(function (err) { return _this.handleError(err); })
                    .subscribe(function (results) {
                    _this.ctx.searchInitialized = true;
                    _this.ctx.searching = false;
                    _this.ctx.results = results;
                    if (_this.ctrListAutoMatch && results.length === 1 && results[0].title && CtrList.hasTerm(_this.term) &&
                        results[0].title.toLocaleLowerCase() === _this.term.toLocaleLowerCase()) {
                        // Do automatch
                        _this.completer.onSelected(results[0]);
                    }
                    _this.refreshTemplate();
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    CtrList.prototype.search = function (term) {
        var _this = this;
        if (this.term != term) {
            // Clear selected value
            this.completer.clear();
        }
        if (CtrList.hasTerm(term) && term.length >= this.ctrListMinSearchLength && this.term !== term) {
            if (this.searchTimer) {
                this.searchTimer.unsubscribe();
                this.searchTimer = null;
            }
            if (!this.ctx.searching) {
                this.ctx.results = [];
                this.ctx.searching = true;
                this.ctx.searchInitialized = true;
                this.refreshTemplate();
            }
            if (this.clearTimer) {
                this.clearTimer.unsubscribe();
            }
            this.searchTimer = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].timer(this.ctrListPause).subscribe(function () {
                _this.searchTimerComplete(term);
            });
        }
    };
    CtrList.prototype.clear = function () {
        var _this = this;
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
        }
        this.clearTimer = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].timer(__WEBPACK_IMPORTED_MODULE_3__globals__["c" /* CLEAR_TIMEOUT */]).subscribe(function () {
            _this._clear();
        });
    };
    CtrList.prototype._clear = function () {
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
            this.searchTimer = null;
        }
        if (this.dataService) {
            this.dataService.cancel();
        }
        this.ctx.results = [];
        this.ctx.searchInitialized = false;
        this.term = null;
        this.viewContainer.clear();
    };
    CtrList.prototype.searchTimerComplete = function (term) {
        // Begin the search
        if (!CtrList.hasTerm(term) || term.length < this.ctrListMinSearchLength) {
            this.ctx.searching = false;
            return;
        }
        this.term = term;
        this._dataService.search(term);
    };
    CtrList.prototype.handleError = function (error) {
        this.ctx.searching = false;
        var errMsg = "search error";
        if (error) {
            errMsg = (error.message) ? error.message :
                error.status ? error.status + " - " + error.statusText : "Server error";
        }
        if (console && console.error) {
            console.error(errMsg); // log to console 
        }
        this.refreshTemplate();
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(errMsg);
    };
    CtrList.prototype.refreshTemplate = function () {
        // Recreate the template
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef, this.ctx);
        this.cd.markForCheck();
    };
    CtrList.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: "[ctrList]",
                },] },
    ];
    /** @nocollapse */
    CtrList.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__ctr_completer__["a" /* CtrCompleter */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    CtrList.propDecorators = {
        'ctrListMinSearchLength': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'ctrListPause': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'ctrListAutoMatch': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dataService': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ["ctrList",] },],
    };
    return CtrList;
}());
//# sourceMappingURL=ctr-list.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ctr_dropdown__ = __webpack_require__(581);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtrRow; });


var CtrRow = (function () {
    function CtrRow(el, renderer, dropdown) {
        this.el = el;
        this.renderer = renderer;
        this.dropdown = dropdown;
        this.selected = false;
    }
    CtrRow.prototype.ngOnInit = function () {
        this.dropdown.registerRow(new __WEBPACK_IMPORTED_MODULE_1__ctr_dropdown__["b" /* CtrRowItem */](this, this._rowIndex));
    };
    Object.defineProperty(CtrRow.prototype, "ctrRow", {
        set: function (index) {
            this._rowIndex = index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CtrRow.prototype, "dataItem", {
        set: function (item) {
            this._item = item;
        },
        enumerable: true,
        configurable: true
    });
    CtrRow.prototype.onClick = function (event) {
        this.dropdown.onSelected(this._item);
    };
    CtrRow.prototype.onMouseEnter = function (event) {
        this.dropdown.highlightRow(this._rowIndex);
    };
    CtrRow.prototype.setHighlited = function (selected) {
        this.selected = selected;
        this.renderer.setElementClass(this.el.nativeElement, "completer-selected-row", this.selected);
    };
    CtrRow.prototype.getNativeElement = function () {
        return this.el.nativeElement;
    };
    CtrRow.prototype.getDataItem = function () {
        return this._item;
    };
    CtrRow.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: "[ctrRow]",
                },] },
    ];
    /** @nocollapse */
    CtrRow.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__ctr_dropdown__["a" /* CtrDropdown */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
    ]; };
    CtrRow.propDecorators = {
        'ctrRow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dataItem': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ["click", ["$event"],] },],
        'onMouseEnter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ["mouseenter", ["$event"],] },],
    };
    return CtrRow;
}());
//# sourceMappingURL=ctr-row.js.map

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MAX_CHARS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MIN_SEARCH_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TEXT_SEARCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TEXT_NORESULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CLEAR_TIMEOUT; });
var MAX_CHARS = 524288; // the default max length per the html maxlength attribute
var MIN_SEARCH_LENGTH = 3;
var PAUSE = 250;
var TEXT_SEARCHING = "Searching...";
var TEXT_NORESULTS = "No results found";
var CLEAR_TIMEOUT = 100;
//# sourceMappingURL=globals.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng2_completer_module__ = __webpack_require__(753);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2CompleterModule", function() { return __WEBPACK_IMPORTED_MODULE_0__ng2_completer_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_completer_cmp__ = __webpack_require__(634);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CompleterCmp", function() { return __WEBPACK_IMPORTED_MODULE_1__components_completer_cmp__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_completer_service__ = __webpack_require__(640);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CompleterService", function() { return __WEBPACK_IMPORTED_MODULE_2__services_completer_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_local_data__ = __webpack_require__(583);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LocalData", function() { return __WEBPACK_IMPORTED_MODULE_3__services_local_data__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_remote_data__ = __webpack_require__(584);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteData", function() { return __WEBPACK_IMPORTED_MODULE_4__services_remote_data__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_completer_base_data__ = __webpack_require__(582);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CompleterBaseData", function() { return __WEBPACK_IMPORTED_MODULE_5__services_completer_base_data__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_ctr_completer__ = __webpack_require__(502);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CtrCompleter", function() { return __WEBPACK_IMPORTED_MODULE_6__directives_ctr_completer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_ctr_dropdown__ = __webpack_require__(581);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CtrDropdown", function() { return __WEBPACK_IMPORTED_MODULE_7__directives_ctr_dropdown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_ctr_input__ = __webpack_require__(635);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CtrInput", function() { return __WEBPACK_IMPORTED_MODULE_8__directives_ctr_input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_ctr_list__ = __webpack_require__(636);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CtrList", function() { return __WEBPACK_IMPORTED_MODULE_9__directives_ctr_list__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_ctr_row__ = __webpack_require__(637);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CtrRow", function() { return __WEBPACK_IMPORTED_MODULE_10__directives_ctr_row__["a"]; });











//# sourceMappingURL=index.js.map

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_data__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remote_data__ = __webpack_require__(584);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleterService; });



var CompleterService = (function () {
    function CompleterService(localDataFactory, // Using any instead of () => LocalData because on AoT errors
        remoteDataFactory // Using any instead of () => LocalData because on AoT errors
        ) {
        this.localDataFactory = localDataFactory;
        this.remoteDataFactory = remoteDataFactory;
    }
    CompleterService.prototype.local = function (data, searchFields, titleField) {
        var localData = this.localDataFactory();
        return localData
            .data(data)
            .searchFieldss(searchFields)
            .titleField(titleField);
    };
    CompleterService.prototype.remote = function (url, searchFields, titleField) {
        var remoteData = this.remoteDataFactory();
        return remoteData
            .remoteUrl(url)
            .searchFieldss(searchFields)
            .titleField(titleField);
    };
    CompleterService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    CompleterService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_1__local_data__["a" /* LocalData */],] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_2__remote_data__["a" /* RemoteData */],] },] },
    ]; };
    return CompleterService;
}());
//# sourceMappingURL=completer-service.js.map

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(591));
__export(__webpack_require__(594));
__export(__webpack_require__(660));
__export(__webpack_require__(648));
//# sourceMappingURL=ng2-smart-table.js.map

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(785);

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(2);
var common_1 = __webpack_require__(15);
var forms_1 = __webpack_require__(11);
var ng2_completer_1 = __webpack_require__(639);
var ng2_smart_table_directives_1 = __webpack_require__(591);
var cell_component_1 = __webpack_require__(649);
var filter_component_1 = __webpack_require__(650);
var pager_component_1 = __webpack_require__(651);
var title_component_1 = __webpack_require__(652);
var Ng2SmartTableModule = (function () {
    function Ng2SmartTableModule() {
    }
    return Ng2SmartTableModule;
}());
Ng2SmartTableModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            ng2_completer_1.Ng2CompleterModule,
            forms_1.FormsModule
        ],
        declarations: [
            cell_component_1.CellComponent,
            filter_component_1.FilterComponent,
            pager_component_1.PagerComponent,
            title_component_1.TitleComponent
        ].concat(ng2_smart_table_directives_1.NG2_SMART_TABLE_DIRECTIVES),
        exports: ng2_smart_table_directives_1.NG2_SMART_TABLE_DIRECTIVES.slice()
    })
], Ng2SmartTableModule);
exports.Ng2SmartTableModule = Ng2SmartTableModule;


/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var ng2_completer_1 = __webpack_require__(639);
var cell_1 = __webpack_require__(592);
var CellComponent = (function () {
    function CellComponent(completerService) {
        this.completerService = completerService;
        this.inputClass = '';
        this.mode = 'inline';
        this.isInEditing = false;
        this.edited = new core_1.EventEmitter();
        this.completerStr = '';
    }
    CellComponent.prototype.ngOnInit = function () {
        if (this.cell.getColumn().type === 'completer') {
            var config = this.cell.getColumn().getConfig().completer;
            config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
            config.dataService.descriptionField(config.descriptionField);
        }
    };
    CellComponent.prototype.onStopEditing = function () {
        this.cell.getRow().isInEditing = false;
        this.cancelEdit();
        return false;
    };
    CellComponent.prototype.cancelEdit = function () {
        this.renderCustomValue();
    };
    CellComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        setTimeout(function () { return _this.renderCustomValue(); });
    };
    CellComponent.prototype.ngAfterViewInit = function () {
        this.renderCustomValue();
    };
    CellComponent.prototype.onEdited = function (event) {
        this.edited.emit(event);
        return false;
    };
    CellComponent.prototype.onEditedCompleter = function (event) {
        this.cell.newValue = event.title;
        return false;
    };
    CellComponent.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    CellComponent.prototype.renderCustomValue = function () {
        var cellRenderFunc = this.cell.getColumn().getCellRenderFunction();
        if (cellRenderFunc && this.cellRef) {
            cellRenderFunc.call(null, this.cell, this.cellRef.nativeElement);
        }
    };
    return CellComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", cell_1.Cell)
], CellComponent.prototype, "cell", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CellComponent.prototype, "inputClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CellComponent.prototype, "mode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CellComponent.prototype, "isInEditing", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CellComponent.prototype, "edited", void 0);
__decorate([
    core_1.ViewChild('cellContainer'),
    __metadata("design:type", core_1.ElementRef)
], CellComponent.prototype, "cellRef", void 0);
CellComponent = __decorate([
    core_1.Component({
        selector: 'ng2-smart-table-cell',
        styles: [__webpack_require__(766)],
        template: __webpack_require__(764),
    }),
    __metadata("design:paramtypes", [ng2_completer_1.CompleterService])
], CellComponent);
exports.CellComponent = CellComponent;


/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var data_source_1 = __webpack_require__(501);
var column_1 = __webpack_require__(554);
var FilterComponent = (function () {
    function FilterComponent() {
        this.inputClass = '';
        this.query = '';
        this.delay = 300;
    }
    FilterComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.source.onChanged().subscribe(function (elements) {
            var filterConf = _this.source.getFilter();
            if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
                _this.query = '';
            }
        });
    };
    FilterComponent.prototype.filter = function (event) {
        var _this = this;
        if (event.which === 13) {
            this.addFilter();
        }
        else if (event.which !== 9) {
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            this.timeout = setTimeout(function () {
                _this.addFilter();
            }, this.delay);
        }
        return false;
    };
    FilterComponent.prototype.addFilter = function () {
        this.source.addFilter({
            field: this.column.id,
            search: this.query,
            filter: this.column.getFilterFunction()
        });
    };
    return FilterComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", column_1.Column)
], FilterComponent.prototype, "column", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", data_source_1.DataSource)
], FilterComponent.prototype, "source", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FilterComponent.prototype, "inputClass", void 0);
FilterComponent = __decorate([
    core_1.Component({
        selector: 'ng2-smart-table-filter',
        styles: [__webpack_require__(767)],
        template: "\n    <div class=\"ng2-smart-filter\" *ngIf=\"column.isFilterable\">\n      <input \n      [(ngModel)]=\"query\"\n      (keyup)=\"filter($event)\"\n      [ngClass]=\"inputClass\"\n      class=\"form-control\"\n      type=\"text\" \n      placeholder=\"{{ column.title }}\" />\n    </div>\n  "
    })
], FilterComponent);
exports.FilterComponent = FilterComponent;


/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var data_source_1 = __webpack_require__(501);
var PagerComponent = (function () {
    function PagerComponent() {
        this.count = 0;
    }
    PagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.source.onChanged().subscribe(function (changes) {
            _this.page = _this.source.getPaging().page;
            _this.count = _this.source.count();
            if (_this.isPageOutOfBounce()) {
                _this.source.setPage(--_this.page);
            }
            _this.processPageChange(changes);
            _this.initPages();
        });
    };
    /**
     * We change the page here depending on the action performed against data source
     * if a new element was added to the end of the table - then change the page to the last
     * if a new element was added to the beginning of the table - then to the first page
     * @param changes
     */
    PagerComponent.prototype.processPageChange = function (changes) {
        if (changes['action'] === 'prepend') {
            this.source.setPage(1);
        }
        if (changes['action'] === 'append') {
            this.source.setPage(this.getLast());
        }
    };
    PagerComponent.prototype.shouldShow = function () {
        return this.source.count() > this.perPage;
    };
    PagerComponent.prototype.paginate = function (page) {
        this.source.setPage(page);
        this.page = page;
        return false;
    };
    PagerComponent.prototype.getPage = function () {
        return this.page;
    };
    PagerComponent.prototype.getPages = function () {
        return this.pages;
    };
    PagerComponent.prototype.getLast = function () {
        return Math.ceil(this.count / this.perPage);
    };
    PagerComponent.prototype.isPageOutOfBounce = function () {
        return (this.page * this.perPage) >= (this.count + this.perPage) && this.page > 1;
    };
    PagerComponent.prototype.initPages = function () {
        var pagesCount = this.getLast();
        var showPagesCount = 4;
        showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
        this.pages = [];
        if (this.shouldShow()) {
            var middleOne = Math.ceil(showPagesCount / 2);
            middleOne = this.page >= middleOne ? this.page : middleOne;
            var lastOne = middleOne + Math.floor(showPagesCount / 2);
            lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
            var firstOne = lastOne - showPagesCount + 1;
            for (var i = firstOne; i <= lastOne; i++) {
                this.pages.push(i);
            }
        }
    };
    return PagerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PagerComponent.prototype, "perPage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", data_source_1.DataSource)
], PagerComponent.prototype, "source", void 0);
PagerComponent = __decorate([
    core_1.Component({
        selector: 'ng2-smart-table-pager',
        styles: [__webpack_require__(768)],
        template: "\n    <nav *ngIf=\"shouldShow()\" class=\"ng2-smart-pagination-nav\">\n      <ul class=\"ng2-smart-pagination pagination\">\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\" \n          (click)=\"getPage() == 1 ? false : paginate(1)\" aria-label=\"First\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">First</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\" \n        [ngClass]=\"{active: getPage() == page}\" *ngFor=\"let page of getPages()\">\n          <span class=\"ng2-smart-page-link page-link\" \n          *ngIf=\"getPage() == page\">{{ page }} <span class=\"sr-only\">(current)</span></span>\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\" \n          (click)=\"paginate(page)\" *ngIf=\"getPage() != page\">{{ page }}</a>\n        </li>\n  \n        <li class=\"ng2-smart-page-item page-item\" \n        [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\" \n          (click)=\"getPage() == getLast() ? false : paginate(getLast())\" aria-label=\"Last\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Last</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n  "
    })
], PagerComponent);
exports.PagerComponent = PagerComponent;


/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var data_source_1 = __webpack_require__(501);
var column_1 = __webpack_require__(554);
var TitleComponent = (function () {
    function TitleComponent() {
        this.currentDirection = '';
    }
    TitleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.source.onChanged().subscribe(function (elements) {
            var sortConf = _this.source.getSort();
            if (sortConf.length > 0 && sortConf[0]['field'] === _this.column.id) {
                _this.currentDirection = sortConf[0]['direction'];
            }
            else {
                _this.currentDirection = '';
            }
            sortConf.forEach(function (fieldConf) {
            });
        });
    };
    TitleComponent.prototype.sort = function () {
        this.changeSortDirection();
        this.source.setSort([
            {
                field: this.column.id,
                direction: this.currentDirection,
                compare: this.column.getCompareFunction()
            }
        ]);
        return false;
    };
    TitleComponent.prototype.changeSortDirection = function () {
        if (this.currentDirection) {
            var newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
            this.currentDirection = newDirection;
        }
        else {
            this.currentDirection = this.column.sortDirection;
        }
        return this.currentDirection;
    };
    return TitleComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", column_1.Column)
], TitleComponent.prototype, "column", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", data_source_1.DataSource)
], TitleComponent.prototype, "source", void 0);
TitleComponent = __decorate([
    core_1.Component({
        selector: 'ng2-smart-table-title',
        styles: [__webpack_require__(769)],
        template: "\n    <a href=\"#\"\n      *ngIf=\"column.isSortable\"\n      (click)=\"sort($event, column)\" \n      class=\"ng2-smart-sort-link sort\"\n      [ngClass]=\"currentDirection\">\n      {{ column.title }}\n    </a>\n    <span class=\"ng2-smart-sort\" *ngIf=\"!column.isSortable\">{{ column.title }}</span>\n  "
    })
], TitleComponent);
exports.TitleComponent = TitleComponent;


/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var row_1 = __webpack_require__(654);
var column_1 = __webpack_require__(554);
var DataSet = (function () {
    function DataSet(data, columnSettings) {
        if (data === void 0) { data = []; }
        this.columnSettings = columnSettings;
        this.data = [];
        this.columns = [];
        this.rows = [];
        this.willSelect = 'first';
        this.createColumns(columnSettings);
        this.setData(data);
        this.createNewRow();
    }
    DataSet.prototype.setData = function (data) {
        this.data = data;
        this.createRows();
    };
    DataSet.prototype.getColumns = function () {
        return this.columns;
    };
    DataSet.prototype.getRows = function () {
        return this.rows;
    };
    DataSet.prototype.findRowByData = function (data) {
        return this.rows.find(function (row) { return row.getData() === data; });
    };
    DataSet.prototype.deselectAll = function () {
        this.rows.forEach(function (row) {
            row.isSelected = false;
        });
    };
    DataSet.prototype.selectRow = function (row) {
        this.deselectAll();
        row.isSelected = true;
        this.selectedRow = row;
        return this.selectedRow;
    };
    DataSet.prototype.selectPreviousRow = function () {
        if (this.rows.length > 0) {
            var index = this.selectedRow ? this.selectedRow.index : 0;
            if (index > this.rows.length - 1) {
                index = this.rows.length - 1;
            }
            this.selectRow(this.rows[index]);
            return this.selectedRow;
        }
    };
    DataSet.prototype.selectFirstRow = function () {
        if (this.rows.length > 0) {
            this.selectRow(this.rows[0]);
            return this.selectedRow;
        }
    };
    DataSet.prototype.selectLastRow = function () {
        if (this.rows.length > 0) {
            this.selectRow(this.rows[this.rows.length - 1]);
            return this.selectedRow;
        }
    };
    DataSet.prototype.willSelectFirstRow = function () {
        this.willSelect = 'first';
    };
    DataSet.prototype.willSelectLastRow = function () {
        this.willSelect = 'last';
    };
    DataSet.prototype.select = function () {
        if (this.getRows().length === 0) {
            return;
        }
        if (this.willSelect) {
            if (this.willSelect === 'first') {
                this.selectFirstRow();
            }
            if (this.willSelect === 'last') {
                this.selectLastRow();
            }
            this.willSelect = '';
        }
        else {
            this.selectFirstRow();
        }
        return this.selectedRow;
    };
    DataSet.prototype.createNewRow = function () {
        this.newRow = new row_1.Row(0, {}, this);
        this.newRow.isInEditing = true;
    };
    /**
     * Create columns by mapping from the settings
     * @param settings
     * @private
     */
    DataSet.prototype.createColumns = function (settings) {
        for (var id in settings) {
            if (settings.hasOwnProperty(id)) {
                this.columns.push(new column_1.Column(id, settings[id], this));
            }
        }
    };
    /**
     * Create rows based on current data prepared in data source
     * @private
     */
    DataSet.prototype.createRows = function () {
        var _this = this;
        this.rows = [];
        this.data.forEach(function (el, index) {
            _this.rows.push(new row_1.Row(index, el, _this));
        });
    };
    return DataSet;
}());
exports.DataSet = DataSet;


/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var cell_1 = __webpack_require__(592);
var Row = (function () {
    function Row(index, data, _dataSet) {
        this.index = index;
        this.data = data;
        this._dataSet = _dataSet;
        this.isSelected = false;
        this.isInEditing = false;
        this.cells = [];
        this.process();
    }
    Row.prototype.getCell = function (column) {
        return this.cells.find(function (el) { return el.getColumn() === column; });
    };
    Row.prototype.getCells = function () {
        return this.cells;
    };
    Row.prototype.getData = function () {
        return this.data;
    };
    Row.prototype.getNewData = function () {
        var values = Object.assign({}, this.data);
        this.getCells().forEach(function (cell) { return values[cell.getColumn().id] = cell.newValue; });
        return values;
    };
    Row.prototype.setData = function (data) {
        this.data = data;
        this.process();
    };
    Row.prototype.process = function () {
        var _this = this;
        this.cells = [];
        this._dataSet.getColumns().forEach(function (column) {
            var cell = _this.createCell(column);
            _this.cells.push(cell);
        });
    };
    Row.prototype.createCell = function (column) {
        var value = typeof this.data[column.id] === 'undefined' ? '' : this.data[column.id];
        return new cell_1.Cell(value, this, column, this._dataSet);
    };
    return Row;
}());
exports.Row = Row;


/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LocalFilter = (function () {
    function LocalFilter() {
    }
    LocalFilter.filter = function (data, field, search, customFilter) {
        var filter = customFilter ? customFilter : this.FILTER;
        return data.filter(function (el) {
            var value = typeof el[field] === 'undefined' || el[field] === null ? '' : el[field];
            return filter.call(null, value, search);
        });
    };
    return LocalFilter;
}());
LocalFilter.FILTER = function (value, search) {
    return value.toString().toLowerCase().includes(search.toString().toLowerCase());
};
exports.LocalFilter = LocalFilter;


/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LocalPager = (function () {
    function LocalPager() {
    }
    LocalPager.paginate = function (data, page, perPage) {
        return data.slice(perPage * (page - 1), perPage * page);
    };
    return LocalPager;
}());
exports.LocalPager = LocalPager;


/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LocalSorter = (function () {
    function LocalSorter() {
    }
    LocalSorter.sort = function (data, field, direction, customCompare) {
        var dir = (direction === 'asc') ? 1 : -1;
        var compare = customCompare ? customCompare : this.COMPARE;
        return data.sort(function (a, b) {
            return compare.call(null, dir, a[field], b[field]);
        });
    };
    return LocalSorter;
}());
LocalSorter.COMPARE = function (direction, a, b) {
    if (a < b) {
        return -1 * direction;
    }
    if (a > b) {
        return direction;
    }
    return 0;
};
exports.LocalSorter = LocalSorter;


/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ServerSourceConf = (function () {
    function ServerSourceConf(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.endPoint, endPoint = _c === void 0 ? '' : _c, _d = _b.sortFieldKey, sortFieldKey = _d === void 0 ? '' : _d, _e = _b.sortDirKey, sortDirKey = _e === void 0 ? '' : _e, _f = _b.pagerPageKey, pagerPageKey = _f === void 0 ? '' : _f, _g = _b.pagerLimitKey, pagerLimitKey = _g === void 0 ? '' : _g, _h = _b.filterFieldKey, filterFieldKey = _h === void 0 ? '' : _h, _j = _b.totalKey, totalKey = _j === void 0 ? '' : _j, _k = _b.dataKey, dataKey = _k === void 0 ? '' : _k;
        this.endPoint = endPoint ? endPoint : '';
        this.sortFieldKey = sortFieldKey ? sortFieldKey : ServerSourceConf.SORT_FIELD_KEY;
        this.sortDirKey = sortDirKey ? sortDirKey : ServerSourceConf.SORT_DIR_KEY;
        this.pagerPageKey = pagerPageKey ? pagerPageKey : ServerSourceConf.PAGER_PAGE_KEY;
        this.pagerLimitKey = pagerLimitKey ? pagerLimitKey : ServerSourceConf.PAGER_LIMIT_KEY;
        this.filterFieldKey = filterFieldKey ? filterFieldKey : ServerSourceConf.FILTER_FIELD_KEY;
        this.totalKey = totalKey ? totalKey : ServerSourceConf.TOTAL_KEY;
        this.dataKey = dataKey ? dataKey : ServerSourceConf.DATA_KEY;
    }
    return ServerSourceConf;
}());
ServerSourceConf.SORT_FIELD_KEY = '_sort';
ServerSourceConf.SORT_DIR_KEY = '_order';
ServerSourceConf.PAGER_PAGE_KEY = '_page';
ServerSourceConf.PAGER_LIMIT_KEY = '_limit';
ServerSourceConf.FILTER_FIELD_KEY = '#field#_like';
ServerSourceConf.TOTAL_KEY = 'x-total-count';
ServerSourceConf.DATA_KEY = '';
exports.ServerSourceConf = ServerSourceConf;


/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var local_data_source_1 = __webpack_require__(555);
var url_search_params_1 = __webpack_require__(867);
var server_source_conf_1 = __webpack_require__(658);
var helpers_1 = __webpack_require__(552);
var ServerDataSource = (function (_super) {
    __extends(ServerDataSource, _super);
    function ServerDataSource(http, conf) {
        if (conf === void 0) { conf = {}; }
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.lastRequestCount = 0;
        _this.conf = new server_source_conf_1.ServerSourceConf(conf);
        if (!_this.conf.endPoint) {
            throw new Error('At least endPoint must be specified as a configuration of the server data source.');
        }
        return _this;
    }
    ServerDataSource.prototype.count = function () {
        return this.lastRequestCount;
    };
    ServerDataSource.prototype.getElements = function () {
        var _this = this;
        return this.requestElements().map(function (res) {
            _this.lastRequestCount = _this.extractTotalFromResponse(res);
            _this.data = _this.extractDataFromResponse(res);
            return _this.data;
        }).toPromise();
    };
    /**
     * Extracts array of data from server response
     * @param res
     * @returns {any}
     */
    ServerDataSource.prototype.extractDataFromResponse = function (res) {
        var rawData = res.json();
        var data = !!this.conf.dataKey ? helpers_1.getDeepFromObject(rawData, this.conf.dataKey, []) : rawData;
        if (data instanceof Array) {
            return data;
        }
        throw new Error("Data must be an array. Please check that data extracted from the server response by the key '" + this.conf.dataKey + "' exists and is array.");
    };
    /**
     * Extracts total rows count from the server response
     * Looks for the count in the heders first, then in the response body
     * @param res
     * @returns {any}
     */
    ServerDataSource.prototype.extractTotalFromResponse = function (res) {
        if (res.headers.has(this.conf.totalKey)) {
            return +res.headers.get(this.conf.totalKey);
        }
        else {
            var rawData = res.json();
            return helpers_1.getDeepFromObject(rawData, this.conf.totalKey, 0);
        }
    };
    ServerDataSource.prototype.requestElements = function () {
        return this.http.get(this.conf.endPoint, this.createRequestOptions());
    };
    ServerDataSource.prototype.createRequestOptions = function () {
        var requestOptions = {};
        requestOptions.search = new url_search_params_1.URLSearchParams();
        requestOptions = this.addSortRequestOptions(requestOptions);
        requestOptions = this.addFilterRequestOptions(requestOptions);
        return this.addPagerRequestOptions(requestOptions);
    };
    ServerDataSource.prototype.addSortRequestOptions = function (requestOptions) {
        var _this = this;
        var searchParams = requestOptions.search;
        if (this.sortConf) {
            this.sortConf.forEach(function (fieldConf) {
                searchParams.set(_this.conf.sortFieldKey, fieldConf.field);
                searchParams.set(_this.conf.sortDirKey, fieldConf.direction.toUpperCase());
            });
        }
        return requestOptions;
    };
    ServerDataSource.prototype.addFilterRequestOptions = function (requestOptions) {
        var _this = this;
        var searchParams = requestOptions.search;
        if (this.filterConf.filters) {
            this.filterConf.filters.forEach(function (fieldConf) {
                if (fieldConf['search']) {
                    searchParams.set(_this.conf.filterFieldKey.replace('#field#', fieldConf['field']), fieldConf['search']);
                }
            });
        }
        return requestOptions;
    };
    ServerDataSource.prototype.addPagerRequestOptions = function (requestOptions) {
        var searchParams = requestOptions.search;
        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
            searchParams.set(this.conf.pagerPageKey, this.pagingConf['page']);
            searchParams.set(this.conf.pagerLimitKey, this.pagingConf['perPage']);
        }
        return requestOptions;
    };
    return ServerDataSource;
}(local_data_source_1.LocalDataSource));
exports.ServerDataSource = ServerDataSource;


/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(593));
__export(__webpack_require__(501));
__export(__webpack_require__(555));
__export(__webpack_require__(659));


/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var basicTables_service_1 = __webpack_require__(503);
var BorderedTable = (function () {
    function BorderedTable(_basicTablesService) {
        this._basicTablesService = _basicTablesService;
        this.metricsTableData = _basicTablesService.metricsTableData;
    }
    return BorderedTable;
}());
BorderedTable = __decorate([
    core_1.Component({
        selector: 'bordered-table',
        template: __webpack_require__(828),
    }),
    __metadata("design:paramtypes", [basicTables_service_1.BasicTablesService])
], BorderedTable);
exports.BorderedTable = BorderedTable;


/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(710));


/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var basicTables_service_1 = __webpack_require__(503);
var CondensedTable = (function () {
    function CondensedTable(_basicTablesService) {
        this._basicTablesService = _basicTablesService;
        this.peopleTableData = _basicTablesService.peopleTableData;
    }
    return CondensedTable;
}());
CondensedTable = __decorate([
    core_1.Component({
        selector: 'condensed-table',
        template: __webpack_require__(829)
    }),
    __metadata("design:paramtypes", [basicTables_service_1.BasicTablesService])
], CondensedTable);
exports.CondensedTable = CondensedTable;


/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(712));


/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var ContextualTable = (function () {
    function ContextualTable() {
    }
    return ContextualTable;
}());
ContextualTable = __decorate([
    core_1.Component({
        selector: 'contextual-table',
        template: __webpack_require__(830),
    }),
    __metadata("design:paramtypes", [])
], ContextualTable);
exports.ContextualTable = ContextualTable;


/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(714));


/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var basicTables_service_1 = __webpack_require__(503);
var HoverTable = (function () {
    function HoverTable(_basicTablesService) {
        this._basicTablesService = _basicTablesService;
        this.metricsTableData = _basicTablesService.metricsTableData;
    }
    return HoverTable;
}());
HoverTable = __decorate([
    core_1.Component({
        selector: 'hover-table',
        template: __webpack_require__(831)
    }),
    __metadata("design:paramtypes", [basicTables_service_1.BasicTablesService])
], HoverTable);
exports.HoverTable = HoverTable;


/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(716));


/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(719));


/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var ResponsiveTable = (function () {
    function ResponsiveTable() {
    }
    return ResponsiveTable;
}());
ResponsiveTable = __decorate([
    core_1.Component({
        selector: 'responsive-table',
        template: __webpack_require__(832),
    }),
    __metadata("design:paramtypes", [])
], ResponsiveTable);
exports.ResponsiveTable = ResponsiveTable;


/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(721));


/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(2);
var basicTables_service_1 = __webpack_require__(503);
var StripedTable = (function () {
    function StripedTable(_basicTablesService) {
        this._basicTablesService = _basicTablesService;
        this.smartTableData = _basicTablesService.smartTableData;
    }
    return StripedTable;
}());
StripedTable = __decorate([
    core_1.Component({
        selector: 'striped-table',
        template: __webpack_require__(833)
    }),
    __metadata("design:paramtypes", [basicTables_service_1.BasicTablesService])
], StripedTable);
exports.StripedTable = StripedTable;


/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(9);
var tables_component_1 = __webpack_require__(625);
var basicTables_component_1 = __webpack_require__(622);
var smartTables_component_1 = __webpack_require__(623);
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: tables_component_1.Tables,
        children: [
            { path: 'basictables', component: basicTables_component_1.BasicTables },
            { path: 'smarttables', component: smartTables_component_1.SmartTables }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(740)
var ieee754 = __webpack_require__(746)
var isArray = __webpack_require__(747)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(178)))

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ 747:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleterListItemCmp; });


var CompleterListItemCmp = (function () {
    function CompleterListItemCmp() {
        this.parts = [];
    }
    CompleterListItemCmp.prototype.ngOnInit = function () {
        if (!this.searchStr) {
            this.parts.push({ isMatch: false, text: this.text });
            return;
        }
        var matchStr = this.text.toLowerCase();
        var matchPos = matchStr.indexOf(this.searchStr.toLowerCase());
        var startIndex = 0;
        while (matchPos >= 0) {
            var matchText = this.text.slice(matchPos, matchPos + this.searchStr.length);
            if (matchPos === 0) {
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length;
            }
            else if (matchPos > 0) {
                var matchPart = this.text.slice(startIndex, matchPos);
                this.parts.push({ isMatch: false, text: matchPart });
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length + matchPart.length;
            }
            matchPos = matchStr.indexOf(this.searchStr.toLowerCase(), startIndex);
        }
        if (startIndex < this.text.length) {
            this.parts.push({ isMatch: false, text: this.text.slice(startIndex, this.text.length) });
        }
    };
    CompleterListItemCmp.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: "completer-list-item",
                    template: "\n    <span class=\"completer-list-item-holder\" [ngClass]=\"{'completer-title': type === 'title', 'completer-description': type === 'description'}\" >\n        <span class=\"completer-list-item\" *ngFor=\"let part of parts\" [ngClass]=\"part.isMatch ? matchClass : null\">{{part.text}}</span>\n    </span>\n    "
                },] },
    ];
    /** @nocollapse */
    CompleterListItemCmp.ctorParameters = function () { return []; };
    CompleterListItemCmp.propDecorators = {
        'text': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'searchStr': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'matchClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return CompleterListItemCmp;
}());
//# sourceMappingURL=completer-list-item-cmp.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_completer_cmp__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_completer_list_item_cmp__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_completer_service__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_completer_data_factory__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_ctr_completer__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_ctr_dropdown__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_ctr_input__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_ctr_list__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_ctr_row__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng2CompleterModule; });













var Ng2CompleterModule = (function () {
    function Ng2CompleterModule() {
    }
    Ng2CompleterModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_12__angular_common__["CommonModule"],
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
                        __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"]
                    ],
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_4__components_completer_list_item_cmp__["a" /* CompleterListItemCmp */],
                        __WEBPACK_IMPORTED_MODULE_7__directives_ctr_completer__["a" /* CtrCompleter */],
                        __WEBPACK_IMPORTED_MODULE_8__directives_ctr_dropdown__["a" /* CtrDropdown */],
                        __WEBPACK_IMPORTED_MODULE_9__directives_ctr_input__["a" /* CtrInput */],
                        __WEBPACK_IMPORTED_MODULE_10__directives_ctr_list__["a" /* CtrList */],
                        __WEBPACK_IMPORTED_MODULE_11__directives_ctr_row__["a" /* CtrRow */],
                        __WEBPACK_IMPORTED_MODULE_3__components_completer_cmp__["a" /* CompleterCmp */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_3__components_completer_cmp__["a" /* CompleterCmp */],
                        __WEBPACK_IMPORTED_MODULE_4__components_completer_list_item_cmp__["a" /* CompleterListItemCmp */],
                        __WEBPACK_IMPORTED_MODULE_7__directives_ctr_completer__["a" /* CtrCompleter */],
                        __WEBPACK_IMPORTED_MODULE_8__directives_ctr_dropdown__["a" /* CtrDropdown */],
                        __WEBPACK_IMPORTED_MODULE_9__directives_ctr_input__["a" /* CtrInput */],
                        __WEBPACK_IMPORTED_MODULE_10__directives_ctr_list__["a" /* CtrList */],
                        __WEBPACK_IMPORTED_MODULE_11__directives_ctr_row__["a" /* CtrRow */]
                    ],
                    providers: [
                        __WEBPACK_IMPORTED_MODULE_5__services_completer_service__["a" /* CompleterService */],
                        __WEBPACK_IMPORTED_MODULE_6__services_completer_data_factory__["a" /* LocalDataFactoryProvider */],
                        __WEBPACK_IMPORTED_MODULE_6__services_completer_data_factory__["b" /* RemoteDataFactoryProvider */]
                    ]
                },] },
    ];
    /** @nocollapse */
    Ng2CompleterModule.ctorParameters = function () { return []; };
    return Ng2CompleterModule;
}());
//# sourceMappingURL=ng2-completer.module.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_data__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remote_data__ = __webpack_require__(584);
/* unused harmony export localDataFactory */
/* unused harmony export remoteDataFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalDataFactoryProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RemoteDataFactoryProvider; });



function localDataFactory() {
    return function () {
        return new __WEBPACK_IMPORTED_MODULE_1__local_data__["a" /* LocalData */]();
    };
}
function remoteDataFactory(http) {
    return function () {
        return new __WEBPACK_IMPORTED_MODULE_2__remote_data__["a" /* RemoteData */](http);
    };
}
var LocalDataFactoryProvider = { provide: __WEBPACK_IMPORTED_MODULE_1__local_data__["a" /* LocalData */], useFactory: localDataFactory };
var RemoteDataFactoryProvider = { provide: __WEBPACK_IMPORTED_MODULE_2__remote_data__["a" /* RemoteData */], useFactory: remoteDataFactory, deps: [__WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"]] };
//# sourceMappingURL=completer-data-factory.js.map

/***/ }),

/***/ 764:
/***/ (function(module, exports) {

module.exports = "<template [ngIf]=\"!isInEditing\">\r\n    <div [ngSwitch]=\"cell.getColumn().type\">\r\n        <div *ngSwitchCase=\"'html'\" #cellContainer [innerHTML]=\"cell.getValue()\"></div>\r\n\r\n        <div *ngSwitchDefault #cellContainer>{{ cell.getValue() }}</div>\r\n    </div>\r\n</template>\r\n<template [ngIf]=\"isInEditing\">\r\n\r\n    <div [ngSwitch]=\"cell.getColumn().type\">\r\n        <select *ngSwitchCase=\"'list'\" [ngClass]=\"inputClass\"\r\n                class=\"form-control\"\r\n                [(ngModel)]=\"cell.newValue\"\r\n                [name]=\"cell.getColumn().id\"\r\n                [disabled]=\"!cell.getColumn().isEditable\"\r\n                (click)=\"onClick($event)\"\r\n                (keydown.enter)=\"onEdited($event)\"\r\n                (keydown.esc)=\"onStopEditing()\">\r\n\r\n            <option *ngFor=\"let option of cell.getColumn().getConfig()?.list\" [value]=\"option.value\"\r\n                    [selected]=\"option.value === cell.getValue()\">{{ option.title }}\r\n            </option>\r\n        </select>\r\n\r\n        <ng2-completer *ngSwitchCase=\"'completer'\"\r\n                       [(ngModel)]=\"completerStr\"\r\n                       [dataService]=\"cell.getColumn().getConfig().completer.dataService\"\r\n                       [minSearchLength]=\"cell.getColumn().getConfig().completer.minSearchLength || 0\"\r\n                       [pause]=\"cell.getColumn().getConfig().completer.pause || 0\"\r\n                       [placeholder]=\"cell.getColumn().getConfig().completer.placeholder || 'Start typing...'\"\r\n                       (selected)=\"onEditedCompleter($event)\">\r\n        </ng2-completer>\r\n\r\n        <input *ngSwitchDefault [ngClass]=\"inputClass\"\r\n               class=\"form-control\"\r\n               [(ngModel)]=\"cell.newValue\"\r\n               [name]=\"cell.getColumn().id\"\r\n               [placeholder]=\"cell.getColumn().title\"\r\n               [disabled]=\"!cell.getColumn().isEditable\"\r\n               (click)=\"onClick($event)\"\r\n               (keydown.enter)=\"onEdited($event)\"\r\n               (keydown.esc)=\"onStopEditing()\">\r\n    </div>\r\n</template>"

/***/ }),

/***/ 765:
/***/ (function(module, exports) {

module.exports = "<div class=\"ng2-smart-table-container\">\r\n  <table class=\"ng2-smart-table table\" [id]=\"grid.getSetting('attr.id')\" [ngClass]=\"grid.getSetting('attr.class')\">\r\n    <thead *ngIf=\"!grid.getSetting('hideHeader') || !grid.getSetting('hideSubHeader')\">\r\n\r\n    <tr class=\"ng2-smart-titles\" *ngIf=\"!grid.getSetting('hideHeader')\">\r\n      <th *ngIf=\"grid.showActionColumn('left')\" class=\"ng2-smart-actions\">\r\n        <div class=\"ng2-smart-title\">{{ grid.getSetting('actions.columnTitle') }}</div>\r\n      </th>\r\n      <th *ngFor=\"let column of grid.getColumns()\" class=\"ng2-smart-th {{ column.id }}\" [ngClass]=\"column.class\">\r\n        <div class=\"ng2-smart-title\">\r\n          <ng2-smart-table-title [source]=\"source\" [column]=\"column\"></ng2-smart-table-title>\r\n        </div>\r\n      </th>\r\n      <th *ngIf=\"grid.showActionColumn('right')\" class=\"ng2-smart-actions\">\r\n        <div class=\"ng2-smart-title\">{{ grid.getSetting('actions.columnTitle') }}</div>\r\n      </th>\r\n    </tr>\r\n\r\n    <tr class=\"ng2-smart-filters\" *ngIf=\"!grid.getSetting('hideSubHeader')\">\r\n      <th *ngIf=\"grid.showActionColumn('left')\" class=\"ng2-smart-actions-title ng2-smart-actions-title-add\">\r\n        <a  *ngIf=\"grid.getSetting('actions.add')\" href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-add\" [innerHTML]=\"grid.getSetting('add.addButtonContent')\" (click)=\"onAdd($event)\"></a>\r\n      </th>\r\n      <th *ngFor=\"let column of grid.getColumns()\" class=\"ng2-smart-th {{ column.id }}\">\r\n        <ng2-smart-table-filter [source]=\"source\" [column]=\"column\" [inputClass]=\"grid.getSetting('filter.inputClass')\"></ng2-smart-table-filter>\r\n      </th>\r\n      <th *ngIf=\"grid.showActionColumn('right')\" class=\"ng2-smart-actions-title ng2-smart-actions-title-add\">\r\n        <a  *ngIf=\"grid.getSetting('actions.add')\" href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-add\" [innerHTML]=\"grid.getSetting('add.addButtonContent')\" (click)=\"onAdd($event)\"></a>\r\n      </th>\r\n    </tr>\r\n\r\n    <tr *ngIf=\"grid.createFormShown\">\r\n      <td class=\"ng2-smart-actions\">\r\n        <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-create\" [innerHTML]=\"grid.getSetting('add.createButtonContent')\" (click)=\"onCreate(grid.getNewRow(), $event)\"></a>\r\n        <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-cancel\" [innerHTML]=\"grid.getSetting('add.cancelButtonContent')\" (click)=\"grid.createFormShown = false;\"></a>\r\n      </td>\r\n      <td *ngFor=\"let cell of grid.getNewRow().getCells()\">\r\n        <ng2-smart-table-cell [cell]=\"cell\" [inputClass]=\"grid.getSetting('add.inputClass')\" [isInEditing]=\"grid.getNewRow().isInEditing\" (edited)=\"onCreate(grid.getNewRow(), $event)\"></ng2-smart-table-cell>\r\n      </td>\r\n    </tr>\r\n\r\n    </thead>\r\n\r\n    <tbody>\r\n\r\n    <tr *ngFor=\"let row of grid.getRows()\" (click)=\"onUserSelectRow(row)\" class=\"ng2-smart-row\" [ngClass]=\"{selected: row.isSelected}\">\r\n      <td *ngIf=\"!row.isInEditing && grid.showActionColumn('left')\" class=\"ng2-smart-actions\">\r\n        <a href=\"#\" *ngIf=\"grid.getSetting('actions.edit')\" class=\"ng2-smart-action ng2-smart-action-edit-edit\" [innerHTML]=\"grid.getSetting('edit.editButtonContent')\" (click)=\"onEdit(row, $event)\"></a>\r\n        <a href=\"#\" *ngIf=\"grid.getSetting('actions.delete')\" class=\"ng2-smart-action ng2-smart-action-delete-delete\" [innerHTML]=\"grid.getSetting('delete.deleteButtonContent')\" (click)=\"onDelete(row, $event)\"></a>\r\n      </td>\r\n      <td *ngIf=\"row.isInEditing\" class=\"ng2-smart-actions\">\r\n        <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-edit-save\" [innerHTML]=\"grid.getSetting('edit.saveButtonContent')\" (click)=\"onSave(row, $event)\"></a>\r\n        <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-edit-cancel\" [innerHTML]=\"grid.getSetting('edit.cancelButtonContent')\" (click)=\"onCancelEdit(row, $event)\"></a>\r\n      </td>\r\n      <td *ngFor=\"let cell of row.getCells()\">\r\n        <ng2-smart-table-cell [cell]=\"cell\" [mode]=\"grid.getSetting('mode')\" [inputClass]=\"grid.getSetting('edit.inputClass')\" [isInEditing]=\"row.isInEditing\" (edited)=\"onSave(row, $event)\"></ng2-smart-table-cell>\r\n      </td>\r\n      <td *ngIf=\"!row.isInEditing && grid.showActionColumn('right')\" class=\"ng2-smart-actions\">\r\n        <a href=\"#\" *ngIf=\"grid.getSetting('actions.edit')\" class=\"ng2-smart-action ng2-smart-action-edit-edit\" [innerHTML]=\"grid.getSetting('edit.editButtonContent')\" (click)=\"onEdit(row, $event)\"></a>\r\n        <a href=\"#\" *ngIf=\"grid.getSetting('actions.delete')\" class=\"ng2-smart-action ng2-smart-action-delete-delete\" [innerHTML]=\"grid.getSetting('delete.deleteButtonContent')\" (click)=\"onDelete(row, $event)\"></a>\r\n      </td>\r\n    </tr>\r\n\r\n    <tr *ngIf=\"grid.getRows().length == 0\">\r\n      <td [attr.colspan]=\"grid.getColumns().length + (grid.getSetting('actions.add') || grid.getSetting('actions.edit') || grid.getSetting('actions.delete'))\">{{ grid.getSetting('noDataMessage') }}</td>\r\n    </tr>\r\n\r\n    </tbody>\r\n  </table>\r\n\r\n\r\n  <ng2-smart-table-pager *ngIf=\"grid.getSetting('pager.display')\" [source]=\"source\" [perPage]=\"grid.getSetting('pager.perPage')\"></ng2-smart-table-pager>\r\n</div>\r\n"

/***/ }),

/***/ 766:
/***/ (function(module, exports) {

module.exports = "input {\n  width: 100%;\n  line-height: normal;\n  padding: .375rem .75rem; }\n"

/***/ }),

/***/ 767:
/***/ (function(module, exports) {

module.exports = ".ng2-smart-filter input {\n  width: 100%;\n  line-height: normal;\n  padding: .375rem .75rem;\n  font-weight: normal; }\n"

/***/ }),

/***/ 768:
/***/ (function(module, exports) {

module.exports = ".ng2-smart-pagination {\n  display: inline-block;\n  font-size: .875rem;\n  padding: 0; }\n  .ng2-smart-pagination .sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    border: 0; }\n  .ng2-smart-pagination .ng2-smart-page-item {\n    display: inline; }\n"

/***/ }),

/***/ 769:
/***/ (function(module, exports) {

module.exports = "a.sort.asc, a.sort.desc {\n  font-weight: bold; }\n  a.sort.asc::after, a.sort.desc::after {\n    content: '';\n    display: inline-block;\n    width: 0;\n    height: 0;\n    border-bottom: 4px solid rgba(0, 0, 0, 0.3);\n    border-top: 4px solid transparent;\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent;\n    margin-bottom: 2px; }\n\na.sort.desc::after {\n  transform: rotate(-180deg);\n  margin-bottom: -2px; }\n"

/***/ }),

/***/ 770:
/***/ (function(module, exports) {

module.exports = ".ng2-smart-table {\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  line-height: 1.5;\n  color: #606c71;\n  border-collapse: collapse;\n  border-spacing: 0;\n  display: table;\n  width: 100%;\n  max-width: 100%;\n  overflow: auto;\n  word-break: normal;\n  word-break: keep-all; }\n  .ng2-smart-table td, .ng2-smart-table th {\n    font-size: .875rem;\n    margin: 0;\n    padding: 0.5rem 1rem;\n    border: 1px solid #e9ebec; }\n  .ng2-smart-table .ng2-smart-row.selected {\n    background: rgba(0, 0, 0, 0.05); }\n"

/***/ }),

/***/ 790:
/***/ (function(module, exports) {

module.exports = ".status-button {\n  width: 60px; }\n"

/***/ }),

/***/ 791:
/***/ (function(module, exports) {

module.exports = ".ng2-smart-table-container table.ng2-smart-table {\n  color: #ffffff; }\n  .ng2-smart-table-container table.ng2-smart-table th, .ng2-smart-table-container table.ng2-smart-table td {\n    border: 1px solid rgba(255, 255, 255, 0.3) !important;\n    line-height: 35px;\n    vertical-align: middle; }\n  .ng2-smart-table-container table.ng2-smart-table input {\n    line-height: 1.5 !important; }\n  .ng2-smart-table-container table.ng2-smart-table tbody tr:hover {\n    background: rgba(0, 0, 0, 0.03); }\n  .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-sort-link {\n    font-size: 14px !important;\n    color: #ffffff;\n    font-weight: 500; }\n    .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-sort-link.sort {\n      font-weight: 500 !important; }\n      .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-sort-link.sort::after {\n        border-bottom-color: #ffffff !important; }\n  .ng2-smart-table-container table.ng2-smart-table .ng2-smart-actions {\n    width: 70px;\n    text-align: center; }\n    .ng2-smart-table-container table.ng2-smart-table .ng2-smart-actions .actions {\n      float: none;\n      text-align: center; }\n  .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-action {\n    font-size: 14px !important;\n    color: #ffffff;\n    padding: 0 5px;\n    display: inline-block; }\n    .ng2-smart-table-container table.ng2-smart-table a.ng2-smart-action.ng2-smart-action-add-add {\n      font-size: 25px !important; }\n\nnav.ng2-smart-pagination-nav {\n  display: flex;\n  justify-content: center; }\n"

/***/ }),

/***/ 827:
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\n\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <ba-card title=\"Hover Rows\" baCardClass=\"with-scroll table-panel\">\n        <hover-table></hover-table>\n      </ba-card>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <ba-card title=\"Bordered Table\" baCardClass=\"with-scroll table-panel\">\n        <bordered-table></bordered-table>\n      </ba-card>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <ba-card title=\"Condensed Table\" baCardClass=\"with-scroll table-panel\">\n        <condensed-table></condensed-table>\n      </ba-card>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <ba-card title=\"Striped Rows\" baCardClass=\"with-scroll table-panel\">\n        <striped-table></striped-table>\n      </ba-card>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <ba-card title=\"Contextual Table\" baCardClass=\"with-scroll table-panel\">\n        <contextual-table></contextual-table>\n      </ba-card>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <ba-card title=\"Responsive Table\" baCardClass=\"with-scroll table-panel\">\n        <responsive-table></responsive-table>\n      </ba-card>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports = "<div class=\"horizontal-scroll\">\n  <table class=\"table table-bordered\">\n    <thead>\n    <tr>\n      <th class=\"browser-icons\"></th>\n      <th>Browser</th>\n      <th class=\"align-right\">Visits</th>\n      <th class=\"align-right\">Purchases</th>\n      <th class=\"align-right\">%</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let item of metricsTableData\">\n      <td><img src=\"{{ ( item.image | baAppPicture )}}\" width=\"20\" height=\"20\"></td>\n      <td ngClass=\"nowrap\">{{ item.browser }}</td>\n      <td class=\"align-right\">{{ item.visits }}</td>\n      <td class=\"align-right\">{{ item.purchases }}</td>\n      <td class=\"align-right\">{{ item.percent }}</td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports = "<div class=\"horizontal-scroll\">\n  <table class=\"table table-condensed\">\n    <thead>\n    <tr>\n      <th class=\"table-id\">#</th>\n      <th>First Name</th>\n      <th>Last Name</th>\n      <th>Username</th>\n      <th>Email</th>\n      <th>Status</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let item of peopleTableData\">\n      <td class=\"table-id\">{{ item.id }}</td>\n      <td>{{ item.firstName }}</td>\n      <td>{{ item.lastName }}</td>\n      <td>{{ item.username }}</td>\n      <td><a class=\"email-link\" href=\"mailto:{{ item.email }}\">{{ item.email }}</a></td>\n      <td>\n        <button ngClass=\"{status-button btn btn-xs btn-{{ item.status }}\">{{ item.status }}</button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <tr>\n    <th>#</th>\n    <th>First Name</th>\n    <th>Last Name</th>\n    <th>Username</th>\n    <th>Email</th>\n    <th>Age</th>\n  </tr>\n  <tr class=\"primary\">\n    <td>1</td>\n    <td>Mark</td>\n    <td>Otto</td>\n    <td>@mdo</td>\n    <td><a class=\"email-link \" href=\"mailto:mdo@gmail.com\">mdo@gmail.com</a></td>\n    <td>28</td>\n  </tr>\n  <tr class=\"success\">\n    <td>2</td>\n    <td>Jacob</td>\n    <td>Thornton</td>\n    <td>@fat</td>\n    <td><a class=\"email-link \" href=\"mailto:fat@yandex.ru\">fat@yandex.ru</a></td>\n    <td>45</td>\n  </tr>\n  <tr class=\"warning\">\n    <td>3</td>\n    <td>Larry</td>\n    <td>Bird</td>\n    <td>@twitter</td>\n    <td><a class=\"email-link \" href=\"mailto:twitter@outlook.com\">twitter@outlook.com</a>\n    </td>\n    <td>18</td>\n  </tr>\n  <tr class=\"danger\">\n    <td>4</td>\n    <td>John</td>\n    <td>Snow</td>\n    <td>@snow</td>\n    <td><a class=\"email-link\" href=\"mailto:snow@gmail.com\">snow@gmail.com</a></td>\n    <td>20</td>\n  </tr>\n  <tr class=\"info\">\n    <td>5</td>\n    <td>Jack</td>\n    <td>Sparrow</td>\n    <td>@jack</td>\n    <td><a class=\"email-link\" href=\"mailto:jack@yandex.ru\">jack@yandex.ru</a></td>\n    <td>30</td>\n  </tr>\n</table>\n"

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports = "<div class=\"horizontal-scroll\">\n  <table class=\"table table-hover\">\n    <thead>\n    <tr class=\"black-muted-bg\">\n      <th class=\"browser-icons\"></th>\n      <th>Browser</th>\n      <th class=\"align-right\">Visits</th>\n      <th class=\"table-arr\"></th>\n      <th class=\"align-right\">Purchases</th>\n      <th class=\"table-arr\"></th>\n      <th class=\"align-right\">%</th>\n      <th class=\"table-arr\"></th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let item of metricsTableData\" class=\"no-top-border\">\n      <td><img src=\"{{ ( item.image | baAppPicture ) }}\" width=\"20\" height=\"20\"></td>\n      <td ngClass=\"nowrap\">{{item.browser}}</td>\n      <td class=\"align-right\">{{item.visits}}</td>\n      <td class=\"table-arr\"><i [ngClass]=\"{'icon-up': item.isVisitsUp, 'icon-down': !item.isVisitsUp }\"></i></td>\n      <td class=\"align-right\">{{item.purchases}}</td>\n      <td class=\"table-arr\"><i [ngClass]=\"{'icon-up': item.isPurchasesUp, 'icon-down': !item.isPurchasesUp }\"></i></td>\n      <td class=\"align-right\">{{item.percent}}</td>\n      <td class=\"table-arr\"><i [ngClass]=\"{'icon-up': item.isPercentUp, 'icon-down': !item.isPercentUp }\"></i></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n  <table class=\"table\">\n    <tr>\n      <th>#</th>\n      <th>First Name</th>\n      <th>Last Name</th>\n      <th>Username</th>\n      <th>Email</th>\n      <th>Age</th>\n    </tr>\n    <tr>\n      <td>1</td>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n      <td><a class=\"email-link\" href=\"mailto:mdo@gmail.com\">mdo@gmail.com</a></td>\n      <td>28</td>\n    </tr>\n    <tr>\n      <td>2</td>\n      <td>Jacob</td>\n      <td>Thornton</td>\n      <td>@fat</td>\n      <td><a class=\"email-link\" href=\"mailto:fat@yandex.ru\">fat@yandex.ru</a></td>\n      <td>45</td>\n    </tr>\n    <tr>\n      <td>3</td>\n      <td>Larry</td>\n      <td>Bird</td>\n      <td>@twitter</td>\n      <td><a class=\"email-link\" href=\"mailto:twitter@outlook.com\">twitter@outlook.com</a>\n      </td>\n      <td>18</td>\n    </tr>\n    <tr>\n      <td>4</td>\n      <td>John</td>\n      <td>Snow</td>\n      <td>@snow</td>\n      <td><a class=\"email-link\" href=\"mailto:snow@gmail.com\">snow@gmail.com</a></td>\n      <td>20</td>\n    </tr>\n    <tr>\n      <td>5</td>\n      <td>Jack</td>\n      <td>Sparrow</td>\n      <td>@jack</td>\n      <td><a class=\"email-link\" href=\"mailto:jack@yandex.ru\">jack@yandex.ru</a></td>\n      <td>30</td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = "<div class=\"vertical-scroll\">\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th class=\"table-id\">#</th>\n      <th>First Name</th>\n      <th>Last Name</th>\n      <th>Username</th>\n      <th>Email</th>\n      <th>Age</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let item of smartTableData\">\n      <td class=\"table-id\">{{ item.id }}</td>\n      <td>{{ item.firstName }}</td>\n      <td>{{ item.lastName }}</td>\n      <td>{{ item.username }}</td>\n      <td><a class=\"email-link\" href=\"mailto:{{ item.email }}\">{{ item.email }}</a></td>\n      <td>{{ item.age }}</td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\n\n  <div class=\"row\">\n    <ba-card title=\"Basic Example\" baCardClass=\"with-scroll\">\n      <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\"></ng2-smart-table>\n    </ba-card>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(790);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(6)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../../node_modules/raw-loader/index.js!./../../../../../../node_modules/sass-loader/index.js!./basicTables.scss", function() {
			var newContent = require("!!./../../../../../../node_modules/raw-loader/index.js!./../../../../../../node_modules/sass-loader/index.js!./basicTables.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(176);

/***/ })

});
//# sourceMappingURL=2.map