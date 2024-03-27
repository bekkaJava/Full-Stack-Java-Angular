import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:User[] = [];


  constructor(private userService:UserService){}
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {

     this.userService.getUsers().subscribe (
      data => this.users = data)
  }


  deleteById(id:number) {

    this.userService.deleteById(id)
    .subscribe();

  }
  

}
