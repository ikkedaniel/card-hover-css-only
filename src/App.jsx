import { Card } from './Card'

function App() {
  return <section className="absolute flex p-12">{Array(10).fill(<Card />)}</section>
}

export default App
