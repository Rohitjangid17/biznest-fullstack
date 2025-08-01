import { Menu } from "../app/shared/interfaces/common";

export const providerMenu: Menu[] = [
    { path: '/provider-dashboard', icon: 'dashboard', label: 'Dashboard' },
    { path: '/bookings', icon: 'event', label: 'Bookings' },
    { path: '/services', icon: 'build_circle', label: 'Services' },
    { path: '/availability', icon: 'schedule', label: 'Availability' },
    { path: '/earnings', icon: 'attach_money', label: 'Earnings' },
    { path: '/ratings', icon: 'star_rate', label: 'Ratings & Reviews' },
    { path: '/documents', icon: 'folder', label: 'Documents' },
    { path: '/notifications', icon: 'notifications', label: 'Notifications' },
    { path: '/profile', icon: 'person', label: 'Profile' },
    { path: '/settings', icon: 'settings', label: 'Settings' }
];
