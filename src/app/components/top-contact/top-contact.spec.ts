import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopContact } from './top-contact';

describe('TopContact', () => {
  let component: TopContact;
  let fixture: ComponentFixture<TopContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopContact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
