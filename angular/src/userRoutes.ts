import { Users } from './users';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateUser } from './createUser';
import { EditUser } from './editUser';
let routes: Routes = [
    {'path': '', redirectTo: 'users', pathMatch: 'full'},
    {'path': 'users', component: Users},
    {'path': 'addNewUser', component: CreateUser},
    {'path': 'editUser/:id', component: EditUser}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class UserRoutes { }