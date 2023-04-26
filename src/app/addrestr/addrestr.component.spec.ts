import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrestrComponent } from './addrestr.component';

describe('AddrestrComponent', () => {
  let component: AddrestrComponent;
  let fixture: ComponentFixture<AddrestrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrestrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddrestrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
