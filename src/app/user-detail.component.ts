import { Component, Input } from '@angular/core';
import { User } from './models/user';

@Component({
    selector: 'user-detail',
    templateUrl: './user-detail.component.html'
})

export class UserDetailComponent{
    @Input() selectedUser:User;
}