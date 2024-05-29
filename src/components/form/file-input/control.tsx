'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './root'

export type ControlProps = ComponentProps<'input'>

export const Control = (props: ControlProps) => {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) return

    const files = Array.from(event.target.files)

    onFilesSelected(files)
  }

  return (
    <input
      type="file"
      id={id}
      className="sr-only"
      onChange={handleFilesSelected}
      {...props}
    />
  )
}
