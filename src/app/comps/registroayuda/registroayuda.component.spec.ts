import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroayudaComponent } from './registroayuda.component';

describe('RegistroayudaComponent', () => {
  let component: RegistroayudaComponent;
  let fixture: ComponentFixture<RegistroayudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroayudaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroayudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
