import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonStyles = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm transition-colors',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active:opacity-80',
  ],
  variants: {
    variant: {
      primary: 'bg-violet-600 text-white hover:bg-violet-700',
      ghost: 'rounded-md px-2 hover:bg-zinc-50 shadow-none',
      outline: 'border border-zinc-300 text-zinc-700 hover:bg-zinc-50',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonStyles>

export const Button = ({ variant, className, ...props }: ButtonProps) => {
  return <button className={buttonStyles({ variant, className })} {...props} />
}