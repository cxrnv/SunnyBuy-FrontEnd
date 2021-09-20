import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeChatComponent } from './employee-chat/employee-chat.component';
import { EmployeeHeaderComponent } from './employee-header/employee-header.component';
import { EmployeeChatGridComponent } from './employee-chat-grid/employee-chat-grid.component';
import { HelpModule } from './../help/help.module';
import { EmployeeComponent } from './employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeModule } from './../home/home.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
      EmployeeComponent,
      EmployeeChatGridComponent,
      EmployeeHeaderComponent,
      EmployeeChatComponent,
      EmployeeProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    HomeModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    HelpModule,
    MatMenuModule
  ],
  exports:
    [
        EmployeeComponent,
    ]
})
export class EmployeeModule { }
