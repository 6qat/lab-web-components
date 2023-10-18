import React from 'react';
import Image from 'next/image';
import ThemeSwitcher from '@/components/theme-switcher';

let MobileSandwich = () => (
    <button
        data-collapse-toggle='navbar-user'
        type='button'
        className='inline-flex h-8 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
        aria-controls='navbar-user'
        aria-expanded='false'
    >
        <span className='sr-only'>Open main menu</span>
        <svg
            className='h-5 w-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
        >
            <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
            />
        </svg>
    </button>
);

let UserDropDownMenu = () => (
    <div
        className='z-50 my-4 hidden list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700'
        id='user-dropdown'
    >
        <div className='px-4 py-3'>
            <span className='block text-sm text-gray-900 dark:text-white'>
                Bonnie Green
            </span>
            <span className='block truncate  text-sm text-gray-500 dark:text-gray-400'>
                name@flowbite.com
            </span>
        </div>
        <ul className='py-2' aria-labelledby='user-menu-button'>
            <li>
                <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                    Dashboard
                </a>
            </li>
            <li>
                <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                    Settings
                </a>
            </li>
            <li>
                <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                    Earnings
                </a>
            </li>
            <li>
                <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                    Sign out
                </a>
            </li>
        </ul>
    </div>
);

let MainMenu = () => (
    <div
        className='hidden w-full items-center justify-between md:flex md:w-auto'
        id='navbar-user'
    >
        <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900'>
            <li>
                <a
                    href='#'
                    className='block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500'
                    aria-current='page'
                >
                    Home
                </a>
            </li>
            <li>
                <a
                    href='#'
                    className='block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
                >
                    About
                </a>
            </li>
            <li>
                <a
                    href='#'
                    className='block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
                >
                    Services
                </a>
            </li>
            <li>
                <a
                    href='#'
                    className='block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
                >
                    Pricing
                </a>
            </li>
            <li>
                <a
                    href='#'
                    className='block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
                >
                    Contact
                </a>
            </li>
        </ul>
    </div>
);

function MainNavbar() {
    return (
        <nav className='border-gray-200 bg-white dark:bg-gray-900'>
            <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
                <a href='https://flowbite.com/' className='flex items-center'>
                    <Image
                        src='https://flowbite.com/docs/images/logo.svg'
                        className='mr-3 h-8'
                        alt='Flowbite Logo'
                        width={32}
                        height={32}
                    />
                    <span className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>
                        Flowbite
                    </span>
                </a>

                <MainMenu />

                <div className='flex justify-end'>
                    <ThemeSwitcher mode='toggle' className='h-8 w-8' />

                    <button
                        type='button'
                        className='mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0'
                        id='user-menu-button'
                        aria-expanded='false'
                        data-dropdown-toggle='user-dropdown'
                        data-dropdown-placement='bottom'
                    >
                        <span className='sr-only'>Open user menu</span>
                        <Image
                            className='h-8 w-8 rounded-full'
                            src='https://i.pravatar.cc/32'
                            alt='user photo'
                            width={32}
                            height={32}
                        />
                    </button>
                    <UserDropDownMenu />
                    <MobileSandwich />
                </div>
            </div>
        </nav>
    );
}

export default MainNavbar;