import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    standalone: true,
    selector: 'app-redirect-by-role',
    template: '',
})
export class RedirectByRoleComponent {
    private router = inject(Router);
    private authService = inject(AuthService);

    constructor() {
        const token = this.authService.getToken();
        const role = this.authService.getRole();

        if (token && role) {
            if (role === 'admin') {
                this.router.navigate(['/admin-dashboard']);
            } else if (role === 'provider') {
                this.router.navigate(['/provider-dashboard']);
            } else {
                this.router.navigate(['/login']);
            }
        } else {
            this.router.navigate(['/login']);
        }
    }
}
