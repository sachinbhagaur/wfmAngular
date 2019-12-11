import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllResourceComponent } from './view-all-resource.component';

describe('ViewAllResourceComponent', () => {
  let component: ViewAllResourceComponent;
  let fixture: ComponentFixture<ViewAllResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
