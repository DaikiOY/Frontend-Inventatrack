import { ComponentFixture, TestBed } from '@angular/core/testing';
import { About } from './about';

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About]
    }).compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar mensaje de error si faltan campos', () => {
    component.addProduct();
    expect(component.messageType).toBe('error');
  });
});
