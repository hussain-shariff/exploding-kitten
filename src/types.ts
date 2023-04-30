export type MyObject = {
    cardName : string,
    id : number
}

export type initialStateType = {
    isStart : boolean,
    defuseCardCount : number,
    currentCard : MyObject | null,
    deck: MyObject[],
}