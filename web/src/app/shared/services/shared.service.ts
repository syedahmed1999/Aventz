import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBar,
} from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenValidity } from '../models/tokenValidity.interface';
import { AppConstants } from '../utilities/app-constants';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  loaderShow: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private toast: MatSnackBar) {}

  showToast(
    msg: string,
    action: string,
    hPosition: MatSnackBarHorizontalPosition = 'right',
    vPosition: MatSnackBarVerticalPosition = 'bottom',
    duration: number = 5000
  ): void {
    this.toast.open(msg, action, {
      horizontalPosition: hPosition,
      verticalPosition: vPosition,
      duration: duration,
    });
  }

  watchStorage(): Observable<boolean> {
    return this.loaderShow.asObservable();
  }

  showingLoader(): void {
    this.loaderShow.next(true);
  }

  hidingLoader(): void {
    this.loaderShow.next(false);
  }

  isTokenValid(): Observable<TokenValidity> {
    return this.http.get<TokenValidity>(`${AppConstants.baseUrl}/IsTokenValid`);
  }
}
