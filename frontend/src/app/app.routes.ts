import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    // Role-based redirection root
    {
        path: '',
        loadComponent: () =>
            import('./core/redirect/redirect-by-role.component').then(m => m.RedirectByRoleComponent),
    },

    // Public Routes
    {
        path: 'login',
        loadComponent: () =>
            import('./modules/auth/login/login.component').then(m => m.LoginComponent),
        canActivate: [authGuard],
        data: { authOnly: false },
    },
    {
        path: 'signup',
        loadComponent: () =>
            import('./modules/auth/signup/signup.component').then(m => m.SignupComponent),
        canActivate: [authGuard],
        data: { authOnly: false },
    },
    {
        path: 'forgot-password',
        loadComponent: () =>
            import('./modules/auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent),
        canActivate: [authGuard],
        data: { authOnly: false },
    },

    // Admin Routes
    {
        path: '',
        loadComponent: () =>
            import('./shared/components/layout/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
        canActivate: [authGuard],
        data: { authOnly: true, roles: ['admin'] },
        children: [
            { path: 'admin-dashboard', loadComponent: () => import('./modules/admin/dashboard/dashboard.component').then(m => m.DashboardComponent) },
            { path: 'users', loadComponent: () => import('./modules/admin/users/users.component').then(m => m.UsersComponent) },
            { path: 'providers', loadComponent: () => import('./modules/admin/providers/providers.component').then(m => m.ProvidersComponent) },
            { path: 'bookings', loadComponent: () => import('./modules/admin/bookings/bookings.component').then(m => m.BookingsComponent) },
            { path: 'support-tickets', loadComponent: () => import('./modules/admin/support-tickets/support-tickets.component').then(m => m.SupportTicketsComponent) },
            { path: 'audit-logs', loadComponent: () => import('./modules/admin/audit-logs/audit-logs.component').then(m => m.AuditLogsComponent) },
            { path: 'settings', loadComponent: () => import('./modules/admin/settings/settings.component').then(m => m.SettingsComponent) },
        ]
    },

    // Provider Routes
    {
        path: '',
        loadComponent: () =>
            import('./shared/components/layout/provider-layout/provider-layout.component').then(m => m.ProviderLayoutComponent),
        canActivate: [authGuard],
        data: { authOnly: true, roles: ['provider'] },
        children: [
            { path: 'provider-dashboard', loadComponent: () => import('./modules/provider/dashboard/dashboard.component').then(m => m.DashboardComponent) }
        ]
    },

    // Wildcard
    {
        path: '**',
        redirectTo: '',
    }
];
