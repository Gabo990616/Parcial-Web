import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistropersonasComponent } from './registropersonas.component';

describe('RegistropersonasComponent', () => {
  let component: RegistropersonasComponent;
  let fixture: ComponentFixture<RegistropersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistropersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistropersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
