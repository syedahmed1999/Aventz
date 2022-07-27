import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent
  extends BaseComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  fromDate!: string;
  toDate!: string;
  subs: Subscription[] = [];
  showAll: boolean = false;
  constructor() {
    super();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    this.subs.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
