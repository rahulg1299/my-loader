import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class LoadingPlaceholderComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1wbGFjZWhvbGRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZXN0LWxvYWRlcnYzL3NyYy9saWIvc2hhcmVkL2xvYWRpbmctcGxhY2Vob2xkZXIvbG9hZGluZy1wbGFjZWhvbGRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZXN0LWxvYWRlcnYzL3NyYy9saWIvc2hhcmVkL2xvYWRpbmctcGxhY2Vob2xkZXIvbG9hZGluZy1wbGFjZWhvbGRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBUXpELE1BQU0sT0FBTywyQkFBMkI7SUFJdEMsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7O3dIQVBVLDJCQUEyQjs0R0FBM0IsMkJBQTJCLDZHQ1J4Qyw4R0FHQTsyRkRLYSwyQkFBMkI7a0JBTHZDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsV0FBVyxFQUFFLHNDQUFzQztvQkFDbkQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7aUJBQ25EOzBFQUVVLE1BQU07c0JBQWQsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1sb2FkaW5nLXBsYWNlaG9sZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy1wbGFjZWhvbGRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZGluZy1wbGFjZWhvbGRlci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExvYWRpbmdQbGFjZWhvbGRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaGVpZ2h0ITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHdpZHRoITogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJwbGFjZWhvbGRlci1hbmltYXRpb25cIlxyXG4gICAgIFtuZ1N0eWxlXT1cInsnaGVpZ2h0JzogaGVpZ2h0LCAnd2lkdGgnOiB3aWR0aH1cIj5cclxuPC9kaXY+XHJcbiJdfQ==