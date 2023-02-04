import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExampleLibComponent } from './my-example-lib.component';

describe('MyExampleLibComponent', () => {
  let component: MyExampleLibComponent;
  let fixture: ComponentFixture<MyExampleLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyExampleLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyExampleLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
