import { InvertoryCountManagement } from './inventoryCountManagement.interface';

export interface InvertoryCountManagementResponse {
  Content: InvertoryCountManagement[];
  Message: any[];
  StructureName: string;
  Succeed: boolean;
}
