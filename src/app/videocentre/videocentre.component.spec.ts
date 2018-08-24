import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocentreComponent } from './videocentre.component';

describe('VideocentreComponent', () => {
  let component: VideocentreComponent;
  let fixture: ComponentFixture<VideocentreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideocentreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideocentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
