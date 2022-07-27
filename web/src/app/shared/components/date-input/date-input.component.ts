import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
})
export class DateInputComponent implements OnInit {
  @Input() inputWidth: any;
  @Input() placeholder!: string;
  @Input() disabled!: boolean;
  @Input() value: any;
  @Input() diff!: boolean;
  @Input() min: any;
  @Output() callBack: EventEmitter<any> = new EventEmitter();
  @Input() matSuffix!: string;
  @Input() icon!: string;

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {}

  dateChange(event: any) {
    this.callBack.emit(this.convert(this.value));
  }

  convert(str: any) {
    var date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join('-');
  }
}
