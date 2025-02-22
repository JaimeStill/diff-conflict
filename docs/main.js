(self["webpackChunkupdate"] = self["webpackChunkupdate"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 4422:
/*!************************************!*\
  !*** ./dist/core/fesm2015/core.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppService": () => (/* binding */ AppService),
/* harmony export */   "BackdropDirective": () => (/* binding */ BackdropDirective),
/* harmony export */   "BytesPipe": () => (/* binding */ BytesPipe),
/* harmony export */   "Components": () => (/* binding */ Components),
/* harmony export */   "ConfirmDialog": () => (/* binding */ ConfirmDialog),
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule),
/* harmony export */   "CoreService": () => (/* binding */ CoreService),
/* harmony export */   "Dialogs": () => (/* binding */ Dialogs),
/* harmony export */   "DiffCardComponent": () => (/* binding */ DiffCardComponent),
/* harmony export */   "Directives": () => (/* binding */ Directives),
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule),
/* harmony export */   "Pipes": () => (/* binding */ Pipes),
/* harmony export */   "PropNodeComponent": () => (/* binding */ PropNodeComponent),
/* harmony export */   "SnackerService": () => (/* binding */ SnackerService),
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService),
/* harmony export */   "TruncatePipe": () => (/* binding */ TruncatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9606);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2027);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1775);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9005);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2249);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ 5129);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ 9460);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ 8662);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout */ 7896);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 395);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ 5924);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/badge */ 330);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 6322);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button-toggle */ 3894);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/checkbox */ 4058);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/chips */ 9243);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/datepicker */ 2937);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/expansion */ 2323);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/grid-list */ 5937);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/list */ 8417);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/menu */ 221);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/paginator */ 8021);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/radio */ 5644);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/slider */ 3616);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/slide-toggle */ 2080);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/sort */ 5381);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/stepper */ 8210);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/tree */ 5473);




















































function PropNodeComponent_section_0_prop_node_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "prop-node", 3);
  }

  if (rf & 2) {
    const prop_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", prop_r3)("preClass", ctx_r2.preClass)("proClass", ctx_r2.proClass);
  }
}

function PropNodeComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PropNodeComponent_section_0_prop_node_3_Template, 1, 3, "prop-node", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.node == null ? null : ctx_r0.node.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.node == null ? null : ctx_r0.node.values);
  }
}

function PropNodeComponent_section_1_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.proClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.node == null ? null : ctx_r4.node.proposed);
  }
}

function PropNodeComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PropNodeComponent_section_1_p_6_Template, 2, 2, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.node == null ? null : ctx_r1.node.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx_r1.node == null ? null : ctx_r1.node.same) ? "background-card" : ctx_r1.preClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.node == null ? null : ctx_r1.node.previous);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r1.node == null ? null : ctx_r1.node.same));
  }
}

function DiffCardComponent_prop_node_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "prop-node", 5);
  }

  if (rf & 2) {
    const node_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", node_r1)("preClass", ctx_r0.preClass)("proClass", ctx_r0.proClass);
  }
}

class AppService {
  constructor() {
    this.db = new Database();
    this.diffs = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.diffs$ = this.diffs.asObservable();

    this.reviver = (key, value) => {
      if (!this.renderProp(key)) return;

      switch (typeof value) {
        case 'number':
        case 'boolean':
        case 'string':
        case 'object':
          return value;

        default:
          return;
      }
    };

    this.renderProp = key => key.length > 2 && key.endsWith('Id') ? false : true;

    this.getValueFromKey = (key, entries) => {
      const entry = entries.find(prop => prop[0] === key);
      return entry ? entry[1] : null;
    };

    this.compare = (a, b) => {
      if (this.isObject(a) && this.isObject(b)) return JSON.stringify(a) === JSON.stringify(b);else return a === b;
    };

    this.parseValue = value => JSON.parse(value, this.reviver);

    this.getProps = value => {
      if (typeof value === 'string') value = this.parseValue(value);
      return Object.entries(value);
    };

    this.buildGraph = (previous, proposed) => {
      const previousProps = this.getProps(previous);
      const proposedProps = this.getProps(proposed);
      const result = new Array();

      for (const prop of previousProps) {
        const preVal = prop[1];
        const proVal = this.getValueFromKey(prop[0], proposedProps);
        const same = this.compare(preVal, proVal);
        const isObject = this.isObject(preVal);

        if (isObject) {
          result.push({
            key: prop[0],
            isObject: isObject,
            values: this.buildGraph(preVal, proVal),
            same: same
          });
        } else {
          result.push({
            key: prop[0],
            previous: preVal,
            proposed: same ? null : proVal,
            same: same,
            isObject: isObject
          });
        }
      }

      return result;
    };

    this.isObject = prop => prop != null && typeof prop === 'object' ? true : false;

    this.getDiffs = () => this.diffs.next(this.db.getDiffs());

    this.getRawDiffs = () => this.db.getDiffs();
  }

}

