import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginError: boolean = false;
  formSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      cedula: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      contrasena: ['', Validators.required],
    });
  }

  onSubmit(): void {

  }

  hasErrors(controlName: string, errorName: string): boolean {
    return this.loginForm.controls[controlName].hasError(errorName);
  }
}