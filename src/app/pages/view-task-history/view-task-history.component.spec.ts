import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskHistoryComponent } from './view-task-history.component';

describe('ViewTaskHistoryComponent', () => {
  let component: ViewTaskHistoryComponent;
  let fixture: ComponentFixture<ViewTaskHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTaskHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTaskHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
