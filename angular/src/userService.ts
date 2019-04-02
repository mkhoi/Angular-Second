import { Injectable } from "@angular/core";
import { IUserService } from "./iuserService";
import { Observable } from "rxjs/Rx";
import { User } from "./user";
import { RequestOptions, Headers, Http, Response } from "@angular/http";

@Injectable()
export class UserService implements IUserService {
    constructor (private http: Http) { }
    private urlUser = 'http://localhost:85/api/users';
    private headers = new Headers ({'Accept': 'application/json', 'Content-Type': 'application/json'});
    private options = new RequestOptions({headers: this.headers});

    private handleError(error: Response | any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    public getUsers(): Observable<User[]>{
        let users =  this.http.get(this.urlUser, this.options).map(this.extractData).catch(this.handleError);
        return users;
    }
    
    public addUser(user: User): Observable<User> {
        return this.http.post(this.urlUser, user, this.options).map(this.extractData).catch(this.handleError);
    }

    public updateUser(userId:number, user: User): Observable<User> {
        let url = `http://localhost:30435/api/users/${userId}`;
        return this.http.put(url, JSON.stringify(user), this.options).map(this.extractData).catch(this.handleError);
    }

    public deleteUser(userId: number): Observable<User> {
        let url = `http://localhost:30435/api/users/${userId}`;
        return this.http.delete(url, this.options).map(this.extractData).catch(this.handleError);
    }
}