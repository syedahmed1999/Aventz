import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { SharedService } from '../services/shared.service';
import { BaseComponent } from '../components/base/base.component';
import { AppConstants } from '../utilities/app-constants';

@Injectable()
export class HttpsInterceptor extends BaseComponent implements HttpInterceptor {
  constructor(private sharedService: SharedService) {
    super();
  }

  private exclude: string = 'login';

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token: string = localStorage.getItem('token')!;
    const username: string = localStorage.getItem('userName')!;
    this.sharedService.showingLoader();
    if (!request.url.includes(this.exclude) && token && username) {
      const modifiedReq = request.clone({
        setHeaders: {
          token: token,
          username: username,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      return next.handle(modifiedReq).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            localStorage.clear();
            this.navigate(AppConstants.AUTH_LOGIN);
            this.sharedService.showToast(
              'Session has expired',
              AppConstants.OK
            );
          } else if ([404, 500].includes(error.status)) {
            this.sharedService.showToast('Resource Not Found', AppConstants.OK);
          }
          return throwError(error?.error?.errorMsg ?? '');
        }),
        finalize(() => this.sharedService.hidingLoader())
      );
    }

    return next
      .handle(request)
      .pipe(finalize(() => this.sharedService.hidingLoader()));
  }
}
