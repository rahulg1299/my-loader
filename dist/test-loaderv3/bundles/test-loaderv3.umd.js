(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/card'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('test-loaderv3', ['exports', '@angular/core', '@angular/common', '@angular/material/card', '@angular/material/icon'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['test-loaderv3'] = {}, global.ng.core, global.ng.common, global.ng.material.card, global.ng.material.icon));
}(this, (function (exports, i0, i1, i1$1, i3) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);

    var TestLoaderv3Service = /** @class */ (function () {
        function TestLoaderv3Service() {
        }
        return TestLoaderv3Service;
    }());
    TestLoaderv3Service.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0__namespace, type: TestLoaderv3Service, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    TestLoaderv3Service.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0__namespace, type: TestLoaderv3Service, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0__namespace, type: TestLoaderv3Service, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var TestLoaderv3Component = /** @class */ (function () {
        function TestLoaderv3Component() {
        }
        TestLoaderv3Component.prototype.ngOnInit = function () {
        };
        return TestLoaderv3Component;
    }());
    TestLoaderv3Component.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0__namespace, type: TestLoaderv3Component, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    TestLoaderv3Component.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.4", type: TestLoaderv3Component, selector: "test-loaderv3", ngImport: i0__namespace, template: "\n    <p>\n      test-loaderv3 works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0__namespace, type: TestLoaderv3Component, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'test-loaderv3',
                        template: "\n    <p>\n      test-loaderv3 works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var SpinnerComponent = /** @class */ (function () {
        function SpinnerComponent() {
        }
        SpinnerComponent.prototype.ngOnInit = function () {
        };
        return SpinnerComponent;
    }());
    SpinnerComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0__namespace, type: SpinnerComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    SpinnerComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.4", type: SpinnerComponent, selector: "my-spinner-v3", ngImport: i0__namespace, template: "<div class=\"spinner\"></div>\n", styles: [".spinner{width:180px;height:180px;background-color:#4e12f5;border-radius:100%;-webkit-animation:sk-scaleout 1s ease-in-out infinite;animation:sk-scaleout 1s ease-in-out infinite;transform:translate(-50%,-50%);position:absolute;left:50%;top:48%}@-webkit-keyframes sk-scaleout{0%{-webkit-transform:scale(0)}to{-webkit-transform:scale(1);opacity:0}}@keyframes sk-scaleout{0%{transform:scale(0)}to{transform:scale(1);opacity:0}}"] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0__namespace, type: SpinnerComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'my-spinner-v3',
                        templateUrl: './spinner.component.html',
                        styleUrls: ['./spinner.component.css']
                    }]
            }], ctorParameters: function () { return []; } });

    var LoadingPlaceholderComponent = /** @class */ (function () {
        function LoadingPlaceholderComponent() {
        }
        LoadingPlaceholderComponent.prototype.ngOnInit = function () {
        };
        return LoadingPlaceholderComponent;
    }());
    LoadingPlaceholderComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0__namespace, type: LoadingPlaceholderComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    LoadingPlaceholderComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.4", type: LoadingPlaceholderComponent, selector: "app-loading-placeholder", inputs: { height: "height", width: "width" }, ngImport: i0__namespace, template: "<div class=\"placeholder-animation\"\r\n     [ngStyle]=\"{'height': height, 'width': width}\">\r\n</div>\r\n", styles: ["@-webkit-keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}@keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}.placeholder-animation{-webkit-animation-duration:1.25s;animation-duration:1.25s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:#a9a9a9;background:linear-gradient(90deg,#bbb 10%,#ddd 18%,#eee 33%);position:relative;background-size:1000px 100px}"], directives: [{ type: i1__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0__namespace, type: LoadingPlaceholderComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-loading-placeholder',
                        templateUrl: './loading-placeholder.component.html',
                        styleUrls: ['./loading-placeholder.component.css']
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { height: [{
                    type: i0.Input
                }], width: [{
                    type: i0.Input
                }] } });

    var MyLoaderv3Component = /** @class */ (function () {
        function MyLoaderv3Component() {
        }
        MyLoaderv3Component.prototype.ngOnInit = function () {
        };
        return MyLoaderv3Component;
    }());
    MyLoaderv3Component.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0__namespace, type: MyLoaderv3Component, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    MyLoaderv3Component.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.4", type: MyLoaderv3Component, selector: "my-loader-v3", ngImport: i0__namespace, template: "<mat-card id=\"loading-card\" class=\"hero-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"hero-header__image\"></div>\n      <mat-card-title>\n        <app-loading-placeholder [width]=\"'200px'\" [height]=\"'1rem'\"></app-loading-placeholder>\n      </mat-card-title>\n      <mat-card-subtitle>\n        <app-loading-placeholder [width]=\"'160px'\" [height]=\"'1rem'\"></app-loading-placeholder>\n      </mat-card-subtitle>\n      <div class=\"flex-spacer\"></div>\n      <div class=\"hero-actions\">\n        <mat-icon class=\"icon__like--grey\">home</mat-icon>\n      </div>\n    </mat-card-header>\n    <app-loading-placeholder [width]=\"'300px'\" [height]=\"'100px'\"></app-loading-placeholder>\n  </mat-card>\n    \n    ", styles: [".hero-header__image{background:#bbb}"], components: [{ type: i1__namespace$1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i1__namespace$1.MatCardHeader, selector: "mat-card-header" }, { type: LoadingPlaceholderComponent, selector: "app-loading-placeholder", inputs: ["height", "width"] }, { type: i3__namespace.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i1__namespace$1.MatCardAvatar, selector: "[mat-card-avatar], [matCardAvatar]" }, { type: i1__namespace$1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { type: i1__namespace$1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0__namespace, type: MyLoaderv3Component, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'my-loader-v3',
                        templateUrl: './my-loaderv3.component.html',
                        styleUrls: ['./my-loaderv3.component.css']
                    }]
            }], ctorParameters: function () { return []; } });

    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        return SharedModule;
    }());
    SharedModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0__namespace, type: SharedModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SharedModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0__namespace, type: SharedModule, declarations: [SpinnerComponent,
            MyLoaderv3Component,
            LoadingPlaceholderComponent], imports: [i1.CommonModule,
            i1$1.MatCardModule,
            i3.MatIconModule], exports: [SpinnerComponent,
            MyLoaderv3Component,
            LoadingPlaceholderComponent] });
    SharedModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0__namespace, type: SharedModule, imports: [[
                i1.CommonModule,
                i1$1.MatCardModule,
                i3.MatIconModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0__namespace, type: SharedModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            SpinnerComponent,
                            MyLoaderv3Component,
                            LoadingPlaceholderComponent
                        ],
                        imports: [
                            i1.CommonModule,
                            i1$1.MatCardModule,
                            i3.MatIconModule
                        ],
                        exports: [
                            SpinnerComponent,
                            MyLoaderv3Component,
                            LoadingPlaceholderComponent
                        ]
                    }]
            }] });

    var TestLoaderv3Module = /** @class */ (function () {
        function TestLoaderv3Module() {
        }
        return TestLoaderv3Module;
    }());
    TestLoaderv3Module.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0__namespace, type: TestLoaderv3Module, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    TestLoaderv3Module.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0__namespace, type: TestLoaderv3Module, declarations: [TestLoaderv3Component], imports: [SharedModule], exports: [TestLoaderv3Component,
            SharedModule] });
    TestLoaderv3Module.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0__namespace, type: TestLoaderv3Module, imports: [[
                SharedModule
            ], SharedModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0__namespace, type: TestLoaderv3Module, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            TestLoaderv3Component
                        ],
                        imports: [
                            SharedModule
                        ],
                        exports: [
                            TestLoaderv3Component,
                            SharedModule
                        ]
                    }]
            }] });

    /*
     * Public API Surface of test-loaderv3
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LoadingPlaceholderComponent = LoadingPlaceholderComponent;
    exports.MyLoaderv3Component = MyLoaderv3Component;
    exports.SharedModule = SharedModule;
    exports.SpinnerComponent = SpinnerComponent;
    exports.TestLoaderv3Component = TestLoaderv3Component;
    exports.TestLoaderv3Module = TestLoaderv3Module;
    exports.TestLoaderv3Service = TestLoaderv3Service;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=test-loaderv3.umd.js.map
