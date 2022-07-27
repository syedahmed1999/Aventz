import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import PerfectScrollbar from 'perfect-scrollbar';
import { AppConstants } from '../../utilities/app-constants';
import { BaseComponent } from '../base/base.component';

export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  ab: string;
  type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Inventory Count Management',
    type: 'link',
    icontype: 'dashboard',
  },
  {
    path: '/count',
    title: 'Inventory Count',
    type: 'link',
    icontype: 'dashboard',
  },
  {
    path: '/dashboard',
    title: 'Logout',
    type: 'button',
    icontype: 'dashboard',
  },
];
@Component({
  selector: 'app-sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  public menuItems: any[] = [];
  ps!: PerfectScrollbar;

  constructor(private router: Router) {}

  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      const elemSidebar = <HTMLElement>(
        document.querySelector('.sidebar .sidebar-wrapper')
      );
      this.ps = new PerfectScrollbar(elemSidebar);
    }
  }
  
  updatePS(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      this.ps.update();
    }
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate([AppConstants.AUTH_LOGIN]);
  }

  isMac(): boolean {
    let bool = false;
    if (
      navigator.platform.toUpperCase().indexOf('MAC') >= 0 ||
      navigator.platform.toUpperCase().indexOf('IPAD') >= 0
    ) {
      bool = true;
    }
    return bool;
  }
}
