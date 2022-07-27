import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { CountService } from './services/count.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
})
export class CountComponent extends BaseComponent implements OnInit {
  constructor(private countService: CountService) {
    super();
  }

  ngOnInit(): void {
    this.initiateButtons();
    const data = {
      sp: 'SYS_ INVENTORY_SP',
      parameter: {
        action: 'INVENTORY_AVALAIBLE',
      },
    };
    this.countService.activeInventoryCount().subscribe((res: any) => {});
  }

  initiateButtons() {
    this.buttons.push({
      text: 'Add',
      color: '',
      type: '',
      backgroundColor: 'green',
    });
  }
}
