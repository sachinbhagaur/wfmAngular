import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterAndDeveloperComponent } from './tester-and-developer.component';

describe('TesterAndDeveloperComponent', () => {
  let component: TesterAndDeveloperComponent;
  let fixture: ComponentFixture<TesterAndDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesterAndDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterAndDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
