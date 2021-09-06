import { Routes } from "@angular/router";
import { TestComponent } from "./test.component";

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'test' },
  { path: 'test', component: TestComponent },
]
