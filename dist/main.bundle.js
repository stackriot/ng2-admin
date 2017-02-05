var ac_main =
webpackJsonpac__name_([11],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var services_1 = __webpack_require__(13);
exports.BaMenuService = services_1.BaMenuService;
__export(__webpack_require__(28));
__export(__webpack_require__(27));
__export(__webpack_require__(26));


/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
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
var Subject_1 = __webpack_require__(32);
var GlobalState = (function () {
    function GlobalState() {
        var _this = this;
        this._data = new Subject_1.Subject();
        this._dataStream$ = this._data.asObservable();
        this._subscriptions = new Map();
        this._dataStream$.subscribe(function (data) { return _this._onEvent(data); });
    }
    GlobalState.prototype.notifyDataChanged = function (event, value) {
        var current = this._data[event];
        if (current !== value) {
            this._data[event] = value;
            this._data.next({
                event: event,
                data: this._data[event]
            });
        }
    };
    GlobalState.prototype.subscribe = function (event, callback) {
        var subscribers = this._subscriptions.get(event) || [];
        subscribers.push(callback);
        this._subscriptions.set(event, subscribers);
    };
    GlobalState.prototype._onEvent = function (data) {
        var subscribers = this._subscriptions.get(data['event']) || [];
        subscribers.forEach(function (callback) {
            callback.call(null, data['data']);
        });
    };
    return GlobalState;
}());
GlobalState = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], GlobalState);
exports.GlobalState = GlobalState;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(239));
__export(__webpack_require__(241));
__export(__webpack_require__(243));
__export(__webpack_require__(245));


/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
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
var theme_configProvider_1 = __webpack_require__(27);
var BaThemeConfig = (function () {
    function BaThemeConfig(_baConfig) {
        this._baConfig = _baConfig;
    }
    BaThemeConfig.prototype.config = function () {
        // this._baConfig.changeTheme({ name: 'my-theme' });
        //
        // let colorScheme = {
        //   primary: '#209e91',
        //   info: '#2dacd1',
        //   success: '#90b900',
        //   warning: '#dfb81c',
        //   danger: '#e85656',
        // };
        //
        // this._baConfig.changeColors({
        //   default: '#4e4e55',
        //   defaultText: '#aaaaaa',
        //   border: '#dddddd',
        //   borderDark: '#aaaaaa',
        //
        //   primary: colorScheme.primary,
        //   info: colorScheme.info,
        //   success: colorScheme.success,
        //   warning: colorScheme.warning,
        //   danger: colorScheme.danger,
        //
        //   primaryLight: colorHelper.tint(colorScheme.primary, 30),
        //   infoLight: colorHelper.tint(colorScheme.info, 30),
        //   successLight: colorHelper.tint(colorScheme.success, 30),
        //   warningLight: colorHelper.tint(colorScheme.warning, 30),
        //   dangerLight: colorHelper.tint(colorScheme.danger, 30),
        //
        //   primaryDark: colorHelper.shade(colorScheme.primary, 15),
        //   infoDark: colorHelper.shade(colorScheme.info, 15),
        //   successDark: colorHelper.shade(colorScheme.success, 15),
        //   warningDark: colorHelper.shade(colorScheme.warning, 15),
        //   dangerDark: colorHelper.shade(colorScheme.danger, 15),
        //
        //   dashboard: {
        //     blueStone: '#005562',
        //     surfieGreen: '#0e8174',
        //     silverTree: '#6eba8c',
        //     gossip: '#b9f2a1',
        //     white: '#10c4b5',
        //   },
        //
        //   custom: {
        //     dashboardPieChart: colorHelper.hexToRgbA('#aaaaaa', 0.8),
        //     dashboardLineChart: '#6eba8c',
        //   },
        // });
    };
    return BaThemeConfig;
}());
BaThemeConfig = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [theme_configProvider_1.BaThemeConfigProvider])
], BaThemeConfig);
exports.BaThemeConfig = BaThemeConfig;


/***/ }),
/* 27 */
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
var _ = __webpack_require__(20);
var theme_constants_1 = __webpack_require__(28);
var BaThemeConfigProvider = (function () {
    function BaThemeConfigProvider() {
        this.basic = {
            default: '#ffffff',
            defaultText: '#ffffff',
            border: '#dddddd',
            borderDark: '#aaaaaa',
        };
        // main functional color scheme
        this.colorScheme = {
            primary: '#00abff',
            info: '#40daf1',
            success: '#8bd22f',
            warning: '#e7ba08',
            danger: '#f95372',
        };
        // dashboard colors for charts
        this.dashboardColors = {
            blueStone: '#40daf1',
            surfieGreen: '#00abff',
            silverTree: '#1b70ef',
            gossip: '#3c4eb9',
            white: '#ffffff',
        };
        this.conf = {
            theme: {
                name: 'ng2',
            },
            colors: {
                default: this.basic.default,
                defaultText: this.basic.defaultText,
                border: this.basic.border,
                borderDark: this.basic.borderDark,
                primary: this.colorScheme.primary,
                info: this.colorScheme.info,
                success: this.colorScheme.success,
                warning: this.colorScheme.warning,
                danger: this.colorScheme.danger,
                primaryLight: theme_constants_1.colorHelper.tint(this.colorScheme.primary, 30),
                infoLight: theme_constants_1.colorHelper.tint(this.colorScheme.info, 30),
                successLight: theme_constants_1.colorHelper.tint(this.colorScheme.success, 30),
                warningLight: theme_constants_1.colorHelper.tint(this.colorScheme.warning, 30),
                dangerLight: theme_constants_1.colorHelper.tint(this.colorScheme.danger, 30),
                primaryDark: theme_constants_1.colorHelper.shade(this.colorScheme.primary, 15),
                infoDark: theme_constants_1.colorHelper.shade(this.colorScheme.info, 15),
                successDark: theme_constants_1.colorHelper.shade(this.colorScheme.success, 15),
                warningDark: theme_constants_1.colorHelper.shade(this.colorScheme.warning, 15),
                dangerDark: theme_constants_1.colorHelper.shade(this.colorScheme.danger, 15),
                dashboard: {
                    blueStone: this.dashboardColors.blueStone,
                    surfieGreen: this.dashboardColors.surfieGreen,
                    silverTree: this.dashboardColors.silverTree,
                    gossip: this.dashboardColors.gossip,
                    white: this.dashboardColors.white,
                },
                custom: {
                    dashboardPieChart: theme_constants_1.colorHelper.hexToRgbA(this.basic.defaultText, 0.8),
                    dashboardLineChart: this.basic.defaultText,
                }
            }
        };
    }
    BaThemeConfigProvider.prototype.get = function () {
        return this.conf;
    };
    BaThemeConfigProvider.prototype.changeTheme = function (theme) {
        _.merge(this.get().theme, theme);
    };
    BaThemeConfigProvider.prototype.changeColors = function (colors) {
        _.merge(this.get().colors, colors);
    };
    return BaThemeConfigProvider;
}());
BaThemeConfigProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], BaThemeConfigProvider);
exports.BaThemeConfigProvider = BaThemeConfigProvider;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.IMAGES_ROOT = 'assets/img/';
exports.layoutSizes = {
    resWidthCollapseSidebar: 1200,
    resWidthHideSidebar: 500
};
exports.layoutPaths = {
    images: {
        root: exports.IMAGES_ROOT,
        profile: exports.IMAGES_ROOT + 'app/profile/',
        amMap: 'assets/img/theme/vendor/ammap/',
        amChart: 'assets/img/theme/vendor/amcharts/dist/amcharts/images/'
    }
};
var colorHelper = (function () {
    function colorHelper() {
    }
    return colorHelper;
}());
colorHelper.shade = function (color, weight) {
    return colorHelper.mix('#000000', color, weight);
};
colorHelper.tint = function (color, weight) {
    return colorHelper.mix('#ffffff', color, weight);
};
colorHelper.hexToRgbA = function (hex, alpha) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
    }
    throw new Error('Bad Hex');
};
colorHelper.mix = function (color1, color2, weight) {
    var d2h = function (d) { return d.toString(16); };
    var h2d = function (h) { return parseInt(h, 16); };
    var result = "#";
    for (var i = 1; i < 7; i += 2) {
        var color1Part = h2d(color1.substr(i, 2));
        var color2Part = h2d(color2.substr(i, 2));
        var resultPart = d2h(Math.floor(color2Part + (color1Part - color2Part) * (weight / 100.0)));
        result += ('0' + resultPart).slice(-2);
    }
    return result;
};
exports.colorHelper = colorHelper;
exports.isMobile = function () { return (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase()); };


/***/ }),
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Angular 2
// rc2 workaround
var platform_browser_1 = __webpack_require__(18);
var core_1 = __webpack_require__(2);
// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function identity(value) { return value; };
if (false) {
    // Production
    platform_browser_1.disableDebugTools();
    core_1.enableProdMode();
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(core_1.ApplicationRef);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        platform_browser_1.enableDebugTools(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
exports.decorateModuleRef = _decorateModuleRef;
exports.ENV_PROVIDERS = PROVIDERS.slice();


/***/ }),
/* 31 */
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
var router_1 = __webpack_require__(9);
var ngx_uploader_1 = __webpack_require__(146);
var theme_config_1 = __webpack_require__(26);
var theme_configProvider_1 = __webpack_require__(27);
var components_1 = __webpack_require__(223);
var baCardBlur_directive_1 = __webpack_require__(197);
var directives_1 = __webpack_require__(230);
var pipes_1 = __webpack_require__(237);
var services_1 = __webpack_require__(13);
var validators_1 = __webpack_require__(179);
var NGA_COMPONENTS = [
    components_1.BaAmChart,
    components_1.BaBackTop,
    components_1.BaCard,
    components_1.BaChartistChart,
    components_1.BaCheckbox,
    components_1.BaContentTop,
    components_1.BaFullCalendar,
    components_1.BaMenuItem,
    components_1.BaMenu,
    components_1.BaMsgCenter,
    components_1.BaMultiCheckbox,
    components_1.BaPageTop,
    components_1.BaPictureUploader,
    components_1.BaSidebar
];
var NGA_DIRECTIVES = [
    directives_1.BaScrollPosition,
    directives_1.BaSlimScroll,
    directives_1.BaThemeRun,
    baCardBlur_directive_1.BaCardBlur
];
var NGA_PIPES = [
    pipes_1.BaAppPicturePipe,
    pipes_1.BaKameleonPicturePipe,
    pipes_1.BaProfilePicturePipe
];
var NGA_SERVICES = [
    services_1.BaImageLoaderService,
    services_1.BaThemePreloader,
    services_1.BaThemeSpinner,
    services_1.BaMenuService
];
var NGA_VALIDATORS = [
    validators_1.EmailValidator,
    validators_1.EqualPasswordsValidator
];
var NgaModule = NgaModule_1 = (function () {
    function NgaModule() {
    }
    NgaModule.forRoot = function () {
        return {
            ngModule: NgaModule_1,
            providers: [
                theme_configProvider_1.BaThemeConfigProvider,
                theme_config_1.BaThemeConfig
            ].concat(NGA_VALIDATORS, NGA_SERVICES),
        };
    };
    return NgaModule;
}());
NgaModule = NgaModule_1 = __decorate([
    core_1.NgModule({
        declarations: NGA_PIPES.concat(NGA_DIRECTIVES, NGA_COMPONENTS),
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            ngx_uploader_1.NgUploaderModule,
        ],
        exports: NGA_PIPES.concat(NGA_DIRECTIVES, NGA_COMPONENTS)
    })
], NgaModule);
exports.NgaModule = NgaModule;
var NgaModule_1;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(17);

/***/ }),
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
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
var theme_1 = __webpack_require__(8);
var app_menu_1 = __webpack_require__(184);
var Pages = (function () {
    function Pages(_menuService) {
        this._menuService = _menuService;
    }
    Pages.prototype.ngOnInit = function () {
        this._menuService.updateMenuByRoutes(app_menu_1.MENU);
    };
    return Pages;
}());
Pages = __decorate([
    core_1.Component({
        selector: 'pages',
        styles: [],
        template: "\n    <ba-sidebar></ba-sidebar>\n    <ba-page-top></ba-page-top>\n    <div class=\"al-main\">\n      <div class=\"al-content\">\n        <ba-content-top></ba-content-top>\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n    <footer class=\"al-footer clearfix\">\n      <div class=\"al-footer-right\">Created with <i class=\"ion-heart\"></i></div>\n      <div class=\"al-footer-main clearfix\">\n        <div class=\"al-copy\">&copy; <a href=\"http://akveo.com\">Akveo</a> 2016</div>\n        <ul class=\"al-share clearfix\">\n          <li><i class=\"socicon socicon-facebook\"></i></li>\n          <li><i class=\"socicon socicon-twitter\"></i></li>\n          <li><i class=\"socicon socicon-google\"></i></li>\n          <li><i class=\"socicon socicon-github\"></i></li>\n        </ul>\n      </div>\n    </footer>\n    <ba-back-top position=\"200\"></ba-back-top>\n    "
    }),
    __metadata("design:paramtypes", [theme_1.BaMenuService])
], Pages);
exports.Pages = Pages;


/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(185));


/***/ }),
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(246));
__export(__webpack_require__(247));


/***/ }),
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */
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
var global_state_1 = __webpack_require__(12);
var services_1 = __webpack_require__(13);
var theme_config_1 = __webpack_require__(26);
var theme_constants_1 = __webpack_require__(28);
__webpack_require__(307);
__webpack_require__(306);
/*
 * App Component
 * Top Level Component
 */
var App = (function () {
    function App(_state, _imageLoader, _spinner, viewContainerRef, themeConfig) {
        var _this = this;
        this._state = _state;
        this._imageLoader = _imageLoader;
        this._spinner = _spinner;
        this.viewContainerRef = viewContainerRef;
        this.themeConfig = themeConfig;
        this.isMenuCollapsed = false;
        themeConfig.config();
        this._loadImages();
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
    }
    App.prototype.ngAfterViewInit = function () {
        var _this = this;
        // hide spinner once all loaders are completed
        services_1.BaThemePreloader.load().then(function (values) {
            _this._spinner.hide();
        });
    };
    App.prototype._loadImages = function () {
        // register some loaders
        services_1.BaThemePreloader.registerLoader(this._imageLoader.load(theme_constants_1.layoutPaths.images.root + 'sky-bg.jpg'));
    };
    return App;
}());
App = __decorate([
    core_1.Component({
        selector: 'app',
        template: "\n    <main [ngClass]=\"{'menu-collapsed': isMenuCollapsed}\" baThemeRun>\n      <div class=\"additional-bg\"></div>\n      <router-outlet></router-outlet>\n    </main>\n  "
    }),
    __metadata("design:paramtypes", [global_state_1.GlobalState,
        services_1.BaImageLoaderService,
        services_1.BaThemeSpinner,
        core_1.ViewContainerRef,
        theme_config_1.BaThemeConfig])
], App);
exports.App = App;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var pages_menu_1 = __webpack_require__(188);
exports.MENU = pages_menu_1.PAGES_MENU.slice();


/***/ }),
/* 185 */
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
var platform_browser_1 = __webpack_require__(18);
var forms_1 = __webpack_require__(11);
var http_1 = __webpack_require__(21);
var router_1 = __webpack_require__(9);
var hmr_1 = __webpack_require__(14);
/*
 * Platform and Environment providers/directives/pipes
 */
var environment_1 = __webpack_require__(30);
var app_routing_1 = __webpack_require__(186);
// App is our top level component
var app_component_1 = __webpack_require__(183);
var app_service_1 = __webpack_require__(187);
var global_state_1 = __webpack_require__(12);
var nga_module_1 = __webpack_require__(31);
var pages_module_1 = __webpack_require__(189);
// Application wide providers
var APP_PROVIDERS = [
    app_service_1.AppState,
    global_state_1.GlobalState
];
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.state)
            return;
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            var restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // save state
        var state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = hmr_1.createNewHosts(cmpLocation);
        // save input values
        store.restoreInputValues = hmr_1.createInputTransfer();
        // remove styles
        hmr_1.removeNgStyles();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.App],
        declarations: [
            app_component_1.App
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            nga_module_1.NgaModule.forRoot(),
            pages_module_1.PagesModule,
            app_routing_1.routing
        ],
        providers: [
            environment_1.ENV_PROVIDERS,
            APP_PROVIDERS
        ]
    }),
    __metadata("design:paramtypes", [core_1.ApplicationRef, app_service_1.AppState])
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(9);
exports.routes = [
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages/dashboard' }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });


/***/ }),
/* 187 */
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
var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    return AppState;
}());
AppState = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AppState);
exports.AppState = AppState;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.PAGES_MENU = [
    {
        path: 'pages',
        children: [
            {
                path: 'dashboard',
                data: {
                    menu: {
                        title: 'Dashboard',
                        icon: 'ion-android-home',
                        selected: false,
                        expanded: false,
                        order: 0
                    }
                }
            },
            {
                path: 'editors',
                data: {
                    menu: {
                        title: 'Editors',
                        icon: 'ion-edit',
                        selected: false,
                        expanded: false,
                        order: 100,
                    }
                },
                children: [
                    {
                        path: 'ckeditor',
                        data: {
                            menu: {
                                title: 'CKEditor',
                            }
                        }
                    }
                ]
            },
            {
                path: 'components',
                data: {
                    menu: {
                        title: 'Components',
                        icon: 'ion-gear-a',
                        selected: false,
                        expanded: false,
                        order: 250,
                    }
                },
                children: [
                    {
                        path: 'treeview',
                        data: {
                            menu: {
                                title: 'Tree View',
                            }
                        }
                    }
                ]
            },
            {
                path: 'charts',
                data: {
                    menu: {
                        title: 'Charts',
                        icon: 'ion-stats-bars',
                        selected: false,
                        expanded: false,
                        order: 200,
                    }
                },
                children: [
                    {
                        path: 'chartist-js',
                        data: {
                            menu: {
                                title: 'Chartist.Js',
                            }
                        }
                    }
                ]
            },
            {
                path: 'ui',
                data: {
                    menu: {
                        title: 'UI Features',
                        icon: 'ion-android-laptop',
                        selected: false,
                        expanded: false,
                        order: 300,
                    }
                },
                children: [
                    {
                        path: 'typography',
                        data: {
                            menu: {
                                title: 'Typography',
                            }
                        }
                    },
                    {
                        path: 'buttons',
                        data: {
                            menu: {
                                title: 'Buttons',
                            }
                        }
                    },
                    {
                        path: 'icons',
                        data: {
                            menu: {
                                title: 'Icons',
                            }
                        }
                    },
                    {
                        path: 'modals',
                        data: {
                            menu: {
                                title: 'Modals',
                            }
                        }
                    },
                    {
                        path: 'grid',
                        data: {
                            menu: {
                                title: 'Grid',
                            }
                        }
                    },
                ]
            },
            {
                path: 'forms',
                data: {
                    menu: {
                        title: 'Form Elements',
                        icon: 'ion-compose',
                        selected: false,
                        expanded: false,
                        order: 400,
                    }
                },
                children: [
                    {
                        path: 'inputs',
                        data: {
                            menu: {
                                title: 'Form Inputs',
                            }
                        }
                    },
                    {
                        path: 'layouts',
                        data: {
                            menu: {
                                title: 'Form Layouts',
                            }
                        }
                    }
                ]
            },
            {
                path: 'tables',
                data: {
                    menu: {
                        title: 'Tables',
                        icon: 'ion-grid',
                        selected: false,
                        expanded: false,
                        order: 500,
                    }
                },
                children: [
                    {
                        path: 'basictables',
                        data: {
                            menu: {
                                title: 'Basic Tables',
                            }
                        }
                    },
                    {
                        path: 'smarttables',
                        data: {
                            menu: {
                                title: 'Smart Tables',
                            }
                        }
                    }
                ]
            },
            {
                path: 'maps',
                data: {
                    menu: {
                        title: 'Maps',
                        icon: 'ion-ios-location-outline',
                        selected: false,
                        expanded: false,
                        order: 600,
                    }
                },
                children: [
                    {
                        path: 'googlemaps',
                        data: {
                            menu: {
                                title: 'Google Maps',
                            }
                        }
                    },
                    {
                        path: 'leafletmaps',
                        data: {
                            menu: {
                                title: 'Leaflet Maps',
                            }
                        }
                    },
                    {
                        path: 'bubblemaps',
                        data: {
                            menu: {
                                title: 'Bubble Maps',
                            }
                        }
                    },
                    {
                        path: 'linemaps',
                        data: {
                            menu: {
                                title: 'Line Maps',
                            }
                        }
                    }
                ]
            },
            {
                path: '',
                data: {
                    menu: {
                        title: 'Pages',
                        icon: 'ion-document',
                        selected: false,
                        expanded: false,
                        order: 650,
                    }
                },
                children: [
                    {
                        path: ['/login'],
                        data: {
                            menu: {
                                title: 'Login'
                            }
                        }
                    },
                    {
                        path: ['/register'],
                        data: {
                            menu: {
                                title: 'Register'
                            }
                        }
                    }
                ]
            },
            {
                path: '',
                data: {
                    menu: {
                        title: 'Menu Level 1',
                        icon: 'ion-ios-more',
                        selected: false,
                        expanded: false,
                        order: 700,
                    }
                },
                children: [
                    {
                        path: '',
                        data: {
                            menu: {
                                title: 'Menu Level 1.1',
                                url: '#'
                            }
                        }
                    },
                    {
                        path: '',
                        data: {
                            menu: {
                                title: 'Menu Level 1.2',
                                url: '#'
                            }
                        },
                        children: [
                            {
                                path: '',
                                data: {
                                    menu: {
                                        title: 'Menu Level 1.2.1',
                                        url: '#'
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            {
                path: '',
                data: {
                    menu: {
                        title: 'External Link',
                        url: 'http://akveo.com',
                        icon: 'ion-android-exit',
                        order: 800,
                        target: '_blank'
                    }
                }
            }
        ]
    }
];


/***/ }),
/* 189 */
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
var pages_routing_1 = __webpack_require__(190);
var nga_module_1 = __webpack_require__(31);
var pages_component_1 = __webpack_require__(36);
var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, nga_module_1.NgaModule, pages_routing_1.routing],
        declarations: [pages_component_1.Pages]
    })
], PagesModule);
exports.PagesModule = PagesModule;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(9);
var pages_component_1 = __webpack_require__(36);
// noinspection TypeScriptValidateTypes
// export function loadChildren(path) { return System.import(path); };
exports.routes = [
    {
        path: 'login',
        loadChildren: function() { return __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, 463))  .then( function(module) { return module['LoginModule']; } ); }
    },
    {
        path: 'register',
        loadChildren: function() { return __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, 465))  .then( function(module) { return module['RegisterModule']; } ); }
    },
    {
        path: 'pages',
        component: pages_component_1.Pages,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: function() { return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 460))  .then( function(module) { return module['DashboardModule']; } ); } },
            { path: 'editors', loadChildren: function() { return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 461))  .then( function(module) { return module['EditorsModule']; } ); } },
            { path: 'components', loadChildren: function() { return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 459))  .then( function(module) { return module['ComponentsModule']; } ); } },
            { path: 'charts', loadChildren: function() { return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 458))  .then( function(module) { return module['ChartsModule']; } ); } },
            { path: 'ui', loadChildren: function() { return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 467))  .then( function(module) { return module['UiModule']; } ); } },
            { path: 'forms', loadChildren: function() { return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 462))  .then( function(module) { return module['FormsModule']; } ); } },
            { path: 'tables', loadChildren: function() { return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 466))  .then( function(module) { return module['TablesModule']; } ); } },
            { path: 'maps', loadChildren: function() { return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 464))  .then( function(module) { return module['MapsModule']; } ); } }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);


/***/ }),
/* 191 */
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
var services_1 = __webpack_require__(13);
__webpack_require__(248);
__webpack_require__(249);
__webpack_require__(250);
__webpack_require__(251);
__webpack_require__(252);
var baAmChartTheme_service_1 = __webpack_require__(192);
__webpack_require__(308);
var BaAmChart = (function () {
    function BaAmChart(_baAmChartThemeService) {
        this._baAmChartThemeService = _baAmChartThemeService;
        this.onChartReady = new core_1.EventEmitter();
        this._loadChartsLib();
    }
    BaAmChart.prototype.ngOnInit = function () {
        AmCharts.themes.blur = this._baAmChartThemeService.getTheme();
    };
    BaAmChart.prototype.ngAfterViewInit = function () {
        var chart = AmCharts.makeChart(this._selector.nativeElement, this.baAmChartConfiguration);
        this.onChartReady.emit(chart);
    };
    BaAmChart.prototype._loadChartsLib = function () {
        services_1.BaThemePreloader.registerLoader(new Promise(function (resolve, reject) {
            var amChartsReadyMsg = 'AmCharts ready';
            if (AmCharts.isReady) {
                resolve(amChartsReadyMsg);
            }
            else {
                AmCharts.ready(function () {
                    resolve(amChartsReadyMsg);
                });
            }
        }));
    };
    return BaAmChart;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BaAmChart.prototype, "baAmChartConfiguration", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaAmChart.prototype, "baAmChartClass", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BaAmChart.prototype, "onChartReady", void 0);
__decorate([
    core_1.ViewChild('baAmChart'),
    __metadata("design:type", core_1.ElementRef)
], BaAmChart.prototype, "_selector", void 0);
BaAmChart = __decorate([
    core_1.Component({
        selector: 'ba-am-chart',
        template: __webpack_require__(291),
        providers: [baAmChartTheme_service_1.BaAmChartThemeService],
    }),
    __metadata("design:paramtypes", [baAmChartTheme_service_1.BaAmChartThemeService])
], BaAmChart);
exports.BaAmChart = BaAmChart;


/***/ }),
/* 192 */
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
var theme_1 = __webpack_require__(8);
var BaAmChartThemeService = (function () {
    function BaAmChartThemeService(_baConfig) {
        this._baConfig = _baConfig;
    }
    BaAmChartThemeService.prototype.getTheme = function () {
        var layoutColors = this._baConfig.get().colors;
        return {
            themeName: "blur",
            AmChart: {
                color: layoutColors.defaultText,
                backgroundColor: "#FFFFFF"
            },
            AmCoordinateChart: {
                colors: [layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.primaryDark, layoutColors.warningLight, layoutColors.successDark, layoutColors.successLight, layoutColors.primaryLight, layoutColors.warningDark]
            },
            AmStockChart: {
                colors: [layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.primaryDark, layoutColors.warningLight, layoutColors.successDark, layoutColors.successLight, layoutColors.primaryLight, layoutColors.warningDark]
            },
            AmSlicedChart: {
                colors: [layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.primaryDark, layoutColors.warningLight, layoutColors.successDark, layoutColors.successLight, layoutColors.primaryLight, layoutColors.warningDark],
                labelTickColor: "#FFFFFF",
                labelTickAlpha: 0.3
            },
            AmRectangularChart: {
                zoomOutButtonColor: '#FFFFFF',
                zoomOutButtonRollOverAlpha: 0.15,
                zoomOutButtonImage: "lens.png"
            },
            AxisBase: {
                axisColor: "#FFFFFF",
                axisAlpha: 0.3,
                gridAlpha: 0.1,
                gridColor: "#FFFFFF"
            },
            ChartScrollbar: {
                backgroundColor: "#FFFFFF",
                backgroundAlpha: 0.12,
                graphFillAlpha: 0.5,
                graphLineAlpha: 0,
                selectedBackgroundColor: "#FFFFFF",
                selectedBackgroundAlpha: 0.4,
                gridAlpha: 0.15
            },
            ChartCursor: {
                cursorColor: layoutColors.primary,
                color: "#FFFFFF",
                cursorAlpha: 0.5
            },
            AmLegend: {
                color: "#FFFFFF"
            },
            AmGraph: {
                lineAlpha: 0.9
            },
            GaugeArrow: {
                color: "#FFFFFF",
                alpha: 0.8,
                nailAlpha: 0,
                innerRadius: "40%",
                nailRadius: 15,
                startWidth: 15,
                borderAlpha: 0.8,
                nailBorderAlpha: 0
            },
            GaugeAxis: {
                tickColor: "#FFFFFF",
                tickAlpha: 1,
                tickLength: 15,
                minorTickLength: 8,
                axisThickness: 3,
                axisColor: '#FFFFFF',
                axisAlpha: 1,
                bandAlpha: 0.8
            },
            TrendLine: {
                lineColor: layoutColors.danger,
                lineAlpha: 0.8
            },
            // ammap
            AreasSettings: {
                alpha: 0.8,
                color: layoutColors.info,
                colorSolid: layoutColors.primaryDark,
                unlistedAreasAlpha: 0.4,
                unlistedAreasColor: "#FFFFFF",
                outlineColor: "#FFFFFF",
                outlineAlpha: 0.5,
                outlineThickness: 0.5,
                rollOverColor: layoutColors.primary,
                rollOverOutlineColor: "#FFFFFF",
                selectedOutlineColor: "#FFFFFF",
                selectedColor: "#f15135",
                unlistedAreasOutlineColor: "#FFFFFF",
                unlistedAreasOutlineAlpha: 0.5
            },
            LinesSettings: {
                color: "#FFFFFF",
                alpha: 0.8
            },
            ImagesSettings: {
                alpha: 0.8,
                labelColor: "#FFFFFF",
                color: "#FFFFFF",
                labelRollOverColor: layoutColors.primaryDark
            },
            ZoomControl: {
                buttonFillAlpha: 0.8,
                buttonIconColor: layoutColors.default,
                buttonRollOverColor: layoutColors.danger,
                buttonFillColor: layoutColors.primaryDark,
                buttonBorderColor: layoutColors.primaryDark,
                buttonBorderAlpha: 0,
                buttonCornerRadius: 0,
                gridColor: "#FFFFFF",
                gridBackgroundColor: "#FFFFFF",
                buttonIconAlpha: 0.6,
                gridAlpha: 0.6,
                buttonSize: 20
            },
            SmallMap: {
                mapColor: "#000000",
                rectangleColor: layoutColors.danger,
                backgroundColor: "#FFFFFF",
                backgroundAlpha: 0.7,
                borderThickness: 1,
                borderAlpha: 0.8
            },
            // the defaults below are set using CSS syntax, you can use any existing css property
            // if you don't use Stock chart, you can delete lines below
            PeriodSelector: {
                color: "#FFFFFF"
            },
            PeriodButton: {
                color: "#FFFFFF",
                background: "transparent",
                opacity: 0.7,
                border: "1px solid rgba(0, 0, 0, .3)",
                MozBorderRadius: "5px",
                borderRadius: "5px",
                margin: "1px",
                outline: "none",
                boxSizing: "border-box"
            },
            PeriodButtonSelected: {
                color: "#FFFFFF",
                backgroundColor: "#b9cdf5",
                border: "1px solid rgba(0, 0, 0, .3)",
                MozBorderRadius: "5px",
                borderRadius: "5px",
                margin: "1px",
                outline: "none",
                opacity: 1,
                boxSizing: "border-box"
            },
            PeriodInputField: {
                color: "#FFFFFF",
                background: "transparent",
                border: "1px solid rgba(0, 0, 0, .3)",
                outline: "none"
            },
            DataSetSelector: {
                color: "#FFFFFF",
                selectedBackgroundColor: "#b9cdf5",
                rollOverBackgroundColor: "#a8b0e4"
            },
            DataSetCompareList: {
                color: "#FFFFFF",
                lineHeight: "100%",
                boxSizing: "initial",
                webkitBoxSizing: "initial",
                border: "1px solid rgba(0, 0, 0, .3)"
            },
            DataSetSelect: {
                border: "1px solid rgba(0, 0, 0, .3)",
                outline: "none"
            }
        };
    };
    return BaAmChartThemeService;
}());
BaAmChartThemeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [theme_1.BaThemeConfigProvider])
], BaAmChartThemeService);
exports.BaAmChartThemeService = BaAmChartThemeService;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(191));


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {
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
var BaBackTop = (function () {
    function BaBackTop() {
        this.position = 400;
        this.showSpeed = 500;
        this.moveSpeed = 1000;
    }
    BaBackTop.prototype.ngAfterViewInit = function () {
        this._onWindowScroll();
    };
    BaBackTop.prototype._onClick = function () {
        jQuery('html, body').animate({ scrollTop: 0 }, { duration: this.moveSpeed });
        return false;
    };
    BaBackTop.prototype._onWindowScroll = function () {
        var el = this._selector.nativeElement;
        window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
    };
    return BaBackTop;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], BaBackTop.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], BaBackTop.prototype, "showSpeed", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], BaBackTop.prototype, "moveSpeed", void 0);
