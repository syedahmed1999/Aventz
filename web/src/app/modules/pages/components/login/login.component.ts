import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { UserResponse } from '../../../../shared/models/userResponse.interface';
import { User } from '../../../../shared/models/user.type';
import { ValidatorService } from '../../../../shared/utilities/validator.service';
import { AuthService } from '../../service/auth.service';
import { Subscription } from 'rxjs';
import { SharedService } from '../../../../shared/services/shared.service';
import { TokenValidity } from '../../../../shared/models/tokenValidity.interface';
import { AppConstants } from '../../../../shared/utilities/app-constants';

@Component({
  selector: 'app-login-cmp',
  templateUrl: './login.component.html',
})
export class LoginComponent extends BaseComponent implements OnInit, OnDestroy {
  test: Date = new Date();
  userObj: User = {};
  subs: Subscription[] = [];

  constructor(
    private validator: ValidatorService,
    private authService: AuthService,
    private sharedService: SharedService
  ) {
    super();
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');
    body.classList.add('off-canvas-sidebar');
  }

  ngOnInit(): void {
    
    if (localStorage.getItem('token')) {
      this.isTokenValid();
    }
  }

  isTokenValid() {
    const sub: Subscription = this.sharedService
      .isTokenValid()
      .subscribe((res: TokenValidity) => {
        if (res.Succeed) {
          this.navigate(AppConstants.DASHBOARD);
        }
      });
    this.subs.push(sub);
  }

  async validate(): Promise<void> {
    const userName: string = 'userName';
    const password: string = 'password';
    const token: string = 'token';
    try {
      await this.validator.validateRequired([userName, password], this.userObj);
      const sub: Subscription = this.authService
        .login(this.userObj)
        .subscribe((res: UserResponse) => {
          if (res.Succeed) {
            this.sharedService.showToast(
              AppConstants.LOGGED_IN_SUCCESSFULLY,
              AppConstants.OK
            );
            localStorage.setItem(token, res.Content.Token);
            localStorage.setItem(userName, res.Content.UserName);
            this.navigate(AppConstants.DASHBOARD);
          } else {
            this.sharedService.showToast(
              AppConstants.LOGGED_IN_FAILED,
              AppConstants.OK
            );
          }
        });
      this.subs.push(sub);
    } catch (error) {
      this.sharedService.showToast(
        AppConstants.LOGGED_IN_FAILED,
        AppConstants.OK
      );
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach((e: Subscription) => e.unsubscribe());
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');
    body.classList.remove('off-canvas-sidebar');
  }
}
