import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../core/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
  
  prop: string = 'test';
  changeProp() {
    this.prop = "changed";
  }
  listUsers: User[] = [
    {
      id: 1,
      username: 'flen',
      password: '1234',
      picture: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      accountCategory: 'Admin',
    },
    {
      id: 2,
      username: 'Jhon',
      password: '5467',
      picture: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      accountCategory: 'Customer',
    },
    {
      id: 3,
      username: 'Jane',
      password: '3456',
      picture: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      accountCategory: 'Customer',
    },
    {
      id: 4,
      username: 'Doe',
      password: '3456',
      picture: 'https://bootdey.com/img/Content/avatar/avatar4.png',
      accountCategory: 'Customer',
    },
  ];
  deleteUser(user: User) {
    if (user.accountCategory !== 'Admin') {
      let index = this.listUsers.indexOf(user);
      this.listUsers.splice(index, 1);
    }
  }

  constructor() {
    console.log('constructor')
  }
  ngOnInit(): void {
      console.log('init');
  }
  ngOnDestroy(): void {
    console.log('destroy');
  }
}
