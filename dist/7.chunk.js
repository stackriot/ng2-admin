webpackJsonpac__name_([7],{

/***/ 458:
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
var charts_routing_1 = __webpack_require__(661);
var charts_component_1 = __webpack_require__(595);
var chartistJs_component_1 = __webpack_require__(596);
var chartistJs_service_1 = __webpack_require__(597);
var ChartsModule = (function () {
    function ChartsModule() {
    }
    return ChartsModule;
}());
ChartsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            nga_module_1.NgaModule,
            charts_routing_1.routing
        ],
        declarations: [
            charts_component_1.Charts,
            chartistJs_component_1.ChartistJs
        ],
        providers: [
            chartistJs_service_1.ChartistJsService
        ]
    })
], ChartsModule);
exports.ChartsModule = ChartsModule;


/***/ }),

/***/ 595:
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
var Charts = (function () {
    function Charts() {
    }
    Charts.prototype.ngOnInit = function () {
    };
    return Charts;
}());
Charts = __decorate([
    core_1.Component({
        selector: 'maps',
        styles: [],
        template: "<router-outlet></router-outlet>"
    }),
    __metadata("design:paramtypes", [])
], Charts);
exports.Charts = Charts;


/***/ }),

/***/ 596:
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
var chartistJs_service_1 = __webpack_require__(597);
__webpack_require__(848);
var ChartistJs = (function () {
    function ChartistJs(_chartistJsService) {
        this._chartistJsService = _chartistJsService;
    }
    ChartistJs.prototype.ngOnInit = function () {
        this.data = this._chartistJsService.getAll();
    };
    ChartistJs.prototype.getResponsive = function (padding, offset) {
        return this._chartistJsService.getResponsive(padding, offset);
    };
    return ChartistJs;
}());
ChartistJs = __decorate([
    core_1.Component({
        selector: 'chartist-js',
        template: __webpack_require__(796),
    }),
    __metadata("design:paramtypes", [chartistJs_service_1.ChartistJsService])
], ChartistJs);
exports.ChartistJs = ChartistJs;


/***/ }),

/***/ 597:
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
var ChartistJsService = (function () {
    function ChartistJsService(_baConfig) {
        this._baConfig = _baConfig;
        this._data = {
            simpleLineOptions: {
                color: this._baConfig.get().colors.defaultText,
                fullWidth: true,
                height: '300px',
                chartPadding: {
                    right: 40
                }
            },
            simpleLineData: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                series: [
                    [20, 20, 12, 45, 50],
                    [10, 45, 30, 14, 12],
                    [34, 12, 12, 40, 50],
                    [10, 43, 25, 22, 16],
                    [3, 6, 30, 33, 43]
                ]
            },
            areaLineData: {
                labels: [1, 2, 3, 4, 5, 6, 7, 8],
                series: [
                    [5, 9, 7, 8, 5, 3, 5, 4]
                ]
            },
            areaLineOptions: {
                fullWidth: true,
                height: '300px',
                low: 0,
                showArea: true
            },
            biLineData: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                series: [
                    [1, 2, 3, 1, -2, 0, 1],
                    [-2, -1, -2, -1, -2.5, -1, -2],
                    [0, 0, 0, 1, 2, 2.5, 2],
                    [2.5, 2, 1, 0.5, 1, 0.5, -1]
                ]
            },
            biLineOptions: {
                height: '300px',
                high: 3,
                low: -3,
                showArea: true,
                showLine: false,
                showPoint: false,
                fullWidth: true,
                axisX: {
                    showGrid: false
                }
            },
            simpleBarData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                series: [
                    [15, 24, 43, 27, 5, 10, 23, 44, 68, 50, 26, 8],
                    [13, 22, 49, 22, 4, 6, 24, 46, 57, 48, 22, 4]
                ]
            },
            simpleBarOptions: {
                fullWidth: true,
                height: '300px'
            },
            multiBarData: {
                labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
                series: [
                    [5, 4, 3, 7],
                    [3, 2, 9, 5],
                    [1, 5, 8, 4],
                    [2, 3, 4, 6],
                    [4, 1, 2, 1]
                ]
            },
            multiBarOptions: {
                fullWidth: true,
                height: '300px',
                stackBars: true,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value.split(/\s+/).map(function (word) {
                            return word[0];
                        }).join('');
                    }
                },
                axisY: {
                    offset: 20
                }
            },
            multiBarResponsive: [
                ['screen and (min-width: 400px)', {
                        reverseData: true,
                        horizontalBars: true,
                        axisX: {
                            labelInterpolationFnc: function (n) { return n; }
                        },
                        axisY: {
                            offset: 60
                        }
                    }],
                ['screen and (min-width: 700px)', {
                        stackBars: false,
                        reverseData: false,
                        horizontalBars: false,
                        seriesBarDistance: 15
                    }]
            ],
            stackedBarData: {
                labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
                series: [
                    [800000, 1200000, 1400000, 1300000],
                    [200000, 400000, 500000, 300000],
                    [100000, 200000, 400000, 600000]
                ]
            },
            stackedBarOptions: {
                fullWidth: true,
                height: '300px',
                stackBars: true,
                axisY: {
                    labelInterpolationFnc: function (value) {
                        return (value / 1000) + 'k';
                    }
                }
            },
            simplePieData: {
                series: [5, 3, 4]
            },
            simplePieOptions: {
                fullWidth: true,
                height: '300px',
                weight: '300px',
                labelInterpolationFnc: function (value) {
                    return Math.round(value / 12 * 100) + '%';
                }
            },
            labelsPieData: {
                labels: ['Bananas', 'Apples', 'Grapes'],
                series: [20, 15, 40]
            },
            labelsPieOptions: {
                fullWidth: true,
                height: '300px',
                weight: '300px',
                labelDirection: 'explode',
                labelInterpolationFnc: function (value) {
                    return value[0];
                }
            },
            simpleDonutData: {
                labels: ['Bananas', 'Apples', 'Grapes'],
                series: [20, 15, 40]
            },
            simpleDonutOptions: {
                fullWidth: true,
                donut: true,
                height: '300px',
                weight: '300px',
                labelDirection: 'explode',
                labelInterpolationFnc: function (value) {
                    return value[0];
                }
            }
        };
    }
    ChartistJsService.prototype.getAll = function () {
        return this._data;
    };
    ChartistJsService.prototype.getResponsive = function (padding, offset) {
        return [
            ['screen and (min-width: 1550px)', {
                    chartPadding: padding,
                    labelOffset: offset,
                    labelDirection: 'explode',
                    labelInterpolationFnc: function (value) {
                        return value;
                    }
                }],
            ['screen and (max-width: 1200px)', {
                    chartPadding: padding,
                    labelOffset: offset,
                    labelDirection: 'explode',
                    labelInterpolationFnc: function (value) {
                        return value;
                    }
                }],
            ['screen and (max-width: 600px)', {
                    chartPadding: 0,
                    labelOffset: 0,
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }]
        ];
    };
    return ChartistJsService;
}());
ChartistJsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [theme_1.BaThemeConfigProvider])
], ChartistJsService);
exports.ChartistJsService = ChartistJsService;


