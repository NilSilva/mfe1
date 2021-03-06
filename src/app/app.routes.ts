import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'test' },
  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule) },
]