AppService.ɵfac = function AppService_Factory(t) {
  return new (t || AppService)();
};

AppService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AppService,
  factory: AppService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

class Database {
  constructor() {
    this.db = {
      diffs: new Array({
        id: 1,
        previous: JSON.stringify({
          id: 1,
          categoryId: 1,
          value: 'Configure Build Server',
          isComplete: false,
          category: {
            id: 1,
            value: 'Work'
          }
        }, null, 2),
        proposed: JSON.stringify({
          id: 1,
          categoryId: 1,
          value: 'Shoot Build Server',
          isComplete: true,
          category: {
            id: 1,
            value: 'Work'
          }
        }, null, 2)
      }, {
        id: 2,
        previous: JSON.stringify({
          id: 2,
          categoryId: 2,
          value: 'Grocery Shopping',
          isComplete: false,
          category: {
            id: 2,
            value: 'Recreation'
          }
        }, null, 2),
        proposed: JSON.stringify({
          id: 2,
          categoryId: 3,
          value: 'Grocery Shopping',
          isComplete: false,
          category: {
            id: 3,
            value: 'Chore'
          }
        }, null, 2)
      })
    };

    this.getDiffs = () => this.db.diffs;
  }

}

class CoreService {
  constructor() {
    this.ssnPattern = /^(?!(000|666|9))\d{3}-(?!(00))\d{2}-(?!(0000))\d{4}$/g;

    this.getUploadOptions = () => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
      headers.set('Accept', 'application/json');
      headers.delete('Content-Type');
      return headers;
    };

    this.getTextOptions = () => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
      headers.set('Content-Type', 'text/plain');
      headers.delete('Pragma');
      return headers;
    };

    this.urlEncode = value => {
      const regex = /[^a-zA-Z0-9-.]/gi;
      let newValue = value.replace(/\s/g, '-').toLowerCase();
      newValue = newValue.replace(regex, '');
      return newValue;
    };

    this.generateInputObservable = input => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(input.nativeElement, 'keyup').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(event => event.target.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)());
  }

}

CoreService.ɵfac = function CoreService_Factory(t) {
  return new (t || CoreService)();
};

CoreService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: CoreService,
  factory: CoreService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

class SnackerService {
  constructor(snackbar) {
    this.snackbar = snackbar;
    this.config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBarConfig();

    this.sendMessage = message => this.snackbar.open(message, 'Close', this.config);

    this.setClasses = classes => {
      classes.push('snacker');
      this.config.panelClass = classes;
    };

    this.sendColorMessage = (message, colors) => {
      this.setClasses(colors);
      this.sendMessage(message);
    };

    this.sendErrorMessage = message => {
      this.setClasses(['snacker-red']);
      this.sendMessage(message);
    };

    this.sendWarningMessage = message => {
      this.setClasses(['snacker-orange']);
      this.sendMessage(message);
    };

    this.sendSuccessMessage = message => {
      this.setClasses(['snacker-green']);
      this.sendMessage(message);
    };

    this.config.duration = 5000;
    this.config.panelClass = [];
  }

  setDuration(duration) {
    this.config.duration = duration;
  }

}

SnackerService.ɵfac = function SnackerService_Factory(t) {
  return new (t || SnackerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar));
};

SnackerService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: SnackerService,
  factory: SnackerService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackerService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar
    }];
  }, null);
})();

class ThemeService {
  constructor(overlay) {
    this.overlay = overlay;
    this.isLight = true;

    this.setOverlayContainerTheme = () => {
      if (this.isLight) {
        this.overlay.getContainerElement().classList.remove('app-dark');
        this.overlay.getContainerElement().classList.add('app-light');
      } else {
        this.overlay.getContainerElement().classList.remove('app-light');
        this.overlay.getContainerElement().classList.add('app-dark');
      }
    };

    this.toggleTheme = () => {
      this.isLight = !this.isLight;
      this.setOverlayContainerTheme();
    };

    this.setOverlayContainerTheme();
  }

}

