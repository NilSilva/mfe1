import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestComponent } from './test.component';
import { CommonModule } from '@angular/common';
import { APP_ROUTES } from './test.routes';

@NgModule({
  declarations: [
    TestComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(APP_ROUTES),
  ],
  providers: [],
})
export class TestModule {
}
