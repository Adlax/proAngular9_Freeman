import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth.component';
import { AuthGuard } from './auth.guard';
import { OrderTableComponent } from './orderTable.component';
import { ProductEditorComponent } from './productEditor.component';
import { ProductTableComponent } from './productTable.component';

let routing = RouterModule.forChild([
  { path: 'auth', component: AuthComponent },
  { path: 'main', component: AdminComponent, canActivate:[AuthGuard], children: [
    { path: 'products/:mode/:id', component: ProductEditorComponent },
    { path: 'products/:mode', component: ProductEditorComponent },
    { path: 'products', component: ProductTableComponent },
    { path: 'orders', component: OrderTableComponent },
    { path: '**', redirectTo: 'products' }
  ] },
  { path: '**', redirectTo: 'auth' }
]);

@NgModule({
  imports: [CommonModule,FormsModule,routing],
  providers: [AuthGuard],
  declarations: [AdminComponent,AuthComponent,OrderTableComponent,ProductEditorComponent,ProductTableComponent]
})
export class AdminModule {

}
