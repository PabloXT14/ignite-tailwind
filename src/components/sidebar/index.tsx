import { LuSearch } from 'react-icons/lu'
import { Logo } from './logo'

export const Sidebar = () => {
  return (
    <aside className="space-y-6 overflow-y-auto border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <LuSearch className="size-5 text-zinc-500" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
        />
      </div>
    </aside>
  )
}
