'use client';

import { MenuItem } from '@/components/nav/menuitem';
import { ProfileDropdown } from '@/components/nav/profiledropdown';
import { useToggleControls } from '@/components/nav/useToggleControls';

const MENU_ITEMS: { title: string; href: string }[] = [
  { title: 'Dashboard', href: '/' },
  { title: 'Lessons', href: '/5-min-lessons' },
  { title: 'Search', href: '/search' },
];

/**
 * The navigation of the application.
 */
export default function Nav() {
  const [isMenuOpen, toggleMenu] = useToggleControls();
  const openMenuIconClassNames = isMenuOpen ? 'block' : 'hidden';
  const closedMenuIconClassNames = isMenuOpen ? 'hidden' : 'block';

  const [isProfileDropdownOpen, toggleProfileDropdown] = useToggleControls();

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`block h-6 w-6 ${closedMenuIconClassNames}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${openMenuIconClassNames}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="block h-8 w-auto lg:hidden"
                src="/logo.png"
                alt="pickupmusic"
              />
              <img
                className="hidden h-8 w-auto lg:block"
                src="/logo.png"
                alt="pickupmusic"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block" id="desktop-menu">
              <div className="flex space-x-4">
                {MENU_ITEMS.map(({ title, href }) => (
                  <MenuItem
                    block={false}
                    key={title}
                    title={title}
                    href={href}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  onClick={toggleProfileDropdown}
                  className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src="/sam.png" alt="" />
                </button>
              </div>

              <ProfileDropdown open={isProfileDropdownOpen} />
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {MENU_ITEMS.map(({ title, href }) => (
              <MenuItem block={true} key={title} title={title} href={href} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
