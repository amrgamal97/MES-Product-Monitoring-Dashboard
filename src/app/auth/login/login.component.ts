import { ServicesService } from '../services.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  email: FormControl;
  password: FormControl;
  notFound: string;
  constructor(private data: ServicesService) {
    this.InitialValues();
    this.createForm();
  }

  InitialValues() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.myForm = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }
  onSubmit() {
    this.data.signIn(this.email.value, this.password.value);
  }
  ngOnInit(): void {}
}
