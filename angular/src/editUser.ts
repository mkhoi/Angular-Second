import { Component } from "@angular/core";
import { User } from "./user";
import { UserService } from "./userService";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: "src/editUser.html"
})
export class EditUser {
    private user = new User();
    private idSelected: number;
    constructor(private userService: UserService, private route: ActivatedRoute) {
        this.idSelected = route.params["value"].id;
        console.log("user selected:", this.idSelected);
    }

    private updateUser(): void {
        this.userService.updateUser(this.idSelected, this.user).subscribe();
    }

    public onUpdateClicked(user: User) {
        this.user = user;
        this.updateUser();
        console.log("Update Successfully!");
    }
}