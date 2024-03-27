import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  id:number = +this.activatedRoot.snapshot.params["id"];

  userUpdateForm:FormGroup = new FormGroup({});


  constructor(private activatedRoot:ActivatedRoute,
              private formBuilder:FormBuilder,
              private userService:UserService,
              private router:Router) { }

  ngOnInit(): void {

    console.log(this.id, typeof this.id);

    this.createForm();

    this.init();

    
  }

  init() {


    this.userService.getUserById(this.id).subscribe(user => {
      this.userUpdateForm.patchValue(user);
      
    })

  }

  createForm() {

   this.userUpdateForm = this.formBuilder.group ({

    name: ['', Validators.required],
    email: ['', Validators.required],
    phone:['', Validators.required]

    }
      
    )
  }

  updateUser() {
    
    this.userService.updateUser(this.id, this.userUpdateForm.value as User)
    .subscribe();
    this.router.navigate(['/list'])
  }

}