/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(9);
var charts_component_1 = __webpack_require__(595);
var chartistJs_component_1 = __webpack_require__(596);
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: charts_component_1.Charts,
        children: [
            { path: 'chartist-js', component: chartistJs_component_1.ChartistJs }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ }),

/***/ 771:
/***/ (function(module, exports) {

module.exports = ".ct-area {\n  fill-opacity: .5; }\n\n.ct-label {\n  color: #ffffff;\n  opacity: 0.9;\n  fill: #ffffff; }\n\n.ct-chart .ct-label {\n  font-size: 1em; }\n\n.ct-chart svg {\n  width: 100%;\n  display: block; }\n\n.ct-series-a .ct-bar, .ct-series-a .ct-line, .ct-series-a .ct-point, .ct-series-a .ct-slice-donut, .ct-series-a .ct-slice-pie {\n  stroke: #00abff; }\n\n.ct-series-a .ct-slice-pie, .ct-series-a .ct-area {\n  fill: #00abff; }\n\n.ct-series-b .ct-bar, .ct-series-b .ct-line, .ct-series-b .ct-point, .ct-series-b .ct-slice-donut, .ct-series-b .ct-slice-pie {\n  stroke: #8bd22f; }\n\n.ct-series-b .ct-slice-pie, .ct-series-b .ct-area {\n  fill: #8bd22f; }\n\n.ct-series-c .ct-bar, .ct-series-c .ct-line, .ct-series-c .ct-point, .ct-series-c .ct-slice-donut, .ct-series-c .ct-slice-pie {\n  stroke: #f95372; }\n\n.ct-series-c .ct-slice-pie, .ct-series-c .ct-area {\n  fill: #f95372; }\n\n.ct-series-d .ct-bar, .ct-series-d .ct-line, .ct-series-d .ct-point, .ct-series-d .ct-slice-donut, .ct-series-d .ct-slice-pie {\n  stroke: #e7ba08; }\n\n.ct-series-d .ct-slice-pie, .ct-series-d .ct-area {\n  fill: #e7ba08; }\n\n.ct-series-e .ct-bar, .ct-series-e .ct-line, .ct-series-e .ct-point, .ct-series-e .ct-slice-donut, .ct-series-e .ct-slice-pie {\n  stroke: #40daf1; }\n\n.ct-series-e .ct-slice-pie, .ct-series-e .ct-area {\n  fill: #40daf1; }\n\n.stacked-bar .ct-bar {\n  stroke-width: 30px; }\n"

/***/ }),

