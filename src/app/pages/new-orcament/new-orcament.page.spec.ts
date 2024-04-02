import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewOrcamentPage } from './new-orcament.page';

describe('NewOrcamentPage', () => {
  let component: NewOrcamentPage;
  let fixture: ComponentFixture<NewOrcamentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewOrcamentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
