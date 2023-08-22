import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    PageNotFoundComponent, 
    WebviewDirective, 
    HeaderComponent, 
    LoginComponent
  ],

  imports: [
    CommonModule, 
    TranslateModule, 
    FormsModule,
    MatInputModule,
    MatMenuModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [
    TranslateModule, 
    WebviewDirective, 
    FormsModule, 
    HeaderComponent,
    LoginComponent,
    
  ]
})
export class SharedModule {}
