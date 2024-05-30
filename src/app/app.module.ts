import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { CardComponent } from './componnets/card/card.component';
import { ProgressBarComponent } from './componnets/gems/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe,
    CardComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
