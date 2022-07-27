import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogManageComponent } from './dialog-manage.component';

describe('DialogManageComponent', () => {
  let component: DialogManageComponent;
  let fixture: ComponentFixture<DialogManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
