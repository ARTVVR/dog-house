import { ComponentFixture, TestBed } from '@angular/core/testing';

import DataShopComponent from './data-shop.component';

describe('DataShopComponent', () => {
  let component: DataShopComponent;
  let fixture: ComponentFixture<DataShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataShopComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(DataShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
