import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formlogin : FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder : FormBuilder,
    private router: Router) { 
   
      this.formlogin = this.formBuilder.group({
        username : new FormControl('', Validators.compose([
             Validators.required
        ]))
});
  }

  ngOnInit() {
  }

  doLogin() {
    if (this.formlogin.valid) {
      console.info(this.formlogin.controls.username.value);
      this.userService.login(this.formlogin.controls.username.value)
        .subscribe(x => {
          this.router.navigate(['tabs/tickets']);
        });
    }
  }
}
