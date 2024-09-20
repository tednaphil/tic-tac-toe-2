export interface Player {
    id: string,
    token: string,
    isTurn: boolean,
    startGame: boolean,
    moves: number[],
    wins: number
}
