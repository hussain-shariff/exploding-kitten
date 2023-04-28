import Card from "./components/Card"
import { useState } from "react"

function App() {
  const [currentCard, setcurrentCard] = useState('')
  const cardElements = []
  const cards = ['Cat card', 'Shuffle card', 'Defuse card', 'Exploding kitten card']
  for (let index = 0; index < 5; index++) {
    cardElements.push(
      <Card
      color="#42a6ee"
      name="card"/>)
  }

  const handleClick = () =>{
    const rand = Math.floor(Math.random() * 4)
    const card = cards[rand]
    setcurrentCard(card)
  }
  
  return (
    <div className="bg-[#020611] min-h-screen py-10 flex flex-col justify-center items-center">
      <div className="flex justify-center gap-10 flex-wrap p-10">
        { !currentCard && cardElements}
        { currentCard && <Card color="#42a6ee" name={currentCard}/> }
      </div>
      <button className=" mt-10 px-10 py-3 border border-blue-500 text-white font-medium text-sm rounded
      hover:bg-blue-500 transition ease-out duration-300" onClick={handleClick}>
        Draw card
      </button>
    </div>
  )
}

export default App
