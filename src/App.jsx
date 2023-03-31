import './App.sass'
import { faker } from '@faker-js/faker'

function Card() {
  return (
    <article className="relative flex flex-col max-w-xs p-6 -ml-32 duration-200 ease-in-out group aspect-card bg-neutral-700 card rounded-2xl first:ml-0 hover:-translate-y-4">
      <header>
        <p>{faker.date.recent().toDateString()}</p>
        <p className="mt-4 text-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600">
          {faker.lorem.sentence()}
        </p>
      </header>

      <div className="relative flex mt-auto">
        <img className="w-12 h-12 mt-auto mr-4 rounded-full" src={faker.image.image(50, 50, true)} alt="avatar" />

        <span>
          <strong className="text-neutral-400">{faker.name.jobType()}</strong>
          <p>{faker.name.firstName()}</p>
        </span>
      </div>
    </article>
  )
}

function App() {
  return (
    <>
      <section className="flex p-12 overflow-hidden">{Array(5).fill(<Card />)}</section>
    </>
  )
}

export default App
