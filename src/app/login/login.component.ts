import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  header: string = 'login';
  authForm: FormGroup;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.authForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern(/[A-Z]/)])
  });
}

  onSubmit(){
    if(this.authForm.valid){
      let name = (this.authForm.value.email).split('@');
      this.router.navigate(['/dashboard',name[0]])
          .then( navigate => console.log("Logged In... Redirected To Dashboard..."))
          .catch( err => console.log(err) );
    }
  }

  get name() { return this.authForm.get('email'); }

}
