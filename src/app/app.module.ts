import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// confuguracion de loca de la app
import localeEsHN from '@angular/common/locales/es-HN'
import { registerLocaleData } from '@angular/common'

registerLocaleData(localeEsHN);
@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        provideClientHydration(),
        {
          provide:LOCALE_ID, useValue:'es-HN'
        }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        BrowserAnimationsModule,

    ]
})
export class AppModule { }
