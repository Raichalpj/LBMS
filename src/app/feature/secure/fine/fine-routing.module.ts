import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FineListComponent } from './container/fine-list/fine-list.component';
import { FineUpdateComponent } from './container/fine-update/fine-update.component';

const routes: Routes = [
  {
    path:'',
    component:FineListComponent
  },
  {
    path:'update/:id',
    component:FineUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FineRoutingModule { }
