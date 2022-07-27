import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { SiteResponse } from 'src/app/shared/models/siteResponse.interface';
import { SharedService } from 'src/app/shared/services/shared.service';
import { AppConstants } from 'src/app/shared/utilities/app-constants';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { InvertoryCountManagement } from '../../../../shared/models/inventoryCountManagement.interface';
import { Site } from '../../../../shared/models/site.interface';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-dialog-manage',
  templateUrl: './dialog-manage.component.html',
  styleUrls: ['./dialog-manage.component.scss'],
})
export class DialogManageComponent
  extends BaseComponent
  implements OnInit, AfterContentChecked, OnDestroy
{
  wordLimit: number = 400;
  sites!: Site[];
  dialogData!: InvertoryCountManagement;
  selectedValue!: Site;
  subs!: Subscription[];
  constructor(
    public dialogRef: MatDialogRef<DialogManageComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: InvertoryCountManagement,
    private dashboardService: DashboardService,
    private cdr: ChangeDetectorRef,
    private sharedService: SharedService
  ) {
    super();
    this.dialogData = !this.data
      ? {
          ACTIF: true,
          CLOSED: 0,
          DESCRIPTION: '',
          ID: 0,
          NB_INV_COUNTS: 0,
          SITE: '',
          SITE_EN: '',
          SITE_FR: '',
          START_DATE: '',
        }
      : this.data;
  }

  ngOnInit(): void {
    this.initiateButtons();
    this.getAllSites();
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

  getAllSites(): void {
    const sub: Subscription = this.dashboardService
      .getAllSites(this.data)
      .subscribe((res: SiteResponse) => {
        if (res.Succeed) {
          this.sites = res.Content;
          if (this.data.SITE) {
            this.siteSelected(res);
          }
        }
      });
    this.subs.push(sub);
  }

  siteSelected(siteRes: SiteResponse): void {
    const site: Site[] = siteRes.Content;
    this.selectedValue = site?.find((x: Site) => x.CODE === this.data.SITE)!;
  }

  initiateButtons(): void {
    this.buttons.push(
      {
        text: 'Cancel',
        backgroundColor: 'red',
        type: '',
        color: '',
      },
      {
        text: 'Add',
        color: '',
        backgroundColor: 'green',
        type: '',
      }
    );
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    const sub: Subscription = this.dashboardService
      .saveInventory(this.dialogData)
      .subscribe((res) => {
        if (res.Succeed) {
          this.sharedService.showToast(
            AppConstants.UPSERT_SUCCESSFULLY,
            AppConstants.OK
          );
          this.dialogRef.close(true);
        } else {
        }
      });

    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
