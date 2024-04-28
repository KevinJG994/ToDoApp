import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FooterComponent,
    ToDoListComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    PanelModule,
    InputTextModule,
    FormsModule
  ],
  exports: [
    FooterComponent,
    ToDoListComponent,
  ]
})
export class ComponentModule { }
