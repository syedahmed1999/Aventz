import { TableHeadField } from './table-head-field.model';

export interface TableData {
  field?: string;
  type?: string;
  display?: string;
  showMenu?: boolean;
  showSearch?: boolean;
  searchPlaceholder?: string;
  tableHeader: TableHeadField[];
  nestedTableHeader?: TableHeadField[];
  tableBody: any[];
  nestedTableBodyField?: any;
  showDetails?: boolean;
  showDelete?: boolean;
  showDownload?: boolean;
  tableHeading?: boolean;
  showSelect?: boolean;
}
