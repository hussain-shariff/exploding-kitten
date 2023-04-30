import { createSlice } from "@reduxjs/toolkit";
import { initialStateType } from "../types";
import Cards from "../Cards";
import { notify } from "../components/Toast";

const initialState : initialStateType = {
    isStart : true,
    defuseCardCount : 0,
    currentCard : null,
    deck: [],
}

const gameSlicer = createSlice({
    name: 'game',
    initialState,
    reducers:{
        toggleStart(state){
            state.isStart = !state.isStart
        },
        shuffleCards(state){
            const temp = []
            for (let index = 0; index < 5; index++) {
                const rand = Math.floor(Math.random() * 4)
                const card = Cards[rand]
                temp.push(card)
            }
            state.deck = temp
        },
        drawCard(state){
            const temp = [...state.deck]
            const card = temp.pop()
            if(card?.cardName === 'Defuse card'){
                state.defuseCardCount++
            }
            state.currentCard = card
            state.deck = temp
        },
        handleNext(state, actions){
            if(state.deck.length === 0){
                notify('Hurray you won 🚀!')
                state.isStart = true
            }
            else if(state.currentCard?.cardName === 'Cat Card'){
                notify('card removed')
                state.currentCard = null
            }
            else if(state.currentCard?.cardName === 'Deffuse Card'){
                state.defuseCardCount++
                state.currentCard = null
            }
            else if(state.currentCard?.cardName === 'Shuffle Card'){
                state.defuseCardCount = 0
                notify('Game is restarting')
                actions.payload.shuffleCards()
                state.currentCard = null
            }
            else if(state.currentCard?.cardName === 'Exploding Kitten Card'){
                if(state.defuseCardCount === 0){
                    state.defuseCardCount = 0
                    notify('You lost!')
                    state.currentCard = null
                    state.isStart = true
                }
                else{
                    state.defuseCardCount--
                    notify('Deffuse card saved you. 🚀')
                    state.currentCard = null
                }
            }
        }
    }
})

export default gameSlicer;
export const gameActions = gameSlicer.actions;