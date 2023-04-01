import { faker } from '@faker-js/faker'
import './Card.sass'

function Card() {
  const date = faker.date.birthdate().toDateString()
  const description = faker.lorem.sentence(10)
  const avatar = faker.image.avatar()
  const jobType = faker.name.jobType()
  const name = faker.name.firstName()

  return (
    <article className='relative flex flex-col p-6 duration-300 ease-in-out w-80 group aspect-card bg-slate-700 rounded-2xl hover:-translate-y-4'>
      <header>
        <p>{date}</p>
        <p className='mt-4 text-xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-purple-400 group-hover:to-pink-400'>
          {description}
        </p>
      </header>

      <div className='relative flex mt-auto'>
        <img
          className='w-12 h-12 mt-auto mr-4 rounded-full grayscale group-hover:grayscale-0'
          src={avatar}
          alt='avatar'
        />

        <span>
          <strong className='text-slate-400'>{jobType}</strong>
          <p>{name}</p>
        </span>
      </div>
    </article>
  )
}

export default Card
