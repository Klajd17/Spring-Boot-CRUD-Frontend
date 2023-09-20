import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudDetailsComponent } from './cloud-details.component';

describe('CloudDetailsComponent', () => {
  let component: CloudDetailsComponent;
  let fixture: ComponentFixture<CloudDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
