import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractfilesComponent } from './extractfiles.component';

describe('ExtractfilesComponent', () => {
  let component: ExtractfilesComponent;
  let fixture: ComponentFixture<ExtractfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