__decorate([
    core_1.ViewChild('baBackTop'),
    __metadata("design:type", core_1.ElementRef)
], BaBackTop.prototype, "_selector", void 0);
__decorate([
    core_1.HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], BaBackTop.prototype, "_onClick", null);
__decorate([
    core_1.HostListener('window:scroll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaBackTop.prototype, "_onWindowScroll", null);
BaBackTop = __decorate([
    core_1.Component({
        selector: 'ba-back-top',
        styles: [__webpack_require__(280)],
        template: "\n    <i #baBackTop class=\"fa fa-angle-up back-top ba-back-top\" title=\"Back to Top\"></i>\n  "
    })
], BaBackTop);
exports.BaBackTop = BaBackTop;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(194));


/***/ }),
/* 196 */
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
var BaCard = (function () {
    function BaCard() {
    }
    return BaCard;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaCard.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaCard.prototype, "baCardClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaCard.prototype, "cardType", void 0);
BaCard = __decorate([
    core_1.Component({
        selector: 'ba-card',
        template: __webpack_require__(292),
    })
], BaCard);
exports.BaCard = BaCard;


/***/ }),
/* 197 */
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
var theme_1 = __webpack_require__(8);
var baCardBlurHelper_service_1 = __webpack_require__(198);
var BaCardBlur = (function () {
    function BaCardBlur(_baConfig, _baCardBlurHelper, _el) {
        this._baConfig = _baConfig;
        this._baCardBlurHelper = _baCardBlurHelper;
        this._el = _el;
        this.isEnabled = false;
        if (this._isEnabled()) {
            this._baCardBlurHelper.init();
            this._getBodyImageSizesOnBgLoad();
            this._recalculateCardStylesOnBgLoad();
            this.isEnabled = true;
        }
    }
    BaCardBlur.prototype._onWindowResize = function () {
        if (this._isEnabled()) {
            this._bodyBgSize = this._baCardBlurHelper.getBodyBgImageSizes();
            this._recalculateCardStyle();
        }
    };
    BaCardBlur.prototype._getBodyImageSizesOnBgLoad = function () {
        var _this = this;
        this._baCardBlurHelper.bodyBgLoad().subscribe(function () {
            _this._bodyBgSize = _this._baCardBlurHelper.getBodyBgImageSizes();
        });
    };
    BaCardBlur.prototype._recalculateCardStylesOnBgLoad = function () {
        var _this = this;
        this._baCardBlurHelper.bodyBgLoad().subscribe(function (event) {
            setTimeout(_this._recalculateCardStyle.bind(_this));
        });
    };
    BaCardBlur.prototype._recalculateCardStyle = function () {
        if (!this._bodyBgSize) {
            return;
        }
        this._el.nativeElement.style.backgroundSize = Math.round(this._bodyBgSize.width) + 'px ' + Math.round(this._bodyBgSize.height) + 'px';
        this._el.nativeElement.style.backgroundPosition = Math.floor(this._bodyBgSize.positionX) + 'px ' + Math.floor(this._bodyBgSize.positionY) + 'px';
    };
    BaCardBlur.prototype._isEnabled = function () {
        return this._baConfig.get().theme.name == 'blur';
    };
    return BaCardBlur;
}());
__decorate([
    core_1.HostBinding('class.card-blur'),
    __metadata("design:type", Boolean)
], BaCardBlur.prototype, "isEnabled", void 0);
__decorate([
    core_1.HostListener('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaCardBlur.prototype, "_onWindowResize", null);
BaCardBlur = __decorate([
    core_1.Directive({
        selector: '[baCardBlur]',
        providers: [baCardBlurHelper_service_1.BaCardBlurHelper]
    }),
    __metadata("design:paramtypes", [theme_1.BaThemeConfigProvider, baCardBlurHelper_service_1.BaCardBlurHelper, core_1.ElementRef])
], BaCardBlur);
exports.BaCardBlur = BaCardBlur;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(2);
var Subject_1 = __webpack_require__(32);
var BaCardBlurHelper = (function () {
    function BaCardBlurHelper() {
    }
    BaCardBlurHelper.prototype.init = function () {
        this._genBgImage();
        this._genImageLoadSubject();
    };
    BaCardBlurHelper.prototype.bodyBgLoad = function () {
        return this.imageLoadSubject;
    };
    BaCardBlurHelper.prototype.getBodyBgImageSizes = function () {
        var elemW = document.documentElement.clientWidth;
        var elemH = document.documentElement.clientHeight;
        if (elemW <= 640)
            return;
        var imgRatio = (this.image.height / this.image.width); // original img ratio
        var containerRatio = (elemH / elemW); // container ratio
        var finalHeight, finalWidth;
        if (containerRatio > imgRatio) {
            finalHeight = elemH;
            finalWidth = (elemH / imgRatio);
        }
        else {
            finalWidth = elemW;
            finalHeight = (elemW * imgRatio);
        }
        return { width: finalWidth, height: finalHeight, positionX: (elemW - finalWidth) / 2, positionY: (elemH - finalHeight) / 2 };
    };
    BaCardBlurHelper.prototype._genBgImage = function () {
        this.image = new Image();
        var computedStyle = getComputedStyle(document.body.querySelector('main'), ':before');
        this.image.src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
    };
    BaCardBlurHelper.prototype._genImageLoadSubject = function () {
        var _this = this;
        this.imageLoadSubject = new Subject_1.Subject();
        this.image.onerror = function (err) {
            _this.imageLoadSubject.complete();
        };
        this.image.onload = function () {
            _this.imageLoadSubject.next(null);
            _this.imageLoadSubject.complete();
        };
    };
    return BaCardBlurHelper;
}());
BaCardBlurHelper = __decorate([
    core_1.Injectable()
], BaCardBlurHelper);
exports.BaCardBlurHelper = BaCardBlurHelper;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(196));


/***/ }),
/* 200 */
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
var Chartist = __webpack_require__(266);
__webpack_require__(309);
var BaChartistChart = (function () {
    function BaChartistChart() {
        this.onChartReady = new core_1.EventEmitter();
    }
    BaChartistChart.prototype.ngAfterViewInit = function () {
        this.chart = new Chartist[this.baChartistChartType](this._selector.nativeElement, this.baChartistChartData, this.baChartistChartOptions, this.baChartistChartResponsive);
        this.onChartReady.emit(this.chart);
    };
    BaChartistChart.prototype.ngOnChanges = function (changes) {
        if (this.chart) {
            this.chart.update(this.baChartistChartData, this.baChartistChartOptions);
        }
    };
    BaChartistChart.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.detach();
        }
    };
    return BaChartistChart;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaChartistChart.prototype, "baChartistChartType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BaChartistChart.prototype, "baChartistChartData", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BaChartistChart.prototype, "baChartistChartOptions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BaChartistChart.prototype, "baChartistChartResponsive", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaChartistChart.prototype, "baChartistChartClass", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BaChartistChart.prototype, "onChartReady", void 0);
__decorate([
    core_1.ViewChild('baChartistChart'),
    __metadata("design:type", core_1.ElementRef)
], BaChartistChart.prototype, "_selector", void 0);
BaChartistChart = __decorate([
    core_1.Component({
        selector: 'ba-chartist-chart',
        template: __webpack_require__(293),
        providers: [],
    })
], BaChartistChart);
exports.BaChartistChart = BaChartistChart;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(200));


/***/ }),
/* 202 */
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(2);
var forms_1 = __webpack_require__(11);
var BaCheckbox = (function () {
    function BaCheckbox(state) {
        this.model = state;
        state.valueAccessor = this;
    }
    BaCheckbox.prototype.onChange = function (value) { };
    BaCheckbox.prototype.onTouch = function (value) { };
    BaCheckbox.prototype.writeValue = function (state) {
        this.state = state;
    };
    BaCheckbox.prototype.registerOnChange = function (fn) {
        this.onChange = function (state) {
            this.writeValue(state);
            this.model.viewToModelUpdate(state);
        };
    };
    BaCheckbox.prototype.registerOnTouched = function (fn) { this.onTouch = fn; };
    return BaCheckbox;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BaCheckbox.prototype, "disabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaCheckbox.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaCheckbox.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaCheckbox.prototype, "baCheckboxClass", void 0);
BaCheckbox = __decorate([
    core_1.Component({
        selector: 'ba-checkbox[ngModel]',
        styles: [__webpack_require__(282)],
        template: __webpack_require__(294),
        providers: [forms_1.NgModel]
    }),
    __param(0, core_1.Self()),
    __metadata("design:paramtypes", [forms_1.NgModel])
], BaCheckbox);
exports.BaCheckbox = BaCheckbox;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(202));


/***/ }),
/* 204 */
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
var global_state_1 = __webpack_require__(12);
var BaContentTop = (function () {
    function BaContentTop(_state) {
        var _this = this;
        this._state = _state;
        this.activePageTitle = '';
        this._state.subscribe('menu.activeLink', function (activeLink) {
            if (activeLink) {
                _this.activePageTitle = activeLink.title;
            }
        });
    }
    return BaContentTop;
}());
BaContentTop = __decorate([
    core_1.Component({
        selector: 'ba-content-top',
        styles: [__webpack_require__(283)],
        template: __webpack_require__(295),
    }),
    __metadata("design:paramtypes", [global_state_1.GlobalState])
], BaContentTop);
exports.BaContentTop = BaContentTop;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(204));


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {
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
__webpack_require__(274);
__webpack_require__(310);
var BaFullCalendar = (function () {
    function BaFullCalendar() {
        this.onCalendarReady = new core_1.EventEmitter();
    }
    BaFullCalendar.prototype.ngAfterViewInit = function () {
        var calendar = jQuery(this._selector.nativeElement).fullCalendar(this.baFullCalendarConfiguration);
        this.onCalendarReady.emit(calendar);
    };
    return BaFullCalendar;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BaFullCalendar.prototype, "baFullCalendarConfiguration", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaFullCalendar.prototype, "baFullCalendarClass", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BaFullCalendar.prototype, "onCalendarReady", void 0);
__decorate([
    core_1.ViewChild('baFullCalendar'),
    __metadata("design:type", core_1.ElementRef)
], BaFullCalendar.prototype, "_selector", void 0);
BaFullCalendar = __decorate([
    core_1.Component({
        selector: 'ba-full-calendar',
        template: __webpack_require__(296),
    })
], BaFullCalendar);
exports.BaFullCalendar = BaFullCalendar;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(206));


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {
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
var router_1 = __webpack_require__(9);
var services_1 = __webpack_require__(13);
var global_state_1 = __webpack_require__(12);
__webpack_require__(311);
var BaMenu = (function () {
    function BaMenu(_router, _service, _state) {
        this._router = _router;
        this._service = _service;
        this._state = _state;
        this.sidebarCollapsed = false;
        this.expandMenu = new core_1.EventEmitter();
        this.outOfArea = -200;
    }
    BaMenu.prototype.updateMenu = function (newMenuItems) {
        this.menuItems = newMenuItems;
        this.selectMenuAndNotify();
    };
    BaMenu.prototype.selectMenuAndNotify = function () {
        if (this.menuItems) {
            this.menuItems = this._service.selectMenuItem(this.menuItems);
            this._state.notifyDataChanged('menu.activeLink', this._service.getCurrentItem());
        }
    };
    BaMenu.prototype.ngOnInit = function () {
        var _this = this;
        this._onRouteChange = this._router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                if (_this.menuItems) {
                    _this.selectMenuAndNotify();
                }
                else {
                    // on page load we have to wait as event is fired before menu elements are prepared
                    setTimeout(function () { return _this.selectMenuAndNotify(); });
                }
            }
        });
        this._menuItemsSub = this._service.menuItems.subscribe(this.updateMenu.bind(this));
    };
    BaMenu.prototype.ngOnDestroy = function () {
        this._onRouteChange.unsubscribe();
        this._menuItemsSub.unsubscribe();
    };
    BaMenu.prototype.hoverItem = function ($event) {
        this.showHoverElem = true;
        this.hoverElemHeight = $event.currentTarget.clientHeight;
        // TODO: get rid of magic 66 constant
        this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 66;
    };
    BaMenu.prototype.toggleSubMenu = function ($event) {
        var submenu = jQuery($event.currentTarget).next();
        if (this.sidebarCollapsed) {
            this.expandMenu.emit(null);
            if (!$event.item.expanded) {
                $event.item.expanded = true;
            }
        }
        else {
            $event.item.expanded = !$event.item.expanded;
            submenu.slideToggle();
        }
        return false;
    };
    return BaMenu;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BaMenu.prototype, "sidebarCollapsed", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], BaMenu.prototype, "menuHeight", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BaMenu.prototype, "expandMenu", void 0);
BaMenu = __decorate([
    core_1.Component({
        selector: 'ba-menu',
        template: __webpack_require__(297)
    }),
    __metadata("design:paramtypes", [router_1.Router, services_1.BaMenuService, global_state_1.GlobalState])
], BaMenu);
exports.BaMenu = BaMenu;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 209 */
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
__webpack_require__(312);
var BaMenuItem = (function () {
    function BaMenuItem() {
        this.child = false;
        this.itemHover = new core_1.EventEmitter();
        this.toggleSubMenu = new core_1.EventEmitter();
    }
    BaMenuItem.prototype.onHoverItem = function ($event) {
        this.itemHover.emit($event);
    };
    BaMenuItem.prototype.onToggleSubMenu = function ($event, item) {
        $event.item = item;
        this.toggleSubMenu.emit($event);
        return false;
    };
    return BaMenuItem;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BaMenuItem.prototype, "menuItem", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BaMenuItem.prototype, "child", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BaMenuItem.prototype, "itemHover", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BaMenuItem.prototype, "toggleSubMenu", void 0);
BaMenuItem = __decorate([
    core_1.Component({
        selector: 'ba-menu-item',
        template: __webpack_require__(298)
    })
], BaMenuItem);
exports.BaMenuItem = BaMenuItem;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(209));


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(208));


/***/ }),
/* 212 */
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
var baMsgCenter_service_1 = __webpack_require__(213);
var BaMsgCenter = (function () {
    function BaMsgCenter(_baMsgCenterService) {
        this._baMsgCenterService = _baMsgCenterService;
        this.notifications = this._baMsgCenterService.getNotifications();
        this.messages = this._baMsgCenterService.getMessages();
    }
    return BaMsgCenter;
}());
BaMsgCenter = __decorate([
    core_1.Component({
        selector: 'ba-msg-center',
        providers: [baMsgCenter_service_1.BaMsgCenterService],
        styles: [__webpack_require__(287)],
        template: __webpack_require__(299)
    }),
    __metadata("design:paramtypes", [baMsgCenter_service_1.BaMsgCenterService])
], BaMsgCenter);
exports.BaMsgCenter = BaMsgCenter;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(2);
var BaMsgCenterService = (function () {
    function BaMsgCenterService() {
        this._notifications = [
            {
                name: 'Vlad',
                text: 'Vlad posted a new article.',
                time: '1 min ago'
            },
            {
                name: 'Kostya',
                text: 'Kostya changed his contact information.',
                time: '2 hrs ago'
            },
            {
                image: 'assets/img/shopping-cart.svg',
                text: 'New orders received.',
                time: '5 hrs ago'
            },
            {
                name: 'Andrey',
                text: 'Andrey replied to your comment.',
                time: '1 day ago'
            },
            {
                name: 'Nasta',
                text: 'Today is Nasta\'s birthday.',
                time: '2 days ago'
            },
            {
                image: 'assets/img/comments.svg',
                text: 'New comments on your post.',
                time: '3 days ago'
            },
            {
                name: 'Kostya',
                text: 'Kostya invited you to join the event.',
                time: '1 week ago'
            }
        ];
        this._messages = [
            {
                name: 'Nasta',
                text: 'After you get up and running, you can place Font Awesome icons just about...',
                time: '1 min ago'
            },
            {
                name: 'Vlad',
                text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
                time: '2 hrs ago'
            },
            {
                name: 'Kostya',
                text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
                time: '10 hrs ago'
            },
            {
                name: 'Andrey',
                text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
                time: '1 day ago'
            },
            {
                name: 'Nasta',
                text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
                time: '1 day ago'
            },
            {
                name: 'Kostya',
                text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
                time: '2 days ago'
            },
            {
                name: 'Vlad',
                text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
                time: '1 week ago'
            }
        ];
    }
    BaMsgCenterService.prototype.getMessages = function () {
        return this._messages;
    };
    BaMsgCenterService.prototype.getNotifications = function () {
        return this._notifications;
    };
    return BaMsgCenterService;
}());
BaMsgCenterService = __decorate([
    core_1.Injectable()
], BaMsgCenterService);
exports.BaMsgCenterService = BaMsgCenterService;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(212));


/***/ }),
/* 215 */
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(2);
var forms_1 = __webpack_require__(11);
var BaMultiCheckbox = (function () {
    function BaMultiCheckbox(state) {
        this.model = state;
        state.valueAccessor = this;
    }
    BaMultiCheckbox.prototype.getProp = function (item, propName) {
        var prop = this.propertiesMapping[propName];
        if (!prop) {
            return item[propName];
        }
        else if (typeof prop === 'function') {
            return prop(item);
        }
        return item[prop];
    };
    BaMultiCheckbox.prototype.onChange = function (value) { };
    BaMultiCheckbox.prototype.onTouch = function (value) { };
    BaMultiCheckbox.prototype.writeValue = function (state) {
        this.state = state;
    };
    BaMultiCheckbox.prototype.registerOnChange = function (fn) {
        this.onChange = function (state) {
            this.writeValue(state);
            this.model.viewToModelUpdate(state);
        };
    };
    BaMultiCheckbox.prototype.registerOnTouched = function (fn) { this.onTouch = fn; };
    return BaMultiCheckbox;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaMultiCheckbox.prototype, "baMultiCheckboxClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BaMultiCheckbox.prototype, "propertiesMapping", void 0);
BaMultiCheckbox = __decorate([
    core_1.Component({
        selector: 'ba-multi-checkbox[ngModel]',
        template: __webpack_require__(300),
        providers: [forms_1.NgModel]
    }),
    __param(0, core_1.Self()),
    __metadata("design:paramtypes", [forms_1.NgModel])
], BaMultiCheckbox);
exports.BaMultiCheckbox = BaMultiCheckbox;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(215));


/***/ }),
/* 217 */
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
var global_state_1 = __webpack_require__(12);
__webpack_require__(313);
var BaPageTop = (function () {
    function BaPageTop(_state) {
        var _this = this;
        this._state = _state;
        this.isScrolled = false;
        this.isMenuCollapsed = false;
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
    }
    BaPageTop.prototype.toggleMenu = function () {
        this.isMenuCollapsed = !this.isMenuCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
        return false;
    };
    BaPageTop.prototype.scrolledChanged = function (isScrolled) {
        this.isScrolled = isScrolled;
    };
    return BaPageTop;
}());
BaPageTop = __decorate([
    core_1.Component({
        selector: 'ba-page-top',
        template: __webpack_require__(301),
    }),
    __metadata("design:paramtypes", [global_state_1.GlobalState])
], BaPageTop);
exports.BaPageTop = BaPageTop;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(217));


/***/ }),
/* 219 */
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
var ngx_uploader_1 = __webpack_require__(146);
var BaPictureUploader = (function () {
    function BaPictureUploader(renderer) {
        this.renderer = renderer;
        this.defaultPicture = '';
        this.picture = '';
        this.uploaderOptions = { url: '' };
        this.canDelete = true;
        this.onUpload = new core_1.EventEmitter();
        this.onUploadCompleted = new core_1.EventEmitter();
    }
    BaPictureUploader.prototype.beforeUpload = function (uploadingFile) {
        var files = this._fileUpload.nativeElement.files;
        if (files.length) {
            var file = files[0];
            this._changePicture(file);
            if (!this._canUploadOnServer()) {
                uploadingFile.setAbort();
            }
            else {
                this.uploadInProgress = true;
            }
        }
    };
    BaPictureUploader.prototype.bringFileSelector = function () {
        this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
        return false;
    };
    BaPictureUploader.prototype.removePicture = function () {
        this.picture = '';
        return false;
    };
    BaPictureUploader.prototype._changePicture = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener('load', function (event) {
            _this.picture = event.target.result;
        }, false);
        reader.readAsDataURL(file);
    };
    BaPictureUploader.prototype._onUpload = function (data) {
        if (data['done'] || data['abort'] || data['error']) {
            this._onUploadCompleted(data);
        }
        else {
            this.onUpload.emit(data);
        }
    };
    BaPictureUploader.prototype._onUploadCompleted = function (data) {
        this.uploadInProgress = false;
        this.onUploadCompleted.emit(data);
    };
    BaPictureUploader.prototype._canUploadOnServer = function () {
        return !!this.uploaderOptions['url'];
    };
    return BaPictureUploader;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaPictureUploader.prototype, "defaultPicture", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaPictureUploader.prototype, "picture", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", ngx_uploader_1.NgUploaderOptions)
], BaPictureUploader.prototype, "uploaderOptions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BaPictureUploader.prototype, "canDelete", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BaPictureUploader.prototype, "onUpload", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BaPictureUploader.prototype, "onUploadCompleted", void 0);
__decorate([
    core_1.ViewChild('fileUpload'),
    __metadata("design:type", core_1.ElementRef)
], BaPictureUploader.prototype, "_fileUpload", void 0);
BaPictureUploader = __decorate([
    core_1.Component({
        selector: 'ba-picture-uploader',
        styles: [__webpack_require__(289)],
        template: __webpack_require__(302),
    }),
    __metadata("design:paramtypes", [core_1.Renderer])
], BaPictureUploader);
exports.BaPictureUploader = BaPictureUploader;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(219));


/***/ }),
/* 221 */
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
var global_state_1 = __webpack_require__(12);
var theme_1 = __webpack_require__(8);
__webpack_require__(314);
var BaSidebar = (function () {
    function BaSidebar(_elementRef, _state) {
        var _this = this;
        this._elementRef = _elementRef;
        this._state = _state;
        this.isMenuCollapsed = false;
        this.isMenuShouldCollapsed = false;
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
    }
    BaSidebar.prototype.ngOnInit = function () {
        if (this._shouldMenuCollapse()) {
            this.menuCollapse();
        }
    };
    BaSidebar.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.updateSidebarHeight(); });
    };
    BaSidebar.prototype.onWindowResize = function () {
        var isMenuShouldCollapsed = this._shouldMenuCollapse();
        if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
            this.menuCollapseStateChange(isMenuShouldCollapsed);
        }
        this.isMenuShouldCollapsed = isMenuShouldCollapsed;
        this.updateSidebarHeight();
    };
    BaSidebar.prototype.menuExpand = function () {
        this.menuCollapseStateChange(false);
    };
    BaSidebar.prototype.menuCollapse = function () {
        this.menuCollapseStateChange(true);
    };
    BaSidebar.prototype.menuCollapseStateChange = function (isCollapsed) {
        this.isMenuCollapsed = isCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    };
    BaSidebar.prototype.updateSidebarHeight = function () {
        // TODO: get rid of magic 84 constant
        this.menuHeight = this._elementRef.nativeElement.childNodes[0].clientHeight - 84;
    };
    BaSidebar.prototype._shouldMenuCollapse = function () {
        return window.innerWidth <= theme_1.layoutSizes.resWidthCollapseSidebar;
    };
    return BaSidebar;
}());
__decorate([
    core_1.HostListener('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaSidebar.prototype, "onWindowResize", null);
BaSidebar = __decorate([
    core_1.Component({
        selector: 'ba-sidebar',
        template: __webpack_require__(303)
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, global_state_1.GlobalState])
], BaSidebar);
exports.BaSidebar = BaSidebar;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(221));


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(218));
__export(__webpack_require__(214));
__export(__webpack_require__(222));
__export(__webpack_require__(210));
__export(__webpack_require__(211));
__export(__webpack_require__(205));
__export(__webpack_require__(199));
__export(__webpack_require__(193));
__export(__webpack_require__(201));
__export(__webpack_require__(195));
__export(__webpack_require__(207));
__export(__webpack_require__(220));
__export(__webpack_require__(203));
__export(__webpack_require__(216));


/***/ }),
/* 224 */
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
var BaScrollPosition = (function () {
    function BaScrollPosition() {
        this.scrollChange = new core_1.EventEmitter();
    }
    BaScrollPosition.prototype.ngOnInit = function () {
        this.onWindowScroll();
    };
    BaScrollPosition.prototype.onWindowScroll = function () {
        var isScrolled = window.scrollY > this.maxHeight;
        if (isScrolled !== this._isScrolled) {
            this._isScrolled = isScrolled;
            this.scrollChange.emit(isScrolled);
        }
    };
    return BaScrollPosition;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], BaScrollPosition.prototype, "maxHeight", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], BaScrollPosition.prototype, "scrollChange", void 0);
__decorate([
    core_1.HostListener('window:scroll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaScrollPosition.prototype, "onWindowScroll", null);
BaScrollPosition = __decorate([
    core_1.Directive({
        selector: '[baScrollPosition]'
    })
], BaScrollPosition);
exports.BaScrollPosition = BaScrollPosition;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(224));


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {
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
__webpack_require__(275);
var BaSlimScroll = (function () {
    function BaSlimScroll(_elementRef) {
        this._elementRef = _elementRef;
    }
    BaSlimScroll.prototype.ngOnChanges = function (changes) {
        this._scroll();
    };
    BaSlimScroll.prototype._scroll = function () {
        this._destroy();
        this._init();
    };
    BaSlimScroll.prototype._init = function () {
        jQuery(this._elementRef.nativeElement).slimScroll(this.baSlimScrollOptions);
    };
    BaSlimScroll.prototype._destroy = function () {
        jQuery(this._elementRef.nativeElement).slimScroll({ destroy: true });
    };
    return BaSlimScroll;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BaSlimScroll.prototype, "baSlimScrollOptions", void 0);
BaSlimScroll = __decorate([
    core_1.Directive({
        selector: '[baSlimScroll]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], BaSlimScroll);
exports.BaSlimScroll = BaSlimScroll;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(226));


/***/ }),
/* 228 */
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
var theme_1 = __webpack_require__(8);
var BaThemeRun = (function () {
    function BaThemeRun(_baConfig) {
        this._baConfig = _baConfig;
        this._classes = [];
    }
    BaThemeRun.prototype.ngOnInit = function () {
        this._assignTheme();
        this._assignMobile();
    };
    BaThemeRun.prototype._assignTheme = function () {
        this._addClass(this._baConfig.get().theme.name);
    };
    BaThemeRun.prototype._assignMobile = function () {
        if (theme_1.isMobile()) {
            this._addClass('mobile');
        }
    };
    BaThemeRun.prototype._addClass = function (cls) {
        this._classes.push(cls);
        this.classesString = this._classes.join(' ');
    };
    return BaThemeRun;
}());
__decorate([
    core_1.HostBinding('class'),
    __metadata("design:type", String)
], BaThemeRun.prototype, "classesString", void 0);
BaThemeRun = __decorate([
    core_1.Directive({
        selector: '[baThemeRun]'
    }),
    __metadata("design:paramtypes", [theme_1.BaThemeConfigProvider])
], BaThemeRun);
exports.BaThemeRun = BaThemeRun;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(228));


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(225));
__export(__webpack_require__(229));
__export(__webpack_require__(227));


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(2);
var theme_1 = __webpack_require__(8);
var BaAppPicturePipe = (function () {
    function BaAppPicturePipe() {
    }
    BaAppPicturePipe.prototype.transform = function (input) {
        return theme_1.layoutPaths.images.root + input;
    };
    return BaAppPicturePipe;
}());
BaAppPicturePipe = __decorate([
    core_1.Pipe({ name: 'baAppPicture' })
], BaAppPicturePipe);
exports.BaAppPicturePipe = BaAppPicturePipe;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(231));


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(2);
var theme_1 = __webpack_require__(8);
var BaKameleonPicturePipe = (function () {
    function BaKameleonPicturePipe() {
    }
    BaKameleonPicturePipe.prototype.transform = function (input) {
        return theme_1.layoutPaths.images.root + 'theme/icon/kameleon/' + input + '.svg';
    };
    return BaKameleonPicturePipe;
}());
BaKameleonPicturePipe = __decorate([
    core_1.Pipe({ name: 'baKameleonPicture' })
], BaKameleonPicturePipe);
exports.BaKameleonPicturePipe = BaKameleonPicturePipe;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(233));


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(2);
var theme_1 = __webpack_require__(8);
var BaProfilePicturePipe = (function () {
    function BaProfilePicturePipe() {
    }
    BaProfilePicturePipe.prototype.transform = function (input, ext) {
        if (ext === void 0) { ext = 'png'; }
        return theme_1.layoutPaths.images.profile + input + '.' + ext;
    };
    return BaProfilePicturePipe;
}());
BaProfilePicturePipe = __decorate([
    core_1.Pipe({ name: 'baProfilePicture' })
], BaProfilePicturePipe);
exports.BaProfilePicturePipe = BaProfilePicturePipe;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(235));


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(236));
__export(__webpack_require__(232));
__export(__webpack_require__(234));


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(2);
var BaImageLoaderService = (function () {
    function BaImageLoaderService() {
    }
    BaImageLoaderService.prototype.load = function (src) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.src = src;
            img.onload = function () {
                resolve('Image with src ' + src + ' loaded successfully.');
            };
        });
    };
    return BaImageLoaderService;
}());
BaImageLoaderService = __decorate([
    core_1.Injectable()
], BaImageLoaderService);
exports.BaImageLoaderService = BaImageLoaderService;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(238));


