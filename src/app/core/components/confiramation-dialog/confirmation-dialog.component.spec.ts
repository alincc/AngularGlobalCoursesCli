import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiramationDialogComponent } from './confirmation-dialog.component';

describe('ConfiramationDialogComponent', () => {
  let component: ConfiramationDialogComponent;
  let fixture: ComponentFixture<ConfiramationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiramationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiramationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
