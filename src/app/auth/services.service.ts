import { NgxSpinnerService } from 'ngx-spinner';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private toast: ToastrService,
    private spin: NgxSpinnerService
  ) {}
  // LOGIN
  signIn(email: string, password: any) {
    // this.toast.show();
    this.spin.show();
    this.auth.signInWithEmailAndPassword(email, password).then(
      () => {
        this.spin.hide();
        localStorage.setItem('token', 'true');
        this.toast.success('Redirecting...', 'Signed In Successfully!');
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 2000);
      },
      (err) => {
        this.spin.hide();
        this.toast.error(err.message);
        console.log(err);
      }
    );
  }

  // REGISTER
  signUp(email: string, password: string) {
    this.spin.show();
    this.auth.createUserWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem;
        this.spin.hide();
        this.toast.success('Woohoo!', 'Account Created Successfully');
        this.router.navigate(['/login']);
      },
      (err) => {
        this.spin.hide();
        this.toast.error(err.message);
      }
    );
  }

  // SIGNOUT
  signOut() {
    this.spin.show();
    this.auth.signOut().then(
      () => {
        this.spin.hide();
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      (err) => {
        this.spin.hide();
        this.toast.error(err.message);
      }
    );
  }
}
