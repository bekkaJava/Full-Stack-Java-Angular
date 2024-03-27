import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit{

  userCreateForm:FormGroup = new FormGroup({})

  constructor(private userService:UserService,
              private formBuilder:FormBuilder,
              private router:Router){}


             

  ngOnInit(): void {
    
    this.createFrom();
  
  }


  createFrom() {
    this.userCreateForm = this.formBuilder.group ({

      name: ['', Validators.required],
      email: ['', Validators.required],
      phone:['', Validators.required]

      
    })}


  createUser() {
    this.userService.createUser(this.userCreateForm.value as User)
    .subscribe();
    
    this.router.navigate(['/list'])
  }


}

