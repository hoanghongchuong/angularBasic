"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var USERS = [
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
        email: "maria@gmail.com",
    },
    {
        id: 3,
        name: 'Maria Salapova',
        age: 29,
        email: "maria.salapova@gmail.com",
    },
    {
        id: 4,
        name: 'Alex Ferguson',
        age: 77,
        email: "alex.ferguson@gmail.com",
    },
    {
        id: 5,
        name: 'Frank Lampard',
        age: 41,
        email: "lampard@gmail.com",
    }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular tutorial. This is a list of users';
        this.users = USERS;
    }
    AppComponent.prototype.onSelect = function (myUser) {
        this.selectedUser = myUser;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.css'],
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map