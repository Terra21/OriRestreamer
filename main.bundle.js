webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face{\r\n    font-family: \"Angie\";\r\n    src: url(" + __webpack_require__("../../../../../src/assets/AngieRegular.otf") + ") format(\"opentype\")\r\n}\r\n\r\n.btn {\r\n    color: #FFFFFF;\r\n    margin: 10px;\r\n    width: 250px;\r\n    height: 100px;\r\n    font-family: \"Angie\";\r\n    font-size: 24px;\r\n    color: white;\r\n    text-shadow:\r\n    -1px -1px 0 #000,  \r\n     1px -1px 0 #000,\r\n     -1px 1px 0 #000,\r\n      1px 1px 0 #000;\r\n}\r\n\r\n.btn-restream {\r\n    background: url(" + __webpack_require__("../../../../../src/assets/btn1.png") + ");\r\n}\r\n\r\n.btn-controls {\r\n    background: url(" + __webpack_require__("../../../../../src/assets/btn2.png") + ");\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_cmp__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.cmp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stream_stream_cmp__ = __webpack_require__("../../../../../src/app/stream/stream.cmp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controls_controls_cmp__ = __webpack_require__("../../../../../src/app/controls/controls.cmp.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var appRoutes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_cmp__["a" /* DashboardCMP */] },
    { path: 'stream', component: __WEBPACK_IMPORTED_MODULE_6__stream_stream_cmp__["a" /* StreamCMP */] },
    { path: 'controls', component: __WEBPACK_IMPORTED_MODULE_7__controls_controls_cmp__["a" /* ControlsCMP */], },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__controls_controls_cmp__["a" /* ControlsCMP */],
            __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_cmp__["a" /* DashboardCMP */],
            __WEBPACK_IMPORTED_MODULE_6__stream_stream_cmp__["a" /* StreamCMP */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [])
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/controls/controls.cmp.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlsCMP; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_information__ = __webpack_require__("../../../../../src/app/services/information.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ControlsCMP = (function () {
    function ControlsCMP() {
        this.timerStarted = false;
        this.trackerId = 'covertmuffinvmadinsane';
        this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default.a.connect('https://ori-restreamer.azurewebsites.net/');
        this._vm = new __WEBPACK_IMPORTED_MODULE_1__services_information__["a" /* Information */]();
    }
    ControlsCMP.prototype.setBackground = function (background) {
        this._vm.background = background;
    };
    ControlsCMP.prototype.linkTracker = function () {
        this.socket.emit('data', this.vm);
        __WEBPACK_IMPORTED_MODULE_2_jquery__["ajax"]({
            url: "http://www.dcmiller.org/ori/tracker/server.php?match=" + this.trackerId,
            dataType: "jsonp",
            error: function (response) {
                console.log(response);
            },
            success: function (response) {
                console.log(response);
                this._vm.tracker = response;
                this.infoService.setInfo(this._vm);
            }
        });
    };
    ControlsCMP.prototype.start = function () {
        this.timerStarted = true;
        this.socket.emit('timer', true);
    };
    ControlsCMP.prototype.reset = function () {
        this.timerStarted = false;
        this.socket.emit('timer', false);
    };
    Object.defineProperty(ControlsCMP.prototype, "vm", {
        get: function () {
            return this._vm;
        },
        set: function (info) {
            this._vm = info;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlsCMP.prototype, "matchType", {
        get: function () {
            return this._vm.matchType;
        },
        set: function (matchType) {
            this._vm.matchType = matchType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlsCMP.prototype, "commentators", {
        get: function () {
            return this._vm.commentators;
        },
        set: function (commentators) {
            this._vm.commentators = commentators;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlsCMP.prototype, "p1_name", {
        get: function () {
            return this._vm.player1;
        },
        set: function (p1) {
            this._vm.player1 = p1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlsCMP.prototype, "p2_name", {
        get: function () {
            return this._vm.player2;
        },
        set: function (p2) {
            this._vm.player2 = p2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlsCMP.prototype, "p1_twitch", {
        get: function () {
            return this._vm.player1_twitch;
        },
        set: function (p1) {
            this._vm.player1_twitch = p1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlsCMP.prototype, "p2_twitch", {
        get: function () {
            return this._vm.player2_twitch;
        },
        set: function (p2) {
            this._vm.player2_twitch = p2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlsCMP.prototype, "p1_audio", {
        get: function () {
            return this._vm.currentAudioOnPlayer == 1;
        },
        set: function (audioSelected) {
            this._vm.currentAudioOnPlayer = audioSelected ? 1 : this._vm.currentAudioOnPlayer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlsCMP.prototype, "p2_audio", {
        get: function () {
            return this._vm.currentAudioOnPlayer == 2;
        },
        set: function (audioSelected) {
            this._vm.currentAudioOnPlayer = audioSelected ? 2 : this._vm.currentAudioOnPlayer;
        },
        enumerable: true,
        configurable: true
    });
    return ControlsCMP;
}());
ControlsCMP = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/controls/controls.html"),
        styles: [__webpack_require__("../../../../../src/app/controls/controls.css")]
    }),
    __metadata("design:paramtypes", [])
], ControlsCMP);

//# sourceMappingURL=controls.cmp.js.map

/***/ }),

/***/ "../../../../../src/app/controls/controls.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\r\n    margin-top: 10px;\r\n}\r\n\r\n.active-background {\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    border-color: greenyellow;\r\n}\r\n\r\n.container {\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/controls/controls.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"controls\">\r\n    <div class=\"container\">\r\n        <div class=\"row col-lg-12\">\r\n            <div class=\"col-lg-3\">\r\n                Tracker Id:\r\n            </div>\r\n            <div class=\"col-lg-3\">\r\n                <input type=\"text\" class=\"form-control ori-input\" [(ngModel)]=\"trackerId\" style=\"width:100%\">\r\n            </div>\r\n            <div class=\"col-lg-2\">\r\n                <input type=\"button\" class=\"btn\" (click)=\"linkTracker()\" value=\"Link/Update UI\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"row col -lg-12\">\r\n            <div class=\"col-lg-3\">\r\n                Timer:\r\n            </div>\r\n            <div class=\"col-lg-3\">\r\n                <input type=\"button\" class=\"btn btn-success\" value=\"Start\" (click)=\"start()\" [disabled]=\"timerStarted\"/>\r\n            </div>\r\n            <div class=\"col-lg-2\">\r\n                <input type=\"button\" class=\"btn btn-danger\" value=\"Reset\" (click)=\"reset()\" />\r\n            </div>\r\n        </div>  \r\n        <div class=\"row col-lg-12\">\r\n            <div class=\"col-lg-3\">\r\n                Player 1:\r\n            </div>\r\n            <div class=\"col-lg-3\">\r\n                <input class=\"form-control\" [(ngModel)]=\"p1_name\" />\r\n            </div>\r\n\r\n            <div class=\"col-lg-2\">\r\n                Twitch:\r\n            </div>\r\n            <div class=\"col-lg-3\">\r\n                <input class=\"form-control\" [(ngModel)]=\"p1_twitch\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"row col-lg-12\">\r\n            <div class=\"col-lg-3\">\r\n                Player 2:\r\n            </div>\r\n            <div class=\"col-lg-3\">\r\n                <input class=\"form-control\" [(ngModel)]=\"p2_name\" />\r\n            </div>\r\n            <div class=\"col-lg-2\">\r\n                Twitch:\r\n            </div>\r\n            <div class=\"col-lg-3\">\r\n                <input class=\"form-control\" [(ngModel)]=\"p2_twitch\" />\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"row col-lg-12\">\r\n            <div class=\"col-lg-2\">\r\n                Audio:\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"checkbox\" [(ngModel)]=\"p1_audio\" />\r\n            </div>\r\n            <div class=\"col-lg-2\">\r\n                Audio:\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"checkbox\" [(ngModel)]=\"p2_audio\" />\r\n            </div>\r\n        </div> -->\r\n        <div class=\"row col-lg-12\">\r\n                <div class=\"col-lg-3\">\r\n                    Match Type:\r\n                </div>\r\n                <div class=\"col-lg-4\">\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"matchType\" style=\"width:100%\">\r\n                </div>\r\n            </div>\r\n        <div class=\"row col-lg-12\">\r\n            <div class=\"col-lg-3\">\r\n                Commentators:\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"commentators\" style=\"width:100%\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row col-lg-12\">\r\n            <div class=\"col-lg-3\">\r\n                <img [ngClass]=\"{ 'active-background': vm.background == 'forlorn' }\"\r\n                     (click)=\"setBackground('forlorn')\" src=\"../../assets/background-forlorn.png\" style=\"max-height:75px;\">\r\n            </div>\r\n            <div class=\"col-lg-3\">\r\n                    <img [ngClass]=\"{ 'active-background': vm.background == 'gumo' }\"\r\n                    (click)=\"setBackground('gumo')\" src=\"../../assets/background-gumo.png\" style=\"max-height:75px;\">\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n            </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.cmp.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardCMP; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardCMP = (function () {
    function DashboardCMP() {
    }
    return DashboardCMP;
}());
DashboardCMP = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardCMP);

//# sourceMappingURL=dashboard.cmp.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n            <button class=\"btn btn-restream\" [routerLink]=\"['/stream']\">\r\n                Restream\r\n            </button>\r\n            <button class=\"btn btn-controls\" [routerLink]=\"['/controls']\">\r\n                Controls\r\n            </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/services/information.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Information; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tracker__ = __webpack_require__("../../../../../src/app/services/tracker.ts");

var Information = (function () {
    function Information() {
        this.player1 = 'TheRooseIsLoose89';
        this.player2 = 'Shedd';
        this.player1_twitch = 'TheRooseIsLoose89';
        this.player2_twitch = 'Shedd_';
        this.currentAudioOnPlayer = 1;
        this.commentators = 'MeldonTaragon, CovertMuffin';
        this.matchType = 'Exhibition';
        this.background = 'gumo';
        this.tracker = new __WEBPACK_IMPORTED_MODULE_0__tracker__["a" /* Tracker */]();
    }
    return Information;
}());

//# sourceMappingURL=information.js.map

/***/ }),

/***/ "../../../../../src/app/services/tracker.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tracker; });
var Tracker = (function () {
    function Tracker() {
        this.mapstones = new Mapstones();
        this['t1-event-watervein'] = false;
        this['t1-event-gumonseal'] = false;
        this['t1-event-sunstone'] = false;
        this['t1-event-cleanwater'] = false;
        this['t1-event-windrestored'] = false;
        this['t1-skill-bash'] = false;
        this['t1-skill-cflame'] = false;
        this['t1-skill-cjump'] = false;
        this['t1-skill-climb'] = false;
        this['t1-skill-glide'] = false;
        this['t1-skill-dash'] = false;
        this['t1-skill-djump'] = false;
        this['t1-skill-stomp'] = false;
        this['t1-skill-walljump'] = false;
        this['t1-skill-grenade'] = false;
        this['t1-skill-sein'] = false;
        this['t1-tree-bash'] = false;
        this['t1-tree-cflame'] = false;
        this['t1-tree-cjump'] = false;
        this['t1-tree-climb'] = false;
        this['t1-tree-glide'] = false;
        this['t1-tree-dash'] = false;
        this['t1-tree-djump'] = false;
        this['t1-tree-stomp'] = false;
        this['t1-tree-walljump'] = false;
        this['t1-tree-grenade'] = false;
        this['t1-tree-sein'] = false;
        this['t2-event-watervein'] = false;
        this['t2-event-gumonseal'] = false;
        this['t2-event-sunstone'] = false;
        this['t2-event-cleanwater'] = false;
        this['t2-event-windrestored'] = false;
        this['t2-skill-bash'] = false;
        this['t2-skill-cflame'] = false;
        this['t2-skill-cjump'] = false;
        this['t2-skill-climb'] = false;
        this['t2-skill-glide'] = false;
        this['t2-skill-dash'] = false;
        this['t2-skill-djump'] = false;
        this['t2-skill-stomp'] = false;
        this['t2-skill-walljump'] = false;
        this['t2-skill-grenade'] = false;
        this['t2-skill-sein'] = false;
        this['t2-tree-bash'] = false;
        this['t2-tree-cflame'] = false;
        this['t2-tree-cjump'] = false;
        this['t2-tree-climb'] = false;
        this['t2-tree-glide'] = false;
        this['t2-tree-dash'] = false;
        this['t2-tree-djump'] = false;
        this['t2-tree-stomp'] = false;
        this['t2-tree-walljump'] = false;
        this['t2-tree-grenade'] = false;
        this['t2-tree-sein'] = false;
    }
    return Tracker;
}());

var Mapstones = (function () {
    function Mapstones() {
        this.t1 = "0";
        this.t2 = "0";
    }
    return Mapstones;
}());
//# sourceMappingURL=tracker.js.map

/***/ }),

/***/ "../../../../../src/app/stream/stream.cmp.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreamCMP; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_information__ = __webpack_require__("../../../../../src/app/services/information.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StreamCMP = (function () {
    function StreamCMP() {
        this.ticks = "0:00:00";
        this.nameTimer = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].timer(0, 1000);
        this.timer = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].timer(0, 1000);
        this.vm = new __WEBPACK_IMPORTED_MODULE_2__services_information__["a" /* Information */]();
        this.socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default.a.connect('https://ori-restreamer.azurewebsites.net/');
    }
    StreamCMP.prototype.ngOnInit = function () {
        this.socket.on('data', function (data) {
            this.vm = data;
        }.bind(this));
        this.socket.on('timer', function (start) {
            var _this = this;
            if (!start) {
                this.$timer.unsubscribe();
                this.ticks = "0:00:00";
            }
            else {
                this.$timer = this.timer.subscribe(function (ticks) {
                    _this.ticks = __WEBPACK_IMPORTED_MODULE_3_moment__().startOf('day').seconds(ticks).format('H:mm:ss');
                });
            }
        }.bind(this));
    };
    return StreamCMP;
}());
StreamCMP = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/stream/stream.html"),
        styles: [__webpack_require__("../../../../../src/app/stream/stream.css")]
    }),
    __metadata("design:paramtypes", [])
], StreamCMP);

