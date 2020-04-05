import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
registerLocaleData(localeES, 'es-Es');

import { HighlightJsModule } from 'ngx-highlight-js';
import { AppRoutingModule } from './app-routing.module';


// COMPONENTES
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './comun/header/header.component';
import { FooterComponent } from './comun/footer/footer.component';
import { BasicaModule } from './basica/basica.module';
import { IntermediaModule } from './intermedia/intermedia.module';
import { AvanzadaModule } from './avanzada/avanzada.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HighlightJsModule,
    BasicaModule,
    IntermediaModule,
    AvanzadaModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
