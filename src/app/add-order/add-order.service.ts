import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";


@Injectable()
export class AppService {

  constructor(private http: Http) { }


  private usrUrl = 'http://localhost:3000/api/artist';


  getUsers() {
    return this.http.get(this.usrUrl)
      .map(res => res.json());
  }

}



