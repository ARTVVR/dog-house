import { ComponentFixture, TestBed } from '@angular/core/testing';

import CotactsPageComponent from './cotacts-page.component';

describe('CotactsPageComponent', () => {
  let component: CotactsPageComponent;

  let fixture: ComponentFixture<CotactsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CotactsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotactsPageComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
