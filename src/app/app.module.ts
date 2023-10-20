import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//configuracion del locale de la app

import localeEsBO from '@angular/common/locales/es-BO';
import localeEsfrCA from '@angular/common/locales/fr-CA';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localeEsBO);
registerLocaleData(localeEsfrCA);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue:'es-BO'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
