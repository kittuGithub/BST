import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  invalid: Boolean = false;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  loginUser(username, password) {
    if (username === 'admin' && password === 'admin') {
      this.router.navigate(['']);
      this.authService.setloggedIn(true);
    } else {
      this.invalid = true;
    }
    // this.authService.
    // getUserDetails(username, password)
    // .subscribe( data => {
    //   if (1) { // data.success
    //     this.router.navigate(['']);
    //   } else {
    //     window.alert('Invalid Credentials');
    //   }
    // });
  }
}
