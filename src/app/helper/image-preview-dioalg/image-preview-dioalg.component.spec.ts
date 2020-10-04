import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePreviewDioalgComponent } from './image-preview-dioalg.component';

describe('ImagePreviewDioalgComponent', () => {
  let component: ImagePreviewDioalgComponent;
  let fixture: ComponentFixture<ImagePreviewDioalgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagePreviewDioalgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePreviewDioalgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
