import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './modules/pages/pages.module';
import { SharedService } from './shared/services/shared.service';
import { HttpsInterceptor } from './shared/interceptor/https.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CountModule } from './modules/count/count.module';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    SharedModule,
    PagesModule,
    FormsModule,
    BrowserAnimationsModule,
    DashboardModule,
    CountModule,
    ServiceWorkerModule.register('./sw-custom.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent],
  providers: [
    SharedService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
