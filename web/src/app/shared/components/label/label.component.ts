import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent {
  @Input() label!: string;
  @Input() classes!: string;
  @Input() for!: string;
  @Input() labelWidth: string = 'auto';
  @Input() spacingBottom: string = '18px';
  @Input() isRequired: boolean = false;
  @Output() callBack: EventEmitter<any> = new EventEmitter();

  constructor() {}

  click() {
    this.callBack.emit();
  }
}
