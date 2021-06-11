import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';

class TestLoaderv3Service {
    constructor() { }
}
TestLoaderv3Service.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0, type: TestLoaderv3Service, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
TestLoaderv3Service.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0, type: TestLoaderv3Service, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0, type: TestLoaderv3Service, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class TestLoaderv3Component {
    constructor() { }
    ngOnInit() {
    }
}
TestLoaderv3Component.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0, type: TestLoaderv3Component, deps: [], target: i0.ɵɵFactoryTarget.Component });
TestLoaderv3Component.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.4", type: TestLoaderv3Component, selector: "test-loaderv3", ngImport: i0, template: `
    <p>
      test-loaderv3 works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0, type: TestLoaderv3Component, decorators: [{
            type: Component,
            args: [{
                    selector: 'test-loaderv3',
                    template: `
    <p>
      test-loaderv3 works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0, type: SpinnerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SpinnerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.4", type: SpinnerComponent, selector: "my-spinner-v3", ngImport: i0, template: "<div class=\"spinner\"></div>\n", styles: [".spinner{width:180px;height:180px;background-color:#4e12f5;border-radius:100%;-webkit-animation:sk-scaleout 1s ease-in-out infinite;animation:sk-scaleout 1s ease-in-out infinite;transform:translate(-50%,-50%);position:absolute;left:50%;top:48%}@-webkit-keyframes sk-scaleout{0%{-webkit-transform:scale(0)}to{-webkit-transform:scale(1);opacity:0}}@keyframes sk-scaleout{0%{transform:scale(0)}to{transform:scale(1);opacity:0}}"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0, type: SpinnerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'my-spinner-v3',
                    templateUrl: './spinner.component.html',
                    styleUrls: ['./spinner.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class LoadingPlaceholderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingPlaceholderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0, type: LoadingPlaceholderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LoadingPlaceholderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.4", type: LoadingPlaceholderComponent, selector: "app-loading-placeholder", inputs: { height: "height", width: "width" }, ngImport: i0, template: "<div class=\"placeholder-animation\"\r\n     [ngStyle]=\"{'height': height, 'width': width}\">\r\n</div>\r\n", styles: ["@-webkit-keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}@keyframes placeHolderShimmer{0%{background-position:-468px 0}to{background-position:468px 0}}.placeholder-animation{-webkit-animation-duration:1.25s;animation-duration:1.25s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:#a9a9a9;background:linear-gradient(90deg,#bbb 10%,#ddd 18%,#eee 33%);position:relative;background-size:1000px 100px}"], directives: [{ type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0, type: LoadingPlaceholderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-loading-placeholder',
                    templateUrl: './loading-placeholder.component.html',
                    styleUrls: ['./loading-placeholder.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { height: [{
                type: Input
            }], width: [{
                type: Input
            }] } });

class MyLoaderv3Component {
    constructor() { }
    ngOnInit() {
    }
}
MyLoaderv3Component.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0, type: MyLoaderv3Component, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyLoaderv3Component.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.4", type: MyLoaderv3Component, selector: "my-loader-v3", ngImport: i0, template: "<mat-card id=\"loading-card\" class=\"hero-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"hero-header__image\"></div>\n      <mat-card-title>\n        <app-loading-placeholder [width]=\"'200px'\" [height]=\"'1rem'\"></app-loading-placeholder>\n      </mat-card-title>\n      <mat-card-subtitle>\n        <app-loading-placeholder [width]=\"'160px'\" [height]=\"'1rem'\"></app-loading-placeholder>\n      </mat-card-subtitle>\n      <div class=\"flex-spacer\"></div>\n      <div class=\"hero-actions\">\n        <mat-icon class=\"icon__like--grey\">home</mat-icon>\n      </div>\n    </mat-card-header>\n    <app-loading-placeholder [width]=\"'300px'\" [height]=\"'100px'\"></app-loading-placeholder>\n  </mat-card>\n    \n    ", styles: [".hero-header__image{background:#bbb}"], components: [{ type: i1$1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i1$1.MatCardHeader, selector: "mat-card-header" }, { type: LoadingPlaceholderComponent, selector: "app-loading-placeholder", inputs: ["height", "width"] }, { type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i1$1.MatCardAvatar, selector: "[mat-card-avatar], [matCardAvatar]" }, { type: i1$1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { type: i1$1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0, type: MyLoaderv3Component, decorators: [{
            type: Component,
            args: [{
                    selector: 'my-loader-v3',
                    templateUrl: './my-loaderv3.component.html',
                    styleUrls: ['./my-loaderv3.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class SharedModule {
}
SharedModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0, type: SharedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SharedModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0, type: SharedModule, declarations: [SpinnerComponent,
        MyLoaderv3Component,
        LoadingPlaceholderComponent], imports: [CommonModule,
        MatCardModule,
        MatIconModule], exports: [SpinnerComponent,
        MyLoaderv3Component,
        LoadingPlaceholderComponent] });
SharedModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0, type: SharedModule, imports: [[
            CommonModule,
            MatCardModule,
            MatIconModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0, type: SharedModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SpinnerComponent,
                        MyLoaderv3Component,
                        LoadingPlaceholderComponent
                    ],
                    imports: [
                        CommonModule,
                        MatCardModule,
                        MatIconModule
                    ],
                    exports: [
                        SpinnerComponent,
                        MyLoaderv3Component,
                        LoadingPlaceholderComponent
                    ]
                }]
        }] });

class TestLoaderv3Module {
}
TestLoaderv3Module.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0, type: TestLoaderv3Module, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TestLoaderv3Module.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0, type: TestLoaderv3Module, declarations: [TestLoaderv3Component], imports: [SharedModule], exports: [TestLoaderv3Component,
        SharedModule] });
TestLoaderv3Module.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0, type: TestLoaderv3Module, imports: [[
            SharedModule
        ], SharedModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.4", ngImport: i0, type: TestLoaderv3Module, decorators: [{
            type: NgModule,
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

export { LoadingPlaceholderComponent, MyLoaderv3Component, SharedModule, SpinnerComponent, TestLoaderv3Component, TestLoaderv3Module, TestLoaderv3Service };
//# sourceMappingURL=test-loaderv3.js.map
