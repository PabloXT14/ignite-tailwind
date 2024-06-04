import { LogoIcon } from '@/assets/logo-icon'

export const Logo = () => {
  return (
    <strong className="mx-1 flex items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
      <LogoIcon />
      <span>Untitled UI</span>
    </strong>
  )
}
