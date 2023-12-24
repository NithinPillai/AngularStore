import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantSelectionComponent } from './quant-selection.component';

describe('QuantSelectionComponent', () => {
  let component: QuantSelectionComponent;
  let fixture: ComponentFixture<QuantSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuantSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
