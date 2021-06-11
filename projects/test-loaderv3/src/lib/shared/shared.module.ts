import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { MyLoaderv3Component } from './my-loaderv3/my-loaderv3.component';
import { LoadingPlaceholderComponent } from './loading-placeholder/loading-placeholder.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
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
})
export class SharedModule { }
