import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mutli-select',
  templateUrl: './mutli-select.component.html',
  styleUrls: ['./mutli-select.component.scss'],
})
export class MutliSelectComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() placeholder!: string;
  @Input() selectedValue: any;
  @Input() primaryValue: any;
  @Input() displayValue: any;
  @Input() options: any = [];
  @Input() isMultiple!: boolean;
  @Input() isGrouped!: boolean;
  @Input() inputWidth!: string;
  @Output() selected: EventEmitter<any> = new EventEmitter();

  changed() {
    this.selected.emit(this.selectedValue);
  }

  constructor() {}

  ngOnInit(): void {}
}
