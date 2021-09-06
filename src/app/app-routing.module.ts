import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES), BrowserAnimationsModule,],
  exports: [RouterModule],
})
export class AppRoutingModule {}