ThemeService.ɵfac = function ThemeService_Factory(t) {
  return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.OverlayContainer));
};

ThemeService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ThemeService,
  factory: ThemeService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.OverlayContainer
    }];
  }, null);
})();

class PropNodeComponent {
  constructor(app) {
    this.app = app;
    this.preClass = 'background-pastel-red';
    this.proClass = 'background-pastel-green';
  }

}

PropNodeComponent.ɵfac = function PropNodeComponent_Factory(t) {
  return new (t || PropNodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](AppService));
};

PropNodeComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PropNodeComponent,
  selectors: [["prop-node"]],
  inputs: {
    node: "node",
    preClass: "preClass",
    proClass: "proClass"
  },
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], [1, "mat-subheading-2", "m4"], [3, "node", "preClass", "proClass", 4, "ngFor", "ngForOf"], [3, "node", "preClass", "proClass"], [1, "mat-body-strong", "m4"], ["fxLayout", "row | wrap", "fxLayoutAlign", "start center"], ["fxFlex", "", 1, "p4", 3, "ngClass"], ["class", "p4", "fxFlex", "", 3, "ngClass", 4, "ngIf"]],
  template: function PropNodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PropNodeComponent_section_0_Template, 4, 2, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PropNodeComponent_section_1_Template, 7, 4, "section", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.node == null ? null : ctx.node.isObject);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.node == null ? null : ctx.node.isObject));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, PropNodeComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__.DefaultClassDirective],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropNodeComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'prop-node',
      templateUrl: 'prop-node.component.html'
    }]
  }], function () {
    return [{
      type: AppService
    }];
  }, {
    node: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    preClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    proClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class DiffCardComponent {
  constructor(app) {
    this.app = app;
    this.label = 'Diff';
    this.size = 500;
    this.preClass = 'background-pastel-red';
    this.proClass = 'background-pastel-green';
    this.actionIcon = 'code';
    this.actionClass = 'color-primary';
    this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

}

DiffCardComponent.ɵfac = function DiffCardComponent_Factory(t) {
  return new (t || DiffCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](AppService));
};

DiffCardComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DiffCardComponent,
  selectors: [["diff-card"]],
  inputs: {
    diff: "diff",
    label: "label",
    size: "size",
    preClass: "preClass",
    proClass: "proClass",
    actionIcon: "actionIcon",
    actionClass: "actionClass"
  },
  outputs: {
    action: "action"
  },
  decls: 8,
  vars: 7,
  consts: [["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "rounded", "elevated", "background-card", "card-outline-accent", "m4"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["fxFlex", "", 1, "mat-title", "bold", "m4"], ["mat-icon-button", "", 3, "click"], [3, "node", "preClass", "proClass", 4, "ngFor", "ngForOf"], [3, "node", "preClass", "proClass"]],
  template: function DiffCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DiffCardComponent_Template_button_click_4_listener() {
        return ctx.action.emit(ctx.diff);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DiffCardComponent_prop_node_7_Template, 1, 3, "prop-node", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 500, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.actionClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.actionIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.app.buildGraph(ctx.diff == null ? null : ctx.diff.previous, ctx.diff == null ? null : ctx.diff.proposed));
    }
  },
  directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, PropNodeComponent],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiffCardComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'diff-card',
      templateUrl: 'diff-card.component.html'
    }]
  }], function () {
    return [{
      type: AppService
    }];
  }, {
    diff: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    preClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    proClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    actionIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    actionClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    action: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

const Components = [DiffCardComponent, PropNodeComponent];

class ConfirmDialog {
  constructor(data) {
    this.data = data;
  }

  ngOnInit() {
    if (this.data) {
      this.data.title = this.data.title ? this.data.title : 'Confirm Action?';
      this.data.content = this.data.content ? this.data.content : 'Are you sure you would like to perform this action?';
    } else {
      this.data = {
        title: 'Confirm Action?',
        content: 'Are you sure you would like to perform this action?'
      };
    }
  }

}

ConfirmDialog.ɵfac = function ConfirmDialog_Factory(t) {
  return new (t || ConfirmDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MAT_DIALOG_DATA));
};

ConfirmDialog.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ConfirmDialog,
  selectors: [["confirm-dialog"]],
  decls: 11,
  vars: 4,
  consts: [[1, "mat-typography"], ["mat-dialog-title", ""], ["mat-button", "", 3, "mat-dialog-close"], ["mat-button", "", "color", "warn", 3, "mat-dialog-close"]],
  template: function ConfirmDialog_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Confirm");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.content);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    }
  },
  directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogClose],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDialog, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'confirm-dialog',
      templateUrl: 'confirm.dialog.html'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MAT_DIALOG_DATA]
      }]
    }];
  }, null);
})();