/***/ }),
/* 240 */
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
var router_1 = __webpack_require__(9);
var BehaviorSubject_1 = __webpack_require__(317);
var BaMenuService = (function () {
    function BaMenuService(_router) {
        this._router = _router;
        this.menuItems = new BehaviorSubject_1.BehaviorSubject([]);
        this._currentMenuItem = {};
    }
    /**
     * Updates the routes in the menu
     *
     * @param {Routes} routes Type compatible with app.menu.ts
     */
    BaMenuService.prototype.updateMenuByRoutes = function (routes) {
        var convertedRoutes = this.convertRoutesToMenus(_.cloneDeep(routes));
        this.menuItems.next(convertedRoutes);
    };
    BaMenuService.prototype.convertRoutesToMenus = function (routes) {
        var items = this._convertArrayToItems(routes);
        return this._skipEmpty(items);
    };
    BaMenuService.prototype.getCurrentItem = function () {
        return this._currentMenuItem;
    };
    BaMenuService.prototype.selectMenuItem = function (menuItems) {
        var _this = this;
        var items = [];
        menuItems.forEach(function (item) {
            _this._selectItem(item);
            if (item.selected) {
                _this._currentMenuItem = item;
            }
            if (item.children && item.children.length > 0) {
                item.children = _this.selectMenuItem(item.children);
            }
            items.push(item);
        });
        return items;
    };
    BaMenuService.prototype._skipEmpty = function (items) {
        var menu = [];
        items.forEach(function (item) {
            var menuItem;
            if (item.skip) {
                if (item.children && item.children.length > 0) {
                    menuItem = item.children;
                }
            }
            else {
                menuItem = item;
            }
            if (menuItem) {
                menu.push(menuItem);
            }
        });
        return [].concat.apply([], menu);
    };
    BaMenuService.prototype._convertArrayToItems = function (routes, parent) {
        var _this = this;
        var items = [];
        routes.forEach(function (route) {
            items.push(_this._convertObjectToItem(route, parent));
        });
        return items;
    };
    BaMenuService.prototype._convertObjectToItem = function (object, parent) {
        var item = {};
        if (object.data && object.data.menu) {
            // this is a menu object
            item = object.data.menu;
            item.route = object;
            delete item.route.data.menu;
        }
        else {
            item.route = object;
            item.skip = true;
        }
        // we have to collect all paths to correctly build the url then
        if (Array.isArray(item.route.path)) {
            item.route.paths = item.route.path;
        }
        else {
            item.route.paths = parent && parent.route && parent.route.paths ? parent.route.paths.slice(0) : ['/'];
            if (!!item.route.path)
                item.route.paths.push(item.route.path);
        }
        if (object.children && object.children.length > 0) {
            item.children = this._convertArrayToItems(object.children, item);
        }
        var prepared = this._prepareItem(item);
        // if current item is selected or expanded - then parent is expanded too
        if ((prepared.selected || prepared.expanded) && parent) {
            parent.expanded = true;
        }
        return prepared;
    };
    BaMenuService.prototype._prepareItem = function (object) {
        if (!object.skip) {
            object.target = object.target || '';
            object.pathMatch = object.pathMatch || 'full';
            return this._selectItem(object);
        }
        return object;
    };
    BaMenuService.prototype._selectItem = function (object) {
        object.selected = this._router.isActive(this._router.createUrlTree(object.route.paths), object.pathMatch === 'full');
        return object;
    };
    return BaMenuService;
}());
BaMenuService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], BaMenuService);
exports.BaMenuService = BaMenuService;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(240));


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(2);
var BaThemePreloader = BaThemePreloader_1 = (function () {
    function BaThemePreloader() {
    }
    BaThemePreloader.registerLoader = function (method) {
        BaThemePreloader_1._loaders.push(method);
    };
    BaThemePreloader.clear = function () {
        BaThemePreloader_1._loaders = [];
    };
    BaThemePreloader.load = function () {
        return new Promise(function (resolve, reject) {
            BaThemePreloader_1._executeAll(resolve);
        });
    };
    BaThemePreloader._executeAll = function (done) {
        setTimeout(function () {
            Promise.all(BaThemePreloader_1._loaders).then(function (values) {
                done.call(null, values);
            }).catch(function (error) {
                console.error(error);
            });
        });
    };
    return BaThemePreloader;
}());
BaThemePreloader._loaders = [];
BaThemePreloader = BaThemePreloader_1 = __decorate([
    core_1.Injectable()
], BaThemePreloader);
exports.BaThemePreloader = BaThemePreloader;
var BaThemePreloader_1;


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(242));


/***/ }),
/* 244 */
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
var BaThemeSpinner = (function () {
    function BaThemeSpinner() {
        this._selector = 'preloader';
        this._element = document.getElementById(this._selector);
    }
    BaThemeSpinner.prototype.show = function () {
        this._element.style['display'] = 'block';
    };
    BaThemeSpinner.prototype.hide = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        setTimeout(function () {
            _this._element.style['display'] = 'none';
        }, delay);
    };
    return BaThemeSpinner;
}());
BaThemeSpinner = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], BaThemeSpinner);
exports.BaThemeSpinner = BaThemeSpinner;


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(244));


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.validate = function (c) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
    return EmailValidator;
}());
exports.EmailValidator = EmailValidator;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var EqualPasswordsValidator = (function () {
    function EqualPasswordsValidator() {
    }
    EqualPasswordsValidator.validate = function (firstField, secondField) {
        return function (c) {
            return (c.controls && c.controls[firstField].value == c.controls[secondField].value) ? null : {
                passwordsEqual: {
                    valid: false
                }
            };
        };
    };
    return EqualPasswordsValidator;
}());
exports.EqualPasswordsValidator = EqualPasswordsValidator;


/***/ }),
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 38,
	"./af.js": 38,
	"./ar": 44,
	"./ar-dz": 39,
	"./ar-dz.js": 39,
	"./ar-ly": 40,
	"./ar-ly.js": 40,
	"./ar-ma": 41,
	"./ar-ma.js": 41,
	"./ar-sa": 42,
	"./ar-sa.js": 42,
	"./ar-tn": 43,
	"./ar-tn.js": 43,
	"./ar.js": 44,
	"./az": 45,
	"./az.js": 45,
	"./be": 46,
	"./be.js": 46,
	"./bg": 47,
	"./bg.js": 47,
	"./bn": 48,
	"./bn.js": 48,
	"./bo": 49,
	"./bo.js": 49,
	"./br": 50,
	"./br.js": 50,
	"./bs": 51,
	"./bs.js": 51,
	"./ca": 52,
	"./ca.js": 52,
	"./cs": 53,
	"./cs.js": 53,
	"./cv": 54,
	"./cv.js": 54,
	"./cy": 55,
	"./cy.js": 55,
	"./da": 56,
	"./da.js": 56,
	"./de": 58,
	"./de-at": 57,
	"./de-at.js": 57,
	"./de.js": 58,
	"./dv": 59,
	"./dv.js": 59,
	"./el": 60,
	"./el.js": 60,
	"./en-au": 61,
	"./en-au.js": 61,
	"./en-ca": 62,
	"./en-ca.js": 62,
	"./en-gb": 63,
	"./en-gb.js": 63,
	"./en-ie": 64,
	"./en-ie.js": 64,
	"./en-nz": 65,
	"./en-nz.js": 65,
	"./eo": 66,
	"./eo.js": 66,
	"./es": 68,
	"./es-do": 67,
	"./es-do.js": 67,
	"./es.js": 68,
	"./et": 69,
	"./et.js": 69,
	"./eu": 70,
	"./eu.js": 70,
	"./fa": 71,
	"./fa.js": 71,
	"./fi": 72,
	"./fi.js": 72,
	"./fo": 73,
	"./fo.js": 73,
	"./fr": 76,
	"./fr-ca": 74,
	"./fr-ca.js": 74,
	"./fr-ch": 75,
	"./fr-ch.js": 75,
	"./fr.js": 76,
	"./fy": 77,
	"./fy.js": 77,
	"./gd": 78,
	"./gd.js": 78,
	"./gl": 79,
	"./gl.js": 79,
	"./he": 80,
	"./he.js": 80,
	"./hi": 81,
	"./hi.js": 81,
	"./hr": 82,
	"./hr.js": 82,
	"./hu": 83,
	"./hu.js": 83,
	"./hy-am": 84,
	"./hy-am.js": 84,
	"./id": 85,
	"./id.js": 85,
	"./is": 86,
	"./is.js": 86,
	"./it": 87,
	"./it.js": 87,
	"./ja": 88,
	"./ja.js": 88,
	"./jv": 89,
	"./jv.js": 89,
	"./ka": 90,
	"./ka.js": 90,
	"./kk": 91,
	"./kk.js": 91,
	"./km": 92,
	"./km.js": 92,
	"./ko": 93,
	"./ko.js": 93,
	"./ky": 94,
	"./ky.js": 94,
	"./lb": 95,
	"./lb.js": 95,
	"./lo": 96,
	"./lo.js": 96,
	"./lt": 97,
	"./lt.js": 97,
	"./lv": 98,
	"./lv.js": 98,
	"./me": 99,
	"./me.js": 99,
	"./mi": 100,
	"./mi.js": 100,
	"./mk": 101,
	"./mk.js": 101,
	"./ml": 102,
	"./ml.js": 102,
	"./mr": 103,
	"./mr.js": 103,
	"./ms": 105,
	"./ms-my": 104,
	"./ms-my.js": 104,
	"./ms.js": 105,
	"./my": 106,
	"./my.js": 106,
	"./nb": 107,
	"./nb.js": 107,
	"./ne": 108,
	"./ne.js": 108,
	"./nl": 110,
	"./nl-be": 109,
	"./nl-be.js": 109,
	"./nl.js": 110,
	"./nn": 111,
	"./nn.js": 111,
	"./pa-in": 112,
	"./pa-in.js": 112,
	"./pl": 113,
	"./pl.js": 113,
	"./pt": 115,
	"./pt-br": 114,
	"./pt-br.js": 114,
	"./pt.js": 115,
	"./ro": 116,
	"./ro.js": 116,
	"./ru": 117,
	"./ru.js": 117,
	"./se": 118,
	"./se.js": 118,
	"./si": 119,
	"./si.js": 119,
	"./sk": 120,
	"./sk.js": 120,
	"./sl": 121,
	"./sl.js": 121,
	"./sq": 122,
	"./sq.js": 122,
	"./sr": 124,
	"./sr-cyrl": 123,
	"./sr-cyrl.js": 123,
	"./sr.js": 124,
	"./ss": 125,
	"./ss.js": 125,
	"./sv": 126,
	"./sv.js": 126,
	"./sw": 127,
	"./sw.js": 127,
	"./ta": 128,
	"./ta.js": 128,
	"./te": 129,
	"./te.js": 129,
	"./tet": 130,
	"./tet.js": 130,
	"./th": 131,
	"./th.js": 131,
	"./tl-ph": 132,
	"./tl-ph.js": 132,
	"./tlh": 133,
	"./tlh.js": 133,
	"./tr": 134,
	"./tr.js": 134,
	"./tzl": 135,
	"./tzl.js": 135,
	"./tzm": 137,
	"./tzm-latn": 136,
	"./tzm-latn.js": 136,
	"./tzm.js": 137,
	"./uk": 138,
	"./uk.js": 138,
	"./uz": 139,
	"./uz.js": 139,
	"./vi": 140,
	"./vi.js": 140,
	"./x-pseudo": 141,
	"./x-pseudo.js": 141,
	"./yo": 142,
	"./yo.js": 142,
	"./zh-cn": 143,
	"./zh-cn.js": 143,
	"./zh-hk": 144,
	"./zh-hk.js": 144,
	"./zh-tw": 145,
	"./zh-tw.js": 145
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 276;


