import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  hide: boolean = true;
  loginForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {
    this.loginForm = this._formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  login() {
    this._authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        const role = this._authService.getRole();
        if (role === 'admin') {
          this._router.navigate(['/admin-dashboard']);
        } else if (role === 'provider') {
          this._router.navigate(['/provider-dashboard']);
        } else {
          // fallback route, or maybe logout user
          this._router.navigate(['/login']);
        }
      },
      error: (error) => {
        console.error(error.message);
      }
    });
  }
}
