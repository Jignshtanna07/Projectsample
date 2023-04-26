import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrestroComponent } from './listrestro.component';

describe('ListrestroComponent', () => {
  let component: ListrestroComponent;
  let fixture: ComponentFixture<ListrestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListrestroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListrestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
