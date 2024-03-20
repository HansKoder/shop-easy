import { Routes } from '@angular/router';

// Products pages
import { ListComponent } from './domains/products/pages/list/list.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
import { NotFoundComponent } from '@info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/layouts/layout/layout.component';
import { DetailComponent } from '@products/pages/detail/detail.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'about', component: AboutComponent },
      { path: 'product/:id', component: DetailComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
