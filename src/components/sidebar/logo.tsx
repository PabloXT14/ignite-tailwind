import { LogoIcon } from '@/assets/logo-icon'

export const Logo = () => {
  return (
    <strong className="flex items-center gap-2 text-xl font-semibold text-zinc-900">
      <LogoIcon />
      <span>Untitled UI</span>
    </strong>
  )
}
