/* eslint-disable @next/next/no-img-element */
import { LuLogOut } from 'react-icons/lu'
import { Button } from '../button'

export const Profile = () => {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/pabloxt14.png"
        alt=""
        className="size-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="truncate text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Pablo Alan
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          pabloxt14@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost" className="ml-auto">
        <LuLogOut className="size-5 text-zinc-500" />
      </Button>
    </div>
  )
}
