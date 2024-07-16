export interface GameEvent {
    title: string,
    content: string,
    partyId: string,
    creationDate:string,
}

export interface GameEventId extends GameEvent{
    id:number
}