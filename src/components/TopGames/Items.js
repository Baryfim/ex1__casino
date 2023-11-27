import cards from "../../images/TopGames/cards.png"
import game from "../../images/TopGames/game.png"
import coin from "../../images/TopGames/coin.png"
import bomb from "../../images/TopGames/bomb.png"


import { CRASH_ROUTER } from "../../utils/consts"


export const TopGamesList = [
    {
        Title: "HiLo",
        Info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        Image: cards,
        path: CRASH_ROUTER
    },
    {
        Title: "Dice",
        Info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        Image: game,
        path: CRASH_ROUTER
    },
    {
        Title: "Coin",
        Info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        Image: coin,
        path: CRASH_ROUTER
    },
    {
        Title: "Miner",
        Info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        Image: bomb,
        path: CRASH_ROUTER
    }
]