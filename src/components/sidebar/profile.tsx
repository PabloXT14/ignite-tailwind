import { LuLogOut } from 'react-icons/lu'

export const Profile = () => {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/pabloxt14.png"
        alt=""
        className="size-10 rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="truncate text-sm font-semibold text-zinc-700">
          Pablo Alan
        </span>
        <span className="truncate text-sm text-zinc-500">
          pabloxt14@gmail.com
        </span>
      </div>

      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LuLogOut className="size-5 text-zinc-500" />
      </button>
    </div>
  )
}
