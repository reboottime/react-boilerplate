import { NavLink, Outlet } from 'react-router-dom';

import Separator from 'shared/components/ui/separator';

import NavMenu from './nav-menu';

export default function AppLayout() {
  return (
    <div className='flex h-full bg-gray-100'>
      <aside className='h-full bg-white w-[240px] border-r'>
        <nav className='pt-6'>
          <NavLink className='block w-[40px] ml-4'
            to='/app'>
            <img alt='demo logo'
              src='/static/imgs/logo.png' />
          </NavLink>
          <Separator className='my-6' />
          <ul className='list-none'>
            <li className='mb-[1px]'>
              <NavMenu
                label="bookings"
                to='/app/bookings'
              />
            </li>
            <li>
              <NavMenu
                label='Settings'
                subMenus={[
                  {
                    label: 'profile',
                    to: 'profile',
                  },
                  {
                    label: 'developer',
                    to: 'developer',
                  },
                  {
                    label: 'billing',
                    to: 'billing'
                  }
                ]}
                to='/app/settings'
              />
            </li>
          </ul>
        </nav>
      </aside>
      <main className='flex-1 p-6 h-full overflow-hidden'>
        <Outlet />
      </main>
    </div>
  );
}
