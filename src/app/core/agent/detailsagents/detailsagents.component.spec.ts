import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsagentsComponent } from './detailsagents.component';

describe('DetailsagentsComponent', () => {
  let component: DetailsagentsComponent;
  let fixture: ComponentFixture<DetailsagentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsagentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsagentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
