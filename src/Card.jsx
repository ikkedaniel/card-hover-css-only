import { faker } from '@faker-js/faker'
import './Card.sass'

export function Card() {
  let date = faker.date.birthdate().toDateString()
  let description = faker.lorem.sentence(10)
  let avatar = faker.image.avatar()
  let jobType = faker.name.jobType()
  let name = faker.name.firstName()

  return (
    <article className="relative flex flex-col p-6 -ml-32 duration-200 ease-in-out w-80 group aspect-card bg-neutral-700 rounded-2xl first:ml-0 hover:-translate-y-4">
      <header>
        <p>{date}</p>
        <p className="mt-4 text-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600">
          {description}
        </p>
      </header>

      <div className="relative flex mt-auto">
        <img className="w-12 h-12 mt-auto mr-4 rounded-full" src={avatar} alt="avatar" />

        <span>
          <strong className="text-neutral-400">{jobType}</strong>
          <p>{name}</p>
        </span>
      </div>
    </article>
  )
}
