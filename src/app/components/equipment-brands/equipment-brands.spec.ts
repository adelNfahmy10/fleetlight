import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentBrands } from './equipment-brands';

describe('EquipmentBrands', () => {
  let component: EquipmentBrands;
  let fixture: ComponentFixture<EquipmentBrands>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentBrands]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentBrands);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
