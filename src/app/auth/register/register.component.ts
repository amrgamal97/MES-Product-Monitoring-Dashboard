import { ServicesService } from './../services.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  username: FormControl;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  notFound: string;
  constructor(private data: ServicesService) {
    this.InitialValues();
    this.createForm();
  }

  InitialValues() {
    this.username = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]);
    this.confirmPassword = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]);
  }

  createForm() {
    this.myForm = new FormGroup(
      {
        username: this.username,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      },
      { validators: this.validatePassword }
    );
  }

  validatePassword: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let password = group.get('password')?.value;
    let confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passError: true };
  };

  onSubmit() {
    this.data.signUp(this.email.value, this.password.value);
  }

  ngOnInit(): void {}
}
