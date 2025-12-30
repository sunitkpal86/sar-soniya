import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfoDetails } from './cfo-details';

describe('CfoDetails', () => {
  let component: CfoDetails;
  let fixture: ComponentFixture<CfoDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CfoDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfoDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
