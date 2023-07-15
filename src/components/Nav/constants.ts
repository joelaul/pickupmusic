import { NavItem } from '@/components/Nav/types';

export const NAV_MENU_BACKGROUND_COLOR_CLASS_NAMES = 'bg-gray-800';

export const NAV_MENU_SELECTED_BACKGROUND_COLOR_CLASS_NAMES = 'bg-gray-900';

export const NAV_MENU_ITEM_SELECTED_CLASS_NAMES = '';

export const MENU_ITEMS: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'Classes', href: '/classes' },
];

export const PROFILE_DROPDOWN_ITEMS: NavItem[] = [
  { title: 'Settings', href: '/settings' },
];
