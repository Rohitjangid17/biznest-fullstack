import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { AdminLayoutComponent } from './shared/components/layout/admin-layout/admin-layout.component';

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

  // super admin routes
  {
    path: 'super-admin',
    loadComponent: () => import("./shared/components/layout/admin-layout/admin-layout.component").then(m => m.AdminLayoutComponent),
    // canActivate: [authGuard],
    data: { authOnly: true, roles: ['super-admin'] },
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./modules/super-admin/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'role-management',
        children: [
          {
            path: 'roles',
            loadComponent: () =>
              import('./modules/super-admin/role-management/role-management/role-management.component').then(
                (m) => m.RoleManagementComponent
              ),
          },
          {
            path: 'permissions',
            loadComponent: () =>
              import('./modules/super-admin/role-management/permission-assignment/permission-assignment.component').then(
                (m) => m.PermissionAssignmentComponent
              ),
          },
        ],
      },
      {
        path: 'system-settings',
        children: [
          {
            path: 'commission',
            loadComponent: () =>
              import('./modules/super-admin/system-settings/commission-tax-settings/commission-tax-settings.component').then(
                (m) => m.CommissionTaxSettingsComponent
              ),
          },
          {
            path: 'payment-gateways',
            loadComponent: () =>
              import('./modules/super-admin/system-settings/payment-gateway-configurations/payment-gateway-configurations.component').then(
                (m) => m.PaymentGatewayConfigurationsComponent
              ),
          },
          {
            path: 'config',
            loadComponent: () =>
              import('./modules/super-admin/system-settings/global-configurations/global-configurations.component').then(
                (m) => m.GlobalConfigurationsComponent
              ),
          },
        ],
      },
      {
        path: 'audit-security',
        children: [
          {
            path: 'audit-logs',
            loadComponent: () =>
              import('./modules/super-admin/audit-security/audit-logs/audit-logs.component').then(
                (m) => m.AuditLogsComponent
              ),
          },
          {
            path: 'login-history',
            loadComponent: () =>
              import('./modules/super-admin/audit-security/security/security.component').then(
                (m) => m.SecurityComponent
              ),
          },
        ],
      },
      {
        path: 'reports-analytics',
        children: [
          {
            path: 'reports',
            loadComponent: () =>
              import('./modules/super-admin/reports-analytics/global-reports/global-reports.component').then(
                (m) => m.GlobalReportsComponent
              ),
          },
          {
            path: 'campaign-reports',
            loadComponent: () =>
              import('./modules/super-admin/reports-analytics/campaign-impact-reports/campaign-impact-reports.component').then(
                (m) => m.CampaignImpactReportsComponent
              ),
          },
        ],
      },
    ],
  },
  // { path: '', redirectTo: 'super-admin/dashboard', pathMatch: 'full' },
  // { path: '**', redirectTo: 'super-admin/dashboard' },

  // Admin Routes
  {
    path: 'admin',
    loadComponent: () => import("./shared/components/layout/admin-layout/admin-layout.component").then(m => m.AdminLayoutComponent),
    // canActivate: [authGuard],
    data: { authOnly: true, roles: ['admin'] },
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./modules/admin/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'user-management',
        children: [
          {
            path: 'customers',
            loadComponent: () =>
              import('./modules/admin/user-management/customer/customer.component').then(
                (m) => m.CustomerComponent
              ),
          },
          {
            path: 'providers',
            loadComponent: () =>
              import('./modules/admin/user-management/provider/provider.component').then(
                (m) => m.ProviderComponent
              ),
          },
        ],
      },
      {
        path: 'service-management',
        children: [
          {
            path: 'categories',
            loadComponent: () =>
              import('./modules/admin/service-management/category-service/category-service.component').then(
                (m) => m.CategoryServiceComponent
              ),
          },
          // {
          //   path: 'services',
          //   loadComponent: () =>
          //     import('./modules/admin/service-management').then(
          //       (m) => m.ServicesComponent
          //     ),
          // },
        ],
      },
      {
        path: 'booking-management',
        children: [
          {
            path: 'bookings',
            loadComponent: () =>
              import('./modules/admin/booking-management/bookings/bookings.component').then(
                (m) => m.BookingsComponent
              ),
          },
          {
            path: 'disputes',
            loadComponent: () =>
              import('./modules/admin/booking-management/dispute-resolution/dispute-resolution.component').then(
                (m) => m.DisputeResolutionComponent
              ),
          },
        ],
      },
      {
        path: 'payment-management',
        children: [
          {
            path: 'transactions',
            loadComponent: () =>
              import('./modules/admin/payment-management/transactions/transactions.component').then(
                (m) => m.TransactionsComponent
              ),
          },
          {
            path: 'payouts',
            loadComponent: () =>
              import('./modules/admin/payment-management/provider-payouts/provider-payouts.component').then(
                (m) => m.ProviderPayoutsComponent
              ),
          },
          {
            path: 'revenue-reports',
            loadComponent: () =>
              import('./modules/admin/payment-management/revenue-reports/revenue-reports.component').then(
                (m) => m.RevenueReportsComponent
              ),
          },
        ],
      },
      {
        path: 'content-management',
        children: [
          // {
          //   path: 'banners',
          //   loadComponent: () =>
          //     import('./pages/admin/content-management/banners/banners.component').then(
          //       (m) => m.BannersComponent
          //     ),
          // },
          {
            path: 'promotions',
            loadComponent: () =>
              import('./modules/admin/content-management/promotions/promotions.component').then(
                (m) => m.PromotionsComponent
              ),
          },
          {
            path: 'notifications',
            loadComponent: () =>
              import('./modules/admin/content-management/notifications/notifications.component').then(
                (m) => m.NotificationsComponent
              ),
          },
          // {
          //   path: 'faqs',
          //   loadComponent: () =>
          //     import('./pages/admin/content-management/faqs/faqs.component').then(
          //       (m) => m.FaqsComponent
          //     ),
          // },
        ],
      },
      {
        path: 'reports-analytics',
        children: [
          {
            path: 'reports',
            loadComponent: () =>
              import('./modules/admin/reports-analytics/reports/reports.component').then(
                (m) => m.ReportsComponent
              ),
          },
        ],
      },
    ],
  },
  // { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' },
  // { path: '**', redirectTo: 'admin/dashboard' },

  // Marketing Routes
  {
    path: 'marketing',
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./modules/marketing-manager/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'campaign-management',
        children: [
          {
            path: 'campaigns',
            loadComponent: () =>
              import('./modules/marketing-manager/campaign-management/campaign/campaign.component').then(
                (m) => m.CampaignComponent
              ),
          },
          {
            path: 'referrals',
            loadComponent: () =>
              import('./modules/marketing-manager/campaign-management/referral-campaign/referral-campaign.component').then(
                (m) => m.ReferralCampaignComponent
              ),
          },
        ],
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('./modules/marketing-manager/notifications/notifications.component').then(
            (m) => m.NotificationsComponent
          ),
      },
      {
        path: 'reports-analytics',
        children: [
          {
            path: 'engagement',
            loadComponent: () =>
              import('./modules/marketing-manager/reports/user-engagement-reports/user-engagement-reports.component').then(
                (m) => m.UserEngagementReportsComponent
              ),
          },
          // {
          //   path: 'referral-tracking',
          //   loadComponent: () =>
          //     import('./pages/marketing/reports-analytics/referral-tracking/referral-tracking.component').then(
          //       (m) => m.ReferralTrackingComponent
          //     ),
          // },
        ],
      },
    ],
  },
  // { path: '', redirectTo: 'marketing/dashboard', pathMatch: 'full' },
  // { path: '**', redirectTo: 'marketing/dashboard' },

  // Service Provider Routes
  {
    path: 'service-provider',
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./modules/service-provider/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'service-management',
        children: [
          {
            path: 'services',
            loadComponent: () =>
              import('./modules/service-provider/service-management/services/services.component').then(
                (m) => m.ServicesComponent
              ),
          },
          {
            path: 'pricing',
            loadComponent: () =>
              import('./modules/service-provider/service-management/pricing-availability/pricing-availability.component').then(
                (m) => m.PricingAvailabilityComponent
              ),
          },
        ],
      },
      {
        path: 'booking-management',
        children: [
          {
            path: 'booking-requests',
            loadComponent: () =>
              import('./modules/service-provider/booking-management/booking-requests/booking-requests.component').then(
                (m) => m.BookingRequestsComponent
              ),
          },
          {
            path: 'active-bookings',
            loadComponent: () =>
              import('./modules/service-provider/booking-management/active-bookings/active-bookings.component').then(
                (m) => m.ActiveBookingsComponent
              ),
          },
          {
            path: 'booking-history',
            loadComponent: () =>
              import('./modules/service-provider/booking-management/booking-history/booking-history.component').then(
                (m) => m.BookingHistoryComponent
              ),
          },
        ],
      },
      {
        path: 'payment-management',
        children: [
          {
            path: 'earnings',
            loadComponent: () =>
              import('./modules/service-provider/payment-management/earnings/earnings.component').then(
                (m) => m.EarningsComponent
              ),
          },
          {
            path: 'withdraw',
            loadComponent: () =>
              import('./modules/service-provider/payment-management/withdraw-funds/withdraw-funds.component').then(
                (m) => m.WithdrawFundsComponent
              ),
          },
          // {
          //   path: 'commissions',
          //   loadComponent: () =>
          //     import('./modules/service-provider/service-management/').then(
          //       (m) => m.CommissionsComponent
          //     ),
          // },
        ],
      },
      {
        path: 'profile',
        children: [
          {
            path: 'profile',
            loadComponent: () =>
              import('./modules/service-provider/profile/provider-profile/provider-profile.component').then(
                (m) => m.ProviderProfileComponent
              ),
          },
          {
            path: 'reviews',
            loadComponent: () =>
              import('./modules/service-provider/profile/reviews/reviews.component').then(
                (m) => m.ReviewsComponent
              ),
          },
        ],
      },
      {
        path: 'support',
        children: [
          {
            path: 'training',
            loadComponent: () =>
              import('./modules/service-provider/support/training-resources/training-resources.component').then(
                (m) => m.TrainingResourcesComponent
              ),
          },
          {
            path: 'support',
            loadComponent: () =>
              import('./modules/service-provider/support/help-support/help-support.component').then(
                (m) => m.HelpSupportComponent
              ),
          },
        ],
      },
    ],
  },
  // { path: '', redirectTo: 'service-provider/dashboard', pathMatch: 'full' },
  // { path: '**', redirectTo: 'service-provider/dashboard' },

  // Wildcard
  {
    path: '**',
    redirectTo: '',
  }
];
