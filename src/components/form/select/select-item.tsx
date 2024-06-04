'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { LuCheck } from 'react-icons/lu'

export type SelectItemProps = SelectPrimitive.SelectItemProps & {
  text: string
}

export const SelectItem = ({ text, ...props }: SelectItemProps) => {
  return (
    <SelectPrimitive.Item
      className="flex cursor-pointer items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50 dark:data-[highlighted]:bg-zinc-700"
      {...props}
    >
      <SelectPrimitive.ItemText asChild>
        <span className="text-black dark:text-zinc-100">{text}</span>
      </SelectPrimitive.ItemText>

      <SelectPrimitive.ItemIndicator>
        <LuCheck className="size-4 text-violet-500 dark:text-violet-300" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}
