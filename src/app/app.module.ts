import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
