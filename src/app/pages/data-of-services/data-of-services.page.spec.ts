import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataOfServicesPage } from './data-of-services.page';

describe('DataOfServicesPage', () => {
  let component: DataOfServicesPage;
  let fixture: ComponentFixture<DataOfServicesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DataOfServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
