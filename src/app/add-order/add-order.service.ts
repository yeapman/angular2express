import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {User} from "./user";


@Injectable()
export class AppService {
  constructor(private http: Http) {}
  private usrUrl = 'http://localhost:3000/api/books';

  getUsers(): Observable<User[]> {
    return this.http.get( this.usrUrl)
      .map(res => res.json().data)
  }
}
