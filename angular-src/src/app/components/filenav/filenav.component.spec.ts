import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilenavComponent } from './filenav.component';

describe('FilenavComponent', () => {
  let component: FilenavComponent;
  let fixture: ComponentFixture<FilenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
