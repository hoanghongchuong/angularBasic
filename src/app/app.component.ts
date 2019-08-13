import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import {UserService} from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService],
})
export class AppComponent implements OnInit{ 
  title = 'Angular 4. This is a list of users';
  users: User[]; 
  selectedUser:User;
  onSelect(myUser:User):void{
    this.selectedUser = myUser;
  }

  constructor(private userService:UserService){

  }
  getUsers():void{
    this.users = this.userService.getUsers();
  }
  ngOnInit():void{
    this.getUsers();
  }
}
