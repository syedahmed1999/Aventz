import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { BaseComponent } from '../../../../shared/components/base/base.component';

@Component({
  selector: 'app-dialog-manage',
  templateUrl: './dialog-manage.component.html',
  styleUrls: ['./dialog-manage.component.scss'],
})
export class DialogManageComponent
  extends BaseComponent
  implements OnInit, AfterContentChecked, OnDestroy
{
  wordLimit: number = 400;
  subs!: Subscription[];
  constructor(
    public dialogRef: MatDialogRef<DialogManageComponent>,
    @Inject(MAT_DIALOG_DATA)
    private cdr: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit(): void {}

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

  close(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
