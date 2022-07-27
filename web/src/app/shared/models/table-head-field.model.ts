export interface TableHeadField {
  field: string;
  subField?: string | null;
  subField1?: string | null;
  mainTable?: boolean;
  arrayField?: string | null;
  text: string;
  type: string;
  sortable: boolean;
  minWidth?: string;
  maxWidth?: string;
  width?: string;
  alignCenter?: boolean;
  alignEnd?: boolean;
  disabled?: boolean;
}
