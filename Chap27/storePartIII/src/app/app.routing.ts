import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './core/form.component';
import { TableComponent } from './core/table.component';
import { NotFoundComponent } from './core/notFound.component';
import { ProductCountComponent } from './core/productCount.component';
import { CategoryCountComponent } from './core/categoryCount.component';
import { ModelResolver } from './model/model.resolver';
import { TermsGuard } from './terms.guard';
import { UnsavedGuard } from './core/unsaved.guard';
import { LoadGuard } from './load.guard';

const childRoutes: Routes = [
  {
    path: '',
    canActivateChild: [TermsGuard],
    children: [
      {path: 'products', component: ProductCountComponent},
      {path: 'categories', component: CategoryCountComponent},
      {path: '', component: ProductCountComponent}
    ],
    resolve: {modelSolve: ModelResolver},
  }
];

const routes: Routes = [
  {path: 'ondemand', loadChildren: ()=>import('./ondemand/ondemand.module').then(m=>m.OndemandModule), canLoad: [LoadGuard]},
  {path: 'form/:mode/:id', component: FormComponent, resolve:{modelSolve: ModelResolver}, canDeactivate: [UnsavedGuard]},
  {path: 'form/:mode', component: FormComponent, resolve:{modelSolve: ModelResolver}, canActivate: [TermsGuard]},
  {path: 'table', component: TableComponent, children: childRoutes},
  {path: 'table/:category', component: TableComponent, children: childRoutes},
  {path: '', redirectTo: '/table', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

export const routing = RouterModule.forRoot(routes);
