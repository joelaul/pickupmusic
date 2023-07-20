/* eslint-disable @next/next/no-img-element */
'use client';

import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { classNames } from '@/lib/css/classNames';

import { MENU_ITEMS } from '@/components/Nav/constants';
import { BADGES_ACQUIRED } from '@/components/Badges/constants';

export const Nav = () => {
  const pathname = usePathname();

  function isCurrent(href: string) {
    return pathname === href;
  }

  return (
    <Disclosure as="nav" className="bg-indigo-800">
      {({ open }) => (
        <>

          {/* Nav - container */}
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

            {/* Nav - full bar */}
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Nav - left side */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

                {/* pickupmusic logo */}
                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <Image
                      className="h-8 w-auto"
                      src="/logo.png"
                      width={500}
                      height={500}
                      alt="pickupmusic"
                    />
                  </a>
                </div>

                {/* menu items - DYNAMIC; COPY JARED */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">

                    {MENU_ITEMS.map(({ title, href }) => (
                      <a
                        key={title}
                        href={href}
                        className={classNames(
                          isCurrent(href)
                            ? 'bg-indigo-900 text-white'
                            : 'text-gray-300 hover:bg-indigo-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                        aria-current={isCurrent(href) ? 'page' : undefined}
                      >
                        {title}
                      </a>
                    ))}

                  </div>
                </div>
              </div>
              
              {/* Nav - right side */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
                {/* Badge preview */}
                <div className="h-6 grid grid-cols-5 gap-1 hover:scale-105 hover:cursor-pointer">

                  {BADGES_ACQUIRED.slice(-5).toReversed().map(({ src }) => (
                    <div key="name">
                      <img
                        alt="5 newest badges"
                        src={src}
                        className="h-6 rounded-full bg-yellow-400"
                        ></img>
                    </div>
                  ))}
                  
                </div>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-indigo-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full"
                        width={280}
                        height={280}
                        src="/sam.png"
                        alt="profile"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/settings"
                            className={classNames(
                              active ? 'bg-indigo-100' : '',
                              'block px-4 py-2 text-sm text-gray-700',
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

              </div>

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {MENU_ITEMS.map(({ title, href }) => (
                <Disclosure.Button
                  key={title}
                  as="a"
                  href={href}
                  className={classNames(
                    isCurrent(href)
                      ? 'bg-indigo-900 text-white'
                      : 'text-gray-300 hover:bg-indigo-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                  aria-current={isCurrent(href) ? 'page' : undefined}
                >
                  {title}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>

        </>
      )}
    </Disclosure>
  );
};
