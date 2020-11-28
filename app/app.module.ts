import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { InfoComponent } from './info/info.component';
import { WarningComponent } from './warning/warning.component';
import { DangerComponent } from './danger/danger.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    InfoComponent,
    WarningComponent,
    DangerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
