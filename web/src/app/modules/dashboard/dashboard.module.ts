import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardService } from './service/dashboard.service';
import { SharedModule } from '../../shared/shared.module';
import { DialogManageComponent } from './dialogs/dialog-manage/dialog-manage.component';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, FormsModule, SharedModule],
  providers: [DashboardService],
  declarations: [DashboardComponent, DialogManageComponent],
})
export class DashboardModule {}
