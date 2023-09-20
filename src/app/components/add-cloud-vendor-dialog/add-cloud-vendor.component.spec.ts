import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCloudVendorComponent } from './add-cloud-vendor.component';

describe('AddCloudVendorComponent', () => {
  let component: AddCloudVendorComponent;
  let fixture: ComponentFixture<AddCloudVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCloudVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCloudVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
