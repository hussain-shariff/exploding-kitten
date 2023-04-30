import { configureStore } from "@reduxjs/toolkit";
import gameSlicer from "./gameSlicer";

const store = configureStore({
    reducer:{
        gameState : gameSlicer.reducer
    }
})


export default store;