import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InvertoryCountManagement } from '../../../shared/models/inventoryCountManagement.interface';
import { InvertoryCountManagementResponse } from '../../../shared/models/inventoryCountManagementResponse.interface';
import { SiteResponse } from '../../../shared/models/siteResponse.interface';
import { AppConstants } from '../../../shared/utilities/app-constants';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getDashboard(data: any): Observable<InvertoryCountManagementResponse> {
    const body = new HttpParams({
      fromObject: {
        sp: 'INVENTORY_SP',
        parameter: `@ACTION = 'SELECT_INVENTORY', @START_DATE = '${data.fromDate}', @END_DATE = '${data.toDate}', @FILTER = [${data.showAll}]`,
        type: '',
      },
    });
    return this.http.post<InvertoryCountManagementResponse>(
      `${AppConstants.baseUrl}/getDataSP`,
      body
    );
  }

  getAllSites(data: InvertoryCountManagement): Observable<SiteResponse> {
    const body = new HttpParams({
      fromObject: {
        sp: 'SYS_PARAMS',
        parameter: `@action = READ_DETAIL_BY_HEADER_CODE, @code = INVENTORY, @active = ${
          data?.ACTIF ? 1 : 0
        }, @sysparam_header = ''`,
        type: '',
      },
    });
    return this.http.post<SiteResponse>(
      `${AppConstants.baseUrl}/getDataSP`,
      body
    );
  }

  saveInventory(data: InvertoryCountManagement): Observable<SiteResponse> {
    const body = new HttpParams({
      fromObject: {
        sp: 'INVENTORY_SP',
        parameter: `@ACTION = 'UPSERT_INVENTORY', @INV_ID = [${
          data.ID
        }], @SITE = '${data.SITE}', @START_DATE = '${
          data.START_DATE
        }', @ACTIF = ${data.ACTIF}, @DESCRIPTION = '${
          data.DESCRIPTION
        }', @USER = '${localStorage.getItem('userName')}'`,
        type: '',
      },
    });
    return this.http.post<SiteResponse>(
      `${AppConstants.baseUrl}/getDataSP`,
      body
    );
  }
}