/***/ 796:
/***/ (function(module, exports) {

module.exports = "<section class=\"chartist\">\n  <div class=\"row\">\n    <div class=\"col-md-6 \">\n      <ba-card title=\"Lines\" baCardClass=\"with-scroll\">\n        <h5>Simple line chart</h5>\n        <ba-chartist-chart baChartistChartClass=\"ct-chart\"\n                           baChartistChartType=\"Line\"\n                           [baChartistChartData]=\"data['simpleLineData']\"\n                           [baChartistChartOptions]=\"data['simpleLineOptions']\">\n        </ba-chartist-chart>\n\n        <h5>Line chart with area</h5>\n        <ba-chartist-chart baChartistChartClass=\"ct-chart\"\n                           baChartistChartType=\"Line\"\n                           [baChartistChartData]=\"data['areaLineData']\"\n                           [baChartistChartOptions]=\"data['areaLineOptions']\">\n        </ba-chartist-chart>\n\n        <h5>Bi-polar line chart with area only</h5>\n        <ba-chartist-chart baChartistChartClass=\"ct-chart\"\n                           baChartistChartType=\"Line\"\n                           [baChartistChartData]=\"data['biLineData']\"\n                           [baChartistChartOptions]=\"data['biLineOptions']\">\n        </ba-chartist-chart>\n      </ba-card>\n    </div>\n\n    <div class=\"col-md-6 \">\n      <ba-card title=\"Bars\" baCardClass=\"with-scroll\">\n        <h5>Simple bar chart</h5>\n        <ba-chartist-chart baChartistChartClass=\"ct-chart\"\n                           baChartistChartType=\"Bar\"\n                           [baChartistChartData]=\"data['simpleBarData']\"\n                           [baChartistChartOptions]=\"data['simpleBarOptions']\">\n        </ba-chartist-chart>\n\n        <h5>Multi-line labels bar chart</h5>\n        <ba-chartist-chart baChartistChartClass=\"ct-chart\"\n                           baChartistChartType=\"Bar\"\n                           [baChartistChartData]=\"data['multiBarData']\"\n                           [baChartistChartOptions]=\"data['multiBarOptions']\"\n                           [baChartistChartResponsive]=\"data['multiBarResponsive']\">\n        </ba-chartist-chart>\n\n        <h5>Stacked bar chart</h5>\n        <ba-chartist-chart baChartistChartClass=\"ct-chart stacked-bar\"\n                           baChartistChartType=\"Bar\"\n                           [baChartistChartData]=\"data['stackedBarData']\"\n                           [baChartistChartOptions]=\"data['stackedBarOptions']\">\n        </ba-chartist-chart>\n      </ba-card>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <ba-card title=\"Pies & Donuts\" baCardClass=\"with-scroll\">\n        <div class=\"row\">\n          <div class=\"col-md-12 col-lg-4\"><h5>Simple Pie</h5>\n            <ba-chartist-chart baChartistChartClass=\"ct-chart stacked-bar\"\n                               baChartistChartType=\"Pie\"\n                               [baChartistChartData]=\"data['simplePieData']\"\n                               [baChartistChartOptions]=\"data['simplePieOptions']\"\n                               [baChartistChartResponsive]=\"getResponsive(20, 80)\">\n            </ba-chartist-chart>\n          </div>\n          <div class=\"col-md-12 col-lg-4\"><h5>Pie with labels</h5>\n            <ba-chartist-chart baChartistChartClass=\"ct-chart stacked-bar\"\n                               baChartistChartType=\"Pie\"\n                               [baChartistChartData]=\"data['labelsPieData']\"\n                               [baChartistChartOptions]=\"data['labelsPieOptions']\">\n            </ba-chartist-chart>\n          </div>\n          <div class=\"col-md-12 col-lg-4\"><h5>Donut</h5>\n            <ba-chartist-chart baChartistChartClass=\"ct-chart stacked-bar\"\n                               baChartistChartType=\"Pie\"\n                               [baChartistChartData]=\"data['simpleDonutData']\"\n                               [baChartistChartOptions]=\"data['simpleDonutOptions']\"\n                               [baChartistChartResponsive]=\"getResponsive(5, 40)\">\n            </ba-chartist-chart>\n          </div>\n        </div>\n      </ba-card>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 848:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(771);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(6)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../../node_modules/raw-loader/index.js!./../../../../../../node_modules/sass-loader/index.js!./chartistJs.scss", function() {
			var newContent = require("!!./../../../../../../node_modules/raw-loader/index.js!./../../../../../../node_modules/sass-loader/index.js!./chartistJs.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=7.map