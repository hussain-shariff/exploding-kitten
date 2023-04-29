import Card from "./components/Card"
import { useState, useEffect } from "react"
import Cards from "./Cards"

type MyObject = {
  cardName : string,
  id : number
}

function App() {
  const [isStart, setisStart] = useState(true)
  const [currentCard, setcurrentCard] = useState<MyObject | null>()
  const [defuseCardCount, setdefuseCardCount] = useState(0)
  const [deck, setdeck] = useState <MyObject[]>([])
  const cardElements = deck.map((card, index)=> (
    <Card
      key = {index}
      color="#42a6ee"
      name="card"/>
  ))

  const handleClick = () =>{
    const temp = [...deck]
    const card = temp.pop()
    if(card?.cardName === 'Defuse card'){
      setdefuseCardCount(pre=> pre+1)
    }
    setcurrentCard(card)
    setdeck(temp)
  }

  const shuffleCards = ()=>{
    const temp = []
    for (let index = 0; index < 5; index++) {
      const rand = Math.floor(Math.random() * 4)
      const card = Cards[rand]
      temp.push(card)
    }
    setdeck(temp)
  }

  const handleStart = () =>{
    shuffleCards()
    setisStart(false)
  }
  
  const handleNext = () =>{
    if(deck.length === 0){
      console.log('win')
      setisStart(true)
    }
    if(currentCard?.cardName === 'Cat Card'){
      setcurrentCard(null)
    }
    else if(currentCard?.cardName === 'Deffuse Card'){
      setdefuseCardCount(pre=> pre+1)
      setcurrentCard(null)
    }
    else if(currentCard?.cardName === 'Shuffle Card'){
      setdefuseCardCount(0)
      shuffleCards()
      setcurrentCard(null)
    }
    else if(currentCard?.cardName === 'Exploding Kitten Card'){
      if(defuseCardCount === 0){
        setdefuseCardCount(0)
        console.log('game over');
        setisStart(true)
      }
      else{
        setdefuseCardCount(pre=> pre-1)
        setcurrentCard(null)
      }
    }
  }
  
  return (
    <div className="bg-[#020611] min-h-screen py-10 flex flex-col justify-center items-center ">
      {!isStart && <div className="flex flex-col justify-center items-center">
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
      </div>}
      {isStart && <button className=" mt-10 px-10 py-3 border border-blue-500 text-white font-medium text-sm rounded
        hover:bg-blue-500 transition ease-out duration-300" onClick={handleStart}>
          Start Game
        </button>}
    </div>
  )
}

export default App
