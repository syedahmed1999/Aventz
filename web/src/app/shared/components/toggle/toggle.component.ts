import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  @Input() checked?: boolean = false;
  @Input() classes?: string;
  @Input() id?: string;
  @Input() disabled?: boolean;
  @Output() callBack: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  changed(ev: any) {
    this.checked = ev.checked;
    this.callBack.emit(this.checked);
  }
}
