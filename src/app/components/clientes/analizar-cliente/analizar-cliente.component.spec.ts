import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalizarClienteComponent } from './analizar-cliente.component';

describe('AnalizarClienteComponent', () => {
  let component: AnalizarClienteComponent;
  let fixture: ComponentFixture<AnalizarClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalizarClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalizarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
