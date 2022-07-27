import { Site } from './site.interface';

export interface SiteResponse {
  Content: Site[];
  Message: any[];
  StructureName: string;
  Succeed: boolean;
}
