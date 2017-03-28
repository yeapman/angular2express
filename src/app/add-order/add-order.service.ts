import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {User} from "./user";
import {contentHeaders} from "../header/headers";


@Injectable()
export class AppService {

  constructor(private http: Http) { }
  private usrUrl = 'http://localhost:3000/api/postUsers';

  getUsers() {
    return this.http.get(this.usrUrl)
      .map(res => res.json());
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.user || {};
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json();
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

  postUsers(user: User): Observable<User> {
    return this.http.post(this.usrUrl,user, {headers: contentHeaders})
      .map(this.extractData)
      .catch(this.handleError);
  }

}



