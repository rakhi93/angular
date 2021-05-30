import { from } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit 
  {
    
       isInvalid:boolean=false;
       constructor(private router:Router,private fb: FormBuilder) { }
        userprofileForm =  this.fb.group({
          firstName:['',Validators.required],
          lastName:['',Validators.required],
          email:['',Validators.required],
          password:['',Validators.required]

        })
       ngOnInit(): void {
        this.firstName;
        this.lastName;
        this.email;
        this.password;

      }
      onSubmit(){
        if(this.userprofileForm.valid){
          this.router.navigateByUrl('/login');
        }
        else{
          this.isInvalid=true;
        }
      }
      get firstName(){return this.userprofileForm.get('firstName')}
      get lastName(){return this.userprofileForm.get('lastName')}
      get email(){return this.userprofileForm.get('email')}
      get password(){return this.userprofileForm.get('password')}

    }