const Dialogs = [ConfirmDialog];

class BackdropDirective {
  constructor(el) {
    this.el = el;
    this.filters = 'blur(30px) brightness(1.8)';
    this.hover = 'blur(30px) brightness(1.8)';
  }

  ngOnInit() {
    this.el.nativeElement.style.backdropFilter = this.filters;
    this.el.nativeElement.classList.add('backdropped');
  }

  onMouseEnter() {
    this.el.nativeElement.style.backdropFilter = this.hover;
  }

  onMouseLeave() {
    this.el.nativeElement.style.backdropFilter = this.filters;
  }

}

BackdropDirective.ɵfac = function BackdropDirective_Factory(t) {
  return new (t || BackdropDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

BackdropDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: BackdropDirective,
  selectors: [["", "backdrop", ""]],
  hostBindings: function BackdropDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function BackdropDirective_mouseenter_HostBindingHandler() {
        return ctx.onMouseEnter();
      })("mouseleave", function BackdropDirective_mouseleave_HostBindingHandler() {
        return ctx.onMouseLeave();
      });
    }
  },
  inputs: {
    filters: "filters",
    hover: "hover"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackdropDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[backdrop]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    filters: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onMouseEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mouseenter']
    }],
    onMouseLeave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mouseleave']
    }]
  });
})();

const Directives = [BackdropDirective];

class BytesPipe {
  transform(value, precision = 2) {
    if (!value || value === 0) return '0 Bytes';
    const k = 1024,
          dm = precision <= 0 ? 0 : precision || 2,
          sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
          i = Math.floor(Math.log(value) / Math.log(k));
    return parseFloat((value / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}

BytesPipe.ɵfac = function BytesPipe_Factory(t) {
  return new (t || BytesPipe)();
};

BytesPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "bytes",
  type: BytesPipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BytesPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'bytes'
    }]
  }], null, null);
})();

class TruncatePipe {
  transform(value, limit = 50, ellipses = '...') {
    if (!value) return '';
    return value.length <= limit ? value : `${value.substr(0, limit)}${ellipses}`;
  }

}

TruncatePipe.ɵfac = function TruncatePipe_Factory(t) {
  return new (t || TruncatePipe)();
};

TruncatePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "truncate",
  type: TruncatePipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncatePipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'truncate'
    }]
  }], null, null);
})();

const Pipes = [BytesPipe, TruncatePipe];

class MaterialModule {}

MaterialModule.ɵfac = function MaterialModule_Factory(t) {
  return new (t || MaterialModule)();
};

MaterialModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MaterialModule
});
MaterialModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__.DragDropModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__.FlexLayoutModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__.GridModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_20__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__.MatChipsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatCommonModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__.MatExpansionModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MatFormFieldModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_31__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatLineModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_32__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatNativeDateModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatOptionModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_36__.MatProgressSpinnerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatPseudoCheckboxModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_37__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_38__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_39__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_40__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_41__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_42__.MatSortModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__.MatStepperModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_44__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_45__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_46__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_48__.MatTreeModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__.DragDropModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__.FlexLayoutModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__.GridModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_20__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__.MatChipsModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatCommonModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__.MatExpansionModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MatFormFieldModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_31__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatLineModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_32__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatNativeDateModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatOptionModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_36__.MatProgressSpinnerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatPseudoCheckboxModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_37__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_38__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_39__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_40__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_41__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_42__.MatSortModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__.MatStepperModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_44__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_45__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_46__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_48__.MatTreeModule]
    }]
  }], null, null);
})();

class CoreModule {}

CoreModule.ɵfac = function CoreModule_Factory(t) {
  return new (t || CoreModule)();
};

CoreModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: CoreModule
});
CoreModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, MaterialModule], MaterialModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [...Components, ...Dialogs, ...Directives, ...Pipes],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, MaterialModule],
      exports: [...Components, ...Dialogs, ...Directives, ...Pipes, MaterialModule]
    }]
  }], null, null);
})();
/*
 * Public API Surface of core
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ 4422);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ 9460);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 2529);









function AppComponent_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "brightness_5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "brightness_3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(themer) {
        this.themer = themer;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](core__WEBPACK_IMPORTED_MODULE_1__.ThemeService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 4, consts: [[1, "mat-typography", "mat-app-background", "app-frame", 3, "ngClass"], ["color", "primary", 1, "app-toolbar", "sticky-top"], ["fxFlex", ""], ["mat-icon-button", "", 3, "ngClass", "click"], [4, "ngIf"], [1, "app-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Diff Changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() { return ctx.themer.toggleTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_mat_icon_5_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_mat_icon_6_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.themer.isLight ? "app-light" : "app-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.themer.isLight ? "color-amber" : "color-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.themer.isLight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.themer.isLight);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__.DefaultClassDirective, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbar, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon], encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core */ 4422);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ 3529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _routes_home_home_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/home/home.route */ 4765);










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            core__WEBPACK_IMPORTED_MODULE_7__.CoreModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(_routes__WEBPACK_IMPORTED_MODULE_1__.Routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _routes_home_home_route__WEBPACK_IMPORTED_MODULE_2__.HomeRoute], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        core__WEBPACK_IMPORTED_MODULE_7__.CoreModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 4765:
/*!*******************************************!*\
  !*** ./src/app/routes/home/home.route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoute": () => (/* binding */ HomeRoute)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ 4422);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);







function HomeRoute_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 4);
  }
}

function HomeRoute_ng_container_5_section_1_diff_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "diff-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("action", function HomeRoute_ng_container_5_section_1_diff_card_1_Template_diff_card_action_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return ctx_r8.buildGraph($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const diff_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diff", diff_r7);
  }
}

function HomeRoute_ng_container_5_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeRoute_ng_container_5_section_1_diff_card_1_Template, 1, 1, "diff-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const diffs_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", diffs_r3);
  }
}

function HomeRoute_ng_container_5_section_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Diffs Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function HomeRoute_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeRoute_ng_container_5_section_1_Template, 2, 1, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeRoute_ng_container_5_section_2_Template, 2, 0, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const diffs_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (diffs_r3 == null ? null : diffs_r3.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !((diffs_r3 == null ? null : diffs_r3.length) > 0));
  }
}

class HomeRoute {
  constructor(app) {
    this.app = app;

    this.logDiffs = () => console.log('Raw Diffs', this.app.getRawDiffs());

    this.buildGraph = event => {
      console.log('Diff Graph', this.app.buildGraph(event.previous, event.proposed));
    };
  }

  ngOnInit() {
    this.app.getDiffs();
  }

}

HomeRoute.ɵfac = function HomeRoute_Factory(t) {
  return new (t || HomeRoute)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](core__WEBPACK_IMPORTED_MODULE_1__.AppService));
};

HomeRoute.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HomeRoute,
  selectors: [["home-route"]],
  decls: 7,
  vars: 4,
  consts: [["fxLayout", "column", "fxLayoutAlign", "start start", 1, "p8"], ["mat-stroked-button", "", 3, "click"], ["loading", ""], [4, "ngIf", "ngIfElse"], ["mode", "indeterminate", "color", "accent"], ["fxLayout", "row | wrap", "fxLayoutAlign", "start start", "class", "p8", 4, "ngIf"], ["class", "mat-subheading-2 m4", 4, "ngIf"], ["fxLayout", "row | wrap", "fxLayoutAlign", "start start", 1, "p8"], [3, "diff", "action", 4, "ngFor", "ngForOf"], [3, "diff", "action"], [1, "mat-subheading-2", "m4"]],
  template: function HomeRoute_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeRoute_Template_button_click_1_listener() {
        return ctx.logDiffs();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Log Diffs ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeRoute_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeRoute_ng_container_5_Template, 3, 2, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.app.diffs$))("ngIfElse", _r0);
    }
  },
  directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBar, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, core__WEBPACK_IMPORTED_MODULE_1__.DiffCardComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 5947:
/*!**************************************!*\
  !*** ./src/app/routes/home/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoute": () => (/* reexport safe */ _home_route__WEBPACK_IMPORTED_MODULE_0__.HomeRoute)
/* harmony export */ });
/* harmony import */ var _home_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.route */ 4765);



/***/ }),

/***/ 3529:
/*!*********************************!*\
  !*** ./src/app/routes/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteComponents": () => (/* binding */ RouteComponents),
/* harmony export */   "Routes": () => (/* binding */ Routes)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ 5947);

const RouteComponents = [
    _home__WEBPACK_IMPORTED_MODULE_0__.HomeRoute
];
const Routes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_0__.HomeRoute },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map