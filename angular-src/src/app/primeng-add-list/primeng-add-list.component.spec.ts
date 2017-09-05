import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengAddListComponent } from './primeng-add-list.component';

describe('PrimengAddListComponent', () => {
  let component: PrimengAddListComponent;
  let fixture: ComponentFixture<PrimengAddListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengAddListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengAddListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
