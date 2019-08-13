import { Injectable } from '@angular/core';
import { User } from './models/user';
import { USERS } from './mock-user';

@Injectable()
export class UserService{
    getUsers():User[]{
        return USERS;
    }
}