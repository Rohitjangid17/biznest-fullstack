import { Menu } from "../app/shared/interfaces/common";

// super admin menu
export const superAdminMenu: Menu[] = [
  { path: "super-admin/dashboard", icon: "dashboard", label: "Dashboard" },
  {
    label: 'Role Management',
    icon: 'supervised_user_circle',
    children: [
      { label: 'Manage Roles', path: '/super-admin/role-management/roles' },
      { label: 'Assign Permissions', path: '/super-admin/role-management/permissions' }
    ]
  },
  {
    label: 'System Settings',
    icon: 'settings',
    children: [
      { label: 'Commission & Tax', path: '/super-admin/system-settings/commission' },
      { label: 'Payment Gateways', path: '/super-admin/system-settings/payment-gateways' },
      { label: 'Global Configurations', path: '/super-admin/system-settings/config' }
    ]
  },
  {
    label: 'Audit & Security',
    icon: 'security',
    children: [
      { label: 'Audit Logs', path: '/super-admin/audit-security/audit-logs' },
      { label: 'Login History', path: '/super-admin/audit-security/login-history' }
    ]
  },
  {
    label: 'Reports & Analytics',
    icon: 'bar_chart',
    children: [
      { label: 'Global Reports', path: '/super-admin/reports-analytics/reports' },
      { label: 'Campaign Impact', path: '/super-admin/reports-analytics/campaign-reports' }
    ]
  }
]

// admin menu
export const adminMenu: Menu[] = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    path: '/admin/dashboard'
  },
  {
    label: 'User Management',
    icon: 'group',
    children: [
      { label: 'Customers', path: '/admin/user-management/customers' },
      { label: 'Providers', path: '/admin/user-management/providers' }
    ]
  },
  {
    label: 'Service Management',
    icon: 'build',
    children: [
      { label: 'Categories', path: '/admin/service-management/categories' },
      { label: 'Services', path: '/admin/service-management/services' }
    ]
  },
  {
    label: 'Bookings Management',
    icon: 'event',
    children: [
      { label: 'Manage Bookings', path: '/admin/booking-management/bookings' },
      { label: 'Disputes', path: '/admin/booking-management/disputes' }
    ]
  },
  {
    label: 'Payment Management',
    icon: 'payments',
    children: [
      { label: 'Transactions', path: '/admin/payment-management/transactions' },
      { label: 'Provider Payouts', path: '/admin/payment-management/payouts' },
      { label: 'Revenue Reports', path: '/admin/payment-management/revenue-reports' }
    ]
  },
  {
    label: 'Content Management',
    icon: 'content_copy',
    children: [
      { label: 'Banners', path: '/admin/content-management/banners' },
      { label: 'Promotions', path: '/admin/content-management/promotions' },
      { label: 'Notifications', path: '/admin/content-management/notifications' },
      { label: 'FAQs', path: '/admin/content-management/faqs' }
    ]
  },
  {
    label: 'Reports & Analytics',
    icon: 'analytics',
    path: '/admin/reports-analytics/reports'
  }
]

// finance menu
export const financeMenu: Menu[] = [
  { label: 'Dashboard', icon: 'dashboard', path: '/finance/dashboard' },
  {
    label: 'Transactions',
    icon: 'receipt_long',
    children: [
      { label: 'Transaction History', path: '/finance/transactions' },
      { label: 'Transaction Details', path: '/finance/transaction-details' }
    ]
  },
  {
    label: 'Refund & Disputes',
    icon: 'assignment_return',
    children: [
      { label: 'Refund Requests', path: '/finance/refunds' },
      { label: 'Disputes', path: '/finance/disputes' }
    ]
  },
  {
    label: 'Commissions',
    icon: 'calculate',
    children: [
      { label: 'Commission Reports', path: '/finance/commission-reports' },
      { label: 'Export Reports', path: '/finance/export-reports' }
    ]
  }
]

