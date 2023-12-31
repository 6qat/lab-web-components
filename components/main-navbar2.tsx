'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';
import ThemeSwitcher from '@/components/theme-switcher';

export default function MainNavbar2() {
  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand href='https://flowbite-react.com'>
        <Image
          src='https://flowbite.com/docs/images/logo.svg'
          className='mr-3 h-8'
          alt='Flowbite Logo'
          width={32}
          height={32}
        />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className='flex items-center gap-2 md:order-2'>
        <ThemeSwitcher
          mode='toggle'
          className='h-7 w-7 px-1'
        />
        <Dropdown
          className=''
          arrowIcon={false}
          inline
          label={
            <Avatar
              className='max-md:mr-1'
              alt='User settings'
              img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className='block text-sm'>Bonnie Green</span>
            <span className='block truncate text-sm font-medium'>
              name@flowbite.com
            </span>
          </Dropdown.Header>

          <Dropdown.Item href='/dashboard'>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>

          <Dropdown.Divider />

          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className='md:block'>
        <Navbar.Link
          href='/'
          active
        >
          Home
        </Navbar.Link>
        <Navbar.Link href='#'>About</Navbar.Link>
        <Navbar.Link href='#'>Services</Navbar.Link>
        <Navbar.Link href='#'>Pricing</Navbar.Link>
        <Navbar.Link href='#'>Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
