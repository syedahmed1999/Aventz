import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Button } from '../../models/button.model';
import { TableData } from '../../models/table.model';
import { AppConstants } from '../../utilities/app-constants';
import { SearchPipe } from '../../pipes/search/search.pipe';
import { MatPaginator } from '@angular/material/paginator';
import { OderByPipe } from '../../pipes/oderBy/oder-by.pipe';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnChanges {
  @Input() buttons!: Button[];
  @Input() tableData!: TableData;
  @Input() oderBy: any;
  @Input() isNested!: boolean;
  @Input() draggable!: boolean;
  @Output() buttonCallback: EventEmitter<any> = new EventEmitter(); //this will emit top right button's event with its index
  @Output() searchCallback: EventEmitter<any> = new EventEmitter(); //this will emit top let search-bar's event
  @Output() tableCallback: EventEmitter<any> = new EventEmitter(); //this will emit any clickable event from the table with it's action name and row object
  @Output() nestedTableCallback: EventEmitter<any> = new EventEmitter(); //this will emit any clickable event from the table with it's action name and row object
  @Output() sortCallback: EventEmitter<any> = new EventEmitter(); //this will emit any sort information
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  appConstants = AppConstants;
  searchKey!: string;
  // descendingOrder: boolean = true;
  originalArray: any[] = [];
  queriedData: any[] = [];
  //pagination
  doPaginate: boolean = false;
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  //sorting
  selectedIndex!: number;
  order: string = '';
  //searching
  isSearching: boolean = false;
  totalLength!: number;
  searchedLength!: number;
  searchedData: any[] = [];
  //nested table
  hideme: any[] = [];
  //
  selectedRow!: number;
  nestedSelectedRow!: number;

  constructor(private searchPipe: SearchPipe, private oderByPipe: OderByPipe) {}
  buttonClick(index: number) {
    this.buttonCallback.emit(index);
  }

  tableClick(key: string, object: any, index: any) {
    this.selectedRow = index;
    let response: any = {
      key: key,
      object: object,
      index: index,
    };
    this.tableCallback.emit(response);
  }

  nestedTableClick(key: string, object: any, index: any) {
    if (this.nestedSelectedRow === index) {
      this.nestedSelectedRow = NaN;
      this.nestedTableCallback.emit(false);
    } else {
      this.nestedSelectedRow = index;
      let response: any = {
        key: key,
        object: object,
        index: index,
      };
      this.nestedTableCallback.emit(response);
    }
  }

  searchClick(event: any) {
    
    this.searchKey = event;
    if (this.doPaginate) {
      this.paginator.pageIndex = 0;
      this.pageSize = this.paginator.pageSize;
    }
    if (!this.searchKey.length) {
      this.isSearching = false;
      this.searchedData = [];
      this.searchedLength = 0;
      this.chunkInitialData(this.originalArray);
    } else {
      this.isSearching = true;
      this.queriedData = [];
      this.searchedData = this.searchPipe.transform(
        this.originalArray,
        this.searchKey,
        this.tableData?.tableHeader,
        true
      );

      this.searchedLength = this.searchedData?.length;
      this.queriedData = this.searchedData.filter(
        (x, i) => i >= 0 && i < this.pageSize
      );
    }
  }

  ngOnChanges(changes?: SimpleChanges): void {
    if (this.tableData?.tableBody) {
      this.hideme = [];
      this.totalLength = this.tableData?.tableBody?.length;
      this.doPaginate = this.tableData?.tableBody?.length > 10;
      this.originalArray = JSON.parse(
        JSON.stringify(this.tableData?.tableBody)
      );
      if (this.oderBy) {
        this.sortCol(
          this.tableData.tableHeader[this.oderBy?.HeaderIndex],
          this.oderBy?.HeaderIndex,
          this.oderBy?.Sort,
          this.oderBy?.Dependent ?? false,
          this.oderBy?.DependentField ?? ''
        );
      } else {
        this.sortCol(this.tableData?.tableHeader[0], 0);
      }
    }
  }

  tablePagination(event: any) {
    this.queriedData = [];
    if (!this.isSearching) {
      this.queriedData = this.originalArray.filter(
        (x, i) =>
          i >= event?.pageIndex * event?.pageSize &&
          i < (event?.pageIndex + 1) * event?.pageSize
      );
    } else {
      this.queriedData = this.searchedData.filter(
        (x, i) =>
          i >= event?.pageIndex * event?.pageSize &&
          i < (event?.pageIndex + 1) * event?.pageSize
      );
    }
  }

  checkboxCallback(field: any, event: any, row: any, index: any) {
    row[field] = event;
    this.tableClick(AppConstants.CHECKBOX, row, index);
  }

  toggleCallback(field: any, event: any, row: any, index: any) {
    row[field] = event;
    this.tableClick(AppConstants.TOGGLE, row, index);
  }

  sortCol(
    col: any,
    index: any,
    sort?: any,
    dependent?: boolean,
    dependentField?: any
  ) {
    this.selectedIndex = index;
    this.order = sort
      ? sort == 'asc'
        ? this.appConstants.ASC
        : this.appConstants.DEC
      : this.order;
    if (this.isSearching) {
      this.searchedData = this.oderByPipe.transform(
        this.searchedData,
        this.order,
        col,
        dependent,
        dependentField
      );
      if (this.doPaginate) {
        this.queriedData = this.searchedData.filter(
          (x, i) =>
            i >= this.paginator?.pageIndex * this.paginator?.pageSize &&
            i < (this.paginator?.pageIndex + 1) * this.paginator?.pageSize
        );
      } else {
        this.chunkInitialData(this.searchedData);
      }
    } else {
      this.originalArray = this.oderByPipe.transform(
        this.originalArray,
        this.order,
        col,
        dependent,
        dependentField
      );

      if (this.totalLength > 10 && this.paginator) {
        this.queriedData = this.originalArray.filter(
          (x, i) =>
            i >= this.paginator?.pageIndex * this.paginator?.pageSize &&
            i < (this.paginator?.pageIndex + 1) * this.paginator?.pageSize
        );
      } else {
        this.chunkInitialData(this.originalArray);
      }
    }

    this.order =
      this.order == this.appConstants.DEC
        ? this.appConstants.ASC
        : this.appConstants.DEC;
  }

  chunkInitialData(array: any[]) {
    this.queriedData = array.filter((x, i) => i >= 0 && i < this.pageSize);
  }

  expandRow(index: any) {
    this.hideme[index] = !this.hideme[index];
  }
}
