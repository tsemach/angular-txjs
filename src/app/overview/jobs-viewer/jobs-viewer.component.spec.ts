import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsViewerComponent } from './jobs-viewer.component';

describe('JobsViewerComponent', () => {
  let component: JobsViewerComponent;
  let fixture: ComponentFixture<JobsViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
