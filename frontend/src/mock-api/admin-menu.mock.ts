import { Menu } from "../app/shared/interfaces/common";

export const adminMenu: Menu[] = [
    { path: '/admin-dashboard', icon: 'dashboard', label: 'Dashboard' },
    { path: '/users', icon: 'people', label: 'Users' },
    { path: '/providers', icon: 'engineering', label: 'Providers' },
    { path: '/bookings', icon: 'event', label: 'Bookings' },
    { path: '/payments', icon: 'payment', label: 'Payment & Payout' },
    { path: '/reports', icon: 'analytics', label: 'Reports & Analytics' },
    { path: '/support-tickets', icon: 'support_agent', label: 'Support Tickets' },
    { path: '/notifications', icon: 'notifications', label: 'Notifications' },
    { path: '/audit-logs', icon: 'history', label: 'Audit Logs' },
    { path: '/settings', icon: 'settings', label: 'Settings' }
];
