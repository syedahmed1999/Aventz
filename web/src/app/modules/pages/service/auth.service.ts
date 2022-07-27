import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.type';
import { UserResponse } from 'src/app/shared/models/userResponse.interface';
import { AppConstants } from 'src/app/shared/utilities/app-constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data: User): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${AppConstants.baseUrl}/login`, data);
  }
}
