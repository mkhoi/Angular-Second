import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { UserRoutes } from "./userRoutes";
import { Layout } from "./layout";
import { Users } from "./users";
import { UserService } from "./userService";
import { CreateUser } from "./createUser";
import { EditUser } from "./editUser";
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        UserRoutes
    ],
    declarations: [Users, EditUser, CreateUser, Layout],
    bootstrap: [Layout],
    providers: [UserService]
})
export class UserModule { }