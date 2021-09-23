import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { MainComponent } from './main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DomainModule } from '../domain/domain.module';

@NgModule({
  declarations: [
    MainComponent,
    LoaderComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    DomainModule
  ],
  exports: [
    LoaderComponent,
  ]
})
export class LayoutModule { }
