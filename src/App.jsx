import './App.sass'

function Card() {
  return (
    <article className="relative flex flex-col max-w-xs p-6 -ml-32 duration-200 ease-in-out group aspect-card bg-neutral-700 card rounded-2xl first:ml-0 hover:-translate-y-4">
      <header>
        <h1>Lorem, ipsum.</h1>
        <p className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </header>

      <div className="relative flex mt-auto">
        <img className="w-16 h-16 mr-4 rounded-full grayscale" src="https://picsum.photos/400/400" alt="avatar" />

        <span>
          <strong>Author</strong>
          <p>John Doe</p>
        </span>
      </div>
    </article>
  )
}

function App() {
  return (
    <>
      <section className="flex p-12 overflow-hidden">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  )
}

export default App
