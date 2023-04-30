import { ChevronRight } from 'lucide-react';
import { notify } from '../components/Toast';
import { useState } from 'react';
import Card from '../components/Card';
import Cards from '../Cards';
import { ToastContainer } from 'react-toastify';
import {Link} from 'react-router-dom'

    type MyObject = {
        cardName : string,
        id : number
    }

const Main = () => {
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
        notify('Hurray you won 🚀!')
        setisStart(true)
        }
        else if(currentCard?.cardName === 'Cat Card'){
        notify('card removed')
        setcurrentCard(null)
        }
        else if(currentCard?.cardName === 'Deffuse Card'){
        setdefuseCardCount(pre=> pre+1)
        setcurrentCard(null)
        }
        else if(currentCard?.cardName === 'Shuffle Card'){
        setdefuseCardCount(0)
        notify('Game is restarting')
        shuffleCards()
        setcurrentCard(null)
        }
        else if(currentCard?.cardName === 'Exploding Kitten Card'){
        if(defuseCardCount === 0){
            setdefuseCardCount(0)
            notify('You lost!')
            setcurrentCard(null)
            setisStart(true)
        }
        else{
            setdefuseCardCount(pre=> pre-1)
            notify('Deffuse card saved you. 🚀')
            setcurrentCard(null)
        }
        }
    }
  return (
        <div className="min-h-screen flex flex-col justify-center relative items-center ">
            <Link to={'/leaderboard'}>
                <button className=" absolute mt-10 px-5 py-1 border border-blue-500 text-white font-medium text-sm rounded
                hover:bg-blue-500 transition ease-out duration-300 top-0 right-10 flex items-center" onClick={handleStart}>
                Leaderboard <ChevronRight className=" h-4"/></button>
            </Link>
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
        <ToastContainer/>
        </div>
  )
}

export default Main