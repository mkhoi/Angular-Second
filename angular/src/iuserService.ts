import { Observable } from "rxjs/Rx";
import { User } from "./user";
export interface IUserService {
    getUsers(): Observable<User[]>;
}