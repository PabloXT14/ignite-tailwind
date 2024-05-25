import {
  LuBarChart2,
  LuCheckSquare,
  LuFlag,
  LuHome,
  LuLayers,
  LuUsers,
} from 'react-icons/lu'
import { NavItem } from './nav-item'

export const MainNavigation = () => {
  return (
    <nav className="space-y-0.5">
      <NavItem title="Home" icon={LuHome} />
      <NavItem title="Dashboard" icon={LuBarChart2} />
      <NavItem title="Projects" icon={LuLayers} />
      <NavItem title="Tasks" icon={LuCheckSquare} />
      <NavItem title="Reporting" icon={LuFlag} />
      <NavItem title="Users" icon={LuUsers} />
    </nav>
  )
}