// support menu
export const supportMenu: Menu[] = [
  { label: 'Dashboard', icon: 'dashboard', path: '/support/dashboard' },
  {
    label: 'Ticket Management',
    icon: 'support_agent',
    children: [
      { label: 'All Tickets', path: '/support/tickets' },
      { label: 'Escalations', path: '/support/escalations' }
    ]
  },
  {
    label: 'Communication',
    icon: 'chat',
    children: [
      { label: 'Chat', path: '/support/chat' },
      { label: 'Email', path: '/support/email' }
    ]
  }
]

// marketing menu
export const marketingMenu: Menu[] = [
  { label: 'Dashboard', icon: 'dashboard', path: '/marketing/dashboard' },
  {
    label: 'Campaign Management',
    icon: 'campaign',
    children: [
      { label: 'Create Campaigns', path: '/marketing/campaign-management/campaigns' },
      { label: 'Referral Campaigns', path: '/marketing/campaign-management/referrals' }
    ]
  },
  {
    label: 'Notifications',
    icon: 'notifications',
    path: '/marketing/notifications'
  },
  {
    label: 'Reports & Analytics',
    icon: 'bar_chart',
    children: [
      { label: 'User Engagement', path: '/marketing/reports-analytics/engagement' },
      { label: 'Referral Tracking', path: '/marketing/reports-analytics/referral-tracking' }
    ]
  }
]

// provider menu
export const providerMenu: Menu[] = [
  { label: 'Dashboard', icon: 'dashboard', path: '/service-provider/dashboard' },
  {
    label: 'Service Management',
    icon: 'home_repair_service',
    children: [
      { label: 'My Services', path: '/service-provider/service-management/services' },
      { label: 'Pricing & Availability', path: '/service-provider/service-management/pricing' }
    ]
  },
  {
    label: 'Booking Management',
    icon: 'event_note',
    children: [
      { label: 'Booking Requests', path: '/service-provider/booking-management/booking-requests' },
      { label: 'Active Bookings', path: '/service-provider/booking-management/active-bookings' },
      { label: 'Booking History', path: '/service-provider/booking-management/booking-history' }
    ]
  },
  {
    label: 'Payment Management',
    icon: 'payments',
    children: [
      { label: 'Earnings Dashboard', path: '/service-provider/payment-management/earnings' },
      { label: 'Withdraw Funds', path: '/service-provider/payment-management/withdraw' },
      { label: 'Commission History', path: '/service-provider/payment-management/commissions' }
    ]
  },
  {
    label: 'Profile',
    icon: 'person',
    children: [
      { label: 'My Profile', path: '/service-provider/profile/profile' },
      { label: 'Reviews', path: '/service-provider/profile/reviews' }
    ]
  },
  {
    label: 'Support',
    icon: 'help',
    children: [
      { label: 'Training', path: '/service-provider/support/training' },
      { label: 'Help & Support', path: '/service-provider/support/support' }
    ]
  }
]

// client menu
export const clientMenu: Menu[] = [
  { label: 'Home', icon: 'home', path: '/client/home' },
  {
    label: 'Discover Services',
    icon: 'search',
    children: [
      { label: 'Categories', path: '/client/categories' },
      { label: 'Service List', path: '/client/services' }
    ]
  },
  {
    label: 'Bookings',
    icon: 'event',
    children: [
      { label: 'New Booking', path: '/client/book' },
      { label: 'My Bookings', path: '/client/my-bookings' }
    ]
  },
  {
    label: 'Payments',
    icon: 'account_balance_wallet',
    children: [
      { label: 'My Wallet', path: '/client/wallet' },
      { label: 'Saved Payment Methods', path: '/client/payment-methods' }
    ]
  },
  {
    label: 'Profile',
    icon: 'person',
    children: [
      { label: 'My Profile', path: '/client/profile' },
      { label: 'Addresses', path: '/client/addresses' },
      { label: 'Notifications', path: '/client/notifications' }
    ]
  },
  {
    label: 'Support',
    icon: 'help_outline',
    children: [
      { label: 'My Reviews', path: '/client/reviews' },
      { label: 'Help / FAQ', path: '/client/faq' },
      { label: 'Contact Support', path: '/client/support' }
    ]
  }
]
