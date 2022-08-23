import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  imports: [CommonModule, MenubarModule],
  declarations: [NavbarComponent, FooterComponent, SidebarComponent],
  exports: [NavbarComponent, FooterComponent, SidebarComponent],
  providers: [],
})
export class SharedModule {
  static injector: Injector;
  constructor(injector: Injector) {
    SharedModule.injector = injector;
  }
}
