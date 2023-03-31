import './App.css'

function Card() {
  return (
    <article className="relative flex flex-col p-6 -ml-32 duration-200 ease-in-out group aspect-card bg-neutral-700 card rounded-2xl first:ml-0 hover:-translate-y-4">
      <header>
        <h1>Lorem, ipsum.</h1>
        <p className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </header>

      <div className="relative grid items-center mt-12 card-author">
        <img
          className="block w-10 h-10 my-4 overflow-hidden rounded-full grayscale mx-2.5"
          src="https://picsum.photos/50/50"
          alt="avatar"
        />

        <svg
          className="absolute bottom-0 left-0 h-12 pointer-events-none fill-none stroke-neutral-200"
          viewBox="0 0 106 57"
        >
          <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>{' '}
        </svg>

        <div>
          <div className="font-bold text-neutral-200">Author</div>
          John Doe
        </div>
      </div>
    </article>
  )
}

function App() {
  return (
    <>
      <section id="card-list" className="flex p-12 overflow-hidden">
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
