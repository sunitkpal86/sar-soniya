import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooDetails } from './coo-details';

describe('CooDetails', () => {
  let component: CooDetails;
  let fixture: ComponentFixture<CooDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CooDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CooDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
