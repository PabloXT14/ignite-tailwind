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
} from 'react-icons/lu'
import { Logo } from './logo'
import { NavItem } from './nav-item'
import { UsedSpaceWidget } from './used-space-widget'
import { Profile } from './profile'
import * as Input from '../input'

export const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-6 overflow-y-auto overflow-x-hidden border-r border-zinc-200 px-5 py-8">
      <Logo />

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
    </aside>
  )
}
