import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./user";
import { UserService } from "./userService";
import { Router } from "@angular/router";

@Component({
    selector: "users",
    templateUrl: "src/users.html"
})
export class Users implements OnInit{
    private users: Observable<User[]>;
    constructor(private userService: UserService, private router: Router) { }
    /*constructor() {
        let users: Array<any> = [
            {id: 1, firstName: "Luka", lastName: "Ku", userName: "LukaKu"},
            {id: 2, firstName: "Toka", lastName: "Kid", userName: "KaitoKid"},
            {id: 3, firstName: "Conan", lastName: "Edogawa", userName: "EdogawaConan"}
        ];
        this.users = users;
    }*/

    private getUsers(): void {
        this.users = this.userService.getUsers();
    }

    public ngOnInit(): void {
        this.getUsers();
    }

    public onEditClicked(userId: number) {
        this.router.navigate(["editUser", userId]);
    }
    public onDeleteClicked(userId: number) {
        this.userService.deleteUser(userId).subscribe();
        console.log("Delete Successfully!");
        window.location.reload();
    }
}