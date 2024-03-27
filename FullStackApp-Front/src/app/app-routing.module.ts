import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './users/user/user-list/user-list.component';
import { UserCreateComponent } from './users/user/user-create/user-create.component';
import { UserUpdateComponent } from './users/user/user-update/user-update.component';


const routes: Routes = [

 {path: "list", component:UserListComponent},
 {path: "create", component:UserCreateComponent},
 { path: "update/:id", component: UserUpdateComponent }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
