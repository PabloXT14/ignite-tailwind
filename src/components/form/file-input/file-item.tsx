import { Button } from '@/components/button'
import { formatBytes } from '@/utils/format-bytes'
import { LuCheckCircle2, LuTrash2, LuUploadCloud } from 'react-icons/lu'

export type FileItemProps = {
  name: string
  size: number
}

export const FileItem = ({ name, size }: FileItemProps) => {
  const state = 'progress' as 'progress' | 'error' | 'complete'

  return (
    <div
      key={name}
      className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4"
    >
      <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
        <LuUploadCloud className="size-4" />
      </div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-error-700 text-sm font-medium">
              Upload failed, please try again.
            </span>
            <span className="text-error-600 text-sm">{name}</span>
          </div>

          <button
            type="button"
            className="text-error-700 hover:text-error-900 text-sm font-semibold"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700">{name}</span>
            <span className="text-sm text-zinc-500">{formatBytes(size)}</span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100">
              <div
                className="h-2 rounded-full bg-violet-600"
                style={{
                  width: state === 'complete' ? '100%' : '80%',
                }}
              />
            </div>
            <span className="text-sm font-medium text-zinc-700">
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <LuCheckCircle2 className="size-5 fill-violet-600 text-white" />
      ) : (
        <Button type="button" variant="ghost">
          <LuTrash2 className="size-5 text-zinc-500" />
        </Button>
      )}
    </div>
  )
}
