import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLoaderv3Component } from './my-loaderv3.component';

describe('MyLoaderv3Component', () => {
  let component: MyLoaderv3Component;
  let fixture: ComponentFixture<MyLoaderv3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLoaderv3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLoaderv3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
