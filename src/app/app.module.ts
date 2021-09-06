import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
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
