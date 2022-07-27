import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Button } from '../../interfaces/button';
import { SortPaginate } from '../../interfaces/sortPaginate';
import { TableData } from '../../interfaces/table';
import { TableHeadField } from '../../interfaces/tableHeadeField';
import { SharedService } from '../../services/shared.service';
import { SharedModule } from '../../shared.module';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

export class BaseComponent {
  protected static sharedService: any;
  protected static router: any;
  protected location: any;

  buttons: Button[] = [];
  tableData!: TableData;
  tableHeader: TableHeadField[] = [];
  nestedTableHeader: TableHeadField[] = [];
  // sort and paginate
  sortPaginate: SortPaginate = {
    count: 10,
    start: 1,
    attribute: '',
    order_by: '',
    search: '',
    field: '',
    total: 0,
  };

  navigate(route: string, param: any = {}) {
    if (BaseComponent.router == null)
      BaseComponent.router = SharedModule.injector.get(Router);
    BaseComponent.router.navigate([route], { state: { data: param } });
  }
  notify(type: string, message: string) {
    // primary, secondary, success, danger, warning, info, light, darkt
    if (BaseComponent.sharedService == null)
      BaseComponent.sharedService = SharedModule.injector.get(SharedService);
    BaseComponent.sharedService.notify(type, message);
  }

  getMinifiedObject(obj: any, keys: any[]) {
    let res: any = {};
    keys.forEach((x) => {
      res[x] = obj[x];
    });
    return res;
  }

  debounce(func: any, timeout = 1000) {
    let timer: any;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  back() {
    this.location = SharedModule.injector.get(Location);
    this.location.back();
  }
}