/***/ }),
/* 277 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 278 */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  line-height: 1.15;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 3 */\n  -webkit-text-size-adjust: 100%;\n  /* 3 */ }\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  /* 1 */\n  display: block; }\n\n/**\n * Add the correct display in IE 9-.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; }\n\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\ntemplate,\n[hidden] {\n  display: none; }\n\n/* Links\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\na:active,\na:hover {\n  outline-width: 0; }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none; }\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Restore the font weight unset by the previous rule.\n */\noptgroup {\n  font-weight: bold; }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n.card.card-blur {\n  background: url(\"assets/img/blur-bg-blurred.jpg\");\n  transition: none;\n  background-attachment: fixed; }\n  .card.card-blur .card-header, .card.card-blur .card-footer {\n    background: transparent; }\n\n.card {\n  color: #ffffff;\n  background-color: rgba(255, 255, 255, 0.1);\n  border: 0;\n  border-radius: 7px;\n  position: relative;\n  margin-bottom: 24px;\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15); }\n  .card ::-webkit-scrollbar {\n    width: 0.4em;\n    height: 0.4em; }\n  .card ::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.6);\n    cursor: pointer; }\n  .card ::-webkit-scrollbar-track {\n    background: rgba(255, 255, 255, 0.7); }\n  .card body {\n    scrollbar-face-color: rgba(0, 0, 0, 0.6);\n    scrollbar-track-color: rgba(255, 255, 255, 0.7); }\n  .card.animated {\n    animation-duration: 0.5s; }\n  .card.small-card {\n    height: 114px; }\n  .card.xsmall-card {\n    height: 187px; }\n  .card.medium-card {\n    height: 400px; }\n  .card.xmedium-card {\n    height: 550px; }\n  .card.large-card {\n    height: 974px; }\n  .card.viewport100 {\n    height: calc(100vh - 218px); }\n  .card.with-scroll .card-body {\n    height: calc(100% - 44px);\n    overflow-y: auto; }\n\n.card > .card-body {\n  padding: 15px 22px;\n  height: 100%; }\n\n.card > .card-header {\n  color: #ffffff;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.card > .card-footer {\n  color: #ffffff; }\n\n.card-header, .card-footer {\n  color: #ffffff;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n  height: 44px;\n  font-size: 16px;\n  padding: 14px 22px;\n  background-color: transparent; }\n\n.card-title {\n  font-weight: 400;\n  font-size: 16px;\n  text-transform: uppercase;\n  opacity: 0.9;\n  color: #ffffff; }\n\n.card-primary > .card-header {\n  background-color: #33bcff;\n  border-color: #33bcff; }\n\n.card-success > .card-header {\n  background-color: #a2db59;\n  border-color: #a2db59; }\n\n.card-info > .card-header {\n  background-color: #66e1f4;\n  border-color: #66e1f4; }\n\n.card-warning > .card-header {\n  background-color: #ecc839;\n  border-color: #ecc839; }\n\n.card-danger > .card-header {\n  background-color: #fa758e;\n  border-color: #fa758e; }\n\n.accordion-card.card.card-primary .card-header p, .accordion-card.card.card-primary .card-header div, .accordion-card.card.card-primary .card-header span, .accordion-card.card.card-success .card-header p, .accordion-card.card.card-success .card-header div, .accordion-card.card.card-success .card-header span, .accordion-card.card.card-info .card-header p, .accordion-card.card.card-info .card-header div, .accordion-card.card.card-info .card-header span, .accordion-card.card.card-warning .card-header p, .accordion-card.card.card-warning .card-header div, .accordion-card.card.card-warning .card-header span, .accordion-card.card.card-danger .card-header p, .accordion-card.card.card-danger .card-header div, .accordion-card.card.card-danger .card-header span {\n  color: rgba(255, 255, 255, 0.8); }\n\n.card-group .card.accordion-card .card-header {\n  border-bottom: 0; }\n\n.card-group .card .card-header {\n  border-bottom: 1px solid #ddd; }\n\n.p-with-code {\n  line-height: 1.5em; }\n\n.contextual-example-card {\n  height: 120px; }\n\n.footer-card {\n  height: 142px; }\n\n.light-text {\n  font-weight: 300; }\n\n.dropdown-item {\n  line-height: 1; }\n\n.dropdown-menu {\n  font-size: inherit; }\n\n/** Different tabs positions, which were removed from bootstrap */\n.tabs-below .nav-tabs, .tabs-right .nav-tabs, .tabs-left .nav-tabs {\n  border-bottom: 0; }\n\n.tabs-right .nav-tabs, .tabs-left .nav-tabs {\n  min-width: 100px; }\n\n.tabs-right .tab-content, .tabs-left .tab-content {\n  width: calc(100% - 100px);\n  overflow-y: auto; }\n\n.tabs-right .tab-content {\n  margin-right: 100px; }\n\n.tabs-left .tab-content {\n  margin-left: 100px; }\n\n.tab-content > .tab-pane,\n.pill-content > .pill-pane {\n  display: none; }\n\n.tab-content > .active,\n.pill-content > .active {\n  display: block; }\n\n.tabs-below > .nav-tabs > li {\n  margin-top: -1px;\n  margin-bottom: 0; }\n\n.tabs-left, .tabs-right {\n  height: 100%; }\n  .tabs-left > .nav-tabs > li, .tabs-right > .nav-tabs > li {\n    float: none;\n    margin-bottom: 0; }\n    .tabs-left > .nav-tabs > li > a, .tabs-right > .nav-tabs > li > a {\n      min-width: 74px;\n      margin-right: 0;\n      margin-bottom: 3px; }\n\n.tabs-left > .nav-tabs {\n  float: left;\n  border-bottom-left-radius: 5px; }\n  .tabs-left > .nav-tabs > li > a {\n    margin-right: -1px; }\n\n.tabs-right > .nav.nav-tabs {\n  float: right;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 5px; }\n  .tabs-right > .nav.nav-tabs > li:first-of-type a {\n    border-top-left-radius: 0; }\n\n/** /Different tabs positions, which were removed from bootstrap */\n.nav-tabs > li.with-dropdown > a {\n  padding: 0; }\n\n.nav-tabs > li.with-dropdown .dropdown-toggle {\n  padding: 10px 15px;\n  display: inline-block;\n  cursor: pointer; }\n\n.tab-content {\n  padding: 15px 15px 5px 15px;\n  background: transparent;\n  color: #ffffff; }\n  .tab-content .tab-pane p {\n    color: #ffffff; }\n\n.nav.nav-tabs {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom: 1px solid transparent;\n  background-color: #4dc4ff; }\n  .nav.nav-tabs a {\n    color: #ffffff; }\n    .nav.nav-tabs a:hover {\n      color: #ffffff; }\n  .nav.nav-tabs > li > a {\n    margin-right: 0;\n    margin-bottom: 0;\n    border-radius: 0;\n    border: none; }\n    .nav.nav-tabs > li > a:hover {\n      border: none;\n      background-color: #4dc4ff; }\n  .nav.nav-tabs > li.active > a {\n    color: #ffffff;\n    background-color: #00abff; }\n  .nav.nav-tabs > li:first-of-type a {\n    border-top-left-radius: 5px; }\n  .nav.nav-tabs .dropdown-menu > li > a {\n    color: #7d7d7d; }\n    .nav.nav-tabs .dropdown-menu > li > a:hover {\n      color: #7d7d7d; }\n\n.blur .nav.nav-tabs {\n  background-color: rgba(0, 0, 0, 0.2); }\n  .blur .nav.nav-tabs a {\n    color: #ffffff; }\n    .blur .nav.nav-tabs a:hover {\n      color: #ffffff; }\n  .blur .nav.nav-tabs > li > a:hover {\n    background-color: rgba(0, 0, 0, 0.2); }\n  .blur .nav.nav-tabs > li.active > a {\n    color: #ffffff;\n    background-color: rgba(0, 0, 0, 0.25); }\n\n.nav .open > a, .nav .open > a:hover, .nav .open > a:focus {\n  background-color: transparent; }\n\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n  border: none; }\n\n.accordion-panel .panel-heading {\n  border-radius: 3px; }\n\n.accordion-panel.panel-open .panel-heading {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.accordion-panel:not(.panel-open) .panel-heading {\n  transition-delay: .3s; }\n\n.accordion-panel > .panel-heading + .panel-collapse > .panel-body {\n  border-top: none; }\n\n.accordion-panel .panel-heading {\n  padding: 0; }\n  .accordion-panel .panel-heading .accordion-toggle {\n    display: inline-block;\n    width: 100%;\n    padding: 14px 22px; }\n\n/*!\n * animate.css -http://daneden.me/animate\n * Version - 3.5.1\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\n *\n * Copyright (c) 2016 Daniel Eden\n */\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite; }\n\n.animated.hinge {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s; }\n\n.animated.flipOutX,\n.animated.flipOutY,\n.animated.bounceIn,\n.animated.bounceOut {\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s; }\n\n@-webkit-keyframes bounce {\n  from, 20%, 53%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  40%, 43% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0); }\n  70% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, -4px, 0);\n    transform: translate3d(0, -4px, 0); } }\n\n@keyframes bounce {\n  from, 20%, 53%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  40%, 43% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0); }\n  70% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, -4px, 0);\n    transform: translate3d(0, -4px, 0); } }\n\n.bounce {\n  -webkit-animation-name: bounce;\n  animation-name: bounce;\n  -webkit-transform-origin: center bottom;\n  transform-origin: center bottom; }\n\n@-webkit-keyframes flash {\n  from, 50%, to {\n    opacity: 1; }\n  25%, 75% {\n    opacity: 0; } }\n\n@keyframes flash {\n  from, 50%, to {\n    opacity: 1; }\n  25%, 75% {\n    opacity: 0; } }\n\n.flash {\n  -webkit-animation-name: flash;\n  animation-name: flash; }\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@-webkit-keyframes pulse {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05); }\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes pulse {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05); }\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n.pulse {\n  -webkit-animation-name: pulse;\n  animation-name: pulse; }\n\n@-webkit-keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1); }\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1); }\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1); }\n  65% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n    transform: scale3d(0.95, 1.05, 1); }\n  75% {\n    -webkit-transform: scale3d(1.05, 0.95, 1);\n    transform: scale3d(1.05, 0.95, 1); }\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1); }\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1); }\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1); }\n  65% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n    transform: scale3d(0.95, 1.05, 1); }\n  75% {\n    -webkit-transform: scale3d(1.05, 0.95, 1);\n    transform: scale3d(1.05, 0.95, 1); }\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n.rubberBand {\n  -webkit-animation-name: rubberBand;\n  animation-name: rubberBand; }\n\n@-webkit-keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); } }\n\n@keyframes shake {\n  from, to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); } }\n\n.shake {\n  -webkit-animation-name: shake;\n  animation-name: shake; }\n\n@-webkit-keyframes headShake {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  6.5% {\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\n    transform: translateX(-6px) rotateY(-9deg); }\n  18.5% {\n    -webkit-transform: translateX(5px) rotateY(7deg);\n    transform: translateX(5px) rotateY(7deg); }\n  31.5% {\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\n    transform: translateX(-3px) rotateY(-5deg); }\n  43.5% {\n    -webkit-transform: translateX(2px) rotateY(3deg);\n    transform: translateX(2px) rotateY(3deg); }\n  50% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n\n@keyframes headShake {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  6.5% {\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\n    transform: translateX(-6px) rotateY(-9deg); }\n  18.5% {\n    -webkit-transform: translateX(5px) rotateY(7deg);\n    transform: translateX(5px) rotateY(7deg); }\n  31.5% {\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\n    transform: translateX(-3px) rotateY(-5deg); }\n  43.5% {\n    -webkit-transform: translateX(2px) rotateY(3deg);\n    transform: translateX(2px) rotateY(3deg); }\n  50% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n\n.headShake {\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-name: headShake;\n  animation-name: headShake; }\n\n@-webkit-keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg); }\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg); }\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg); }\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg); }\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg); } }\n\n@keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg); }\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg); }\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg); }\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg); }\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg); } }\n\n.swing {\n  -webkit-transform-origin: top center;\n  transform-origin: top center;\n  -webkit-animation-name: swing;\n  animation-name: swing; }\n\n@-webkit-keyframes tada {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  10%, 20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg); }\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg); }\n  40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg); }\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes tada {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  10%, 20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg); }\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg); }\n  40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg); }\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n.tada {\n  -webkit-animation-name: tada;\n  animation-name: tada; }\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@-webkit-keyframes wobble {\n  from {\n    -webkit-transform: none;\n    transform: none; }\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg); }\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg); }\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg); }\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg); }\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg); }\n  to {\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes wobble {\n  from {\n    -webkit-transform: none;\n    transform: none; }\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg); }\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg); }\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg); }\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg); }\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg); }\n  to {\n    -webkit-transform: none;\n    transform: none; } }\n\n.wobble {\n  -webkit-animation-name: wobble;\n  animation-name: wobble; }\n\n@-webkit-keyframes jello {\n  from, 11.1%, to {\n    -webkit-transform: none;\n    transform: none; }\n  22.2% {\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n    transform: skewX(-12.5deg) skewY(-12.5deg); }\n  33.3% {\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n    transform: skewX(6.25deg) skewY(6.25deg); }\n  44.4% {\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n    transform: skewX(-3.125deg) skewY(-3.125deg); }\n  55.5% {\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n    transform: skewX(1.5625deg) skewY(1.5625deg); }\n  66.6% {\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    transform: skewX(-0.78125deg) skewY(-0.78125deg); }\n  77.7% {\n    -webkit-transform: skewX(0.39062deg) skewY(0.39062deg);\n    transform: skewX(0.39062deg) skewY(0.39062deg); }\n  88.8% {\n    -webkit-transform: skewX(-0.19531deg) skewY(-0.19531deg);\n    transform: skewX(-0.19531deg) skewY(-0.19531deg); } }\n\n@keyframes jello {\n  from, 11.1%, to {\n    -webkit-transform: none;\n    transform: none; }\n  22.2% {\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n    transform: skewX(-12.5deg) skewY(-12.5deg); }\n  33.3% {\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n    transform: skewX(6.25deg) skewY(6.25deg); }\n  44.4% {\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n    transform: skewX(-3.125deg) skewY(-3.125deg); }\n  55.5% {\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n    transform: skewX(1.5625deg) skewY(1.5625deg); }\n  66.6% {\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    transform: skewX(-0.78125deg) skewY(-0.78125deg); }\n  77.7% {\n    -webkit-transform: skewX(0.39062deg) skewY(0.39062deg);\n    transform: skewX(0.39062deg) skewY(0.39062deg); }\n  88.8% {\n    -webkit-transform: skewX(-0.19531deg) skewY(-0.19531deg);\n    transform: skewX(-0.19531deg) skewY(-0.19531deg); } }\n\n.jello {\n  -webkit-animation-name: jello;\n  animation-name: jello;\n  -webkit-transform-origin: center;\n  transform-origin: center; }\n\n@-webkit-keyframes bounceIn {\n  from, 20%, 40%, 60%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); }\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03); }\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n    transform: scale3d(0.97, 0.97, 0.97); }\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes bounceIn {\n  from, 20%, 40%, 60%, 80%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); }\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03); }\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n    transform: scale3d(0.97, 0.97, 0.97); }\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n.bounceIn {\n  -webkit-animation-name: bounceIn;\n  animation-name: bounceIn; }\n\n@-webkit-keyframes bounceInDown {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0); }\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0); }\n  to {\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes bounceInDown {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0); }\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0); }\n  to {\n    -webkit-transform: none;\n    transform: none; } }\n\n.bounceInDown {\n  -webkit-animation-name: bounceInDown;\n  animation-name: bounceInDown; }\n\n@-webkit-keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0); }\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0); }\n  to {\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0); }\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0); }\n  to {\n    -webkit-transform: none;\n    transform: none; } }\n\n.bounceInLeft {\n  -webkit-animation-name: bounceInLeft;\n  animation-name: bounceInLeft; }\n\n@-webkit-keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0); }\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); }\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0); }\n  to {\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0); }\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); }\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0); }\n  to {\n    -webkit-transform: none;\n    transform: none; } }\n\n.bounceInRight {\n  -webkit-animation-name: bounceInRight;\n  animation-name: bounceInRight; }\n\n@-webkit-keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0); }\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0); }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0); }\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0); }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n.bounceInUp {\n  -webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp; }\n\n@-webkit-keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9); }\n  50%, 55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); } }\n\n@keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9); }\n  50%, 55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); } }\n\n.bounceOut {\n  -webkit-animation-name: bounceOut;\n  animation-name: bounceOut; }\n\n@-webkit-keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0); }\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0); }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); } }\n\n@keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0); }\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0); }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); } }\n\n.bounceOutDown {\n  -webkit-animation-name: bounceOutDown;\n  animation-name: bounceOutDown; }\n\n@-webkit-keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0); }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); } }\n\n@keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0); }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); } }\n\n.bounceOutLeft {\n  -webkit-animation-name: bounceOutLeft;\n  animation-name: bounceOutLeft; }\n\n@-webkit-keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0); }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); } }\n\n@keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0); }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); } }\n\n.bounceOutRight {\n  -webkit-animation-name: bounceOutRight;\n  animation-name: bounceOutRight; }\n\n@-webkit-keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0); }\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0); }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); } }\n\n@keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0); }\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0); }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); } }\n\n.bounceOutUp {\n  -webkit-animation-name: bounceOutUp;\n  animation-name: bounceOutUp; }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn; }\n\n@-webkit-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown; }\n\n@-webkit-keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInDownBig {\n  -webkit-animation-name: fadeInDownBig;\n  animation-name: fadeInDownBig; }\n\n@-webkit-keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInLeft {\n  -webkit-animation-name: fadeInLeft;\n  animation-name: fadeInLeft; }\n\n@-webkit-keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInLeftBig {\n  -webkit-animation-name: fadeInLeftBig;\n  animation-name: fadeInLeftBig; }\n\n@-webkit-keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight; }\n\n@-webkit-keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInRightBig {\n  -webkit-animation-name: fadeInRightBig;\n  animation-name: fadeInRightBig; }\n\n@-webkit-keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp; }\n\n@-webkit-keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInUpBig {\n  -webkit-animation-name: fadeInUpBig;\n  animation-name: fadeInUpBig; }\n\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes fadeOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut; }\n\n@-webkit-keyframes fadeOutDown {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); } }\n\n@keyframes fadeOutDown {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); } }\n\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown; }\n\n@-webkit-keyframes fadeOutDownBig {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); } }\n\n@keyframes fadeOutDownBig {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); } }\n\n.fadeOutDownBig {\n  -webkit-animation-name: fadeOutDownBig;\n  animation-name: fadeOutDownBig; }\n\n@-webkit-keyframes fadeOutLeft {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); } }\n\n@keyframes fadeOutLeft {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); } }\n\n.fadeOutLeft {\n  -webkit-animation-name: fadeOutLeft;\n  animation-name: fadeOutLeft; }\n\n@-webkit-keyframes fadeOutLeftBig {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); } }\n\n@keyframes fadeOutLeftBig {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); } }\n\n.fadeOutLeftBig {\n  -webkit-animation-name: fadeOutLeftBig;\n  animation-name: fadeOutLeftBig; }\n\n@-webkit-keyframes fadeOutRight {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); } }\n\n@keyframes fadeOutRight {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); } }\n\n.fadeOutRight {\n  -webkit-animation-name: fadeOutRight;\n  animation-name: fadeOutRight; }\n\n@-webkit-keyframes fadeOutRightBig {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); } }\n\n@keyframes fadeOutRightBig {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); } }\n\n.fadeOutRightBig {\n  -webkit-animation-name: fadeOutRightBig;\n  animation-name: fadeOutRightBig; }\n\n@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); } }\n\n@keyframes fadeOutUp {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); } }\n\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp; }\n\n@-webkit-keyframes fadeOutUpBig {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); } }\n\n@keyframes fadeOutUpBig {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); } }\n\n.fadeOutUpBig {\n  -webkit-animation-name: fadeOutUpBig;\n  animation-name: fadeOutUpBig; }\n\n@-webkit-keyframes flip {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n  40% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n  50% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  80% {\n    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\n    transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; } }\n\n@keyframes flip {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n  40% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n  50% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  80% {\n    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\n    transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; } }\n\n.animated.flip {\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  -webkit-animation-name: flip;\n  animation-name: flip; }\n\n@-webkit-keyframes flipInX {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg); }\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); } }\n\n@keyframes flipInX {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg); }\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); } }\n\n.flipInX {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInX;\n  animation-name: flipInX; }\n\n@-webkit-keyframes flipInY {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg); }\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); } }\n\n@keyframes flipInY {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg); }\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); } }\n\n.flipInY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInY;\n  animation-name: flipInY; }\n\n@-webkit-keyframes flipOutX {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); }\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1; }\n  to {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0; } }\n\n@keyframes flipOutX {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); }\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1; }\n  to {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0; } }\n\n.flipOutX {\n  -webkit-animation-name: flipOutX;\n  animation-name: flipOutX;\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important; }\n\n@-webkit-keyframes flipOutY {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); }\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1; }\n  to {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0; } }\n\n@keyframes flipOutY {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); }\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1; }\n  to {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0; } }\n\n.flipOutY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipOutY;\n  animation-name: flipOutY; }\n\n@-webkit-keyframes lightSpeedIn {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0; }\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n    opacity: 1; }\n  to {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes lightSpeedIn {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0; }\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n    opacity: 1; }\n  to {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.lightSpeedIn {\n  -webkit-animation-name: lightSpeedIn;\n  animation-name: lightSpeedIn;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out; }\n\n@-webkit-keyframes lightSpeedOut {\n  from {\n    opacity: 1; }\n  to {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0; } }\n\n@keyframes lightSpeedOut {\n  from {\n    opacity: 1; }\n  to {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0; } }\n\n.lightSpeedOut {\n  -webkit-animation-name: lightSpeedOut;\n  animation-name: lightSpeedOut;\n  -webkit-animation-timing-function: ease-in;\n  animation-timing-function: ease-in; }\n\n@-webkit-keyframes rotateIn {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0; }\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes rotateIn {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0; }\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.rotateIn {\n  -webkit-animation-name: rotateIn;\n  animation-name: rotateIn; }\n\n@-webkit-keyframes rotateInDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; }\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes rotateInDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; }\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.rotateInDownLeft {\n  -webkit-animation-name: rotateInDownLeft;\n  animation-name: rotateInDownLeft; }\n\n@-webkit-keyframes rotateInDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; }\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes rotateInDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; }\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.rotateInDownRight {\n  -webkit-animation-name: rotateInDownRight;\n  animation-name: rotateInDownRight; }\n\n@-webkit-keyframes rotateInUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; }\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes rotateInUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; }\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.rotateInUpLeft {\n  -webkit-animation-name: rotateInUpLeft;\n  animation-name: rotateInUpLeft; }\n\n@-webkit-keyframes rotateInUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0; }\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes rotateInUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0; }\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.rotateInUpRight {\n  -webkit-animation-name: rotateInUpRight;\n  animation-name: rotateInUpRight; }\n\n@-webkit-keyframes rotateOut {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    opacity: 1; }\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0; } }\n\n@keyframes rotateOut {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    opacity: 1; }\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0; } }\n\n.rotateOut {\n  -webkit-animation-name: rotateOut;\n  animation-name: rotateOut; }\n\n@-webkit-keyframes rotateOutDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1; }\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; } }\n\n@keyframes rotateOutDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1; }\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; } }\n\n.rotateOutDownLeft {\n  -webkit-animation-name: rotateOutDownLeft;\n  animation-name: rotateOutDownLeft; }\n\n@-webkit-keyframes rotateOutDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1; }\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; } }\n\n@keyframes rotateOutDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1; }\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; } }\n\n.rotateOutDownRight {\n  -webkit-animation-name: rotateOutDownRight;\n  animation-name: rotateOutDownRight; }\n\n@-webkit-keyframes rotateOutUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1; }\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; } }\n\n@keyframes rotateOutUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1; }\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; } }\n\n.rotateOutUpLeft {\n  -webkit-animation-name: rotateOutUpLeft;\n  animation-name: rotateOutUpLeft; }\n\n@-webkit-keyframes rotateOutUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1; }\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0; } }\n\n@keyframes rotateOutUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1; }\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0; } }\n\n.rotateOutUpRight {\n  -webkit-animation-name: rotateOutUpRight;\n  animation-name: rotateOutUpRight; }\n\n@-webkit-keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  20%, 60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  40%, 80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1; }\n  to {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0; } }\n\n@keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  20%, 60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  40%, 80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1; }\n  to {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0; } }\n\n.hinge {\n  -webkit-animation-name: hinge;\n  animation-name: hinge; }\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@-webkit-keyframes rollIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes rollIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.rollIn {\n  -webkit-animation-name: rollIn;\n  animation-name: rollIn; }\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@-webkit-keyframes rollOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg); } }\n\n@keyframes rollOut {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg); } }\n\n.rollOut {\n  -webkit-animation-name: rollOut;\n  animation-name: rollOut; }\n\n@-webkit-keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n.zoomIn {\n  -webkit-animation-name: zoomIn;\n  animation-name: zoomIn; }\n\n@-webkit-keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomInDown {\n  -webkit-animation-name: zoomInDown;\n  animation-name: zoomInDown; }\n\n@-webkit-keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomInLeft {\n  -webkit-animation-name: zoomInLeft;\n  animation-name: zoomInLeft; }\n\n@-webkit-keyframes zoomInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomInRight {\n  -webkit-animation-name: zoomInRight;\n  animation-name: zoomInRight; }\n\n@-webkit-keyframes zoomInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomInUp {\n  -webkit-animation-name: zoomInUp;\n  animation-name: zoomInUp; }\n\n@-webkit-keyframes zoomOut {\n  from {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  to {\n    opacity: 0; } }\n\n@keyframes zoomOut {\n  from {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  to {\n    opacity: 0; } }\n\n.zoomOut {\n  -webkit-animation-name: zoomOut;\n  animation-name: zoomOut; }\n\n@-webkit-keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomOutDown {\n  -webkit-animation-name: zoomOutDown;\n  animation-name: zoomOutDown; }\n\n@-webkit-keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    transform-origin: left center; } }\n\n@keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    transform-origin: left center; } }\n\n.zoomOutLeft {\n  -webkit-animation-name: zoomOutLeft;\n  animation-name: zoomOutLeft; }\n\n@-webkit-keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);\n    transform: scale(0.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    transform-origin: right center; } }\n\n@keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);\n    transform: scale(0.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    transform-origin: right center; } }\n\n.zoomOutRight {\n  -webkit-animation-name: zoomOutRight;\n  animation-name: zoomOutRight; }\n\n@-webkit-keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomOutUp {\n  -webkit-animation-name: zoomOutUp;\n  animation-name: zoomOutUp; }\n\n@-webkit-keyframes slideInDown {\n  from {\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n    visibility: visible; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes slideInDown {\n  from {\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n    visibility: visible; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n.slideInDown {\n  -webkit-animation-name: slideInDown;\n  animation-name: slideInDown; }\n\n@-webkit-keyframes slideInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes slideInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n.slideInLeft {\n  -webkit-animation-name: slideInLeft;\n  animation-name: slideInLeft; }\n\n@-webkit-keyframes slideInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    visibility: visible; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes slideInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    visibility: visible; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n.slideInRight {\n  -webkit-animation-name: slideInRight;\n  animation-name: slideInRight; }\n\n@-webkit-keyframes slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    visibility: visible; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    visibility: visible; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n.slideInUp {\n  -webkit-animation-name: slideInUp;\n  animation-name: slideInUp; }\n\n@-webkit-keyframes slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); } }\n\n@keyframes slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); } }\n\n.slideOutDown {\n  -webkit-animation-name: slideOutDown;\n  animation-name: slideOutDown; }\n\n@-webkit-keyframes slideOutLeft {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); } }\n\n@keyframes slideOutLeft {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); } }\n\n.slideOutLeft {\n  -webkit-animation-name: slideOutLeft;\n  animation-name: slideOutLeft; }\n\n@-webkit-keyframes slideOutRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); } }\n\n@keyframes slideOutRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); } }\n\n.slideOutRight {\n  -webkit-animation-name: slideOutRight;\n  animation-name: slideOutRight; }\n\n@-webkit-keyframes slideOutUp {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); } }\n\n@keyframes slideOutUp {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); } }\n\n.slideOutUp {\n  -webkit-animation-name: slideOutUp;\n  animation-name: slideOutUp; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Roboto\", sans-serif;\n  width: 100%;\n  margin-top: 0; }\n\nh1.color, h2.color, h3.color, h4.color, h5.color, h6.color {\n  color: #f95372; }\n\nbody a {\n  color: #285eb8;\n  text-decoration: none !important;\n  transition: color 0.2s ease; }\n  body a:hover {\n    color: #163364; }\n\nh1 {\n  font-size: 32px;\n  margin-bottom: 0.5rem; }\n\nh2 {\n  font-size: 24px; }\n\nh3 {\n  font-size: 20px; }\n\nh4 {\n  font-size: 18px; }\n\nh5 {\n  font-size: 15px; }\n\n.typography-document-samples p {\n  margin: 0; }\n\n.typography-document-samples .typography-widget {\n  height: 100%; }\n  .typography-document-samples .typography-widget .card {\n    height: 620px; }\n  .typography-document-samples .typography-widget .card-title {\n    text-align: center;\n    width: 100%; }\n  .typography-document-samples .typography-widget .card.with-scroll .card-body {\n    height: calc(100% - 45px); }\n  .typography-document-samples .typography-widget .card-content {\n    padding: 15px 22px 5px 22px; }\n\n.heading-widget h1, .heading-widget h2, .heading-widget h3, .heading-widget h4, .heading-widget h5, .heading-widget h6 {\n  width: 100%;\n  font-weight: 300;\n  text-align: center; }\n\n.heading-widget p {\n  line-height: 16px;\n  font-weight: 400;\n  text-align: center; }\n\n.more-text-widget {\n  text-align: center;\n  font-size: 14px; }\n  .more-text-widget p {\n    line-height: 17px; }\n  .more-text-widget .gray {\n    color: #767676; }\n  .more-text-widget .black {\n    color: #585858; }\n  .more-text-widget .light-text {\n    font-weight: 300; }\n  .more-text-widget .regular-text {\n    font-weight: 400; }\n  .more-text-widget .upper-text {\n    text-transform: uppercase; }\n  .more-text-widget .bold-text {\n    font-weight: 700; }\n  .more-text-widget .small-text {\n    padding: 5px 0 0 0; }\n    .more-text-widget .small-text p {\n      font-size: 9px;\n      font-weight: 300;\n      line-height: 10px; }\n\n.color-widget {\n  text-align: center;\n  font-size: 14px;\n  font-weight: 400; }\n  .color-widget p {\n    line-height: 17px; }\n  .color-widget .section-block {\n    margin: 14px 0; }\n  .color-widget .yellow-text p {\n    color: #e7ba08; }\n  .color-widget .red-text p {\n    color: #f95372; }\n  .color-widget .links h3 {\n    margin-bottom: 10px; }\n  .color-widget .links p {\n    margin-bottom: 0; }\n    .color-widget .links p.hovered a {\n      color: #163364; }\n\n.lists-widget {\n  font-weight: 400; }\n  .lists-widget .list-header {\n    width: 100%;\n    text-align: center; }\n  .lists-widget .accent {\n    margin-top: 30px;\n    color: #ecc839;\n    line-height: 14px;\n    font-size: 14px;\n    padding-left: 11px;\n    border-left: 4px solid #ecc839;\n    margin-left: 13px; }\n  .lists-widget ul.blur, .lists-widget ol.blur {\n    padding-left: 13px;\n    margin-bottom: 19px;\n    list-style: none;\n    padding-top: 1px; }\n    .lists-widget ul.blur li, .lists-widget ol.blur li {\n      margin-top: 5px;\n      font-size: 14px; }\n      .lists-widget ul.blur li ul, .lists-widget ul.blur li ol, .lists-widget ol.blur li ul, .lists-widget ol.blur li ol {\n        padding-left: 20px;\n        margin-bottom: 0;\n        list-style: none; }\n  .lists-widget ul.blur li:before {\n    content: \"• \";\n    color: #ecc839;\n    width: 10px;\n    display: inline-block; }\n  .lists-widget ol.blur {\n    counter-reset: section; }\n    .lists-widget ol.blur li {\n      color: #ecc839;\n      padding-left: 0;\n      line-height: 14px;\n      position: relative; }\n      .lists-widget ol.blur li span {\n        color: #ffffff;\n        display: block; }\n      .lists-widget ol.blur li ol {\n        padding-left: 0;\n        margin-left: 12px; }\n      .lists-widget ol.blur li:before {\n        content: counters(section, \".\") \".\";\n        counter-increment: section;\n        width: 19px;\n        position: absolute;\n        left: 0;\n        top: 0;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis; }\n    .lists-widget ol.blur > li span {\n      padding-left: 14px; }\n    .lists-widget ol.blur ol {\n      counter-reset: section; }\n      .lists-widget ol.blur ol > li:before {\n        width: 30px; }\n      .lists-widget ol.blur ol > li span {\n        padding-left: 27px; }\n      .lists-widget ol.blur ol ol > li:before {\n        width: 40px; }\n      .lists-widget ol.blur ol ol > li span {\n        padding-left: 40px; }\n\n.columns-section {\n  background-color: #ffffff; }\n\np {\n  margin-bottom: 12px;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px; }\n\np.small-text {\n  color: #ffffff;\n  font-size: 12px;\n  line-height: 16px;\n  margin-bottom: 8px; }\n\n.cols-two {\n  margin-bottom: 50px; }\n  .cols-two > div {\n    float: left;\n    width: 350px;\n    margin-left: 40px; }\n    .cols-two > div:first-child {\n      margin-left: 0; }\n\n.cols-three {\n  margin-bottom: 50px; }\n  .cols-three > div {\n    float: left;\n    width: 222px;\n    margin-left: 40px; }\n    .cols-three > div:first-child {\n      margin-left: 0; }\n\na.learn-more {\n  font-size: 14px;\n  font-weight: 700;\n  text-decoration: none;\n  line-height: 24px; }\n\n.img-wrapper {\n  margin-bottom: 19px;\n  margin-top: 5px;\n  overflow: hidden;\n  height: 180px; }\n  .img-wrapper img {\n    width: 100%; }\n\n.cols-three p {\n  margin-bottom: 10px; }\n\n.banner {\n  position: relative;\n  margin-bottom: 20px; }\n\n.large-banner-wrapper {\n  overflow: hidden;\n  height: 400px; }\n  .large-banner-wrapper img {\n    height: 100%;\n    width: 100%;\n    display: block; }\n\n.banner-text-wrapper {\n  margin-top: -400px;\n  height: 400px;\n  text-align: center; }\n\n.banner-text {\n  padding: 85px 90px 60px;\n  display: inline-block;\n  margin: 67px auto;\n  background: #ffffff;\n  min-width: 432px;\n  overflow: hidden;\n  background: rgba(0, 0, 0, 0.75); }\n  .banner-text h1 {\n    font-weight: 700;\n    width: 100%;\n    color: #ffffff;\n    margin-bottom: 10px; }\n  .banner-text p {\n    font-size: 24px;\n    line-height: 30px;\n    font-weight: 300;\n    color: #00abff;\n    margin-bottom: 0px; }\n\n@media (max-width: 600px) {\n  .banner-text {\n    padding: 55px 60px 30px;\n    min-width: 0; }\n    .banner-text h1 {\n      font-size: 24px; }\n    .banner-text p {\n      font-size: 16px; } }\n\n@media (max-width: 400px) {\n  .banner-text {\n    min-width: 0;\n    width: 100%;\n    height: 100%;\n    margin: 0; } }\n\n.photo-desc {\n  margin-top: 12px;\n  text-align: center; }\n\n.text-info {\n  width: 90%; }\n  .text-info p {\n    margin-bottom: 10px; }\n\n.section-block {\n  padding-bottom: 12px; }\n\n.separator {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.3);\n  width: 100%;\n  margin-bottom: 19px;\n  margin-top: 16px; }\n\n.section {\n  padding: 0 20px 50px 20px; }\n\n.card.banner-column-panel {\n  padding: 0;\n  margin-bottom: 90px; }\n  .card.banner-column-panel .card-body {\n    padding: 0; }\n\n@media screen and (min-width: 1620px) {\n  .col-xlg-1 {\n    width: 8.33333333%;\n    flex: 0 0 8.33333333%; }\n  .col-xlg-2 {\n    width: 16.66666667%;\n    flex: 0 0 16.66666667%; }\n  .col-xlg-3 {\n    width: 25%;\n    flex: 0 0 25%; }\n  .col-xlg-4 {\n    width: 33.33333333%;\n    flex: 0 0 33.33333333%; }\n  .col-xlg-5 {\n    width: 41.66666667%;\n    flex: 0 0 41.66666667%; }\n  .col-xlg-6 {\n    width: 50%;\n    flex: 0 0 50%; }\n  .col-xlg-7 {\n    width: 58.33333333%;\n    flex: 0 0 58.33333333%; }\n  .col-xlg-8 {\n    width: 66.66666667%;\n    flex: 0 0 66.66666667%; }\n  .col-xlg-9 {\n    width: 75%;\n    flex: 0 0 75%; }\n  .col-xlg-10 {\n    width: 83.33333333%;\n    flex: 0 0 83.33333333%; }\n  .col-xlg-11 {\n    width: 91.66666667%;\n    flex: 0 0 91.66666667%; }\n  .col-xlg-12 {\n    width: 100%;\n    flex: 0 0 100%; } }\n\n.btn:focus, .btn:active:focus, .btn.active:focus,\n.btn.focus, .btn:active.focus, .btn.active.focus {\n  outline: none; }\n\n.btn {\n  border-radius: 5px;\n  transition: all 0.1s ease;\n  padding: 0.344rem 1rem;\n  font-size: 0.9rem; }\n\n.btn:hover {\n  transform: scale(1.2); }\n\n.open > .btn.dropdown-toggle.btn.btn-primary {\n  background: #00abff;\n  border-color: #0093e7;\n  background-color: #0091d9;\n  border-color: #0091d9; }\n\n.open > .btn.dropdown-toggle.btn-success {\n  background: #8bd22f;\n  border-color: #73ba17;\n  background-color: #76b328;\n  border-color: #76b328; }\n\n.open > .btn.dropdown-toggle.btn-info {\n  background: #40daf1;\n  border-color: #28c2d9;\n  background-color: #36b9cd;\n  border-color: #36b9cd; }\n\n.open > .btn.dropdown-toggle.btn-warning {\n  background: #e7ba08;\n  border-color: #cfa200;\n  background-color: #c49e07;\n  border-color: #c49e07; }\n\n.open > .btn.dropdown-toggle.btn-danger {\n  background: #f95372;\n  border-color: #e13b5a;\n  background-color: #d44761;\n  border-color: #d44761; }\n\nbutton.btn.btn-primary {\n  background: #00abff;\n  border-color: #00abff; }\n  button.btn.btn-primary.disabled, button.btn.btn-primary[disabled], fieldset[disabled] button.btn.btn-primary, button.btn.btn-primary.disabled:hover, button.btn.btn-primary[disabled]:hover,\n  fieldset[disabled] button.btn.btn-primary:hover, button.btn.btn-primary.disabled:focus, button.btn.btn-primary[disabled]:focus, fieldset[disabled] button.btn.btn-primary:focus, button.btn.btn-primary.disabled.focus, button.btn.btn-primary[disabled].focus, fieldset[disabled] button.btn.btn-primary.focus, button.btn.btn-primary.disabled:active, button.btn.btn-primary[disabled]:active, fieldset[disabled] button.btn.btn-primary:active, button.btn.btn-primary.disabled.active, button.btn.btn-primary[disabled].active,\n  fieldset[disabled] button.btn.btn-primary.active {\n    background: #00abff;\n    border-color: #0cb7ff; }\n    button.btn.btn-primary.disabled:hover, button.btn.btn-primary[disabled]:hover, fieldset[disabled] button.btn.btn-primary:hover, button.btn.btn-primary.disabled:hover:hover, button.btn.btn-primary[disabled]:hover:hover,\n    fieldset[disabled] button.btn.btn-primary:hover:hover, button.btn.btn-primary.disabled:focus:hover, button.btn.btn-primary[disabled]:focus:hover, fieldset[disabled] button.btn.btn-primary:focus:hover, button.btn.btn-primary.disabled.focus:hover, button.btn.btn-primary[disabled].focus:hover, fieldset[disabled] button.btn.btn-primary.focus:hover, button.btn.btn-primary.disabled:active:hover, button.btn.btn-primary[disabled]:active:hover, fieldset[disabled] button.btn.btn-primary:active:hover, button.btn.btn-primary.disabled.active:hover, button.btn.btn-primary[disabled].active:hover,\n    fieldset[disabled] button.btn.btn-primary.active:hover {\n      transform: none; }\n  button.btn.btn-primary:hover, button.btn.btn-primary:focus, button.btn.btn-primary.focus, button.btn.btn-primary:active, button.btn.btn-primary.active {\n    background: #00abff;\n    border-color: #0093e7; }\n  button.btn.btn-primary:active, button.btn.btn-primary:target {\n    background-color: #0091d9; }\n\nbutton.btn.btn-default {\n  border-width: 1px;\n  color: #ffffff;\n  background: transparent;\n  border-color: rgba(255, 255, 255, 0.5); }\n  button.btn.btn-default.disabled, button.btn.btn-default[disabled], fieldset[disabled] button.btn.btn-default, button.btn.btn-default.disabled:hover, button.btn.btn-default[disabled]:hover,\n  fieldset[disabled] button.btn.btn-default:hover, button.btn.btn-default.disabled:focus, button.btn.btn-default[disabled]:focus, fieldset[disabled] button.btn.btn-default:focus, button.btn.btn-default.disabled.focus, button.btn.btn-default[disabled].focus, fieldset[disabled] button.btn.btn-default.focus, button.btn.btn-default.disabled:active, button.btn.btn-default[disabled]:active, fieldset[disabled] button.btn.btn-default:active, button.btn.btn-default.disabled.active, button.btn.btn-default[disabled].active,\n  fieldset[disabled] button.btn.btn-default.active {\n    background: transparent;\n    border-color: rgba(255, 255, 255, 0.5); }\n    button.btn.btn-default.disabled:hover, button.btn.btn-default[disabled]:hover, fieldset[disabled] button.btn.btn-default:hover, button.btn.btn-default.disabled:hover:hover, button.btn.btn-default[disabled]:hover:hover,\n    fieldset[disabled] button.btn.btn-default:hover:hover, button.btn.btn-default.disabled:focus:hover, button.btn.btn-default[disabled]:focus:hover, fieldset[disabled] button.btn.btn-default:focus:hover, button.btn.btn-default.disabled.focus:hover, button.btn.btn-default[disabled].focus:hover, fieldset[disabled] button.btn.btn-default.focus:hover, button.btn.btn-default.disabled:active:hover, button.btn.btn-default[disabled]:active:hover, fieldset[disabled] button.btn.btn-default:active:hover, button.btn.btn-default.disabled.active:hover, button.btn.btn-default[disabled].active:hover,\n    fieldset[disabled] button.btn.btn-default.active:hover {\n      transform: none; }\n  button.btn.btn-default:hover, button.btn.btn-default:focus, button.btn.btn-default.focus, button.btn.btn-default:active, button.btn.btn-default.active {\n    background: transparent;\n    border-color: rgba(231, 231, 231, 0.5); }\n  button.btn.btn-default:active, button.btn.btn-default:target {\n    background-color: rgba(0, 0, 0, 0.2);\n    color: #ffffff; }\n\nbutton.btn.btn-success {\n  background: #8bd22f;\n  border-color: #8bd22f; }\n  button.btn.btn-success.disabled, button.btn.btn-success[disabled], fieldset[disabled] button.btn.btn-success, button.btn.btn-success.disabled:hover, button.btn.btn-success[disabled]:hover,\n  fieldset[disabled] button.btn.btn-success:hover, button.btn.btn-success.disabled:focus, button.btn.btn-success[disabled]:focus, fieldset[disabled] button.btn.btn-success:focus, button.btn.btn-success.disabled.focus, button.btn.btn-success[disabled].focus, fieldset[disabled] button.btn.btn-success.focus, button.btn.btn-success.disabled:active, button.btn.btn-success[disabled]:active, fieldset[disabled] button.btn.btn-success:active, button.btn.btn-success.disabled.active, button.btn.btn-success[disabled].active,\n  fieldset[disabled] button.btn.btn-success.active {\n    background: #8bd22f;\n    border-color: #97de3b; }\n    button.btn.btn-success.disabled:hover, button.btn.btn-success[disabled]:hover, fieldset[disabled] button.btn.btn-success:hover, button.btn.btn-success.disabled:hover:hover, button.btn.btn-success[disabled]:hover:hover,\n    fieldset[disabled] button.btn.btn-success:hover:hover, button.btn.btn-success.disabled:focus:hover, button.btn.btn-success[disabled]:focus:hover, fieldset[disabled] button.btn.btn-success:focus:hover, button.btn.btn-success.disabled.focus:hover, button.btn.btn-success[disabled].focus:hover, fieldset[disabled] button.btn.btn-success.focus:hover, button.btn.btn-success.disabled:active:hover, button.btn.btn-success[disabled]:active:hover, fieldset[disabled] button.btn.btn-success:active:hover, button.btn.btn-success.disabled.active:hover, button.btn.btn-success[disabled].active:hover,\n    fieldset[disabled] button.btn.btn-success.active:hover {\n      transform: none; }\n  button.btn.btn-success:hover, button.btn.btn-success:focus, button.btn.btn-success.focus, button.btn.btn-success:active, button.btn.btn-success.active {\n    background: #8bd22f;\n    border-color: #73ba17; }\n  button.btn.btn-success:active, button.btn.btn-success:target {\n    background-color: #76b328; }\n\nbutton.btn.btn-info {\n  background: #40daf1;\n  border-color: #40daf1; }\n  button.btn.btn-info.disabled, button.btn.btn-info[disabled], fieldset[disabled] button.btn.btn-info, button.btn.btn-info.disabled:hover, button.btn.btn-info[disabled]:hover,\n  fieldset[disabled] button.btn.btn-info:hover, button.btn.btn-info.disabled:focus, button.btn.btn-info[disabled]:focus, fieldset[disabled] button.btn.btn-info:focus, button.btn.btn-info.disabled.focus, button.btn.btn-info[disabled].focus, fieldset[disabled] button.btn.btn-info.focus, button.btn.btn-info.disabled:active, button.btn.btn-info[disabled]:active, fieldset[disabled] button.btn.btn-info:active, button.btn.btn-info.disabled.active, button.btn.btn-info[disabled].active,\n  fieldset[disabled] button.btn.btn-info.active {\n    background: #40daf1;\n    border-color: #4ce6fd; }\n    button.btn.btn-info.disabled:hover, button.btn.btn-info[disabled]:hover, fieldset[disabled] button.btn.btn-info:hover, button.btn.btn-info.disabled:hover:hover, button.btn.btn-info[disabled]:hover:hover,\n    fieldset[disabled] button.btn.btn-info:hover:hover, button.btn.btn-info.disabled:focus:hover, button.btn.btn-info[disabled]:focus:hover, fieldset[disabled] button.btn.btn-info:focus:hover, button.btn.btn-info.disabled.focus:hover, button.btn.btn-info[disabled].focus:hover, fieldset[disabled] button.btn.btn-info.focus:hover, button.btn.btn-info.disabled:active:hover, button.btn.btn-info[disabled]:active:hover, fieldset[disabled] button.btn.btn-info:active:hover, button.btn.btn-info.disabled.active:hover, button.btn.btn-info[disabled].active:hover,\n    fieldset[disabled] button.btn.btn-info.active:hover {\n      transform: none; }\n  button.btn.btn-info:hover, button.btn.btn-info:focus, button.btn.btn-info.focus, button.btn.btn-info:active, button.btn.btn-info.active {\n    background: #40daf1;\n    border-color: #28c2d9; }\n  button.btn.btn-info:active, button.btn.btn-info:target {\n    background-color: #36b9cd; }\n\nbutton.btn.btn-warning {\n  background: #e7ba08;\n  border-color: #e7ba08; }\n  button.btn.btn-warning.disabled, button.btn.btn-warning[disabled], fieldset[disabled] button.btn.btn-warning, button.btn.btn-warning.disabled:hover, button.btn.btn-warning[disabled]:hover,\n  fieldset[disabled] button.btn.btn-warning:hover, button.btn.btn-warning.disabled:focus, button.btn.btn-warning[disabled]:focus, fieldset[disabled] button.btn.btn-warning:focus, button.btn.btn-warning.disabled.focus, button.btn.btn-warning[disabled].focus, fieldset[disabled] button.btn.btn-warning.focus, button.btn.btn-warning.disabled:active, button.btn.btn-warning[disabled]:active, fieldset[disabled] button.btn.btn-warning:active, button.btn.btn-warning.disabled.active, button.btn.btn-warning[disabled].active,\n  fieldset[disabled] button.btn.btn-warning.active {\n    background: #e7ba08;\n    border-color: #f3c614; }\n    button.btn.btn-warning.disabled:hover, button.btn.btn-warning[disabled]:hover, fieldset[disabled] button.btn.btn-warning:hover, button.btn.btn-warning.disabled:hover:hover, button.btn.btn-warning[disabled]:hover:hover,\n    fieldset[disabled] button.btn.btn-warning:hover:hover, button.btn.btn-warning.disabled:focus:hover, button.btn.btn-warning[disabled]:focus:hover, fieldset[disabled] button.btn.btn-warning:focus:hover, button.btn.btn-warning.disabled.focus:hover, button.btn.btn-warning[disabled].focus:hover, fieldset[disabled] button.btn.btn-warning.focus:hover, button.btn.btn-warning.disabled:active:hover, button.btn.btn-warning[disabled]:active:hover, fieldset[disabled] button.btn.btn-warning:active:hover, button.btn.btn-warning.disabled.active:hover, button.btn.btn-warning[disabled].active:hover,\n    fieldset[disabled] button.btn.btn-warning.active:hover {\n      transform: none; }\n  button.btn.btn-warning:hover, button.btn.btn-warning:focus, button.btn.btn-warning.focus, button.btn.btn-warning:active, button.btn.btn-warning.active {\n    background: #e7ba08;\n    border-color: #cfa200; }\n  button.btn.btn-warning:active, button.btn.btn-warning:target {\n    background-color: #c49e07; }\n\nbutton.btn.btn-danger {\n  background: #f95372;\n  border-color: #f95372; }\n  button.btn.btn-danger.disabled, button.btn.btn-danger[disabled], fieldset[disabled] button.btn.btn-danger, button.btn.btn-danger.disabled:hover, button.btn.btn-danger[disabled]:hover,\n  fieldset[disabled] button.btn.btn-danger:hover, button.btn.btn-danger.disabled:focus, button.btn.btn-danger[disabled]:focus, fieldset[disabled] button.btn.btn-danger:focus, button.btn.btn-danger.disabled.focus, button.btn.btn-danger[disabled].focus, fieldset[disabled] button.btn.btn-danger.focus, button.btn.btn-danger.disabled:active, button.btn.btn-danger[disabled]:active, fieldset[disabled] button.btn.btn-danger:active, button.btn.btn-danger.disabled.active, button.btn.btn-danger[disabled].active,\n  fieldset[disabled] button.btn.btn-danger.active {\n    background: #f95372;\n    border-color: #ff5f7e; }\n    button.btn.btn-danger.disabled:hover, button.btn.btn-danger[disabled]:hover, fieldset[disabled] button.btn.btn-danger:hover, button.btn.btn-danger.disabled:hover:hover, button.btn.btn-danger[disabled]:hover:hover,\n    fieldset[disabled] button.btn.btn-danger:hover:hover, button.btn.btn-danger.disabled:focus:hover, button.btn.btn-danger[disabled]:focus:hover, fieldset[disabled] button.btn.btn-danger:focus:hover, button.btn.btn-danger.disabled.focus:hover, button.btn.btn-danger[disabled].focus:hover, fieldset[disabled] button.btn.btn-danger.focus:hover, button.btn.btn-danger.disabled:active:hover, button.btn.btn-danger[disabled]:active:hover, fieldset[disabled] button.btn.btn-danger:active:hover, button.btn.btn-danger.disabled.active:hover, button.btn.btn-danger[disabled].active:hover,\n    fieldset[disabled] button.btn.btn-danger.active:hover {\n      transform: none; }\n  button.btn.btn-danger:hover, button.btn.btn-danger:focus, button.btn.btn-danger.focus, button.btn.btn-danger:active, button.btn.btn-danger.active {\n    background: #f95372;\n    border-color: #e13b5a; }\n  button.btn.btn-danger:active, button.btn.btn-danger:target {\n    background-color: #d44761; }\n\nbutton.btn.btn-inverse {\n  background: #ffffff;\n  border-color: #ffffff;\n  color: #ffffff; }\n  button.btn.btn-inverse.disabled, button.btn.btn-inverse[disabled], fieldset[disabled] button.btn.btn-inverse, button.btn.btn-inverse.disabled:hover, button.btn.btn-inverse[disabled]:hover,\n  fieldset[disabled] button.btn.btn-inverse:hover, button.btn.btn-inverse.disabled:focus, button.btn.btn-inverse[disabled]:focus, fieldset[disabled] button.btn.btn-inverse:focus, button.btn.btn-inverse.disabled.focus, button.btn.btn-inverse[disabled].focus, fieldset[disabled] button.btn.btn-inverse.focus, button.btn.btn-inverse.disabled:active, button.btn.btn-inverse[disabled]:active, fieldset[disabled] button.btn.btn-inverse:active, button.btn.btn-inverse.disabled.active, button.btn.btn-inverse[disabled].active,\n  fieldset[disabled] button.btn.btn-inverse.active {\n    background: #ffffff;\n    border-color: white; }\n    button.btn.btn-inverse.disabled:hover, button.btn.btn-inverse[disabled]:hover, fieldset[disabled] button.btn.btn-inverse:hover, button.btn.btn-inverse.disabled:hover:hover, button.btn.btn-inverse[disabled]:hover:hover,\n    fieldset[disabled] button.btn.btn-inverse:hover:hover, button.btn.btn-inverse.disabled:focus:hover, button.btn.btn-inverse[disabled]:focus:hover, fieldset[disabled] button.btn.btn-inverse:focus:hover, button.btn.btn-inverse.disabled.focus:hover, button.btn.btn-inverse[disabled].focus:hover, fieldset[disabled] button.btn.btn-inverse.focus:hover, button.btn.btn-inverse.disabled:active:hover, button.btn.btn-inverse[disabled]:active:hover, fieldset[disabled] button.btn.btn-inverse:active:hover, button.btn.btn-inverse.disabled.active:hover, button.btn.btn-inverse[disabled].active:hover,\n    fieldset[disabled] button.btn.btn-inverse.active:hover {\n      transform: none; }\n  button.btn.btn-inverse:hover, button.btn.btn-inverse:focus, button.btn.btn-inverse.focus, button.btn.btn-inverse:active, button.btn.btn-inverse.active {\n    background: #ffffff;\n    border-color: #e7e7e7; }\n  button.btn.btn-inverse:active, button.btn.btn-inverse:target, button.btn.btn-inverse:hover {\n    background-color: #ffffff;\n    color: #ffffff; }\n\n.btn-with-icon i {\n  margin-right: 10px; }\n\n.btn-group :hover, .btn-toolbar :hover {\n  transform: none; }\n\n.btn-group button.btn.btn-primary {\n  border-color: #009ff3; }\n  .btn-group button.btn.btn-primary:hover {\n    border-color: #0093e7; }\n\n.btn-group button.btn.btn-danger {\n  border-color: #ed4766; }\n  .btn-group button.btn.btn-danger:hover {\n    border-color: #e13b5a; }\n\n.btn-group button.btn.btn-info {\n  border-color: #34cee5; }\n  .btn-group button.btn.btn-info:hover {\n    border-color: #28c2d9; }\n\n.btn-group button.btn.btn-success {\n  border-color: #7fc623; }\n  .btn-group button.btn.btn-success:hover {\n    border-color: #73ba17; }\n\n.btn-group button.btn.btn-warning {\n  border-color: #dbae00; }\n  .btn-group button.btn.btn-warning:hover {\n    border-color: #cfa200; }\n\n.btn-group .dropdown-menu {\n  margin-top: 0px; }\n\n.btn-toolbar {\n  display: inline-block; }\n\n.btn .caret {\n  margin-left: 2px; }\n\nbutton.progress-button .progress {\n  margin-bottom: 0;\n  border-radius: 0; }\n\nbutton.progress-button:hover {\n  transform: none; }\n\nbutton.progress-button.progress-button-style-shrink.btn.disabled.progress-button-dir-horizontal:hover {\n  transform: scaleY(0.3); }\n\nbutton.progress-button.progress-button-style-shrink.btn.disabled.progress-button-dir-vertical:hover {\n  transform: scaleX(0.1); }\n\nbutton.progress-button.btn.btn-primary {\n  border-radius: 0; }\n  button.progress-button.btn.btn-primary .content:after, button.progress-button.btn.btn-primary .content:before {\n    color: #002233; }\n  button.progress-button.btn.btn-primary.progress-button-style-move-up .content, button.progress-button.btn.btn-primary.progress-button-style-slide-down .content {\n    background-color: #0089cc; }\n  button.progress-button.btn.btn-primary.progress-button-style-lateral-lines .progress-inner {\n    border-color: #0089cc;\n    background: 0 0; }\n  button.progress-button.btn.btn-primary .progress {\n    background-color: #0089cc;\n    box-shadow: 0 1px 0 #0089cc; }\n  button.progress-button.btn.btn-primary .progress-inner {\n    background-color: #006799; }\n  button.progress-button.btn.btn-primary.progress-button-perspective {\n    background: none; }\n    button.progress-button.btn.btn-primary.progress-button-perspective .content {\n      background-color: #00abff; }\n\nbutton.progress-button.btn.btn-default {\n  border-radius: 0; }\n  button.progress-button.btn.btn-default .content:after, button.progress-button.btn.btn-default .content:before {\n    color: #999999; }\n  button.progress-button.btn.btn-default.progress-button-style-move-up .content, button.progress-button.btn.btn-default.progress-button-style-slide-down .content {\n    background-color: #e6e6e6; }\n  button.progress-button.btn.btn-default.progress-button-style-lateral-lines .progress-inner {\n    border-color: #e6e6e6;\n    background: 0 0; }\n  button.progress-button.btn.btn-default .progress {\n    background-color: #e6e6e6;\n    box-shadow: 0 1px 0 #e6e6e6; }\n  button.progress-button.btn.btn-default .progress-inner {\n    background-color: #cccccc; }\n  button.progress-button.btn.btn-default.progress-button-perspective {\n    background: none; }\n    button.progress-button.btn.btn-default.progress-button-perspective .content {\n      background-color: #ffffff; }\n\nbutton.progress-button.btn.btn-success {\n  border-radius: 0; }\n  button.progress-button.btn.btn-success .content:after, button.progress-button.btn.btn-success .content:before {\n    color: #1d2c09; }\n  button.progress-button.btn.btn-success.progress-button-style-move-up .content, button.progress-button.btn.btn-success.progress-button-style-slide-down .content {\n    background-color: #70a925; }\n  button.progress-button.btn.btn-success.progress-button-style-lateral-lines .progress-inner {\n    border-color: #70a925;\n    background: 0 0; }\n  button.progress-button.btn.btn-success .progress {\n    background-color: #70a925;\n    box-shadow: 0 1px 0 #70a925; }\n  button.progress-button.btn.btn-success .progress-inner {\n    background-color: #547f1c; }\n  button.progress-button.btn.btn-success.progress-button-perspective {\n    background: none; }\n    button.progress-button.btn.btn-success.progress-button-perspective .content {\n      background-color: #8bd22f; }\n\nbutton.progress-button.btn.btn-info {\n  border-radius: 0; }\n  button.progress-button.btn.btn-info .content:after, button.progress-button.btn.btn-info .content:before {\n    color: #07535e; }\n  button.progress-button.btn.btn-info.progress-button-style-move-up .content, button.progress-button.btn.btn-info.progress-button-style-slide-down .content {\n    background-color: #11d0ed; }\n  button.progress-button.btn.btn-info.progress-button-style-lateral-lines .progress-inner {\n    border-color: #11d0ed;\n    background: 0 0; }\n  button.progress-button.btn.btn-info .progress {\n    background-color: #11d0ed;\n    box-shadow: 0 1px 0 #11d0ed; }\n  button.progress-button.btn.btn-info .progress-inner {\n    background-color: #0ea6bd; }\n  button.progress-button.btn.btn-info.progress-button-perspective {\n    background: none; }\n    button.progress-button.btn.btn-info.progress-button-perspective .content {\n      background-color: #40daf1; }\n\nbutton.progress-button.btn.btn-warning {\n  border-radius: 0; }\n  button.progress-button.btn.btn-warning .content:after, button.progress-button.btn.btn-warning .content:before {\n    color: #221b01; }\n  button.progress-button.btn.btn-warning.progress-button-style-move-up .content, button.progress-button.btn.btn-warning.progress-button-style-slide-down .content {\n    background-color: #b69206; }\n  button.progress-button.btn.btn-warning.progress-button-style-lateral-lines .progress-inner {\n    border-color: #b69206;\n    background: 0 0; }\n  button.progress-button.btn.btn-warning .progress {\n    background-color: #b69206;\n    box-shadow: 0 1px 0 #b69206; }\n  button.progress-button.btn.btn-warning .progress-inner {\n    background-color: #846b05; }\n  button.progress-button.btn.btn-warning.progress-button-perspective {\n    background: none; }\n    button.progress-button.btn.btn-warning.progress-button-perspective .content {\n      background-color: #e7ba08; }\n\nbutton.progress-button.btn.btn-danger {\n  border-radius: 0; }\n  button.progress-button.btn.btn-danger .content:after, button.progress-button.btn.btn-danger .content:before {\n    color: #7c041b; }\n  button.progress-button.btn.btn-danger.progress-button-style-move-up .content, button.progress-button.btn.btn-danger.progress-button-style-slide-down .content {\n    background-color: #f7224a; }\n  button.progress-button.btn.btn-danger.progress-button-style-lateral-lines .progress-inner {\n    border-color: #f7224a;\n    background: 0 0; }\n  button.progress-button.btn.btn-danger .progress {\n    background-color: #f7224a;\n    box-shadow: 0 1px 0 #f7224a; }\n  button.progress-button.btn.btn-danger .progress-inner {\n    background-color: #de0830; }\n  button.progress-button.btn.btn-danger.progress-button-perspective {\n    background: none; }\n    button.progress-button.btn.btn-danger.progress-button-perspective .content {\n      background-color: #f95372; }\n\n.btn-raised {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.35); }\n\n.btn-mm {\n  padding: 5px 11px;\n  font-size: 13px; }\n\n.btn-xm {\n  padding: 8px 14px;\n  font-size: 16px; }\n\n.btn-group-xs > .btn, .btn-xs {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.btn-group-sm > .btn, .btn-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.btn-group-lg > .btn, .btn-lg {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px; }\n\n.dropdown button.btn.btn-default.dropdown-toggle {\n  color: #ffffff;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  background-color: transparent; }\n  .dropdown button.btn.btn-default.dropdown-toggle:focus, .dropdown button.btn.btn-default.dropdown-toggle:active {\n    background-color: #ffffff; }\n\n.ng2 .dropdown button.btn.btn-default.dropdown-toggle:focus, .ng2 .dropdown button.btn.btn-default.dropdown-toggle:active, .blur .dropdown button.btn.btn-default.dropdown-toggle:focus, .blur .dropdown button.btn.btn-default.dropdown-toggle:active {\n  background-color: transparent; }\n\n.bootstrap-select .dropdown-toggle:focus {\n  outline: none !important; }\n\n.bootstrap-select button.btn-default:focus {\n  color: #ffffff; }\n\n.bootstrap-select .btn {\n  transition: none; }\n\n.i-face {\n  display: inline-block;\n  background: url(\"assets/img/face.svg\") no-repeat center;\n  background-size: contain;\n  vertical-align: middle;\n  width: 80px;\n  height: 80px; }\n\n.i-money {\n  display: inline-block;\n  background: url(\"assets/img/money.svg\") no-repeat center;\n  background-size: contain;\n  vertical-align: middle;\n  width: 80px;\n  height: 80px; }\n\n.i-person {\n  display: inline-block;\n  background: url(\"assets/img/person.svg\") no-repeat center;\n  background-size: contain;\n  vertical-align: middle;\n  width: 80px;\n  height: 80px; }\n\n.i-refresh {\n  display: inline-block;\n  background: url(\"assets/img/refresh.svg\") no-repeat center;\n  background-size: contain;\n  vertical-align: middle;\n  width: 80px;\n  height: 80px; }\n\n::-webkit-scrollbar {\n  width: 0.5em;\n  height: 0.5em; }\n\n::-webkit-scrollbar-thumb {\n  background: #d9d9d9;\n  cursor: pointer; }\n\n::-webkit-scrollbar-track {\n  background: transparent; }\n\nbody {\n  scrollbar-face-color: #d9d9d9;\n  scrollbar-track-color: transparent; }\n\nhtml {\n  position: relative;\n  min-width: 320px; }\n\nhtml, body {\n  min-height: 100%;\n  height: 100%;\n  min-width: 320px; }\n\nmain {\n  min-height: 100%;\n  position: relative;\n  font: 14px/16px \"Roboto\", sans-serif;\n  color: #ffffff;\n  background-color: #F0F3F4; }\n  main::before {\n    content: '';\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: url(\"assets/img/sky-bg.jpg\") no-repeat center center;\n    background-size: cover;\n    will-change: transform;\n    z-index: 0; }\n  main .additional-bg {\n    display: none; }\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  html {\n    overflow: hidden;\n    height: 100%; }\n  body {\n    overflow: auto;\n    height: 100%; } }\n\na {\n  transition: color 0.5s ease;\n  outline: 0 !important; }\n\n.body-bg {\n  display: none; }\n\n.al-header {\n  display: block;\n  height: 49px;\n  margin: 0;\n  background-repeat: repeat-x;\n  position: relative;\n  z-index: 905;\n  color: #444444; }\n\n.al-main {\n  margin-left: 180px;\n  padding: 66px 0 34px 0;\n  min-height: 500px;\n  position: relative; }\n\n.al-footer {\n  height: 34px;\n  padding: 0 18px 0 200px;\n  width: 100%;\n  position: absolute;\n  display: block;\n  bottom: 0;\n  font-size: 13px;\n  color: #ffffff;\n  transition: padding-left 0.5s ease; }\n\n.al-footer-main {\n  float: left;\n  margin-left: 15px; }\n\n.al-copy {\n  float: left; }\n\n.al-footer-right {\n  float: right;\n  margin-right: 12px; }\n  .al-footer-right i {\n    margin: 0 4px;\n    color: #f95372;\n    font-size: 12px; }\n  .al-footer-right a {\n    margin-left: 4px;\n    color: #ffffff; }\n    .al-footer-right a:hover {\n      color: #f95372; }\n\n.al-share {\n  margin: -6px 0 0 12px;\n  padding: 0;\n  list-style: none;\n  float: left; }\n  .al-share li {\n    list-style: none;\n    float: left;\n    margin-left: 16px; }\n    .al-share li i {\n      cursor: pointer;\n      transition: all 0.1s ease;\n      color: white;\n      padding: 6px;\n      box-sizing: content-box;\n      font-size: 16px; }\n      .al-share li i:hover {\n        transform: scale(1.2); }\n    .al-share li i.fa-facebook-square {\n      color: #3b5998; }\n    .al-share li i.fa-twitter-square {\n      color: #55acee; }\n    .al-share li i.fa-google-plus-square {\n      color: #dd4b39; }\n\n.al-content {\n  padding: 8px 32px 8px 40px; }\n\n@media screen and (max-width: 500px) {\n  .al-content {\n    padding: 8px 20px; } }\n\n.vis-hidden {\n  visibility: hidden;\n  position: absolute;\n  top: -9999px;\n  left: -9999px; }\n\n.icon-up, .icon-down {\n  width: 5px;\n  height: 13px;\n  display: block; }\n\n.icon-up {\n  background: url(\"assets/img/arrow-green-up.svg\") no-repeat 0 0; }\n\n.icon-down {\n  background: url(\"assets/img/arrow-red-down.svg\") no-repeat 0 0; }\n\n.disable-text-selection {\n  -webkit-touch-callout: none;\n  user-select: none; }\n\n.align-right {\n  text-align: right; }\n\n.amcharts-chart-div > a {\n  font-size: 6px !important; }\n\n.content-panel {\n  padding-left: 22px;\n  padding-top: 26px; }\n\n@media (max-width: 590px) {\n  .al-footer-right {\n    float: none;\n    margin-bottom: 19px;\n    margin-right: 0; }\n  .al-footer {\n    height: 76px;\n    text-align: center; }\n  .al-main {\n    padding-bottom: 76px; }\n  .al-footer-main {\n    float: none;\n    display: inline-block; } }\n\n.full-invisible {\n  visibility: hidden !important; }\n  .full-invisible * {\n    visibility: hidden !important; }\n\n.irs-grid-text {\n  color: #ffffff; }\n\n.text-right {\n  text-align: right; }\n\n.text-left {\n  text-align: left; }\n\n.text-center {\n  text-align: center; }\n\n@font-face {\n  font-family: 'socicon';\n  src: url(\"assets/fonts/socicon.eot\");\n  src: url(\"assets/fonts/socicon.eot?#iefix\") format(\"embedded-opentype\"), url(\"assets/fonts/socicon.woff\") format(\"woff\"), url(\"assets/fonts/socicon.woff2\") format(\"woff2\"), url(\"assets/fonts/socicon.ttf\") format(\"truetype\"), url(\"assets/fonts/socicon.svg#sociconregular\") format(\"svg\");\n  font-weight: 400;\n  font-style: normal;\n  text-transform: initial; }\n\n.socicon {\n  font-family: 'socicon' !important; }\n\n.socicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'socicon';\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased; }\n\n.socicon:empty {\n  width: 1em; }\n\n.socicon-twitter {\n  background-color: #55acee; }\n  .socicon-twitter:before {\n    content: \"a\"; }\n\n.socicon-facebook {\n  background-color: #3b5998; }\n  .socicon-facebook:before {\n    content: \"b\"; }\n\n.socicon-google {\n  background-color: #dd4b39; }\n  .socicon-google:before {\n    content: \"c\"; }\n\n.socicon-linkedin {\n  background-color: #0177B5; }\n  .socicon-linkedin:before {\n    content: \"j\"; }\n\n.socicon-github {\n  background-color: #6b6b6b; }\n  .socicon-github:before {\n    content: \"Q\"; }\n\n.socicon-stackoverflow {\n  background-color: #2F96E8; }\n  .socicon-stackoverflow:before {\n    content: \"(\"; }\n\n.socicon-dribble {\n  background-color: #F26798; }\n  .socicon-dribble:before {\n    content: \"D\"; }\n\n.socicon-behace {\n  background-color: #0093FA; }\n  .socicon-behace:before {\n    content: \"H\"; }\n\n.table {\n  margin-bottom: 0px; }\n  .table > thead > tr > th {\n    border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n    white-space: nowrap; }\n    .table > thead > tr > th:first-child {\n      text-align: center; }\n    .table > thead > tr > th:last-child {\n      padding-right: 16px; }\n  .table > tbody > tr > tr:first-child {\n    padding-top: 1px; }\n  .table > tbody > tr > td {\n    padding: 0px 8px;\n    line-height: 35px;\n    border-top: 1px solid rgba(255, 255, 255, 0.3); }\n    .table > tbody > tr > td:first-child {\n      text-align: center; }\n    .table > tbody > tr > td:last-child {\n      padding-right: 16px !important; }\n\n.table-id {\n  text-align: left !important;\n  width: 40px; }\n\n.table-arr {\n  width: 5px;\n  padding: 10px 8px 8px 0 !important; }\n\n.table-no-borders {\n  border: none; }\n  .table-no-borders td, .table-no-borders th, .table-no-borders tr {\n    border: none !important; }\n\n.editable-wrap .btn-group.form-control {\n  background-color: transparent; }\n\n.editable-tr-wrap .editable-wrap {\n  vertical-align: super; }\n\n.editable-tr-wrap .editable-controls input.editable-input {\n  width: 110px; }\n\n.editable-tr-wrap td {\n  width: 20%; }\n\n.editable-table-button {\n  width: 70px; }\n\n.add-row-editable-table {\n  margin-bottom: 10px; }\n\n.add-row-editable-table + table {\n  margin-bottom: 5px; }\n\n.select-page-size-wrap {\n  width: 150px; }\n\n.table .header-row th {\n  vertical-align: middle;\n  padding: 0 8px; }\n\ntr.editable-row input.form-control {\n  vertical-align: middle; }\n\n.select-td .editable-select {\n  margin-bottom: 1px; }\n\n@media screen and (max-width: 1199px) {\n  .editable-tr-wrap .editable-wrap {\n    vertical-align: middle; } }\n\n.browser-icons {\n  width: 41px; }\n\n.st-sort-ascent, .st-sort-descent {\n  position: relative; }\n\n.st-sort-ascent:after, .st-sort-descent:after {\n  width: 0;\n  height: 0;\n  border-bottom: 4px solid #ffffff;\n  border-top: 4px solid transparent;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  margin-bottom: 2px; }\n\n.st-sort-descent:after {\n  transform: rotate(-180deg);\n  margin-bottom: -2px; }\n\n.sortable th {\n  cursor: pointer; }\n  .sortable th:after {\n    content: '';\n    display: inline-block;\n    width: 8px;\n    margin-left: 8px; }\n\na.email-link {\n  color: #ffffff; }\n  a.email-link:hover {\n    color: #f95372; }\n\ninput.search-input {\n  margin-left: -8px;\n  padding-left: 8px; }\n\n.table .pagination {\n  margin: 4px 0 -12px 0; }\n  .table .pagination a {\n    cursor: pointer; }\n\n.vertical-scroll {\n  max-height: 214px; }\n\n.pagination > li > a, .pagination > li > span {\n  background: transparent; }\n\n.pagination > li:first-child > a, .pagination > li:first-child > span {\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px; }\n\n.pagination > li:last-child > a, .pagination > li:last-child > span {\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px; }\n\n.status-button {\n  width: 60px; }\n\n.table .editable-wrap .editable-controls, .table .editable-wrap .editable-error {\n  vertical-align: sub; }\n  .table .editable-wrap .editable-controls .btn, .table .editable-wrap .editable-error .btn {\n    padding: 3px 8px; }\n    .table .editable-wrap .editable-controls .btn.dropdown-toggle, .table .editable-wrap .editable-error .btn.dropdown-toggle {\n      padding: 3px 20px;\n      margin-top: 3px; }\n  .table .editable-wrap .editable-controls input, .table .editable-wrap .editable-error input {\n    line-height: 1px;\n    height: 30px; }\n\n.form-inline button[type=\"submit\"].editable-table-button {\n  margin-left: 0; }\n\n.table > thead > tr > th {\n  border-bottom: none; }\n\n.table > tbody > tr.no-top-border:first-child > td {\n  border-top: none; }\n\n.black-muted-bg {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.table-hover > tbody > tr:hover {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.table-bordered,\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid rgba(255, 255, 255, 0.3); }\n\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.table > tbody > tr.primary > td {\n  background-color: rgba(0, 171, 255, 0.7);\n  color: #ffffff;\n  border: none; }\n  .table > tbody > tr.primary > td a.email-link {\n    color: #ffffff; }\n    .table > tbody > tr.primary > td a.email-link:hover {\n      color: #f95372; }\n\n.table > tbody > tr.success > td {\n  background-color: rgba(139, 210, 47, 0.7);\n  color: #ffffff;\n  border: none; }\n  .table > tbody > tr.success > td a.email-link {\n    color: #ffffff; }\n    .table > tbody > tr.success > td a.email-link:hover {\n      color: #f95372; }\n\n.table > tbody > tr.warning > td {\n  background-color: rgba(231, 186, 8, 0.7);\n  color: #ffffff;\n  border: none; }\n  .table > tbody > tr.warning > td a.email-link {\n    color: #ffffff; }\n    .table > tbody > tr.warning > td a.email-link:hover {\n      color: #f95372; }\n\n.table > tbody > tr.danger > td {\n  background-color: rgba(249, 83, 114, 0.7);\n  color: #ffffff;\n  border: none; }\n  .table > tbody > tr.danger > td a.email-link {\n    color: #ffffff; }\n    .table > tbody > tr.danger > td a.email-link:hover {\n      color: #f95372; }\n\n.table > tbody > tr.info > td {\n  background-color: rgba(64, 218, 241, 0.7);\n  color: #ffffff;\n  border: none; }\n  .table > tbody > tr.info > td a.email-link {\n    color: #ffffff; }\n    .table > tbody > tr.info > td a.email-link:hover {\n      color: #f95372; }\n\n.editable-click, a.editable-click {\n  color: #ffffff;\n  border-bottom: dashed 1px rgba(255, 255, 255, 0.5); }\n\nth {\n  font-weight: 400; }\n\n.editable-empty {\n  color: #d44761; }\n\n.table > tbody > tr > th {\n  border: none; }\n\n.table-striped > tbody > tr > td {\n  border: none; }\n\n.pagination > li > a,\n.pagination > li > span {\n  color: #ffffff;\n  border-color: rgba(255, 255, 255, 0.5); }\n\n.pagination > li:first-of-type > a,\n.pagination > li:first-of-type > span {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.pagination > li:last-of-type > a,\n.pagination > li:last-of-type > span {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.pagination > .active > a,\n.pagination > .active > span,\n.pagination > .active > a:hover,\n.pagination > .active > span:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span:focus {\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  border-color: rgba(255, 255, 255, 0.5) !important; }\n\n.pagination > li > a:hover,\n.pagination > li > span:hover,\n.pagination > li > a:focus,\n.pagination > li > span:focus {\n  background-color: rgba(0, 0, 0, 0.2);\n  color: #ffffff; }\n\n.page-item.disabled .page-link, .page-item.disabled .page-link:focus, .page-item.disabled .page-link:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: #ffffff; }\n\n.editable-buttons .btn-with-icon i {\n  margin-right: 0; }\n\n.table-responsive {\n  margin-top: 10px; }\n\n.label {\n  border-radius: 0; }\n\n.label-primary {\n  background: #00abff; }\n\n.label-info {\n  background: #4dc4ff; }\n\n.label-success {\n  background: #8bd22f; }\n\n.label-warning {\n  background: #e7ba08; }\n\n.label-danger {\n  background: #f95372; }\n\n.form-horizontal label {\n  line-height: 34px;\n  margin-bottom: 0;\n  padding-top: 0 !important; }\n\n.form-group label {\n  margin-bottom: 5px;\n  color: #ffffff;\n  font-weight: 400;\n  font-size: 13px; }\n\n.form-control {\n  color: #ffffff;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.1);\n  box-shadow: none;\n  font-size: 14px; }\n  .form-control::-webkit-input-placeholder {\n    color: #ffffff;\n    opacity: 0.7; }\n  .form-control:-moz-placeholder {\n    /* Firefox 18- */\n    color: #ffffff;\n    opacity: 0.7; }\n  .form-control::-moz-placeholder {\n    /* Firefox 19+ */\n    color: #ffffff;\n    opacity: 0.7; }\n  .form-control:-ms-input-placeholder {\n    color: #ffffff;\n    opacity: 0.7; }\n  .form-control:focus {\n    color: #ffffff;\n    box-shadow: none;\n    border-color: #33bcff;\n    background: rgba(255, 255, 255, 0.1); }\n\nselect.form-control {\n  padding-left: 8px; }\n\nselect.form-control:not([multiple]) option {\n  color: #7d7d7d; }\n\nselect.form-control[multiple] option {\n  color: #ffffff; }\n\ntextarea.form-control {\n  height: 96px; }\n\n.form-inline .form-group input {\n  width: 100%; }\n\n.form-inline .form-group label {\n  margin-right: 12px; }\n\n.form-inline button[type=\"submit\"] {\n  margin-left: 12px; }\n\n.switch-container {\n  display: inline-block; }\n  .switch-container.primary .bootstrap-switch.bootstrap-switch-on {\n    border-color: #00abff; }\n  .switch-container.success .bootstrap-switch.bootstrap-switch-on {\n    border-color: #8bd22f; }\n  .switch-container.warning .bootstrap-switch.bootstrap-switch-on {\n    border-color: #e7ba08; }\n  .switch-container.danger .bootstrap-switch.bootstrap-switch-on {\n    border-color: #f95372; }\n  .switch-container.info .bootstrap-switch.bootstrap-switch-on {\n    border-color: #4dc4ff; }\n\n.bootstrap-switch {\n  border-radius: 5px;\n  border: 1px solid #ffffff;\n  transition: border-color ease-in-out .7s, box-shadow ease-in-out .7s; }\n  .bootstrap-switch:focus {\n    outline: none; }\n  .bootstrap-switch.bootstrap-switch-off {\n    border-color: rgba(255, 255, 255, 0.5); }\n  .bootstrap-switch.bootstrap-switch-focused {\n    box-shadow: none; }\n    .bootstrap-switch.bootstrap-switch-focused.bootstrap-switch-off {\n      border-color: rgba(255, 255, 255, 0.5); }\n  .bootstrap-switch .bootstrap-switch-container {\n    border-radius: 0; }\n    .bootstrap-switch .bootstrap-switch-container:focus {\n      outline: none; }\n  .bootstrap-switch .bootstrap-switch-handle-on {\n    border-radius: 0; }\n    .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-default {\n      background: #ffffff; }\n    .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-success {\n      background: #8bd22f; }\n    .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-primary {\n      background: #00abff; }\n    .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-warning {\n      background: #e7ba08; }\n    .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-danger {\n      background: #f95372; }\n    .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-info {\n      background: #4dc4ff; }\n  .bootstrap-switch .bootstrap-switch-handle-off {\n    border-radius: 0; }\n  .bootstrap-switch .bootstrap-switch-label {\n    background: transparent; }\n  .bootstrap-switch.bootstrap-switch-animate .bootstrap-switch-container {\n    transition: margin-left .2s; }\n\n.switches {\n  margin-left: -12px;\n  margin-bottom: -12px; }\n  .switches .switch-container {\n    float: left;\n    margin-left: 12px;\n    margin-bottom: 12px; }\n\n.input-group {\n  width: 100%;\n  margin-bottom: 15px; }\n  .input-group > span {\n    border-radius: 0; }\n\n.nowrap {\n  white-space: nowrap; }\n\n.cut-with-dots {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block; }\n\nlabel.custom-radio {\n  @padding-right : 0;\n  padding-left: 0;\n  margin-bottom: 0; }\n  label.custom-radio > input {\n    height: 0;\n    z-index: -100 !important;\n    opacity: 0;\n    position: absolute; }\n    label.custom-radio > input:checked + span:before {\n      content: \"\\f00c\";\n      font-weight: 300; }\n    label.custom-radio > input:disabled + span {\n      color: rgba(255, 255, 255, 0.4);\n      cursor: not-allowed; }\n      label.custom-radio > input:disabled + span:before {\n        border-color: rgba(255, 255, 255, 0.4) !important;\n        cursor: not-allowed; }\n  label.custom-radio > span {\n    position: relative;\n    display: inline-block;\n    margin: 0;\n    line-height: 16px;\n    font-weight: 300;\n    cursor: pointer;\n    padding-left: 22px;\n    width: 100%; }\n    label.custom-radio > span:before {\n      cursor: pointer;\n      font-family: fontAwesome;\n      font-weight: 300;\n      font-size: 12px;\n      color: #ffffff;\n      content: \"\\a0\";\n      background-color: transparent;\n      border: 1px solid rgba(255, 255, 255, 0.5);\n      border-radius: 0;\n      display: inline-block;\n      text-align: center;\n      height: 16px;\n      line-height: 14px;\n      min-width: 16px;\n      margin-right: 6px;\n      position: relative;\n      top: 0;\n      margin-left: -22px;\n      float: left; }\n    label.custom-radio > span:hover:before {\n      border-color: #33bcff; }\n  label.custom-radio > input:checked + span:before {\n    content: \"\\f111\"; }\n  label.custom-radio > span:before {\n    border-radius: 16px;\n    font-size: 9px; }\n\nlabel.custom-input-primary > span:before {\n  color: #00abff; }\n\nlabel.custom-input-primary > span:hover:before {\n  border-color: #00abff; }\n\nlabel.custom-input-success > span:before {\n  color: #8bd22f; }\n\nlabel.custom-input-success > span:hover:before {\n  border-color: #8bd22f; }\n\nlabel.custom-input-warning > span:before {\n  color: #e7ba08; }\n\nlabel.custom-input-warning > span:hover:before {\n  border-color: #e7ba08; }\n\nlabel.custom-input-danger > span:before {\n  color: #f95372; }\n\nlabel.custom-input-danger > span:hover:before {\n  border-color: #f95372; }\n\n.form-horizontal .radio, .form-horizontal .radio-inline {\n  padding-top: 0; }\n\n.input-demo {\n  line-height: 25px; }\n\n.input-group-addon {\n  line-height: inherit; }\n\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none; }\n\n.has-feedback .form-control {\n  padding-right: 42.5px; }\n\n.has-feedback label ~ .form-control-feedback {\n  top: 19px;\n  font-size: 18px; }\n\n.bootstrap-select .btn-default:focus {\n  color: #ffffff; }\n\n.form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.4);\n  border-color: rgba(255, 255, 255, 0.49); }\n  .form-control[disabled]::-webkit-input-placeholder, .form-control[readonly]::-webkit-input-placeholder, fieldset[disabled] .form-control::-webkit-input-placeholder {\n    color: #ffffff;\n    opacity: 0.5; }\n  .form-control[disabled]:-moz-placeholder, .form-control[readonly]:-moz-placeholder, fieldset[disabled] .form-control:-moz-placeholder {\n    /* Firefox 18- */\n    color: #ffffff;\n    opacity: 0.5; }\n  .form-control[disabled]::-moz-placeholder, .form-control[readonly]::-moz-placeholder, fieldset[disabled] .form-control::-moz-placeholder {\n    /* Firefox 19+ */\n    color: #ffffff;\n    opacity: 0.5; }\n  .form-control[disabled]:-ms-input-placeholder, .form-control[readonly]:-ms-input-placeholder, fieldset[disabled] .form-control:-ms-input-placeholder {\n    color: #ffffff;\n    opacity: 0.5; }\n\n.form-control-rounded {\n  border-radius: 16px; }\n\n.help-block {\n  color: #ffffff;\n  vertical-align: sub; }\n\n.help-block.error-block {\n  display: none; }\n  .has-error .help-block.error-block.basic-block {\n    display: block; }\n\n.input-group-addon-danger {\n  background: #f95372;\n  color: #ffffff;\n  border-color: #f95372; }\n\n.input-group-addon-warning {\n  background: #e7ba08;\n  color: #ffffff;\n  border-color: #e7ba08; }\n\n.input-group-addon-success {\n  background: #8bd22f;\n  color: #ffffff;\n  border-color: #8bd22f; }\n\n.input-group-addon-primary {\n  background: #00abff;\n  color: #ffffff;\n  border-color: #00abff; }\n\n.checkbox-demo-row {\n  margin-bottom: 12px; }\n\n.dropdown-menu {\n  border-radius: 5px; }\n\n.dropdown button.btn.btn-default.dropdown-toggle {\n  color: #ffffff; }\n\n.bootstrap-select.btn-group button.btn.btn-default {\n  background: transparent;\n  color: #ffffff; }\n  .bootstrap-select.btn-group button.btn.btn-default:hover {\n    background: #ffffff;\n    box-shadow: none;\n    outline: 0 !important; }\n  .bootstrap-select.btn-group button.btn.btn-default:active {\n    background: #ffffff;\n    box-shadow: none; }\n\n.bootstrap-select.btn-group.open > .btn.btn-default.dropdown-toggle {\n  background: #ffffff;\n  box-shadow: none;\n  border-color: rgba(255, 255, 255, 0.5); }\n\n.bootstrap-select.btn-group.open > .btn {\n  border-radius: 5px 5px 0 0; }\n\n.bootstrap-select.btn-group.open .dropdown-menu.open {\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-top: none;\n  border-radius: 0 0 5px 5px; }\n\n.bootstrap-select.btn-group.with-search.open .btn-default + .dropdown-menu .bs-searchbox .form-control {\n  background-color: #ffffff;\n  border: 1px solid rgba(255, 255, 255, 0.6); }\n\n.bootstrap-select.btn-group.with-search.open .btn-default + .dropdown-menu .no-results {\n  color: #7d7d7d; }\n\n.bootstrap-select.btn-group .notify {\n  color: #7d7d7d; }\n\n.has-success {\n  position: relative; }\n  .has-success .control-label {\n    color: #ffffff; }\n  .has-success .form-control {\n    border: 1px solid #a2db59; }\n    .has-success .form-control:focus {\n      box-shadow: none;\n      border-color: #8bd22f; }\n  .has-success label.custom-checkbox {\n    color: #a2db59; }\n    .has-success label.custom-checkbox > span:before {\n      color: #a2db59; }\n    .has-success label.custom-checkbox > span:hover:before {\n      border-color: #a2db59; }\n  .has-success .form-control-feedback {\n    color: #a2db59; }\n  .has-success .input-group-addon {\n    background-color: #a2db59;\n    color: #ffffff; }\n\n.has-warning {\n  position: relative; }\n  .has-warning .control-label {\n    color: #ffffff; }\n  .has-warning .form-control {\n    border: 1px solid #ecc839; }\n    .has-warning .form-control:focus {\n      box-shadow: none;\n      border-color: #e7ba08; }\n  .has-warning label.custom-checkbox {\n    color: #ecc839; }\n    .has-warning label.custom-checkbox > span:before {\n      color: #ecc839; }\n    .has-warning label.custom-checkbox > span:hover:before {\n      border-color: #ecc839; }\n  .has-warning .form-control-feedback {\n    color: #ecc839; }\n  .has-warning .input-group-addon {\n    background-color: #ecc839;\n    color: #ffffff; }\n\n.has-error {\n  position: relative; }\n  .has-error .control-label {\n    color: #ffffff; }\n  .has-error .form-control {\n    border: 1px solid #fa758e; }\n    .has-error .form-control:focus {\n      box-shadow: none;\n      border-color: #f95372; }\n  .has-error label.custom-checkbox {\n    color: #fa758e; }\n    .has-error label.custom-checkbox > span:before {\n      color: #fa758e; }\n    .has-error label.custom-checkbox > span:hover:before {\n      border-color: #fa758e; }\n  .has-error .form-control-feedback {\n    color: #fa758e; }\n  .has-error .input-group-addon {\n    background-color: #fa758e;\n    color: #ffffff; }\n\n.bootstrap-tagsinput {\n  color: #ffffff;\n  background-color: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  border-radius: 5px;\n  box-shadow: none;\n  max-width: 100%;\n  font-size: 14px;\n  line-height: 26px;\n  width: 100%; }\n  .bootstrap-tagsinput.form-control {\n    display: block;\n    width: 100%; }\n  .bootstrap-tagsinput .tag {\n    border-radius: 3px;\n    font-weight: 400;\n    font-size: 11px;\n    padding: 4px 8px; }\n    .bootstrap-tagsinput .tag [data-role=\"remove\"]:hover {\n      box-shadow: none; }\n  .bootstrap-tagsinput input {\n    background-color: rgba(255, 255, 255, 0.1);\n    border: 1px solid rgba(255, 255, 255, 0.6);\n    border-radius: 5px;\n    line-height: 22px;\n    font-size: 11px;\n    min-width: 53px; }\n    .bootstrap-tagsinput input::-webkit-input-placeholder {\n      color: #ffffff;\n      opacity: 0.8; }\n    .bootstrap-tagsinput input:-moz-placeholder {\n      /* Firefox 18- */\n      color: #ffffff;\n      opacity: 0.8; }\n    .bootstrap-tagsinput input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: #ffffff;\n      opacity: 0.8; }\n    .bootstrap-tagsinput input:-ms-input-placeholder {\n      color: #ffffff;\n      opacity: 0.8; }\n\n.progress {\n  background: rgba(0, 0, 0, 0.15); }\n\n.progress-bar-primary {\n  background-color: #00abff; }\n\n.progress-bar-success {\n  background-color: #aee06d; }\n\n.progress-bar-warning {\n  background-color: #e7ba08; }\n\n.progress-bar-danger {\n  background-color: #f95372; }\n\n.has-success .input-group-addon {\n  border: none; }\n\n.input-group > span.addon-left {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.input-group > span.addon-right {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.input-group-btn:not(:first-child) > .btn, .input-group-btn:not(:first-child) > .btn-group {\n  margin-left: 0; }\n\n.input-group-btn > .btn {\n  line-height: 1.56; }\n\n.with-primary-addon:focus {\n  border-color: #00abff; }\n\n.with-warning-addon:focus {\n  border-color: #e7ba08; }\n\n.with-success-addon:focus {\n  border-color: #8bd22f; }\n\n.with-danger-addon:focus {\n  border-color: #f95372; }\n\n.sub-little-text {\n  font-size: 12px; }\n\n.rating {\n  font-size: 20px; }\n\nrating-inputs span {\n  vertical-align: middle; }\n\nlabel.custom-checkbox {\n  padding-right: 0;\n  padding-left: 0;\n  margin-bottom: 0; }\n  label.custom-checkbox > input {\n    height: 0;\n    z-index: -100 !important;\n    opacity: 0;\n    position: absolute; }\n    label.custom-checkbox > input:checked + span:before {\n      content: \"\\f00c\";\n      font-weight: 300; }\n    label.custom-checkbox > input:disabled + span {\n      color: rgba(255, 255, 255, 0.4);\n      cursor: not-allowed; }\n      label.custom-checkbox > input:disabled + span:before {\n        border-color: rgba(255, 255, 255, 0.4) !important;\n        cursor: not-allowed; }\n  label.custom-checkbox > span {\n    position: relative;\n    display: inline-block;\n    margin: 0;\n    line-height: 16px;\n    font-weight: 300;\n    cursor: pointer;\n    padding-left: 22px;\n    width: 100%; }\n    label.custom-checkbox > span:before {\n      cursor: pointer;\n      font-family: fontAwesome;\n      font-weight: 300;\n      font-size: 12px;\n      color: #ffffff;\n      content: \"\\a0\";\n      background-color: transparent;\n      border: 1px solid rgba(255, 255, 255, 0.5);\n      border-radius: 0;\n      display: inline-block;\n      text-align: center;\n      height: 16px;\n      line-height: 14px;\n      min-width: 16px;\n      margin-right: 6px;\n      position: relative;\n      top: 0;\n      margin-left: -22px;\n      float: left; }\n    label.custom-checkbox > span:hover:before {\n      border-color: #33bcff; }\n\n#tree-view .tree .node-value {\n  color: white; }\n\n#tree-view .tree .folding.node-expanded::before {\n  color: white; }\n\n#tree-view .tree .folding.node-collapsed::before {\n  color: white; }\n\n#tree-view .tree .folding.node-leaf::before {\n  color: white; }\n\n#tree-view .tree .over-drop-target {\n  border: 4px solid ghostwhite; }\n\n#tree-view .tree .node-value .node-selected::after {\n  background-color: white; }\n\n#tree-view .tree .node-value:after {\n  background-color: white; }\n"

/***/ }),
/* 279 */
/***/ (function(module, exports) {

module.exports = ".ammapAlert {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n  font-family: verdana,helvetica,arial,sans-serif;\n  font-size: 12px;\n  color: #CC0000; }\n\n.ammapDescriptionWindow {\n  font-size: 11px;\n  font-family: verdana,helvetica,arial,sans-serif;\n  background-color: #FFFFFF;\n  border-style: solid;\n  border-color: #DADADA;\n  border-width: 1px;\n  color: #000000;\n  padding: 8px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.ammapDescriptionTitle {\n  font-size: 12px;\n  font-weight: bold;\n  font-family: verdana,helvetica,arial,sans-serif;\n  padding-bottom: 5px; }\n\n.ammapObjectList ul {\n  padding-left: 20px;\n  list-style: square outside;\n  color: #999999;\n  font-family: verdana,helvetica,arial,sans-serif;\n  font-size: 12px; }\n\n.ammapObjectList ul ul {\n  padding-left: 14px; }\n\n.ammapObjectList a {\n  color: #000000; }\n\n.ammapObjectList a {\n  color: #000000;\n  text-decoration: none;\n  display: block;\n  padding: 2px; }\n\n.ammapObjectList a:hover {\n  color: #CC0000;\n  text-decoration: none;\n  background: #FFFFFF;\n  cursor: pointer;\n  display: block; }\n\n.ammapDescriptionText {\n  overflow: auto; }\n"

/***/ }),
/* 280 */
/***/ (function(module, exports) {

module.exports = ".ba-back-top {\n  position: fixed;\n  width: 52px;\n  height: 52px;\n  cursor: pointer;\n  z-index: 9999;\n  display: none;\n  text-decoration: none;\n  right: 40px;\n  bottom: 40px !important;\n  font-size: 45px;\n  text-align: center;\n  opacity: 0.4;\n  color: #00abff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 50%;\n  line-height: 46px; }\n  .ba-back-top:hover {\n    opacity: 0.8; }\n"

/***/ }),
/* 281 */
/***/ (function(module, exports) {

module.exports = ".ct-label {\n  fill: rgba(0, 0, 0, 0.4);\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 0.75rem;\n  line-height: 1; }\n\n.ct-chart-line .ct-label,\n.ct-chart-bar .ct-label {\n  display: block;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex; }\n\n.ct-chart-pie .ct-label,\n.ct-chart-donut .ct-label {\n  dominant-baseline: central; }\n\n.ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -webkit-align-items: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -webkit-justify-content: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n\n.ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: flex-start;\n  -webkit-justify-content: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n\n.ct-label.ct-vertical.ct-start {\n  -webkit-box-align: flex-end;\n  -webkit-align-items: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-end;\n  -webkit-justify-content: flex-end;\n  -ms-flex-pack: flex-end;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end; }\n\n.ct-label.ct-vertical.ct-end {\n  -webkit-box-align: flex-end;\n  -webkit-align-items: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -webkit-justify-content: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n\n.ct-chart-bar .ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -webkit-align-items: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start; }\n\n.ct-chart-bar .ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start; }\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -webkit-align-items: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -webkit-justify-content: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: flex-start;\n  -webkit-justify-content: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start; }\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-start {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: flex-end;\n  -webkit-justify-content: flex-end;\n  -ms-flex-pack: flex-end;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end; }\n\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-end {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: flex-start;\n  -webkit-justify-content: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: end; }\n\n.ct-grid {\n  stroke: rgba(0, 0, 0, 0.2);\n  stroke-width: 1px;\n  stroke-dasharray: 2px; }\n\n.ct-grid-background {\n  fill: none; }\n\n.ct-point {\n  stroke-width: 10px;\n  stroke-linecap: round; }\n\n.ct-line {\n  fill: none;\n  stroke-width: 4px; }\n\n.ct-area {\n  stroke: none;\n  fill-opacity: 0.1; }\n\n.ct-bar {\n  fill: none;\n  stroke-width: 10px; }\n\n.ct-slice-donut {\n  fill: none;\n  stroke-width: 60px; }\n\n.ct-series-a .ct-point, .ct-series-a .ct-line, .ct-series-a .ct-bar, .ct-series-a .ct-slice-donut {\n  stroke: #d70206; }\n\n.ct-series-a .ct-slice-pie, .ct-series-a .ct-area {\n  fill: #d70206; }\n\n.ct-series-b .ct-point, .ct-series-b .ct-line, .ct-series-b .ct-bar, .ct-series-b .ct-slice-donut {\n  stroke: #f05b4f; }\n\n.ct-series-b .ct-slice-pie, .ct-series-b .ct-area {\n  fill: #f05b4f; }\n\n.ct-series-c .ct-point, .ct-series-c .ct-line, .ct-series-c .ct-bar, .ct-series-c .ct-slice-donut {\n  stroke: #f4c63d; }\n\n.ct-series-c .ct-slice-pie, .ct-series-c .ct-area {\n  fill: #f4c63d; }\n\n.ct-series-d .ct-point, .ct-series-d .ct-line, .ct-series-d .ct-bar, .ct-series-d .ct-slice-donut {\n  stroke: #d17905; }\n\n.ct-series-d .ct-slice-pie, .ct-series-d .ct-area {\n  fill: #d17905; }\n\n.ct-series-e .ct-point, .ct-series-e .ct-line, .ct-series-e .ct-bar, .ct-series-e .ct-slice-donut {\n  stroke: #453d3f; }\n\n.ct-series-e .ct-slice-pie, .ct-series-e .ct-area {\n  fill: #453d3f; }\n\n.ct-series-f .ct-point, .ct-series-f .ct-line, .ct-series-f .ct-bar, .ct-series-f .ct-slice-donut {\n  stroke: #59922b; }\n\n.ct-series-f .ct-slice-pie, .ct-series-f .ct-area {\n  fill: #59922b; }\n\n.ct-series-g .ct-point, .ct-series-g .ct-line, .ct-series-g .ct-bar, .ct-series-g .ct-slice-donut {\n  stroke: #0544d3; }\n\n.ct-series-g .ct-slice-pie, .ct-series-g .ct-area {\n  fill: #0544d3; }\n\n.ct-series-h .ct-point, .ct-series-h .ct-line, .ct-series-h .ct-bar, .ct-series-h .ct-slice-donut {\n  stroke: #6b0392; }\n\n.ct-series-h .ct-slice-pie, .ct-series-h .ct-area {\n  fill: #6b0392; }\n\n.ct-series-i .ct-point, .ct-series-i .ct-line, .ct-series-i .ct-bar, .ct-series-i .ct-slice-donut {\n  stroke: #f05b4f; }\n\n.ct-series-i .ct-slice-pie, .ct-series-i .ct-area {\n  fill: #f05b4f; }\n\n.ct-series-j .ct-point, .ct-series-j .ct-line, .ct-series-j .ct-bar, .ct-series-j .ct-slice-donut {\n  stroke: #dda458; }\n\n.ct-series-j .ct-slice-pie, .ct-series-j .ct-area {\n  fill: #dda458; }\n\n.ct-series-k .ct-point, .ct-series-k .ct-line, .ct-series-k .ct-bar, .ct-series-k .ct-slice-donut {\n  stroke: #eacf7d; }\n\n.ct-series-k .ct-slice-pie, .ct-series-k .ct-area {\n  fill: #eacf7d; }\n\n.ct-series-l .ct-point, .ct-series-l .ct-line, .ct-series-l .ct-bar, .ct-series-l .ct-slice-donut {\n  stroke: #86797d; }\n\n.ct-series-l .ct-slice-pie, .ct-series-l .ct-area {\n  fill: #86797d; }\n\n.ct-series-m .ct-point, .ct-series-m .ct-line, .ct-series-m .ct-bar, .ct-series-m .ct-slice-donut {\n  stroke: #b2c326; }\n\n.ct-series-m .ct-slice-pie, .ct-series-m .ct-area {\n  fill: #b2c326; }\n\n.ct-series-n .ct-point, .ct-series-n .ct-line, .ct-series-n .ct-bar, .ct-series-n .ct-slice-donut {\n  stroke: #6188e2; }\n\n.ct-series-n .ct-slice-pie, .ct-series-n .ct-area {\n  fill: #6188e2; }\n\n.ct-series-o .ct-point, .ct-series-o .ct-line, .ct-series-o .ct-bar, .ct-series-o .ct-slice-donut {\n  stroke: #a748ca; }\n\n.ct-series-o .ct-slice-pie, .ct-series-o .ct-area {\n  fill: #a748ca; }\n\n.ct-square {\n  display: block;\n  position: relative;\n  width: 100%; }\n\n.ct-square:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 100%; }\n\n.ct-square:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.ct-square > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.ct-minor-second {\n  display: block;\n  position: relative;\n  width: 100%; }\n\n.ct-minor-second:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 93.75%; }\n\n.ct-minor-second:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.ct-minor-second > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.ct-major-second {\n  display: block;\n  position: relative;\n  width: 100%; }\n\n.ct-major-second:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 88.8888888889%; }\n\n.ct-major-second:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.ct-major-second > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.ct-minor-third {\n  display: block;\n  position: relative;\n  width: 100%; }\n\n.ct-minor-third:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 83.3333333333%; }\n\n.ct-minor-third:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.ct-minor-third > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.ct-major-third {\n  display: block;\n  position: relative;\n  width: 100%; }\n\n.ct-major-third:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 80%; }\n\n.ct-major-third:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.ct-major-third > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.ct-perfect-fourth {\n  display: block;\n  position: relative;\n  width: 100%; }\n\n.ct-perfect-fourth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 75%; }\n\n.ct-perfect-fourth:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.ct-perfect-fourth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.ct-perfect-fifth {\n  display: block;\n  position: relative;\n  width: 100%; }\n\n.ct-perfect-fifth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 66.6666666667%; }\n\n.ct-perfect-fifth:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.ct-perfect-fifth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.ct-minor-sixth {\n  display: block;\n  position: relative;\n  width: 100%; }\n\n.ct-minor-sixth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 62.5%; }\n\n.ct-minor-sixth:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.ct-minor-sixth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.ct-golden-section {\n  display: block;\n  position: relative;\n  width: 100%; }\n\n.ct-golden-section:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 61.804697157%; }\n\n.ct-golden-section:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.ct-golden-section > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.ct-major-sixth {\n  display: block;\n  position: relative;\n  width: 100%; }\n\n.ct-major-sixth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 60%; }\n\n.ct-major-sixth:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.ct-major-sixth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.ct-minor-seventh {\n  display: block;\n  position: relative;\n  width: 100%; }\n\n.ct-minor-seventh:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 56.25%; }\n\n.ct-minor-seventh:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.ct-minor-seventh > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.ct-major-seventh {\n  display: block;\n  position: relative;\n  width: 100%; }\n\n.ct-major-seventh:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 53.3333333333%; }\n\n.ct-major-seventh:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.ct-major-seventh > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.ct-octave {\n  display: block;\n  position: relative;\n  width: 100%; }\n\n.ct-octave:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 50%; }\n\n.ct-octave:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.ct-octave > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.ct-major-tenth {\n  display: block;\n  position: relative;\n  width: 100%; }\n\n.ct-major-tenth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 40%; }\n\n.ct-major-tenth:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.ct-major-tenth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.ct-major-eleventh {\n  display: block;\n  position: relative;\n  width: 100%; }\n\n.ct-major-eleventh:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 37.5%; }\n\n.ct-major-eleventh:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.ct-major-eleventh > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.ct-major-twelfth {\n  display: block;\n  position: relative;\n  width: 100%; }\n\n.ct-major-twelfth:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 33.3333333333%; }\n\n.ct-major-twelfth:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.ct-major-twelfth > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.ct-double-octave {\n  display: block;\n  position: relative;\n  width: 100%; }\n\n.ct-double-octave:before {\n  display: block;\n  float: left;\n  content: \"\";\n  width: 0;\n  height: 0;\n  padding-bottom: 25%; }\n\n.ct-double-octave:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.ct-double-octave > svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n/*# sourceMappingURL=chartist.css.map */\n"

/***/ }),
/* 282 */
/***/ (function(module, exports) {

module.exports = ".has-success {\n  position: relative; }\n  .has-success .control-label {\n    color: #ffffff; }\n  .has-success .form-control {\n    border: 1px solid #a2db59; }\n    .has-success .form-control:focus {\n      box-shadow: none;\n      border-color: #8bd22f; }\n  .has-success label.custom-checkbox {\n    color: #a2db59; }\n    .has-success label.custom-checkbox > span:before {\n      color: #a2db59; }\n    .has-success label.custom-checkbox > span:hover:before {\n      border-color: #a2db59; }\n  .has-success .form-control-feedback {\n    color: #a2db59; }\n  .has-success .input-group-addon {\n    background-color: #a2db59;\n    color: #ffffff; }\n\n.has-warning {\n  position: relative; }\n  .has-warning .control-label {\n    color: #ffffff; }\n  .has-warning .form-control {\n    border: 1px solid #ecc839; }\n    .has-warning .form-control:focus {\n      box-shadow: none;\n      border-color: #e7ba08; }\n  .has-warning label.custom-checkbox {\n    color: #ecc839; }\n    .has-warning label.custom-checkbox > span:before {\n      color: #ecc839; }\n    .has-warning label.custom-checkbox > span:hover:before {\n      border-color: #ecc839; }\n  .has-warning .form-control-feedback {\n    color: #ecc839; }\n  .has-warning .input-group-addon {\n    background-color: #ecc839;\n    color: #ffffff; }\n\n.has-error {\n  position: relative; }\n  .has-error .control-label {\n    color: #ffffff; }\n  .has-error .form-control {\n    border: 1px solid #fa758e; }\n    .has-error .form-control:focus {\n      box-shadow: none;\n      border-color: #f95372; }\n  .has-error label.custom-checkbox {\n    color: #fa758e; }\n    .has-error label.custom-checkbox > span:before {\n      color: #fa758e; }\n    .has-error label.custom-checkbox > span:hover:before {\n      border-color: #fa758e; }\n  .has-error .form-control-feedback {\n    color: #fa758e; }\n  .has-error .input-group-addon {\n    background-color: #fa758e;\n    color: #ffffff; }\n\nlabel.custom-checkbox {\n  margin-bottom: 12px; }\n  label.custom-checkbox > span {\n    display: block;\n    margin-right: 10px; }\n"

/***/ }),
/* 283 */
/***/ (function(module, exports) {

module.exports = ".content-top {\n  padding-top: 13px;\n  padding-bottom: 27px; }\n\nh1.al-title {\n  font-weight: 700;\n  color: #ffffff;\n  float: left;\n  width: auto;\n  margin: 0;\n  padding: 0;\n  font-size: 24px;\n  text-transform: uppercase;\n  opacity: 0.9; }\n\n.al-breadcrumb {\n  background: none;\n  color: #ffffff;\n  padding: 0;\n  margin: 0;\n  float: right;\n  padding-top: 11px; }\n  .al-breadcrumb li {\n    font-size: 18px;\n    font-weight: 400; }\n    .al-breadcrumb li a {\n      color: #4dc4ff; }\n    .al-breadcrumb li.breadcrumb-item.active {\n      color: #ffffff; }\n\n.al-look {\n  float: right;\n  margin-right: 10px;\n  padding-top: 10px; }\n  .al-look > a {\n    font-size: 19px; }\n"

/***/ }),
/* 284 */
/***/ (function(module, exports) {

module.exports = "/*!\n * <%= meta.title %> v<%= meta.version %> Stylesheet\n * Docs & License: <%= meta.homepage %>\n * (c) <%= meta.copyright %>\n */\n.fc {\n  direction: ltr;\n  text-align: left; }\n\n.fc-rtl {\n  text-align: right; }\n\nbody .fc {\n  /* extra precedence to overcome jqui */\n  font-size: 1em; }\n\n/* Colors\n--------------------------------------------------------------------------------------------------*/\n.fc-unthemed th,\n.fc-unthemed td,\n.fc-unthemed thead,\n.fc-unthemed tbody,\n.fc-unthemed .fc-divider,\n.fc-unthemed .fc-row,\n.fc-unthemed .fc-content,\n.fc-unthemed .fc-popover {\n  border-color: #ddd; }\n\n.fc-unthemed .fc-popover {\n  background-color: #fff; }\n\n.fc-unthemed .fc-divider,\n.fc-unthemed .fc-popover .fc-header {\n  background: #eee; }\n\n.fc-unthemed .fc-popover .fc-header .fc-close {\n  color: #666; }\n\n.fc-unthemed .fc-today {\n  background: #fcf8e3; }\n\n.fc-highlight {\n  /* when user is selecting cells */\n  background: #bce8f1;\n  opacity: .3;\n  filter: alpha(opacity=30);\n  /* for IE */ }\n\n.fc-bgevent {\n  /* default look for background events */\n  background: #8fdf82;\n  opacity: .3;\n  filter: alpha(opacity=30);\n  /* for IE */ }\n\n.fc-nonbusiness {\n  /* default look for non-business-hours areas */\n  /* will inherit .fc-bgevent's styles */\n  background: #d7d7d7; }\n\n/* Icons (inline elements with styled text that mock arrow icons)\n--------------------------------------------------------------------------------------------------*/\n.fc-icon {\n  display: inline-block;\n  height: 1em;\n  line-height: 1em;\n  font-size: 1em;\n  text-align: center;\n  overflow: hidden;\n  font-family: \"Courier New\", Courier, monospace;\n  /* don't allow browser text-selection */\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/*\nAcceptable font-family overrides for individual icons:\n\t\"Arial\", sans-serif\n\t\"Times New Roman\", serif\n\nNOTE: use percentage font sizes or else old IE chokes\n*/\n.fc-icon:after {\n  position: relative; }\n\n.fc-icon-left-single-arrow:after {\n  content: \"\\02039\";\n  font-weight: bold;\n  font-size: 200%;\n  top: -7%; }\n\n.fc-icon-right-single-arrow:after {\n  content: \"\\0203A\";\n  font-weight: bold;\n  font-size: 200%;\n  top: -7%; }\n\n.fc-icon-left-double-arrow:after {\n  content: \"\\000AB\";\n  font-size: 160%;\n  top: -7%; }\n\n.fc-icon-right-double-arrow:after {\n  content: \"\\000BB\";\n  font-size: 160%;\n  top: -7%; }\n\n.fc-icon-left-triangle:after {\n  content: \"\\25C4\";\n  font-size: 125%;\n  top: 3%; }\n\n.fc-icon-right-triangle:after {\n  content: \"\\25BA\";\n  font-size: 125%;\n  top: 3%; }\n\n.fc-icon-down-triangle:after {\n  content: \"\\25BC\";\n  font-size: 125%;\n  top: 2%; }\n\n.fc-icon-x:after {\n  content: \"\\000D7\";\n  font-size: 200%;\n  top: 6%; }\n\n/* Buttons (styled <button> tags, normalized to work cross-browser)\n--------------------------------------------------------------------------------------------------*/\n.fc button {\n  /* force height to include the border and padding */\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  /* dimensions */\n  margin: 0;\n  height: 2.1em;\n  padding: 0 .6em;\n  /* text & cursor */\n  font-size: 1em;\n  /* normalize */\n  white-space: nowrap;\n  cursor: pointer; }\n\n/* Firefox has an annoying inner border */\n.fc button::-moz-focus-inner {\n  margin: 0;\n  padding: 0; }\n\n.fc-state-default {\n  /* non-theme */\n  border: 1px solid; }\n\n.fc-state-default.fc-corner-left {\n  /* non-theme */\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px; }\n\n.fc-state-default.fc-corner-right {\n  /* non-theme */\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px; }\n\n/* icons in buttons */\n.fc button .fc-icon {\n  /* non-theme */\n  position: relative;\n  top: -0.05em;\n  /* seems to be a good adjustment across browsers */\n  margin: 0 .2em;\n  vertical-align: middle; }\n\n/*\n  button states\n  borrowed from twitter bootstrap (http://twitter.github.com/bootstrap/)\n*/\n.fc-state-default {\n  background-color: #f5f5f5;\n  background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6);\n  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#e6e6e6));\n  background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6);\n  background-image: -o-linear-gradient(top, #ffffff, #e6e6e6);\n  background-image: linear-gradient(to bottom, #ffffff, #e6e6e6);\n  background-repeat: repeat-x;\n  border-color: #e6e6e6 #e6e6e6 #bfbfbf;\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\n  color: #333;\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); }\n\n.fc-state-hover,\n.fc-state-down,\n.fc-state-active,\n.fc-state-disabled {\n  color: #333333;\n  background-color: #e6e6e6; }\n\n.fc-state-hover {\n  color: #333333;\n  text-decoration: none;\n  background-position: 0 -15px;\n  -webkit-transition: background-position 0.1s linear;\n  -moz-transition: background-position 0.1s linear;\n  -o-transition: background-position 0.1s linear;\n  transition: background-position 0.1s linear; }\n\n.fc-state-down,\n.fc-state-active {\n  background-color: #cccccc;\n  background-image: none;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05); }\n\n.fc-state-disabled {\n  cursor: default;\n  background-image: none;\n  opacity: 0.65;\n  filter: alpha(opacity=65);\n  box-shadow: none; }\n\n/* Buttons Groups\n--------------------------------------------------------------------------------------------------*/\n.fc-button-group {\n  display: inline-block; }\n\n/*\nevery button that is not first in a button group should scootch over one pixel and cover the\nprevious button's border...\n*/\n.fc .fc-button-group > * {\n  /* extra precedence b/c buttons have margin set to zero */\n  float: left;\n  margin: 0 0 0 -1px; }\n\n.fc .fc-button-group > :first-child {\n  /* same */\n  margin-left: 0; }\n\n/* Popover\n--------------------------------------------------------------------------------------------------*/\n.fc-popover {\n  position: absolute;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15); }\n\n.fc-popover .fc-header {\n  /* TODO: be more consistent with fc-head/fc-body */\n  padding: 2px 4px; }\n\n.fc-popover .fc-header .fc-title {\n  margin: 0 2px; }\n\n.fc-popover .fc-header .fc-close {\n  cursor: pointer; }\n\n.fc-ltr .fc-popover .fc-header .fc-title,\n.fc-rtl .fc-popover .fc-header .fc-close {\n  float: left; }\n\n.fc-rtl .fc-popover .fc-header .fc-title,\n.fc-ltr .fc-popover .fc-header .fc-close {\n  float: right; }\n\n/* unthemed */\n.fc-unthemed .fc-popover {\n  border-width: 1px;\n  border-style: solid; }\n\n.fc-unthemed .fc-popover .fc-header .fc-close {\n  font-size: .9em;\n  margin-top: 2px; }\n\n/* jqui themed */\n.fc-popover > .ui-widget-header + .ui-widget-content {\n  border-top: 0;\n  /* where they meet, let the header have the border */ }\n\n/* Misc Reusable Components\n--------------------------------------------------------------------------------------------------*/\n.fc-divider {\n  border-style: solid;\n  border-width: 1px; }\n\nhr.fc-divider {\n  height: 0;\n  margin: 0;\n  padding: 0 0 2px;\n  /* height is unreliable across browsers, so use padding */\n  border-width: 1px 0; }\n\n.fc-clear {\n  clear: both; }\n\n.fc-bg,\n.fc-bgevent-skeleton,\n.fc-highlight-skeleton,\n.fc-helper-skeleton {\n  /* these element should always cling to top-left/right corners */\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0; }\n\n.fc-bg {\n  bottom: 0;\n  /* strech bg to bottom edge */ }\n\n.fc-bg table {\n  height: 100%;\n  /* strech bg to bottom edge */ }\n\n/* Tables\n--------------------------------------------------------------------------------------------------*/\n.fc table {\n  width: 100%;\n  box-sizing: border-box;\n  /* fix scrollbar issue in firefox */\n  table-layout: fixed;\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 1em;\n  /* normalize cross-browser */ }\n\n.fc th {\n  text-align: center; }\n\n.fc th,\n.fc td {\n  border-style: solid;\n  border-width: 1px;\n  padding: 0;\n  vertical-align: top; }\n\n.fc td.fc-today {\n  border-style: double;\n  /* overcome neighboring borders */ }\n\n/* Fake Table Rows\n--------------------------------------------------------------------------------------------------*/\n.fc .fc-row {\n  /* extra precedence to overcome themes w/ .ui-widget-content forcing a 1px border */\n  /* no visible border by default. but make available if need be (scrollbar width compensation) */\n  border-style: solid;\n  border-width: 0; }\n\n.fc-row table {\n  /* don't put left/right border on anything within a fake row.\n\t   the outer tbody will worry about this */\n  border-left: 0 hidden transparent;\n  border-right: 0 hidden transparent;\n  /* no bottom borders on rows */\n  border-bottom: 0 hidden transparent; }\n\n.fc-row:first-child table {\n  border-top: 0 hidden transparent;\n  /* no top border on first row */ }\n\n/* Day Row (used within the header and the DayGrid)\n--------------------------------------------------------------------------------------------------*/\n.fc-row {\n  position: relative; }\n\n.fc-row .fc-bg {\n  z-index: 1; }\n\n/* highlighting cells & background event skeleton */\n.fc-row .fc-bgevent-skeleton,\n.fc-row .fc-highlight-skeleton {\n  bottom: 0;\n  /* stretch skeleton to bottom of row */ }\n\n.fc-row .fc-bgevent-skeleton table,\n.fc-row .fc-highlight-skeleton table {\n  height: 100%;\n  /* stretch skeleton to bottom of row */ }\n\n.fc-row .fc-highlight-skeleton td,\n.fc-row .fc-bgevent-skeleton td {\n  border-color: transparent; }\n\n.fc-row .fc-bgevent-skeleton {\n  z-index: 2; }\n\n.fc-row .fc-highlight-skeleton {\n  z-index: 3; }\n\n/*\nrow content (which contains day/week numbers and events) as well as \"helper\" (which contains\ntemporary rendered events).\n*/\n.fc-row .fc-content-skeleton {\n  position: relative;\n  z-index: 4;\n  padding-bottom: 2px;\n  /* matches the space above the events */ }\n\n.fc-row .fc-helper-skeleton {\n  z-index: 5; }\n\n.fc-row .fc-content-skeleton td,\n.fc-row .fc-helper-skeleton td {\n  /* see-through to the background below */\n  background: none;\n  /* in case <td>s are globally styled */\n  border-color: transparent;\n  /* don't put a border between events and/or the day number */\n  border-bottom: 0; }\n\n.fc-row .fc-content-skeleton tbody td,\n.fc-row .fc-helper-skeleton tbody td {\n  /* don't put a border between event cells */\n  border-top: 0; }\n\n/* Scrolling Container\n--------------------------------------------------------------------------------------------------*/\n.fc-scroller {\n  -webkit-overflow-scrolling: touch; }\n\n/* TODO: move to agenda/basic */\n.fc-scroller > .fc-day-grid,\n.fc-scroller > .fc-time-grid {\n  position: relative;\n  /* re-scope all positions */\n  width: 100%;\n  /* hack to force re-sizing this inner element when scrollbars appear/disappear */ }\n\n/* Global Event Styles\n--------------------------------------------------------------------------------------------------*/\n.fc-event {\n  position: relative;\n  /* for resize handle and other inner positioning */\n  display: block;\n  /* make the <a> tag block */\n  font-size: .85em;\n  line-height: 1.3;\n  border-radius: 3px;\n  border: 1px solid #3a87ad;\n  /* default BORDER color */\n  background-color: #3a87ad;\n  /* default BACKGROUND color */\n  font-weight: normal;\n  /* undo jqui's ui-widget-header bold */ }\n\n/* overpower some of bootstrap's and jqui's styles on <a> tags */\n.fc-event,\n.fc-event:hover,\n.ui-widget .fc-event {\n  color: #fff;\n  /* default TEXT color */\n  text-decoration: none;\n  /* if <a> has an href */ }\n\n.fc-event[href],\n.fc-event.fc-draggable {\n  cursor: pointer;\n  /* give events with links and draggable events a hand mouse pointer */ }\n\n.fc-not-allowed,\n.fc-not-allowed .fc-event {\n  /* to override an event's custom cursor */\n  cursor: not-allowed; }\n\n.fc-event .fc-bg {\n  /* the generic .fc-bg already does position */\n  z-index: 1;\n  background: #fff;\n  opacity: .25;\n  filter: alpha(opacity=25);\n  /* for IE */ }\n\n.fc-event .fc-content {\n  position: relative;\n  z-index: 2; }\n\n/* resizer (cursor AND touch devices) */\n.fc-event .fc-resizer {\n  position: absolute;\n  z-index: 4; }\n\n/* resizer (touch devices) */\n.fc-event .fc-resizer {\n  display: none; }\n\n.fc-event.fc-allow-mouse-resize .fc-resizer,\n.fc-event.fc-selected .fc-resizer {\n  /* only show when hovering or selected (with touch) */\n  display: block; }\n\n/* hit area */\n.fc-event.fc-selected .fc-resizer:before {\n  /* 40x40 touch area */\n  content: \"\";\n  position: absolute;\n  z-index: 9999;\n  /* user of this util can scope within a lower z-index */\n  top: 50%;\n  left: 50%;\n  width: 40px;\n  height: 40px;\n  margin-left: -20px;\n  margin-top: -20px; }\n\n/* Event Selection (only for touch devices)\n--------------------------------------------------------------------------------------------------*/\n.fc-event.fc-selected {\n  z-index: 9999 !important;\n  /* overcomes inline z-index */\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); }\n\n.fc-event.fc-selected.fc-dragging {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3); }\n\n/* Horizontal Events\n--------------------------------------------------------------------------------------------------*/\n/* bigger touch area when selected */\n.fc-h-event.fc-selected:before {\n  content: \"\";\n  position: absolute;\n  z-index: 3;\n  /* below resizers */\n  top: -10px;\n  bottom: -10px;\n  left: 0;\n  right: 0; }\n\n/* events that are continuing to/from another week. kill rounded corners and butt up against edge */\n.fc-ltr .fc-h-event.fc-not-start,\n.fc-rtl .fc-h-event.fc-not-end {\n  margin-left: 0;\n  border-left-width: 0;\n  padding-left: 1px;\n  /* replace the border with padding */\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.fc-ltr .fc-h-event.fc-not-end,\n.fc-rtl .fc-h-event.fc-not-start {\n  margin-right: 0;\n  border-right-width: 0;\n  padding-right: 1px;\n  /* replace the border with padding */\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n/* resizer (cursor AND touch devices) */\n/* left resizer  */\n.fc-ltr .fc-h-event .fc-start-resizer,\n.fc-rtl .fc-h-event .fc-end-resizer {\n  cursor: w-resize;\n  left: -1px;\n  /* overcome border */ }\n\n/* right resizer */\n.fc-ltr .fc-h-event .fc-end-resizer,\n.fc-rtl .fc-h-event .fc-start-resizer {\n  cursor: e-resize;\n  right: -1px;\n  /* overcome border */ }\n\n/* resizer (mouse devices) */\n.fc-h-event.fc-allow-mouse-resize .fc-resizer {\n  width: 7px;\n  top: -1px;\n  /* overcome top border */\n  bottom: -1px;\n  /* overcome bottom border */ }\n\n/* resizer (touch devices) */\n.fc-h-event.fc-selected .fc-resizer {\n  /* 8x8 little dot */\n  border-radius: 4px;\n  border-width: 1px;\n  width: 6px;\n  height: 6px;\n  border-style: solid;\n  border-color: inherit;\n  background: #fff;\n  /* vertically center */\n  top: 50%;\n  margin-top: -4px; }\n\n/* left resizer  */\n.fc-ltr .fc-h-event.fc-selected .fc-start-resizer,\n.fc-rtl .fc-h-event.fc-selected .fc-end-resizer {\n  margin-left: -4px;\n  /* centers the 8x8 dot on the left edge */ }\n\n/* right resizer */\n.fc-ltr .fc-h-event.fc-selected .fc-end-resizer,\n.fc-rtl .fc-h-event.fc-selected .fc-start-resizer {\n  margin-right: -4px;\n  /* centers the 8x8 dot on the right edge */ }\n\n/* DayGrid events\n----------------------------------------------------------------------------------------------------\nWe use the full \"fc-day-grid-event\" class instead of using descendants because the event won't\nbe a descendant of the grid when it is being dragged.\n*/\n.fc-day-grid-event {\n  margin: 1px 2px 0;\n  /* spacing between events and edges */\n  padding: 0 1px; }\n\n.fc-day-grid-event.fc-selected:after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  /* same z-index as fc-bg, behind text */\n  /* overcome the borders */\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  left: -1px;\n  /* darkening effect */\n  background: #000;\n  opacity: .25;\n  filter: alpha(opacity=25);\n  /* for IE */ }\n\n.fc-day-grid-event .fc-content {\n  /* force events to be one-line tall */\n  white-space: nowrap;\n  overflow: hidden; }\n\n.fc-day-grid-event .fc-time {\n  font-weight: bold; }\n\n/* resizer (cursor devices) */\n/* left resizer  */\n.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer,\n.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer {\n  margin-left: -2px;\n  /* to the day cell's edge */ }\n\n/* right resizer */\n.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer,\n.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer {\n  margin-right: -2px;\n  /* to the day cell's edge */ }\n\n/* Event Limiting\n--------------------------------------------------------------------------------------------------*/\n/* \"more\" link that represents hidden events */\na.fc-more {\n  margin: 1px 3px;\n  font-size: .85em;\n  cursor: pointer;\n  text-decoration: none; }\n\na.fc-more:hover {\n  text-decoration: underline; }\n\n.fc-limited {\n  /* rows and cells that are hidden because of a \"more\" link */\n  display: none; }\n\n/* popover that appears when \"more\" link is clicked */\n.fc-day-grid .fc-row {\n  z-index: 1;\n  /* make the \"more\" popover one higher than this */ }\n\n.fc-more-popover {\n  z-index: 2;\n  width: 220px; }\n\n.fc-more-popover .fc-event-container {\n  padding: 10px; }\n\n/* Now Indicator\n--------------------------------------------------------------------------------------------------*/\n.fc-now-indicator {\n  position: absolute;\n  border: 0 solid red; }\n\n/* Utilities\n--------------------------------------------------------------------------------------------------*/\n.fc-unselectable {\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: transparent; }\n\n/* Toolbar\n--------------------------------------------------------------------------------------------------*/\n.fc-toolbar {\n  text-align: center;\n  margin-bottom: 1em; }\n\n.fc-toolbar .fc-left {\n  float: left; }\n\n.fc-toolbar .fc-right {\n  float: right; }\n\n.fc-toolbar .fc-center {\n  display: inline-block; }\n\n/* the things within each left/right/center section */\n.fc .fc-toolbar > * > * {\n  /* extra precedence to override button border margins */\n  float: left;\n  margin-left: .75em; }\n\n/* the first thing within each left/center/right section */\n.fc .fc-toolbar > * > :first-child {\n  /* extra precedence to override button border margins */\n  margin-left: 0; }\n\n/* title text */\n.fc-toolbar h2 {\n  margin: 0; }\n\n/* button layering (for border precedence) */\n.fc-toolbar button {\n  position: relative; }\n\n.fc-toolbar .fc-state-hover,\n.fc-toolbar .ui-state-hover {\n  z-index: 2; }\n\n.fc-toolbar .fc-state-down {\n  z-index: 3; }\n\n.fc-toolbar .fc-state-active,\n.fc-toolbar .ui-state-active {\n  z-index: 4; }\n\n.fc-toolbar button:focus {\n  z-index: 5; }\n\n/* View Structure\n--------------------------------------------------------------------------------------------------*/\n/* undo twitter bootstrap's box-sizing rules. normalizes positioning techniques */\n/* don't do this for the toolbar because we'll want bootstrap to style those buttons as some pt */\n.fc-view-container *,\n.fc-view-container *:before,\n.fc-view-container *:after {\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box; }\n\n.fc-view,\n.fc-view > table {\n  /* so dragged elements can be above the view's main element */\n  position: relative;\n  z-index: 1; }\n\n/* BasicView\n--------------------------------------------------------------------------------------------------*/\n/* day row structure */\n.fc-basicWeek-view .fc-content-skeleton,\n.fc-basicDay-view .fc-content-skeleton {\n  /* we are sure there are no day numbers in these views, so... */\n  padding-top: 1px;\n  /* add a pixel to make sure there are 2px padding above events */\n  padding-bottom: 1em;\n  /* ensure a space at bottom of cell for user selecting/clicking */ }\n\n.fc-basic-view .fc-body .fc-row {\n  min-height: 4em;\n  /* ensure that all rows are at least this tall */ }\n\n/* a \"rigid\" row will take up a constant amount of height because content-skeleton is absolute */\n.fc-row.fc-rigid {\n  overflow: hidden; }\n\n.fc-row.fc-rigid .fc-content-skeleton {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0; }\n\n/* week and day number styling */\n.fc-basic-view .fc-week-number,\n.fc-basic-view .fc-day-number {\n  padding: 0 2px; }\n\n.fc-basic-view td.fc-week-number span,\n.fc-basic-view td.fc-day-number {\n  padding-top: 2px;\n  padding-bottom: 2px; }\n\n.fc-basic-view .fc-week-number {\n  text-align: center; }\n\n.fc-basic-view .fc-week-number span {\n  /* work around the way we do column resizing and ensure a minimum width */\n  display: inline-block;\n  min-width: 1.25em; }\n\n.fc-ltr .fc-basic-view .fc-day-number {\n  text-align: right; }\n\n.fc-rtl .fc-basic-view .fc-day-number {\n  text-align: left; }\n\n.fc-day-number.fc-other-month {\n  opacity: 0.3;\n  filter: alpha(opacity=30);\n  /* for IE */\n  /* opacity with small font can sometimes look too faded\n\t   might want to set the 'color' property instead\n\t   making day-numbers bold also fixes the problem */ }\n\n/* AgendaView all-day area\n--------------------------------------------------------------------------------------------------*/\n.fc-agenda-view .fc-day-grid {\n  position: relative;\n  z-index: 2;\n  /* so the \"more..\" popover will be over the time grid */ }\n\n.fc-agenda-view .fc-day-grid .fc-row {\n  min-height: 3em;\n  /* all-day section will never get shorter than this */ }\n\n.fc-agenda-view .fc-day-grid .fc-row .fc-content-skeleton {\n  padding-top: 1px;\n  /* add a pixel to make sure there are 2px padding above events */\n  padding-bottom: 1em;\n  /* give space underneath events for clicking/selecting days */ }\n\n/* TimeGrid axis running down the side (for both the all-day area and the slot area)\n--------------------------------------------------------------------------------------------------*/\n.fc .fc-axis {\n  /* .fc to overcome default cell styles */\n  vertical-align: middle;\n  padding: 0 4px;\n  white-space: nowrap; }\n\n.fc-ltr .fc-axis {\n  text-align: right; }\n\n.fc-rtl .fc-axis {\n  text-align: left; }\n\n.ui-widget td.fc-axis {\n  font-weight: normal;\n  /* overcome jqui theme making it bold */ }\n\n/* TimeGrid Structure\n--------------------------------------------------------------------------------------------------*/\n.fc-time-grid-container,\n.fc-time-grid {\n  /* so slats/bg/content/etc positions get scoped within here */\n  position: relative;\n  z-index: 1; }\n\n.fc-time-grid {\n  min-height: 100%;\n  /* so if height setting is 'auto', .fc-bg stretches to fill height */ }\n\n.fc-time-grid table {\n  /* don't put outer borders on slats/bg/content/etc */\n  border: 0 hidden transparent; }\n\n.fc-time-grid > .fc-bg {\n  z-index: 1; }\n\n.fc-time-grid .fc-slats,\n.fc-time-grid > hr {\n  /* the <hr> AgendaView injects when grid is shorter than scroller */\n  position: relative;\n  z-index: 2; }\n\n.fc-time-grid .fc-content-col {\n  position: relative;\n  /* because now-indicator lives directly inside */ }\n\n.fc-time-grid .fc-content-skeleton {\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  left: 0;\n  right: 0; }\n\n/* divs within a cell within the fc-content-skeleton */\n.fc-time-grid .fc-business-container {\n  position: relative;\n  z-index: 1; }\n\n.fc-time-grid .fc-bgevent-container {\n  position: relative;\n  z-index: 2; }\n\n.fc-time-grid .fc-highlight-container {\n  position: relative;\n  z-index: 3; }\n\n.fc-time-grid .fc-event-container {\n  position: relative;\n  z-index: 4; }\n\n.fc-time-grid .fc-now-indicator-line {\n  z-index: 5; }\n\n.fc-time-grid .fc-helper-container {\n  /* also is fc-event-container */\n  position: relative;\n  z-index: 6; }\n\n/* TimeGrid Slats (lines that run horizontally)\n--------------------------------------------------------------------------------------------------*/\n.fc-time-grid .fc-slats td {\n  height: 1.5em;\n  border-bottom: 0;\n  /* each cell is responsible for its top border */ }\n\n.fc-time-grid .fc-slats .fc-minor td {\n  border-top-style: dotted; }\n\n.fc-time-grid .fc-slats .ui-widget-content {\n  /* for jqui theme */\n  background: none;\n  /* see through to fc-bg */ }\n\n/* TimeGrid Highlighting Slots\n--------------------------------------------------------------------------------------------------*/\n.fc-time-grid .fc-highlight-container {\n  /* a div within a cell within the fc-highlight-skeleton */\n  position: relative;\n  /* scopes the left/right of the fc-highlight to be in the column */ }\n\n.fc-time-grid .fc-highlight {\n  position: absolute;\n  left: 0;\n  right: 0;\n  /* top and bottom will be in by JS */ }\n\n/* TimeGrid Event Containment\n--------------------------------------------------------------------------------------------------*/\n.fc-ltr .fc-time-grid .fc-event-container {\n  /* space on the sides of events for LTR (default) */\n  margin: 0 2.5% 0 2px; }\n\n.fc-rtl .fc-time-grid .fc-event-container {\n  /* space on the sides of events for RTL */\n  margin: 0 2px 0 2.5%; }\n\n.fc-time-grid .fc-event,\n.fc-time-grid .fc-bgevent {\n  position: absolute;\n  z-index: 1;\n  /* scope inner z-index's */ }\n\n.fc-time-grid .fc-bgevent {\n  /* background events always span full width */\n  left: 0;\n  right: 0; }\n\n/* Generic Vertical Event\n--------------------------------------------------------------------------------------------------*/\n.fc-v-event.fc-not-start {\n  /* events that are continuing from another day */\n  /* replace space made by the top border with padding */\n  border-top-width: 0;\n  padding-top: 1px;\n  /* remove top rounded corners */\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.fc-v-event.fc-not-end {\n  /* replace space made by the top border with padding */\n  border-bottom-width: 0;\n  padding-bottom: 1px;\n  /* remove bottom rounded corners */\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n/* TimeGrid Event Styling\n----------------------------------------------------------------------------------------------------\nWe use the full \"fc-time-grid-event\" class instead of using descendants because the event won't\nbe a descendant of the grid when it is being dragged.\n*/\n.fc-time-grid-event {\n  overflow: hidden;\n  /* don't let the bg flow over rounded corners */ }\n\n.fc-time-grid-event.fc-selected {\n  /* need to allow touch resizers to extend outside event's bounding box */\n  /* common fc-selected styles hide the fc-bg, so don't need this anyway */\n  overflow: visible; }\n\n.fc-time-grid-event.fc-selected .fc-bg {\n  display: none;\n  /* hide semi-white background, to appear darker */ }\n\n.fc-time-grid-event .fc-content {\n  overflow: hidden;\n  /* for when .fc-selected */ }\n\n.fc-time-grid-event .fc-time,\n.fc-time-grid-event .fc-title {\n  padding: 0 1px; }\n\n.fc-time-grid-event .fc-time {\n  font-size: .85em;\n  white-space: nowrap; }\n\n/* short mode, where time and title are on the same line */\n.fc-time-grid-event.fc-short .fc-content {\n  /* don't wrap to second line (now that contents will be inline) */\n  white-space: nowrap; }\n\n.fc-time-grid-event.fc-short .fc-time,\n.fc-time-grid-event.fc-short .fc-title {\n  /* put the time and title on the same line */\n  display: inline-block;\n  vertical-align: top; }\n\n.fc-time-grid-event.fc-short .fc-time span {\n  display: none;\n  /* don't display the full time text... */ }\n\n.fc-time-grid-event.fc-short .fc-time:before {\n  content: attr(data-start);\n  /* ...instead, display only the start time */ }\n\n.fc-time-grid-event.fc-short .fc-time:after {\n  content: \"\\000A0-\\000A0\";\n  /* seperate with a dash, wrapped in nbsp's */ }\n\n.fc-time-grid-event.fc-short .fc-title {\n  font-size: .85em;\n  /* make the title text the same size as the time */\n  padding: 0;\n  /* undo padding from above */ }\n\n/* resizer (cursor device) */\n.fc-time-grid-event.fc-allow-mouse-resize .fc-resizer {\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 8px;\n  overflow: hidden;\n  line-height: 8px;\n  font-size: 11px;\n  font-family: monospace;\n  text-align: center;\n  cursor: s-resize; }\n\n.fc-time-grid-event.fc-allow-mouse-resize .fc-resizer:after {\n  content: \"=\"; }\n\n/* resizer (touch device) */\n.fc-time-grid-event.fc-selected .fc-resizer {\n  /* 10x10 dot */\n  border-radius: 5px;\n  border-width: 1px;\n  width: 8px;\n  height: 8px;\n  border-style: solid;\n  border-color: inherit;\n  background: #fff;\n  /* horizontally center */\n  left: 50%;\n  margin-left: -5px;\n  /* center on the bottom edge */\n  bottom: -5px; }\n\n/* Now Indicator\n--------------------------------------------------------------------------------------------------*/\n.fc-time-grid .fc-now-indicator-line {\n  border-top-width: 1px;\n  left: 0;\n  right: 0; }\n\n/* arrow on axis */\n.fc-time-grid .fc-now-indicator-arrow {\n  margin-top: -5px;\n  /* vertically center on top coordinate */ }\n\n.fc-ltr .fc-time-grid .fc-now-indicator-arrow {\n  left: 0;\n  /* triangle pointing right... */\n  border-width: 5px 0 5px 6px;\n  border-top-color: transparent;\n  border-bottom-color: transparent; }\n\n.fc-rtl .fc-time-grid .fc-now-indicator-arrow {\n  right: 0;\n  /* triangle pointing left... */\n  border-width: 5px 6px 5px 0;\n  border-top-color: transparent;\n  border-bottom-color: transparent; }\n"

/***/ }),
/* 285 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 286 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 287 */
/***/ (function(module, exports) {

module.exports = "/* msg center */\n@-webkit-keyframes pulsate {\n  30% {\n    -webkit-transform: scale(0.1, 0.1);\n    opacity: 0.0; }\n  35% {\n    opacity: 1.0; }\n  40% {\n    -webkit-transform: scale(1.2, 1.2);\n    opacity: 0.0; } }\n\n.al-msg-center {\n  float: right;\n  padding: 0;\n  list-style: none;\n  margin: 13px 47px 0 0; }\n  .al-msg-center li {\n    list-style: none;\n    float: left;\n    margin-left: 30px; }\n    .al-msg-center li:first-child {\n      margin-left: 0; }\n    .al-msg-center li > a {\n      color: #ffffff;\n      text-decoration: none;\n      font-size: 13px;\n      position: relative; }\n      .al-msg-center li > a span {\n        display: inline-block;\n        min-width: 10px;\n        padding: 2px 4px 2px 4px;\n        color: #ffffff;\n        vertical-align: baseline;\n        white-space: nowrap;\n        text-align: center;\n        border-radius: 13px;\n        text-shadow: none;\n        line-height: 11px;\n        background-color: #f95372;\n        position: absolute;\n        top: -5px;\n        right: -14px;\n        font-size: 11px; }\n      .al-msg-center li > a .notification-ring {\n        border: 1px solid #f95372;\n        border-radius: 100px;\n        height: 40px;\n        width: 40px;\n        position: absolute;\n        top: -18px;\n        right: -27px;\n        animation: pulsate 8s ease-out;\n        animation-iteration-count: infinite;\n        opacity: 0.0; }\n      .al-msg-center li > a:hover {\n        color: #f95372; }\n        .al-msg-center li > a:hover.msg {\n          color: #00abff; }\n      .al-msg-center li > a.msg span {\n        background-color: #00abff; }\n      .al-msg-center li > a.msg .notification-ring {\n        border-color: #00abff; }\n    .al-msg-center li.open > a {\n      color: #f95372; }\n      .al-msg-center li.open > a.msg {\n        color: #00abff; }\n\n@media (max-width: 435px) {\n  .al-msg-center {\n    margin-right: 20px; }\n    .al-msg-center li {\n      margin-left: 20px; }\n      .al-msg-center li:first-child {\n        margin-left: 0; } }\n\n.msg-block-header {\n  display: inline-block;\n  padding: 0;\n  font-size: 13px;\n  margin: 0 0 0 6px; }\n\n.top-dropdown-menu {\n  width: 316px;\n  left: auto;\n  right: -47px;\n  top: 26px; }\n  .top-dropdown-menu ::-webkit-scrollbar {\n    width: 0.4em;\n    height: 0.4em; }\n  .top-dropdown-menu ::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.5);\n    cursor: pointer; }\n  .top-dropdown-menu ::-webkit-scrollbar-track {\n    background: #fff; }\n  .top-dropdown-menu body {\n    scrollbar-face-color: rgba(0, 0, 0, 0.5);\n    scrollbar-track-color: #fff; }\n  .top-dropdown-menu .header {\n    padding: 10px 12px;\n    border-bottom: 1px solid #ffffff;\n    font-size: 12px; }\n    .top-dropdown-menu .header strong {\n      float: left;\n      color: #7d7d7d; }\n    .top-dropdown-menu .header > a {\n      float: right;\n      margin-left: 12px;\n      text-decoration: none; }\n      .top-dropdown-menu .header > a:hover {\n        color: #7d7d7d; }\n  .top-dropdown-menu .msg-list {\n    max-height: 296px;\n    overflow: scroll;\n    overflow-x: hidden; }\n    .top-dropdown-menu .msg-list > a {\n      border-top: 1px solid #ffffff;\n      padding: 10px 12px;\n      display: block;\n      text-decoration: none;\n      color: #7d7d7d;\n      font-size: 12px; }\n      .top-dropdown-menu .msg-list > a:first-child {\n        border-top: none; }\n      .top-dropdown-menu .msg-list > a .img-area {\n        float: left;\n        width: 36px; }\n        .top-dropdown-menu .msg-list > a .img-area img {\n          width: 36px;\n          height: 36px; }\n          .top-dropdown-menu .msg-list > a .img-area img.photo-msg-item {\n            border-radius: 18px; }\n        .top-dropdown-menu .msg-list > a .img-area > div {\n          width: 36px;\n          height: 36px;\n          border-radius: 4px;\n          font-size: 24px;\n          text-align: center; }\n          .top-dropdown-menu .msg-list > a .img-area > div.comments {\n            color: #e7ba08; }\n          .top-dropdown-menu .msg-list > a .img-area > div.orders {\n            color: #e7ba08; }\n          .top-dropdown-menu .msg-list > a .img-area > div i {\n            width: 36px;\n            line-height: 36px; }\n      .top-dropdown-menu .msg-list > a .msg-area {\n        float: right;\n        width: 230px; }\n        .top-dropdown-menu .msg-list > a .msg-area div {\n          max-height: 34px;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n        .top-dropdown-menu .msg-list > a .msg-area span {\n          font-style: italic;\n          text-align: right;\n          display: block;\n          font-size: 11px; }\n      .top-dropdown-menu .msg-list > a:hover {\n        background: #E2F0FF; }\n  .top-dropdown-menu > a {\n    border-top: 1px solid #ffffff;\n    display: block;\n    text-align: center;\n    padding: 10px;\n    font-size: 12px;\n    text-decoration: none; }\n    .top-dropdown-menu > a:hover {\n      color: #7d7d7d; }\n  .top-dropdown-menu.profile-dropdown {\n    width: 145px;\n    top: 55px;\n    right: -25px; }\n    .top-dropdown-menu.profile-dropdown a {\n      text-align: left;\n      border: none;\n      text-decoration: none;\n      color: #7d7d7d;\n      padding: 4px 16px 4px 20px; }\n      .top-dropdown-menu.profile-dropdown a.signout {\n        border-top: 1px solid #ffffff; }\n      .top-dropdown-menu.profile-dropdown a i {\n        margin-right: 10px; }\n      .top-dropdown-menu.profile-dropdown a:hover {\n        background: #f4fcff; }\n    .top-dropdown-menu.profile-dropdown i.dropdown-arr {\n      right: 25px; }\n  .top-dropdown-menu i.dropdown-arr {\n    position: absolute;\n    top: -22px;\n    right: 42px;\n    display: block;\n    width: 0;\n    height: 0;\n    border: 11px solid transparent;\n    border-bottom-color: rgba(0, 0, 0, 0.15); }\n    .top-dropdown-menu i.dropdown-arr:after {\n      top: -9px;\n      left: 0px;\n      margin-left: -10px;\n      content: \" \";\n      position: absolute;\n      display: block;\n      width: 0;\n      height: 0;\n      border: 10px solid transparent;\n      border-bottom-color: #ffffff; }\n\n@media (max-width: 415px) {\n  .top-dropdown-menu {\n    right: -81px; }\n    .top-dropdown-menu i.dropdown-arr {\n      right: 75px; } }\n"

/***/ }),
/* 288 */
/***/ (function(module, exports) {

module.exports = "/* msg center */\n@-webkit-keyframes pulsate {\n  30% {\n    -webkit-transform: scale(0.1, 0.1);\n    opacity: 0.0; }\n  35% {\n    opacity: 1.0; }\n  40% {\n    -webkit-transform: scale(1.2, 1.2);\n    opacity: 0.0; } }\n\n.al-msg-center {\n  float: right;\n  padding: 0;\n  list-style: none;\n  margin: 13px 47px 0 0; }\n  .al-msg-center li {\n    list-style: none;\n    float: left;\n    margin-left: 30px; }\n    .al-msg-center li:first-child {\n      margin-left: 0; }\n    .al-msg-center li > a {\n      color: #ffffff;\n      text-decoration: none;\n      font-size: 13px;\n      position: relative; }\n      .al-msg-center li > a span {\n        display: inline-block;\n        min-width: 10px;\n        padding: 2px 4px 2px 4px;\n        color: #ffffff;\n        vertical-align: baseline;\n        white-space: nowrap;\n        text-align: center;\n        border-radius: 13px;\n        text-shadow: none;\n        line-height: 11px;\n        background-color: #f95372;\n        position: absolute;\n        top: -5px;\n        right: -14px;\n        font-size: 11px; }\n      .al-msg-center li > a .notification-ring {\n        border: 1px solid #f95372;\n        border-radius: 100px;\n        height: 40px;\n        width: 40px;\n        position: absolute;\n        top: -18px;\n        right: -27px;\n        animation: pulsate 8s ease-out;\n        animation-iteration-count: infinite;\n        opacity: 0.0; }\n      .al-msg-center li > a:hover {\n        color: #f95372; }\n        .al-msg-center li > a:hover.msg {\n          color: #00abff; }\n      .al-msg-center li > a.msg span {\n        background-color: #00abff; }\n      .al-msg-center li > a.msg .notification-ring {\n        border-color: #00abff; }\n    .al-msg-center li.open > a {\n      color: #f95372; }\n      .al-msg-center li.open > a.msg {\n        color: #00abff; }\n\n@media (max-width: 435px) {\n  .al-msg-center {\n    margin-right: 20px; }\n    .al-msg-center li {\n      margin-left: 20px; }\n      .al-msg-center li:first-child {\n        margin-left: 0; } }\n\n.msg-block-header {\n  display: inline-block;\n  padding: 0;\n  font-size: 13px;\n  margin: 0 0 0 6px; }\n\n.top-dropdown-menu {\n  width: 316px;\n  left: auto;\n  right: -47px;\n  top: 26px; }\n  .top-dropdown-menu ::-webkit-scrollbar {\n    width: 0.4em;\n    height: 0.4em; }\n  .top-dropdown-menu ::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.5);\n    cursor: pointer; }\n  .top-dropdown-menu ::-webkit-scrollbar-track {\n    background: #fff; }\n  .top-dropdown-menu body {\n    scrollbar-face-color: rgba(0, 0, 0, 0.5);\n    scrollbar-track-color: #fff; }\n  .top-dropdown-menu .header {\n    padding: 10px 12px;\n    border-bottom: 1px solid #ffffff;\n    font-size: 12px; }\n    .top-dropdown-menu .header strong {\n      float: left;\n      color: #7d7d7d; }\n    .top-dropdown-menu .header > a {\n      float: right;\n      margin-left: 12px;\n      text-decoration: none; }\n      .top-dropdown-menu .header > a:hover {\n        color: #7d7d7d; }\n  .top-dropdown-menu .msg-list {\n    max-height: 296px;\n    overflow: scroll;\n    overflow-x: hidden; }\n    .top-dropdown-menu .msg-list > a {\n      border-top: 1px solid #ffffff;\n      padding: 10px 12px;\n      display: block;\n      text-decoration: none;\n      color: #7d7d7d;\n      font-size: 12px; }\n      .top-dropdown-menu .msg-list > a:first-child {\n        border-top: none; }\n      .top-dropdown-menu .msg-list > a .img-area {\n        float: left;\n        width: 36px; }\n        .top-dropdown-menu .msg-list > a .img-area img {\n          width: 36px;\n          height: 36px; }\n          .top-dropdown-menu .msg-list > a .img-area img.photo-msg-item {\n            border-radius: 18px; }\n        .top-dropdown-menu .msg-list > a .img-area > div {\n          width: 36px;\n          height: 36px;\n          border-radius: 4px;\n          font-size: 24px;\n          text-align: center; }\n          .top-dropdown-menu .msg-list > a .img-area > div.comments {\n            color: #e7ba08; }\n          .top-dropdown-menu .msg-list > a .img-area > div.orders {\n            color: #e7ba08; }\n          .top-dropdown-menu .msg-list > a .img-area > div i {\n            width: 36px;\n            line-height: 36px; }\n      .top-dropdown-menu .msg-list > a .msg-area {\n        float: right;\n        width: 230px; }\n        .top-dropdown-menu .msg-list > a .msg-area div {\n          max-height: 34px;\n          overflow: hidden;\n          text-overflow: ellipsis; }\n        .top-dropdown-menu .msg-list > a .msg-area span {\n          font-style: italic;\n          text-align: right;\n          display: block;\n          font-size: 11px; }\n      .top-dropdown-menu .msg-list > a:hover {\n        background: #E2F0FF; }\n  .top-dropdown-menu > a {\n    border-top: 1px solid #ffffff;\n    display: block;\n    text-align: center;\n    padding: 10px;\n    font-size: 12px;\n    text-decoration: none; }\n    .top-dropdown-menu > a:hover {\n      color: #7d7d7d; }\n  .top-dropdown-menu.profile-dropdown {\n    width: 145px;\n    top: 55px;\n    right: -25px; }\n    .top-dropdown-menu.profile-dropdown a {\n      text-align: left;\n      border: none;\n      text-decoration: none;\n      color: #7d7d7d;\n      padding: 4px 16px 4px 20px; }\n      .top-dropdown-menu.profile-dropdown a.signout {\n        border-top: 1px solid #ffffff; }\n      .top-dropdown-menu.profile-dropdown a i {\n        margin-right: 10px; }\n      .top-dropdown-menu.profile-dropdown a:hover {\n        background: #f4fcff; }\n    .top-dropdown-menu.profile-dropdown i.dropdown-arr {\n      right: 25px; }\n  .top-dropdown-menu i.dropdown-arr {\n    position: absolute;\n    top: -22px;\n    right: 42px;\n    display: block;\n    width: 0;\n    height: 0;\n    border: 11px solid transparent;\n    border-bottom-color: rgba(0, 0, 0, 0.15); }\n    .top-dropdown-menu i.dropdown-arr:after {\n      top: -9px;\n      left: 0px;\n      margin-left: -10px;\n      content: \" \";\n      position: absolute;\n      display: block;\n      width: 0;\n      height: 0;\n      border: 10px solid transparent;\n      border-bottom-color: #ffffff; }\n\n@media (max-width: 415px) {\n  .top-dropdown-menu {\n    right: -81px; }\n    .top-dropdown-menu i.dropdown-arr {\n      right: 75px; } }\n\n.page-top {\n  background-color: #282828;\n  position: fixed;\n  z-index: 904;\n  box-shadow: 2px 0 3px rgba(0, 0, 0, 0.5);\n  height: 66px;\n  width: 100%;\n  min-width: 320px;\n  padding: 0 32px 0 40px; }\n  .page-top .dropdown-toggle::after {\n    display: none; }\n\n.blur .page-top.scrolled {\n  background-color: rgba(0, 0, 0, 0.85); }\n\na.al-logo {\n  color: #ffffff;\n  display: block;\n  font-size: 24px;\n  font-family: \"Roboto\", sans-serif;\n  white-space: nowrap;\n  float: left;\n  outline: none !important;\n  line-height: 60px; }\n  a.al-logo span {\n    color: #00abff; }\n\na.al-logo:hover {\n  color: #00abff; }\n\n.user-profile {\n  float: right;\n  min-width: 230px;\n  margin-top: 10px; }\n\n.al-user-profile {\n  float: right;\n  margin-right: 12px;\n  transition: all .15s ease-in-out;\n  padding: 0;\n  width: 36px;\n  height: 36px;\n  border: 0;\n  opacity: 1;\n  position: relative; }\n  .al-user-profile a {\n    display: block; }\n  .al-user-profile img {\n    width: 45px;\n    height: 45px;\n    border-radius: 50%; }\n\na.refresh-data {\n  color: #ffffff;\n  font-size: 13px;\n  text-decoration: none;\n  font-weight: 400;\n  float: right;\n  margin-top: 13px;\n  margin-right: 26px; }\n  a.refresh-data:hover {\n    color: #e7ba08 !important; }\n\na.collapse-menu-link {\n  font-size: 31px;\n  cursor: pointer;\n  display: block;\n  text-decoration: none;\n  line-height: 42px;\n  color: #ffffff;\n  padding: 0;\n  float: left;\n  margin: 11px 0 0 25px; }\n  a.collapse-menu-link:hover {\n    text-decoration: none;\n    color: #e7ba08; }\n\n.al-skin-dropdown {\n  float: right;\n  margin-top: 14px;\n  margin-right: 26px; }\n  .al-skin-dropdown .tpl-skin-panel {\n    max-height: 300px;\n    overflow-y: scroll;\n    overflow-x: hidden; }\n\n.icon-palette {\n  display: inline-block;\n  width: 14px;\n  height: 13px;\n  background: url(\"assets/img/theme/palette.png\");\n  background-size: cover; }\n\n.search {\n  text-shadow: none;\n  font-size: 13px;\n  line-height: 25px;\n  transition: all 0.5s ease;\n  white-space: nowrap;\n  overflow: hidden;\n  width: 162px;\n  float: left;\n  margin: 20px 0 0 30px; }\n  .search label {\n    cursor: pointer; }\n  .search i {\n    width: 16px;\n    display: inline-block;\n    cursor: pointer;\n    padding-left: 1px;\n    font-size: 16px;\n    margin-right: 13px; }\n  .search input {\n    color: #ffffff;\n    background: none;\n    border: none;\n    outline: none;\n    width: 120px;\n    padding: 0;\n    margin: 0 0 0 -3px;\n    height: 27px; }\n\n@media screen and (max-width: 660px) {\n  .search {\n    display: none; } }\n\n@media screen and (max-width: 500px) {\n  .page-top {\n    padding: 0 20px; } }\n\n@media (max-width: 435px) {\n  .user-profile {\n    min-width: 136px; }\n  a.refresh-data {\n    margin-right: 10px; }\n  a.collapse-menu-link {\n    margin-left: 10px; }\n  .al-skin-dropdown {\n    display: none; } }\n\n.profile-toggle-link {\n  cursor: pointer; }\n"

/***/ }),
/* 289 */
/***/ (function(module, exports) {

module.exports = ".picture-group {\n  border: 1px dashed #b8b8b8;\n  width: 202px;\n  height: 202px;\n  position: relative;\n  cursor: pointer; }\n  .picture-group .picture-wrapper {\n    width: 200px;\n    height: 200px;\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  .picture-group img {\n    max-width: 100%;\n    max-height: 100%; }\n  .picture-group i {\n    display: none;\n    position: absolute;\n    font-size: 32px;\n    background: #ffffff;\n    cursor: pointer;\n    color: #00abff;\n    top: -11px;\n    right: -11px;\n    height: 26px;\n    border-radius: 50%; }\n    .picture-group i:before {\n      line-height: 26px; }\n    .picture-group i:hover {\n      color: #f95372; }\n  .picture-group a.change-picture {\n    display: none;\n    width: 202px;\n    background: rgba(0, 0, 0, 0.7);\n    transition: all 200ms ease-in-out;\n    color: #ffffff;\n    text-decoration: none;\n    position: absolute;\n    bottom: -1px;\n    left: -1px;\n    line-height: 32px;\n    text-align: center; }\n  .picture-group:hover i {\n    display: block; }\n  .picture-group:hover .change-picture {\n    display: block; }\n  .picture-group .loading {\n    width: 100%;\n    height: 100%;\n    left: 0;\n    display: flex;\n    position: absolute;\n    justify-content: center;\n    align-items: center; }\n  .picture-group .spinner {\n    width: 60px;\n    height: 60px;\n    position: relative; }\n  .picture-group .double-bounce1, .picture-group .double-bounce2 {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: #fff;\n    opacity: 0.6;\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n    animation: sk-bounce 2.0s infinite ease-in-out; }\n  .picture-group .double-bounce2 {\n    -webkit-animation-delay: -1.0s;\n    animation-delay: -1.0s; }\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0); }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n"

/***/ }),
/* 290 */
/***/ (function(module, exports) {

module.exports = ".al-sidebar {\n  width: 180px;\n  top: 66px;\n  left: 0;\n  z-index: 1001;\n  display: block;\n  min-height: 100%;\n  background-color: #282828;\n  height: 100%;\n  position: fixed; }\n\n.al-sidebar-list {\n  margin: 0;\n  overflow: hidden;\n  padding: 18px 0 0 0;\n  list-style: none; }\n\n.al-sidebar-sublist .subitem-submenu-list {\n  padding-left: 15px; }\n\n.subitem-submenu-link .fa {\n  top: 7px; }\n\n.al-sidebar-list-item {\n  display: block;\n  position: relative;\n  float: none;\n  padding: 0; }\n  .al-sidebar-list-item.selected:not(.with-sub-menu) {\n    background-color: #00abff; }\n    .al-sidebar-list-item.selected:not(.with-sub-menu) a.al-sidebar-list-link {\n      color: #ffffff; }\n      .al-sidebar-list-item.selected:not(.with-sub-menu) a.al-sidebar-list-link b {\n        color: #ffffff; }\n\n.ba-sidebar-item-expanded > ul.al-sidebar-sublist {\n  display: block !important; }\n\n.al-sidebar-list-item.ba-sidebar-item-expanded > .al-sidebar-list-link b, .ba-sidebar-sublist-item.ba-sidebar-item-expanded > .al-sidebar-list-link b {\n  transform: rotate(180deg); }\n\n.al-sidebar-list-item.ba-sidebar-item-expanded > .al-sidebar-sublist, .ba-sidebar-sublist-item.ba-sidebar-item-expanded > .al-sidebar-sublist {\n  display: block; }\n\na.al-sidebar-list-link {\n  display: block;\n  height: 42px;\n  padding-left: 18px;\n  text-shadow: none;\n  font-size: 13px;\n  text-decoration: none;\n  color: #ffffff;\n  line-height: 42px;\n  white-space: nowrap;\n  overflow: hidden;\n  cursor: pointer; }\n  a.al-sidebar-list-link:hover {\n    color: #00abff; }\n    a.al-sidebar-list-link:hover b {\n      color: #00abff; }\n  a.al-sidebar-list-link i {\n    margin-right: 18px;\n    width: 16px;\n    display: inline-block; }\n  a.al-sidebar-list-link b {\n    display: block;\n    opacity: 1;\n    width: 14px;\n    height: 14px;\n    line-height: 14px;\n    text-shadow: none;\n    font-size: 18px;\n    position: absolute;\n    right: 10px;\n    top: 12px;\n    padding: 0;\n    text-align: center;\n    color: #ffffff;\n    transition: transform 0.2s linear; }\n\n.slimScrollBar, .slimScrollRail {\n  border-radius: 0px !important;\n  width: 4px !important;\n  left: 176px; }\n\n.al-sidebar-sublist {\n  padding: 0;\n  list-style: none;\n  position: relative;\n  display: none; }\n  .al-sidebar-sublist.expanded {\n    display: block; }\n  .al-sidebar-sublist > ba-menu-item > li {\n    display: block;\n    float: none;\n    padding: 0;\n    border-bottom: none;\n    position: relative; }\n    .al-sidebar-sublist > ba-menu-item > li a {\n      display: block;\n      text-shadow: none;\n      font-size: 13px;\n      text-decoration: none;\n      color: #ffffff;\n      padding-left: 52px;\n      height: auto;\n      line-height: 29px; }\n      .al-sidebar-sublist > ba-menu-item > li a:hover {\n        color: #00abff; }\n    .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a {\n      border: none;\n      background-color: #00abff; }\n      .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a:hover {\n        color: #ffffff; }\n\n.sidebar-hover-elem {\n  width: 4px;\n  background: #00abff;\n  position: absolute;\n  top: -150px;\n  left: 176px;\n  transition: all 0.5s ease;\n  transition-property: top, height;\n  height: 42px;\n  display: block; }\n\n.sidebar-select-elem {\n  display: block;\n  top: 94px; }\n\n.menu-collapsed .slimScrollBar, .menu-collapsed .slimScrollRail {\n  display: none !important; }\n\n@media (min-width: 1200px) {\n  .menu-collapsed .al-main {\n    margin-left: 50px; }\n  .menu-collapsed .al-footer {\n    padding-left: 83px; } }\n\n@media (min-width: 501px) {\n  .menu-collapsed .al-sidebar {\n    width: 52px; }\n    .menu-collapsed .al-sidebar .fa-angle-down, .menu-collapsed .al-sidebar .fa-angle-up {\n      opacity: 0; }\n    .menu-collapsed .al-sidebar .al-sidebar-sublist {\n      position: absolute;\n      top: -1px;\n      left: 52px;\n      background: rgba(0, 0, 0, 0.8);\n      width: 0;\n      display: block;\n      overflow: hidden;\n      transition: width 0.5s ease; }\n      .menu-collapsed .al-sidebar .al-sidebar-sublist.slide-right {\n        width: 135px; }\n      .menu-collapsed .al-sidebar .al-sidebar-sublist:before {\n        display: none; }\n      .menu-collapsed .al-sidebar .al-sidebar-sublist li:before {\n        display: none; }\n      .menu-collapsed .al-sidebar .al-sidebar-sublist li a {\n        padding-left: 18px;\n        padding-right: 18px;\n        min-width: 130px;\n        white-space: nowrap; }\n    .menu-collapsed .al-sidebar .sidebar-hover-elem, .menu-collapsed .al-sidebar .sidebar-select-elem {\n      left: 48px; } }\n\n@media (max-width: 1200px) and (min-width: 500px) {\n  .al-main {\n    margin-left: 50px; }\n  .al-footer {\n    padding-left: 83px; } }\n\n@media (max-width: 1200px) {\n  .al-sidebar {\n    width: 180px;\n    background: rgba(0, 0, 0, 0.75);\n    transition: width 0.5s ease; }\n    .al-sidebar .fa-angle-down, .al-sidebar .fa-angle-up {\n      opacity: 1; }\n    .al-sidebar .al-sidebar-sublist {\n      padding: 0;\n      list-style: none;\n      position: relative;\n      display: none;\n      top: auto;\n      left: auto;\n      background: none;\n      width: auto;\n      overflow: visible;\n      transition: none; }\n      .al-sidebar .al-sidebar-sublist.expanded {\n        display: block; }\n      .al-sidebar .al-sidebar-sublist > ba-menu-item > li {\n        display: block;\n        float: none;\n        padding: 0;\n        border-bottom: none;\n        position: relative; }\n        .al-sidebar .al-sidebar-sublist > ba-menu-item > li a {\n          display: block;\n          text-shadow: none;\n          font-size: 13px;\n          text-decoration: none;\n          color: #ffffff;\n          padding-left: 52px;\n          height: auto;\n          line-height: 29px; }\n          .al-sidebar .al-sidebar-sublist > ba-menu-item > li a:hover {\n            color: #00abff; }\n        .al-sidebar .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a {\n          border: none;\n          background-color: #00abff; }\n          .al-sidebar .al-sidebar-sublist > ba-menu-item > li.selected:not(.with-sub-menu) > a:hover {\n            color: #ffffff; }\n    .al-sidebar .sidebar-hover-elem, .al-sidebar .sidebar-select-elem {\n      left: 176px;\n      transition: left 0.5s ease; } }\n\n@media (max-width: 500px) {\n  .menu-collapsed .al-sidebar {\n    width: 0; }\n  .menu-collapsed .sidebar-hover-elem, .menu-collapsed .sidebar-select-elem {\n    display: none; }\n  .al-main {\n    margin-left: 0; }\n  .al-footer {\n    padding-left: 0; } }\n"

/***/ }),
/* 291 */
/***/ (function(module, exports) {

module.exports = "<div #baAmChart class=\"ba-am-chart {{baAmChartClass || ''}}\"></div>\n"

/***/ }),
/* 292 */
/***/ (function(module, exports) {

module.exports = "<div baCardBlur class=\"animated fadeIn card {{cardType}} {{baCardClass || ''}}\" zoom-in>\n    <div *ngIf=\"title\" class=\"card-header clearfix\">\n        <h3 class=\"card-title\">{{title}}</h3>\n    </div>\n    <div class=\"card-body\">\n        <ng-content></ng-content>\n    </div>\n</div>\n"

/***/ }),
/* 293 */
/***/ (function(module, exports) {

module.exports = "<div #baChartistChart class=\"ba-chartist-chart {{baChartistChartClass || ''}}\"></div>\n"

/***/ }),
/* 294 */
/***/ (function(module, exports) {

module.exports = "<div class=\"{{baCheckboxClass}}\">\n  <label class=\"checkbox-inline custom-checkbox nowrap\">\n    <input type=\"checkbox\" [checked]=state\n           (change)=\"onChange($event.target.checked)\"\n           [disabled]=\"disabled\" [value]=\"value\">\n    <span>{{label}}</span>\n  </label>\n</div>\n"

/***/ }),
/* 295 */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-top clearfix\">\n  <h1 class=\"al-title\">{{ activePageTitle }}</h1>\n\n  <ul class=\"breadcrumb al-breadcrumb\">\n    <li class=\"breadcrumb-item\"><a routerLink=\"/pages/dashboard\">Home</a></li>\n    <li class=\"breadcrumb-item active\">{{ activePageTitle }}</li>\n  </ul>\n</div>\n"

