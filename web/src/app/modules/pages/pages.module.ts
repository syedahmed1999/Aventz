import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageRoutingModule } from './pages.routing';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './service/auth.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    PageRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  declarations: [LoginComponent, RegisterComponent],
})
export class PagesModule {}
