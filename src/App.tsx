import Card from "./components/Card"
import { useState, useEffect } from "react"
import Cards from "./Cards"

type MyObject = {
  cardName : string,
  id : number
}

function App() {
  const [currentCard, setcurrentCard] = useState<MyObject | null>(null)
  const [defuseCardCount, setdefuseCardCount] = useState(0)
  const [deck, setdeck] = useState(Cards)
  const cardElements = deck.map((card, index)=> (
    <Card
      key = {index}
      color="#42a6ee"
      name="card"/>
  ))

  const handleClick = () =>{
    const rand = Math.floor(Math.random() * 4)
    const card = Cards[rand]
    if(card.cardName === 'Defuse card'){
      setdefuseCardCount(pre=> pre+1)
    }
    setcurrentCard(card)
  }
  
  const handleNext = () =>{
    if(currentCard?.cardName === 'Cat Card'){
      const updatedDeck = deck.filter(card => card.id !== currentCard.id)
      setdeck(updatedDeck)
      setcurrentCard(null)
    }
    else if(currentCard?.cardName === 'Deffuse Card'){
      setdefuseCardCount(pre=> pre+1)
      const updatedDeck = deck.filter(card => card.id !== currentCard.id)
      setdeck(updatedDeck)
      setcurrentCard(null)
    }
    else if(currentCard?.cardName === 'Shuffle Card'){
      setdeck(Cards)
      setcurrentCard(null)
    }
    else if(currentCard?.cardName === 'Exploding Kitten Card'){
      if(defuseCardCount === 0){
        console.log('game over');
      }
      else{
        setdefuseCardCount(pre=> pre-1)
        const updatedDeck = deck.filter(card => card.id !== currentCard.id)
        setdeck(updatedDeck)
        setcurrentCard(null)
      }
    }
  }
  
  return (
    <div className="bg-[#020611] min-h-screen py-10 flex flex-col justify-center items-center">
      <div className="flex justify-center gap-10 flex-wrap p-10">
        { !currentCard && cardElements}
        { currentCard && <Card color="#42a6ee" name={currentCard.cardName}/> }
      </div>
      {!currentCard && <button className=" mt-10 px-10 py-3 border border-blue-500 text-white font-medium text-sm rounded
      hover:bg-blue-500 transition ease-out duration-300" onClick={handleClick}>
        Draw card
      </button>}
      {currentCard && <button className=" mt-10 px-10 py-3 border border-blue-500 text-white font-medium text-sm rounded
      hover:bg-blue-500 transition ease-out duration-300" onClick={handleNext}>
        Next
      </button>}
    </div>
  )
}

export default App
