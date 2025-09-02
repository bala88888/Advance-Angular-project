import { Component, OnInit, } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  loginError = '';
  popupTitle: string = '';
  popupMessage: string = '';
  popupType: 'success' | 'error' = 'success';
  popupVisible: boolean=false;

  constructor(private authService: AuthService, private router: Router, private cdr: ChangeDetectorRef) {}

   ngOnInit(): void {
  }

 onLogin(): void {
  if (this.authService.login(this.username, this.password)) {
    this.showPopup('Success', 'Login successful !', 'success');
   // Wait 2 seconds, then navigate
    setTimeout(() => {
      if(this.popupVisible = false){
    this.router.navigate(['/demo']);
      }
    }, 100000);
  } else {
    this.loginError = 'Invalid credentials';
  }
}


  
  showPopup(title: string, message: string, type: 'success' | 'error') {
    this.popupTitle = title;
    this.popupMessage = message;
    this.popupType = type;
    this.popupVisible =true;;
        // Trigger change detection
    this.cdr.detectChanges();
  }

  closePopup() {
    this.popupVisible = false;
      this.router.navigate(['/demo']);
  }

}
