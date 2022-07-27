import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogManageComponent } from './dialogs/dialog-manage/dialog-manage.component';
import { Subscription } from 'rxjs';
import { DashboardService } from './service/dashboard.service';
import { AppConstants } from 'src/app/shared/utilities/app-constants';
import { InvertoryCountManagementResponse } from 'src/app/shared/models/inventoryCountManagementResponse.interface';
import { InvertoryCountManagement } from 'src/app/shared/models/inventoryCountManagement.interface';

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
  constructor(
    private dialog: MatDialog,
    private dashboardService: DashboardService
  ) {
    super();
  }

  ngOnInit(): void {
    this.initiateButtons();
    this.setDates();
  }

  ngAfterViewInit(): void {
    this.getData();
  }

  getData(): void {
    const data = {
      toDate: this.toDate,
      fromDate: this.fromDate,
      showAll: this.showAll ? AppConstants.ACTIF : AppConstants.INACTIF,
    };
    const sub: Subscription = this.dashboardService
      .getDashboard(data)
      .subscribe((res: InvertoryCountManagementResponse) => {
        this.generateTable(res);
      });
    this.subs.push(sub);
  }

  generateTable(res: InvertoryCountManagementResponse): void {
    const data: InvertoryCountManagement[] = res.Content;
    this.tableHeader.push(
      {
        field: 'NB_INV_COUNTS',
        text: '# Inventory',
        type: AppConstants.TEXT,
        sortable: true,
      },
      {
        field: 'SITE_EN',
        text: 'Site',
        type: AppConstants.TEXT,
        sortable: true,
        disabled: true,
      },
      {
        field: 'DESCRIPTION',
        text: 'Description',
        type: AppConstants.TEXT,
        sortable: true,
        disabled: false,
      },
      {
        field: 'START_DATE',
        text: 'Start Date',
        type: AppConstants.DATE,
        sortable: true,
        disabled: false,
      },
      {
        field: 'CLOSED',
        text: 'Closed',
        type: AppConstants.BADGE,
        sortable: true,
        disabled: false,
      },
      {
        field: 'ACTIF',
        text: 'Active',
        type: AppConstants.BADGE,
        sortable: true,
        disabled: false,
      }
    );
    this.tableData = {
      showSearch: true,
      tableHeader: this.tableHeader,
      tableBody: data,
      showDetails: false,
      showDelete: false,
    };
  }

  searchCallback(ev: any) {}

  tableCallback(ev: any) {
    switch (ev.key) {
      case 'edit':
        this.openDialog(ev.object);
        break;

      default:
        break;
    }
  }

  setDates(): void {
    const fromDate: Date = new Date();
    fromDate.setMonth(fromDate.getMonth() - 2);
    this.fromDate = fromDate.toISOString().split('T')[0];
    const toDate: Date = new Date();
    toDate.setMonth(toDate.getMonth() + 1);
    this.toDate = toDate.toISOString().split('T')[0];
  }

  initiateButtons(): void {
    this.buttons.push({
      text: 'Add',
      color: 'primary',
      type: '',
    });
  }

  openDialog(data?: InvertoryCountManagement): void {
    const newData = data ? JSON.parse(JSON.stringify(data)) : undefined;
    const width: string = '850px';
    const dialogRef = this.dialog.open(DialogManageComponent, {
      width,
      data: newData,
    });

    const sub: Subscription = dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.tableHeader = [];
        this.getData();
      }
    });
    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
