'use client'

import {
  LuBarChart2,
  LuCheckSquare,
  LuCog,
  LuFlag,
  LuHome,
  LuLayers,
  LuLifeBuoy,
  LuSearch,
  LuUsers,
  LuMenu,
} from 'react-icons/lu'
import { Logo } from './logo'
import { NavItem } from './nav-item'
import { UsedSpaceWidget } from './used-space-widget'
import { Profile } from './profile'
import * as Input from '../input'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../button'
import { twMerge } from 'tailwind-merge'

export const Sidebar = () => {
  return (
    <Collapsible.Root
      className={twMerge(
        'fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 overflow-y-auto border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0',
        'lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0',
        'dark:border-zinc-800 dark:bg-zinc-900',
      )}
    >
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <LuMenu className="size-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <LuSearch className="size-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="Search" />
        </Input.Root>

        <nav className="space-y-0.5">
          <NavItem title="Home" icon={LuHome} />
          <NavItem title="Dashboard" icon={LuBarChart2} />
          <NavItem title="Projects" icon={LuLayers} />
          <NavItem title="Tasks" icon={LuCheckSquare} />
          <NavItem title="Reporting" icon={LuFlag} />
          <NavItem title="Users" icon={LuUsers} />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LuLifeBuoy} />
            <NavItem title="Settings" icon={LuCog} />
          </nav>

          <UsedSpaceWidget />

          <div className="h-px bg-zinc-200" />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