/***/ }),
/* 296 */
/***/ (function(module, exports) {

module.exports = "<div #baFullCalendar class=\"ba-full-calendar {{baFullCalendarClass || ''}}\"></div>\n"

/***/ }),
/* 297 */
/***/ (function(module, exports) {

module.exports = "<aside class=\"al-sidebar\" (mouseleave)=\"hoverElemTop=outOfArea\" sidebarResize>\n  <ul id=\"al-sidebar-list\" class=\"al-sidebar-list\" baSlimScroll [baSlimScrollOptions]=\"{height: menuHeight}\">\n    <ba-menu-item\n      [menuItem]=\"item\"\n      (itemHover)=\"hoverItem($event)\"\n      (toggleSubMenu)=\"toggleSubMenu($event)\"\n      *ngFor=\"let item of menuItems\"></ba-menu-item>\n  </ul>\n  <div class=\"sidebar-hover-elem\" [ngStyle]=\"{top: hoverElemTop + 'px', height: hoverElemHeight + 'px'}\"\n       [ngClass]=\"{'show-hover-elem': showHoverElem }\"></div>\n</aside>\n"

/***/ }),
/* 298 */
/***/ (function(module, exports) {

module.exports = "<li *ngIf=\"!menuItem.hidden\" [title]=\"menuItem.title\" [ngClass]=\"{'al-sidebar-list-item': !child, 'ba-sidebar-sublist-item': child, 'selected': menuItem.selected && !menuItem.expanded, 'with-sub-menu': menuItem.children, 'ba-sidebar-item-expanded': menuItem.expanded}\">\n\n  <a *ngIf=\"!menuItem.children && !menuItem.url\" (mouseenter)=\"onHoverItem($event, item)\" [routerLink]=\"menuItem.route.paths\" class=\"al-sidebar-list-link\">\n    <i *ngIf=\"menuItem.icon\" class=\"{{ menuItem.icon }}\"></i><span>{{ menuItem.title }}</span>\n  </a>\n\n  <a *ngIf=\"!menuItem.children && menuItem.url\" (mouseenter)=\"onHoverItem($event, item)\" [href]=\"menuItem.url\" [target]=\"menuItem.target\" class=\"al-sidebar-list-link\">\n    <i *ngIf=\"menuItem.icon\" class=\"{{ menuItem.icon }}\"></i><span>{{ menuItem.title }}</span>\n  </a>\n\n  <a *ngIf=\"menuItem.children\" (mouseenter)=\"onHoverItem($event, item)\" href (click)=\"onToggleSubMenu($event, menuItem)\" class=\"al-sidebar-list-link\">\n    <i *ngIf=\"menuItem.icon\" class=\"{{ menuItem.icon }}\"></i><span>{{ menuItem.title }}</span>\n    <b class=\"fa fa-angle-down\" [ngClass]=\"{'fa-angle-up': menuItem.expanded}\"></b>\n  </a>\n\n  <ul *ngIf=\"menuItem.children\" class=\"al-sidebar-sublist\" [ngClass]=\"{'slide-right': menuItem.slideRight}\">\n    <ba-menu-item [menuItem]=\"subItem\"\n                  [child]=\"true\"\n                  (itemHover)=\"onHoverItem($event)\"\n                  (toggleSubMenu)=\"onToggleSubMenu($event, subItem)\"\n                  *ngFor=\"let subItem of menuItem.children\"></ba-menu-item>\n  </ul>\n\n</li>\n"

/***/ }),
/* 299 */
/***/ (function(module, exports) {

module.exports = "<ul class=\"al-msg-center clearfix\">\n  <li class=\"dropdown\">\n    <a href class=\"dropdown-toggle\" id=\"msg-dd1\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n      <i class=\"fa fa-bell-o\"></i><span>5</span>\n\n      <div class=\"notification-ring\"></div>\n    </a>\n\n    <div class=\"top-dropdown-menu dropdown-menu\" aria-labelledby=\"msg-dd1\">\n      <i class=\"dropdown-arr\"></i>\n\n      <div class=\"header clearfix\">\n        <strong>Notifications</strong>\n        <a href>Mark All as Read</a>\n        <a href>Settings</a>\n      </div>\n      <div class=\"msg-list\">\n        <a *ngFor=\"let msg of notifications\" href class=\"clearfix\">\n          <div class=\"img-area\"><img [ngClass]=\"{'photo-msg-item': !msg.image}\"\n                                     src=\"{{ ( msg.image ||  (msg.name | baProfilePicture)) }}\"></div>\n          <div class=\"msg-area\">\n            <div>{{ msg.text }}</div>\n            <span>{{ msg.time }}</span>\n          </div>\n        </a>\n      </div>\n      <a href>See all notifications</a>\n    </div>\n  </li>\n  <li class=\"dropdown\">\n    <a href class=\"msg dropdown-toggle\" id=\"msg-dd2\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n      <i class=\"fa fa-envelope-o\"></i><span>5</span>\n      <div class=\"notification-ring\"></div>\n    </a>\n    <div class=\"top-dropdown-menu dropdown-menu\" aria-labelledby=\"msg-dd2\">\n      <i class=\"dropdown-arr\"></i>\n      <div class=\"header clearfix\">\n        <strong>Messages</strong>\n        <a href>Mark All as Read</a>\n        <a href>Settings</a>\n      </div>\n      <div class=\"msg-list\">\n        <a *ngFor=\"let msg of messages\" href class=\"clearfix\">\n          <div class=\"img-area\"><img [ngClass]=\"{'photo-msg-item': !msg.image}\"\n                                     src=\"{{ ( msg.image ||  (msg.name | baProfilePicture)) }}\"></div>\n          <div class=\"msg-area\">\n            <div>{{ msg.text }}</div>\n            <span>{{ msg.time }}</span>\n          </div>\n        </a>\n      </div>\n      <a href>See all messages</a>\n    </div>\n  </li>\n</ul>\n"

/***/ }),
/* 300 */
/***/ (function(module, exports) {

module.exports = "<div class=\"{{baMultiCheckboxClass}}\">\n  <ba-checkbox *ngFor=\"let item of state\"\n               [(ngModel)]=\"item[propertiesMapping.model]\"\n               [baCheckboxClass]=\"getProp(item, 'baCheckboxClass')\"\n               [label]=\"getProp(item, 'label')\"\n               [disabled]=\"getProp(item, 'disabled')\"\n               [value]=\"getProp(item, 'value')\"\n               id=\"{{getProp(item, 'id')}}\">\n  </ba-checkbox>\n</div>\n"

/***/ }),
/* 301 */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-top clearfix\" baScrollPosition maxHeight=\"50\" (scrollChange)=\"scrolledChanged($event)\"\n     [ngClass]=\"{scrolled: isScrolled}\">\n  <a routerLink=\"/pages/dashboard\" class=\"al-logo clearfix\"><span>ng2-</span>admin</a>\n  <a href (click)=\"toggleMenu()\" class=\"collapse-menu-link ion-navicon\"></a>\n\n  <div class=\"search\">\n    <i class=\"ion-ios-search-strong\" ng-click=\"startSearch()\"></i>\n    <input id=\"searchInput\" type=\"text\" placeholder=\"Search for...\">\n  </div>\n\n  <div class=\"user-profile clearfix\">\n    <div class=\"dropdown al-user-profile\">\n      <a class=\"profile-toggle-link dropdown-toggle\" id=\"user-profile-dd\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n        <img src=\"{{ ( 'Nasta' | baProfilePicture ) }}\">\n      </a>\n      <ul class=\"dropdown-menu top-dropdown-menu profile-dropdown\" aria-labelledby=\"user-profile-dd\">\n        <li class=\"dropdown-item\"><i class=\"dropdown-arr\"></i></li>\n        <li class=\"dropdown-item\"><a href><i class=\"fa fa-user\"></i>Profile</a></li>\n        <li class=\"dropdown-item\"><a href><i class=\"fa fa-cog\"></i>Settings</a></li>\n        <li class=\"dropdown-item\"><a href class=\"signout\"><i class=\"fa fa-power-off\"></i>Sign out</a></li>\n      </ul>\n    </div>\n    <ba-msg-center></ba-msg-center>\n  </div>\n</div>\n"

