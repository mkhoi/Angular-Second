import { Component } from "@angular/core";
import { User } from "./user";
import { UserService } from "./userService";

@Component({
    templateUrl: "src/createUser.html"
})
export class CreateUser{
    private user = new User();
    constructor(private userService: UserService) {
        
    }
    private addUser(): void{
        this.userService.addUser(this.user).subscribe();
    }

    public onSubmitClicked(user: User) {
        this.user = user;
        this.addUser();
        console.log("Successfully!");
    }
}