import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountRoutingModule } from './count-routing.module';
import { FormsModule } from '@angular/forms';
import { CountComponent } from './count.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CountComponent],
  imports: [CommonModule, FormsModule, CountRoutingModule, SharedModule],
})
export class CountModule {}
