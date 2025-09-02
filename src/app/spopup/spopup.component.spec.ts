import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpopupComponent } from './spopup.component';

describe('SpopupComponent', () => {
  let component: SpopupComponent;
  let fixture: ComponentFixture<SpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
