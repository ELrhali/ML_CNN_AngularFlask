import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredectComponent } from './predect.component';

describe('PredectComponent', () => {
  let component: PredectComponent;
  let fixture: ComponentFixture<PredectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