//# sourceMappingURL=stream.cmp.js.map

/***/ }),

/***/ "../../../../../src/app/stream/stream.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face{\r\n    font-family: \"Angie\";\r\n    src: url(" + __webpack_require__("../../../../../src/assets/AngieRegular.otf") + ") format(\"opentype\")\r\n}\r\n\r\n.containter {\r\n    font-family: \"Angie\";\r\n    font-size: 24px;\r\n    color: white;\r\n    background-color: blue;\r\n    width: 1280px;\r\n}\r\n\r\n.center{\r\n    text-align: center;\r\n}\r\n\r\n.main-content {\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.row {\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n\r\n.p2 {\r\n    display: block;\r\n}\r\n\r\n.p2 > div {\r\n    display: inline-block; text-align: right; width: 100%\r\n}\r\n\r\n.stream1 {\r\n    float: left;\r\n    height: 356px;\r\n    width: 631px;\r\n    background: #FF00FF;\r\n    margin: 5px;\r\n}\r\n\r\n.stream2 {\r\n    position: absolute;\r\n    top: 0;\r\n    right:0;\r\n    height: 356px;\r\n    width: 631px;\r\n    background: #FF00FF;\r\n    margin: 5px;\r\n}\r\n\r\n.audio {\r\n    margin-top:15px;\r\n}\r\n\r\n.timer {\r\n    margin-top:10px;\r\n    font-size: 36px;\r\n}\r\n\r\n.tracker {\r\n    position: relative;\r\n}\r\n\r\n.tracker-item-p1 > img {\r\n    position: absolute;\r\n    margin-top:10px;\r\n    left:0;\r\n    max-height: 280px;\r\n}\r\n.tracker-item-p2 > img {\r\n    position: absolute;\r\n    margin-top:10px;\r\n    right:0;\r\n    max-height: 280px;\r\n}\r\n.info {\r\n    margin-top: 205px;\r\n    color: white;\r\n    text-shadow:\r\n     -1px -1px 0 #000,  \r\n      1px -1px 0 #000,\r\n      -1px 1px 0 #000,\r\n       1px 1px 0 #000;\r\n}\r\n\r\n.mapstone-p1 {\r\n    position: absolute;\r\n    margin-top:20px;\r\n    top:175px;\r\n    left:130px;\r\n    font-size: 18px;\r\n}\r\n\r\n.mapstone-p2 {\r\n    position: absolute;\r\n    margin-top:20px;\r\n    top:175px;\r\n    left:265px;\r\n    font-size: 18px;\r\n}\r\n\r\n.name-cycle {\r\n    position: relative;\r\n    margin-top:15px;\r\n}\r\n\r\n.name-twitch, .name-signup {\r\n    position: absolute;\r\n}\r\n\r\n.name-signup {\r\n\t-webkit-animation-name: fade;\r\n\t        animation-name: fade;\r\n\t-webkit-animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\r\n\t        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\r\n\t-webkit-animation-iteration-count: infinite;\r\n\t        animation-iteration-count: infinite;\r\n\t-webkit-animation-duration: 30s;\r\n\t        animation-duration: 30s;\r\n    -webkit-animation-direction: alternate;\r\n            animation-direction: alternate;\r\n}\r\n\r\n.name-twitch {\r\n    -webkit-animation-name: start-fade;\r\n            animation-name: start-fade;\r\n\t-webkit-animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\r\n\t        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\r\n\t-webkit-animation-iteration-count: infinite;\r\n\t        animation-iteration-count: infinite;\r\n    -webkit-animation-duration: 30s;\r\n            animation-duration: 30s;\r\n    -webkit-animation-direction: alternate;\r\n            animation-direction: alternate;\r\n}\r\n\r\n.name-twitch > img {\r\n    margin-right: 10px;\r\n    width: 22px;\r\n    height: 24px;\r\n}\r\n\r\n@-webkit-keyframes start-fade {\r\n\t0% { opacity: 0; }\r\n\t25% { opacity: 0; }\r\n    45% { opacity: 0 }\r\n    50% { opacity: 1}\r\n\t100% { opacity: 1; }\r\n}\r\n\r\n@keyframes start-fade {\r\n\t0% { opacity: 0; }\r\n\t25% { opacity: 0; }\r\n    45% { opacity: 0 }\r\n    50% { opacity: 1}\r\n\t100% { opacity: 1; }\r\n}\r\n\r\n@-webkit-keyframes fade {\r\n\t0% { opacity: 1; }\r\n\t25% { opacity: 1; }\r\n    45% { opacity: 1; }\r\n    50% { opacity: 0; }\r\n\t100% { opacity: 0; }\r\n}\r\n\r\n@keyframes fade {\r\n\t0% { opacity: 1; }\r\n\t25% { opacity: 1; }\r\n    45% { opacity: 1; }\r\n    50% { opacity: 0; }\r\n\t100% { opacity: 0; }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stream/stream.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"containter\" [ngStyle]=\"{'background': 'url(../../assets/background-' + vm.background + '.png) no-repeat'}\">\r\n    <div class=\"stream1\"></div>\r\n    <div class=\"stream2\"></div>\r\n      <div class=\"row col-12\">\r\n         <div class=\"col-1 center audio\">\r\n             <!-- <img *ngIf=\"vm.currentAudioOnPlayer == 1\" src=\"../../assets/audio.png\"> -->\r\n         </div>\r\n            <div class=\"col-3 name-cycle\">\r\n                <div class=\"name-twitch\">\r\n                    <img src=\"../../assets/twitch-icon.png\" />\r\n                    {{ vm.player1_twitch }}\r\n                </div>\r\n                <div class=\"name-signup\">\r\n                    {{ vm.player1 }}\r\n                </div>\r\n             </div>\r\n             <div class=\"col-4 center timer\">\r\n                {{ ticks }}\r\n             </div>\r\n             <div class=\"col-3 name-cycle p2\">\r\n                <div class=\"name-twitch\">\r\n                    <img src=\"../../assets/twitch-icon.png\" />\r\n                    {{ vm.player2_twitch }}\r\n                </div>\r\n                <div class=\"name-signup\">\r\n                    {{ vm.player2 }}\r\n                </div>\r\n             </div>\r\n\r\n         <div class=\"col-1 center audio\">\r\n             <!-- <img *ngIf=\"vm.currentAudioOnPlayer == 2\" src=\"../../assets/audio.png\"> -->\r\n         </div>\r\n    </div>\r\n    <div class=\"row col-12 center tracker\">\r\n        <div class=\"col-4 tracker-item-p1\">\r\n            <div class=\"mapstone-p1\">{{ vm.tracker.mapstones.t1 }}/9</div>\r\n            <img src=\"../../assets/tracker/tracker-bg.png\">\r\n\r\n            <img src=\"../../assets/tracker/GWaterVein.png\">\r\n            <img src=\"../../assets/tracker/GGumonSeal.png\">\r\n            <img src=\"../../assets/tracker/GSunstone.png\">\r\n            <img src=\"../../assets/tracker/GCleanWater.png\">\r\n            <img src=\"../../assets/tracker/GWindRestoredRando.png\">\r\n\r\n            <img *ngIf=\"vm.tracker.t1-event-watervein\" src=\"../../assets/tracker/WaterVein.png\">\r\n            <img *ngIf=\"vm.tracker.t1-event-gumonseal\" src=\"../../assets/tracker/GumonSeal.png\">\r\n            <img *ngIf=\"vm.tracker.t1-event-sunstone\" src=\"../../assets/tracker/Sunstone.png\">\r\n\r\n            <img *ngIf=\"vm.tracker.t1-skill-sein\" src=\"../../assets/tracker/SpiritFlame.png\">\r\n            <img *ngIf=\"vm.tracker.t1-skill-walljump\"src=\"../../assets/tracker/WallJump.png\">\r\n            <img *ngIf=\"vm.tracker.t1-skill-cflame\" src=\"../../assets/tracker/ChargeFlame.png\">\r\n            <img *ngIf=\"vm.tracker.t1-skill-djump\" src=\"../../assets/tracker/DoubleJump.png\">\r\n            <img *ngIf=\"vm.tracker.t1-skill-bash\" src=\"../../assets/tracker/Bash.png\">\r\n            <img *ngIf=\"vm.tracker.t1-skill-stomp\" src=\"../../assets/tracker/Stomp.png\">\r\n            <img *ngIf=\"vm.tracker.t1-skill-glide\" src=\"../../assets/tracker/Glide.png\">\r\n            <img *ngIf=\"vm.tracker.t1-skill-climb\" src=\"../../assets/tracker/Climb.png\">\r\n            <img *ngIf=\"vm.tracker.t1-skill-cjump\" src=\"../../assets/tracker/ChargeJump.png\">\r\n            <img *ngIf=\"vm.tracker.t1-skill-grenade\" src=\"../../assets/tracker/LightGrenade.png\">\r\n            <img *ngIf=\"vm.tracker.t1-skill-dash\" src=\"../../assets/tracker/Dash.png\">\r\n\r\n            <img *ngIf=\"vm.tracker.t1-tree-sein\" src=\"../../assets/tracker/TSpiritFlame.png\">\r\n            <img *ngIf=\"vm.tracker.t1-tree-walljump\" src=\"../../assets/tracker/TWallJump.png\">\r\n            <img *ngIf=\"vm.tracker.t1-tree-cflame\" src=\"../../assets/tracker/TChargeFlame.png\">\r\n            <img *ngIf=\"vm.tracker.t1-tree-djump\" src=\"../../assets/tracker/TDoubleJump.png\">\r\n            <img *ngIf=\"vm.tracker.t1-tree-bash\" src=\"../../assets/tracker/TBash.png\">\r\n            <img *ngIf=\"vm.tracker.t1-tree-stomp\" src=\"../../assets/tracker/TStomp.png\">\r\n            <img *ngIf=\"vm.tracker.t1-tree-glide\" src=\"../../assets/tracker/TGlide.png\">\r\n            <img *ngIf=\"vm.tracker.t1-tree-climb\" src=\"../../assets/tracker/TClimb.png\">\r\n            <img *ngIf=\"vm.tracker.t1-tree-cjump\" src=\"../../assets/tracker/TChargeJump.png\">\r\n            <img *ngIf=\"vm.tracker.t1-tree-grenade\" src=\"../../assets/tracker/TLightGrenade.png\">\r\n            <img *ngIf=\"vm.tracker.t1-tree-dash\" src=\"../../assets/tracker/TDash.png\">\r\n        </div>\r\n        <div class=\"col-4\">\r\n            <div class=\"info\">\r\n                <div>{{ vm.matchType }}</div>\r\n                <div><img src=\"../../assets/commentary.png\" /> {{ vm.commentators }}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-4 tracker-item-p2\">\r\n                <div class=\"mapstone-p2\">{{ vm.tracker.mapstones.t2 }}/9</div>\r\n                <img src=\"../../assets/tracker/tracker-bg.png\">\r\n\r\n                <img src=\"../../assets/tracker/GWaterVein.png\">\r\n                <img src=\"../../assets/tracker/GGumonSeal.png\">\r\n                <img src=\"../../assets/tracker/GSunstone.png\">\r\n                <img src=\"../../assets/tracker/GCleanWater.png\">\r\n                <img src=\"../../assets/tracker/GWindRestoredRando.png\">\r\n    \r\n                <img *ngIf=\"vm.tracker.t2-event-watervein\" src=\"../../assets/tracker/WaterVein.png\">\r\n                <img *ngIf=\"vm.tracker.t2-event-gumonseal\" src=\"../../assets/tracker/GumonSeal.png\">\r\n                <img *ngIf=\"vm.tracker.t2-event-sunstone\" src=\"../../assets/tracker/Sunstone.png\">\r\n    \r\n                <img *ngIf=\"vm.tracker.t2-skill-sein\" src=\"../../assets/tracker/SpiritFlame.png\">\r\n                <img *ngIf=\"vm.tracker.t2-skill-walljump\"src=\"../../assets/tracker/WallJump.png\">\r\n                <img *ngIf=\"vm.tracker.t2-skill-cflame\" src=\"../../assets/tracker/ChargeFlame.png\">\r\n                <img *ngIf=\"vm.tracker.t2-skill-djump\" src=\"../../assets/tracker/DoubleJump.png\">\r\n                <img *ngIf=\"vm.tracker.t2-skill-bash\" src=\"../../assets/tracker/Bash.png\">\r\n                <img *ngIf=\"vm.tracker.t2-skill-stomp\" src=\"../../assets/tracker/Stomp.png\">\r\n                <img *ngIf=\"vm.tracker.t2-skill-glide\" src=\"../../assets/tracker/Glide.png\">\r\n                <img *ngIf=\"vm.tracker.t2-skill-climb\" src=\"../../assets/tracker/Climb.png\">\r\n                <img *ngIf=\"vm.tracker.t2-skill-cjump\" src=\"../../assets/tracker/ChargeJump.png\">\r\n                <img *ngIf=\"vm.tracker.t2-skill-grenade\" src=\"../../assets/tracker/LightGrenade.png\">\r\n                <img *ngIf=\"vm.tracker.t2-skill-dash\" src=\"../../assets/tracker/Dash.png\">\r\n    \r\n                <img *ngIf=\"vm.tracker.t2-tree-sein\" src=\"../../assets/tracker/TSpiritFlame.png\">\r\n                <img *ngIf=\"vm.tracker.t2-tree-walljump\" src=\"../../assets/tracker/TWallJump.png\">\r\n                <img *ngIf=\"vm.tracker.t2-tree-cflame\" src=\"../../assets/tracker/TChargeFlame.png\">\r\n                <img *ngIf=\"vm.tracker.t2-tree-djump\" src=\"../../assets/tracker/TDoubleJump.png\">\r\n                <img *ngIf=\"vm.tracker.t2-tree-bash\" src=\"../../assets/tracker/TBash.png\">\r\n                <img *ngIf=\"vm.tracker.t2-tree-stomp\" src=\"../../assets/tracker/TStomp.png\">\r\n                <img *ngIf=\"vm.tracker.t2-tree-glide\" src=\"../../assets/tracker/TGlide.png\">\r\n                <img *ngIf=\"vm.tracker.t2-tree-climb\" src=\"../../assets/tracker/TClimb.png\">\r\n                <img *ngIf=\"vm.tracker.t2-tree-cjump\" src=\"../../assets/tracker/TChargeJump.png\">\r\n                <img *ngIf=\"vm.tracker.t2-tree-grenade\" src=\"../../assets/tracker/TLightGrenade.png\">\r\n                <img *ngIf=\"vm.tracker.t2-tree-dash\" src=\"../../assets/tracker/TDash.png\">\r\n            </div>\r\n    </div>\r\n    <img src=\"../../assets/background-gumo.png\" style=\"visibility:hidden\">\r\n </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/assets/AngieRegular.otf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "AngieRegular.a13e5a3c2247e00cc2d1.otf";

/***/ }),

/***/ "../../../../../src/assets/btn1.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "btn1.01fefe48bedf999267eb.png";

/***/ }),

/***/ "../../../../../src/assets/btn2.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "btn2.dd246d690540141df2b9.png";

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map