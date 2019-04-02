import { Users } from './users';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
let routes: Routes = [
    {'path': '', redirectTo: 'users', pathMatch: 'full'},
    {'path': 'users', component: Users}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class UserRoutes { }