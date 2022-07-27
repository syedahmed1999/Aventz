import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { Button } from '../../models/button.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() button!: Button;
  @Input() disabled: boolean = false;
  @Output() callBack: EventEmitter<any> = new EventEmitter();

  constructor() {}

  fire() {
    this.callBack.emit(null);
  }
}
