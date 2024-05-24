export default function Home() {
  return (
    <main className="min-h-screen w-full bg-zinc-100 p-12 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 ">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <h1 className="flex items-center gap-2 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
          Rapidly build modern websites without ever leaving your HTML.
        </h1>

        <p className="my-4 max-w-xl">
          A utility-first CSS framework packed with classes like flex, pt-4,
          text-center and rotate-90 that can be composed to build any design,
          directly in your markup.
        </p>

        <button className="rounded-md bg-zinc-900 px-4 py-2 font-medium text-zinc-100 transition-colors hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-violet-500 dark:text-zinc-100 dark:enabled:hover:bg-violet-600">
          Get started
        </button>
      </div>
    </main>
  )
}
