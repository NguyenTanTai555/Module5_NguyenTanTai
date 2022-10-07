import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {ListProductComponent} from './product2/list-product/list-product.component';
import {CreateProductComponent} from './product2/create-product/create-product.component';
import {DictionaryPageComponent} from './dictionary/dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './dictionary/dictionary-detail/dictionary-detail.component';
import {UpdateProductComponent} from './product2/update-product/update-product.component';
import {ProductDeleteComponent} from './product2/delete-product/product-delete.component';
import {TodoComponent} from './todoA/todo/todo.component';

import {TodoEditComponent} from './todoA/todo-edit/todo-edit.component';
import {DetailComponent} from './product2/detail/detail.component';


const routes: Routes = [
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlaylistComponent
    },]
  },
  //product
  {path: '',component: ListProductComponent},
  {path: 'product/create',component: CreateProductComponent},
  {path: 'product/edit/:id',component: UpdateProductComponent},
  {path: 'product/delete/:id',component: ProductDeleteComponent},
  {path: 'product/detail/:id',component: DetailComponent},
  {path: 'todo/list', component: TodoComponent},
  {path:'todo/edit/:id', component:TodoEditComponent},
  {path: 'detail/:word', component: DictionaryDetailComponent},

  // {
  //   path: '',
  //   component: DictionaryPageComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
