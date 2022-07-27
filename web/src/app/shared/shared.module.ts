import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DateInputComponent } from './components/date-input/date-input.component';
import { InputComponent } from './components/input/input.component';
import { LabelComponent } from './components/label/label.component';
import { MutliSelectComponent } from './components/mutli-select/mutli-select.component';
import { TableComponent } from './components/table/table.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { OderByPipe } from './pipes/oderBy/oder-by.pipe';
import { SearchPipe } from './pipes/search/search.pipe';
import { MatTableComponent } from './components/mat-table/mat-table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

import { SharedService } from './services/shared.service';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    FooterComponent,
    ButtonComponent,
    InputComponent,
    LabelComponent,
    MutliSelectComponent,
    CheckboxComponent,
    ToggleComponent,
    DateInputComponent,
    TextareaComponent,
    TableComponent,
    MatTableComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatInputModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    MatSliderModule,
    MatFormFieldModule,
    RouterModule,
  ],
  providers: [SharedService, SearchPipe, OderByPipe],
  exports: [
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    FooterComponent,
    NavbarComponent,

    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ButtonComponent,
    MatSlideToggleModule,
    InputComponent,
    LabelComponent,
    MutliSelectComponent,
    CheckboxComponent,
    ToggleComponent,
    DateInputComponent,
    TextareaComponent,
    TableComponent,
    MatTableComponent,
  ],
})
export class SharedModule {
  static injector: Injector;
  constructor(injector: Injector) {
    SharedModule.injector = injector;
  }
}
