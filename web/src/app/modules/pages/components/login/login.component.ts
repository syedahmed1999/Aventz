import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-cmp',
  templateUrl: './login.component.html',
})
export class LoginComponent extends BaseComponent implements OnInit, OnDestroy {
  test: Date = new Date();
  subs: Subscription[] = [];

  constructor() {
    super();
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');
    body.classList.add('off-canvas-sidebar');
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subs.forEach((e: Subscription) => e.unsubscribe());
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');
    body.classList.remove('off-canvas-sidebar');
  }
}
