export default function Home() {
  return (
    <main>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className="bg-zinc-700" />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" className="bg-zinc-700" />
      </div>
    </main>
  )
}
