import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../../../shared/utilities/app-constants';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  constructor(private http: HttpClient) {}

  activeInventoryCount() {
    const body = new HttpParams({
      fromObject: {
        sp: 'SYS_INVENTORY_SP',
        parameter: `@action = 'INVENTORY_AVALAIBLE'`,
        type: '',
      },
    });
    return this.http.post(`${AppConstants.baseUrl}/getDataSP`, body);
  }
}
