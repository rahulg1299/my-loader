import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLoaderv3Component } from './test-loaderv3.component';

describe('TestLoaderv3Component', () => {
  let component: TestLoaderv3Component;
  let fixture: ComponentFixture<TestLoaderv3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestLoaderv3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLoaderv3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
