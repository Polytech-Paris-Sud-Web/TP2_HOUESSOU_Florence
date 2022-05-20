import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourOnFourComponent } from './four-on-four.component';

describe('FourOnFourComponent', () => {
  let component: FourOnFourComponent;
  let fixture: ComponentFixture<FourOnFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourOnFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourOnFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
