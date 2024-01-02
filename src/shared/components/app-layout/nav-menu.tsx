import * as Collapsible from '@radix-ui/react-collapsible';
import React, { useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { clsx } from 'shared/components/ui/utils';

// A good practice on grouping class names
const NAV_ITEM_DEFAULT_CLASSNAMES = clsx(
  'block capitalize py-1 pl-2  w-full',
  'hover:bg-blue-100 hover:text-blue-800',
  'focus:bg-blue-100 focus:text-blue-800',
);

export function NavMenuItem({ label, to, icon, className }: NavMenuItemProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(NAV_ITEM_DEFAULT_CLASSNAMES, className, {
          'text-blue-600 bg-blue-100': isActive,
          'font-semibold': isActive,
        })
      }
      to={to}
    >
      {icon && <span className='mr-2'>{icon}</span>} <span>{label}</span>
    </NavLink>
  );
}

export interface NavItemProps {
  className?: string;
  icon?: React.ReactElement;
  label: string | React.ReactElement;
  to: string;
}

export default function NavMenu({
  subMenus,
  ...navMenuItemProps
}: NavMenuItemProps) {
  const location = useLocation();
  const defaultOpen = useMemo(() => {
    return location.pathname.startsWith(navMenuItemProps.to);
  }, [navMenuItemProps, location.pathname]);

  if (!subMenus) {
    return <NavMenuItem {...navMenuItemProps} />;
  }

  return (
    <Collapsible.Root defaultOpen={defaultOpen}>
      <Collapsible.Trigger
        aria-current={defaultOpen
          ? 'page'
          : undefined}
        className={clsx(NAV_ITEM_DEFAULT_CLASSNAMES, 'py-0', {
          'text-blue-600': defaultOpen,
          'font-semibold': defaultOpen,
        })}
        tabIndex={0}
      >
        <div className='py-1 px-2 flex justify-between items-center'>
          <h4>
            {navMenuItemProps.icon && (
              <span className='mr-2'>{navMenuItemProps.icon}</span>
            )}
            <span className='capitalize'>{navMenuItemProps.label}</span>
          </h4>
          <svg
            className='w-4 h-4'
            fill='none'
            stroke='currentColor'
            strokeWidth='3'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d={
                defaultOpen
                  ? 'M4.5 15.75l7.5-7.5 7.5 7.5'
                  : 'M19.5 8.25l-7.5 7.5-7.5-7.5'
              }
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </Collapsible.Trigger>
      <Collapsible.Content className='py-1 pl-2'>
        <ul className='list-none ml-3'>
          {subMenus.map(({ to, ...navItemProps }: NavItemProps) => (
            <li className='mb-[1px] pl-2'
              key={navItemProps.label as string}>
              <NavMenuItem
                {...navItemProps}
                to={navMenuItemProps.to + '/' + to}
              />
            </li>
          ))}
        </ul>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}

export interface NavMenuItemProps extends NavItemProps {
  subMenus?: NavMenuItemProps[];
}
