import { NavItemType } from "./navItemType";
import { DropdownLink } from "./dropdownLink";

export interface NavItem {
  type: NavItemType;
  title: string;
  routerLink?: string;
  iconClass?: string;
  numNotifications?: number;
  dropdownItems?: (DropdownLink | "separator")[];
}
