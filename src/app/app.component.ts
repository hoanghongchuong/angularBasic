import { Component } from '@angular/core';
import { User } from './models/user';

const USERS:User[] = [
  {
    id: 1,
    name: 'Helen Nguyen',
    age: 25,
    email: "helen@gmail.com",
  },
  {
    id: 2,
    name: 'Maria Kovler',
    age: 20,
    email:"maria@gmail.com",
  },
  {
    id: 3,
    name: 'Maria Salapova',
    age: 29,
    email:"maria.salapova@gmail.com",
  },
  {
    id: 4,
    name: 'Alex Ferguson',
    age: 77,
    email:"alex.ferguson@gmail.com",
  },
  {
    id: 5,
    name: 'Frank Lampard',
    age: 41,
    email:"lampard@gmail.com",
  }
];

@Component({
  selector: 'my-app',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class AppComponent  { 
  title = 'Angular tutorial. This is a list of users';
  users = USERS; 
  selectedUser:User;
  onSelect(myUser:User):void{
    this.selectedUser = myUser;
  }
}
