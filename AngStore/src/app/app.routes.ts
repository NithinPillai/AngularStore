import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent}, 
    { path: 'cart', component: CartComponent}, 
    { path: 'product-item-detail/:id', component: ProductItemDetailComponent}, 
    { path: 'confirmationPage', component: ConfirmationComponent}
];
