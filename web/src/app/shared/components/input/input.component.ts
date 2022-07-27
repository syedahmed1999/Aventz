import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() value: any;
  @Input() login!: boolean;
  @Input() icon: any;
  @Input() placeholder!: string;
  @Input() type: any;
  @Input() class_: any;
  @Input() disabled!: boolean;
  @Input() inputWidth: any;
  @Input() maxlength!: number;
  @Input() minValue!: number;
  @Input() matSuffix!: string;
  @Input() decimal: any;
  @Input() wordCount!: string;
  @Input() wordLimit!: number;
  @Input() blur: boolean = false;
  @Output() callBack: EventEmitter<any> = new EventEmitter();

  constructor() {}

  inputOnChange(event: any) {
    if (this.decimal?.value == true) {
      this.value =
        parseFloat(this.value) > 0
          ? parseFloat(this.value).toFixed(this.decimal.upTo)
          : 0;
    }
    this.callBack.emit(this.value);
    if (this.wordLimit) {
      this.wordCount = this.value.split('').length;
    }
  }
}
