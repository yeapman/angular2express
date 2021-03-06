import { Component, OnInit } from '@angular/core';
import {User} from "./user";
import 'rxjs/add/operator/map'
import {AppService} from "./add-order.service";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  users: User[];
  constructor(private service: AppService) {  }

  ngOnInit() {
    this.service.getUsers()
      .subscribe(users => this.users = users);
  }
}
