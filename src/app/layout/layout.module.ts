import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { PageLoaderComponent } from './page-loader/page-loader.component';
import { HeaderComponent } from './header/header.component';
import { DomainModule } from '../domain/domain.module';

@NgModule({
  declarations: [
    MainLayoutComponent,
    PageLoaderComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    DomainModule
  ],
  exports: [
    PageLoaderComponent,
  ]
})
export class LayoutModule { }
