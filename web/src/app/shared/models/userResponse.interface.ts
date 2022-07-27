import { User } from './user.interface';

export interface UserResponse {
  Content: User;
  Message: string[];
  StructureName: string;
  Succeed: boolean;
}
