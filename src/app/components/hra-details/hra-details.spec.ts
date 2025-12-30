import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HraDetails } from './hra-details';

describe('HraDetails', () => {
  let component: HraDetails;
  let fixture: ComponentFixture<HraDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HraDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HraDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