/***/ }),
/* 302 */
/***/ (function(module, exports) {

module.exports = "<div class=\"picture-group\" [ngClass]=\"{uploading: uploadInProgress}\">\n  <div class=\"picture-wrapper\" (click)=\"bringFileSelector();\">\n    <img [src]=\"picture\" *ngIf=\"picture\">\n    <img [src]=\"defaultPicture\" *ngIf=\"!!!picture && !!defaultPicture\">\n\n    <div class=\"loading\" *ngIf=\"uploadInProgress\">\n      <div class=\"spinner\">\n        <div class=\"double-bounce1\"></div>\n        <div class=\"double-bounce2\"></div>\n      </div>\n    </div>\n  </div>\n  <i class=\"ion-ios-close-outline\" (click)=\"removePicture();\" *ngIf=\"picture && canDelete\"></i>\n  <a href class=\"change-picture\" (click)=\"bringFileSelector();\">Change profile Picture</a>\n  <input #fileUpload ngFileSelect [options]=\"uploaderOptions\"\n         (onUpload)=\"_onUpload($event)\"\n         (beforeUpload)=\"beforeUpload($event)\"\n         type=\"file\" hidden=\"true\">\n</div>\n"

/***/ }),
/* 303 */
/***/ (function(module, exports) {

module.exports = "<aside class=\"al-sidebar\" sidebarResize>\n  <ba-menu [menuHeight]=\"menuHeight\"\n           [sidebarCollapsed]=\"isMenuCollapsed\"\n           (expandMenu)=\"menuExpand()\"></ba-menu>\n</aside>\n"

/***/ }),
/* 304 */,
/* 305 */,
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(277);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(6)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/raw-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"remove\":true}!./../../../node_modules/style-loader/index.js!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?sourceMap!./initial.scss", function() {
			var newContent = require("!!./../../../node_modules/raw-loader/index.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"remove\":true}!./../../../node_modules/style-loader/index.js!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?sourceMap!./initial.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(278);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(6)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/raw-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss", function() {
			var newContent = require("!!./../../node_modules/raw-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(279);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(6)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../node_modules/raw-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./baAmChart.scss", function() {
			var newContent = require("!!./../../../../../node_modules/raw-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./baAmChart.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(281);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(6)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../node_modules/raw-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./baChartistChart.scss", function() {
			var newContent = require("!!./../../../../../node_modules/raw-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./baChartistChart.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(284);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(6)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../node_modules/raw-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./baFullCalendar.scss", function() {
			var newContent = require("!!./../../../../../node_modules/raw-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./baFullCalendar.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(285);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(6)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../node_modules/raw-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./baMenu.scss", function() {
			var newContent = require("!!./../../../../../node_modules/raw-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./baMenu.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(286);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(6)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../../../node_modules/raw-loader/index.js!./../../../../../../../node_modules/sass-loader/index.js!./baMenuItem.scss", function() {
			var newContent = require("!!./../../../../../../../node_modules/raw-loader/index.js!./../../../../../../../node_modules/sass-loader/index.js!./baMenuItem.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(288);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(6)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../node_modules/raw-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./baPageTop.scss", function() {
			var newContent = require("!!./../../../../../node_modules/raw-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./baPageTop.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(290);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(6)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../node_modules/raw-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./baSidebar.scss", function() {
			var newContent = require("!!./../../../../../node_modules/raw-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./baSidebar.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 315 */,
/* 316 */,
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(137);

/***/ }),
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Angular bootstraping
 */
var platform_browser_dynamic_1 = __webpack_require__(19);
var environment_1 = __webpack_require__(30);
var hmr_1 = __webpack_require__(14);
/*
 * App Module
 * our top level module that holds all of our components
 */
var app_1 = __webpack_require__(154);
/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(app_1.AppModule).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(environment_1.decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
hmr_1.bootloader(main);


/***/ })
],[455]);
//# sourceMappingURL=main.map