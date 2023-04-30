import { createSlice } from "@reduxjs/toolkit";
import { MyObject, initialStateType } from "../types";
import Cards from "../Cards";

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
        }
    }
})

export default gameSlicer;
export const cartActions = gameSlicer.actions;