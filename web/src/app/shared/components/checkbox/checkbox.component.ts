import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() value?: boolean = false;
  @Input() beforeCheckbox?: string = '';
  @Input() afterCheckbox?: string = '';
  @Input() classes!: string;
  @Input() id!: string;
  @Input() disabled!: boolean;
  @Output() callBack: EventEmitter<any> = new EventEmitter();

  constructor() {}

  changed() {
    this.value = !this.value;
    this.callBack.emit(this.value);
  }
}
