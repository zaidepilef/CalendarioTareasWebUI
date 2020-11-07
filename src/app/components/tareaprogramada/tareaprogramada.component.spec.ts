import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaprogramadaComponent } from './tareaprogramada.component';

describe('TareaprogramadaComponent', () => {
  let component: TareaprogramadaComponent;
  let fixture: ComponentFixture<TareaprogramadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareaprogramadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaprogramadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
