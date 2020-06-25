import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalDownloaderComponent } from './mal-downloader.component';

describe('MalDownloaderComponent', () => {
  let component: MalDownloaderComponent;
  let fixture: ComponentFixture<MalDownloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalDownloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalDownloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
