import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoDetails } from './ceo-details';

describe('CeoDetails', () => {
  let component: CeoDetails;
  let fixture: ComponentFixture<CeoDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CeoDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeoDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
