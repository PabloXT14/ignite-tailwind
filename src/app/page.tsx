export default function Home() {
  return (
    <main className="min-h-screen w-full  bg-zinc-900 p-4 text-zinc-100 ">
      <h1 className="flex items-center gap-2 text-3xl font-extrabold before:h-8 before:w-1 before:rounded-full before:bg-violet-500 sm:text-4xl lg:text-5xl">
        Hello World
      </h1>

      <p className="my-4">This is the home page</p>

      <button
        disabled
        className="rounded-md bg-violet-500 px-4 py-2 font-medium text-zinc-100 transition-colors enabled:hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        See more
      </button>
    </main>
  )
}
