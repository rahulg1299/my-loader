import { NgModule } from '@angular/core';
import { TestLoaderv3Component } from './test-loaderv3.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
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
})
export class TestLoaderv3Module { }
