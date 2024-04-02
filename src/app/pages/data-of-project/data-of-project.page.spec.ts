import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataOfProjectPage } from './data-of-project.page';

describe('DataOfProjectPage', () => {
  let component: DataOfProjectPage;
  let fixture: ComponentFixture<DataOfProjectPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DataOfProjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
