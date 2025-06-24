import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngajareComponent } from './angajare.component';

describe('AngajareComponent', () => {
  let component: AngajareComponent;
  let fixture: ComponentFixture<AngajareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngajareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngajareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
