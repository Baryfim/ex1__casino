import crash from "../../images/Menu/a 1.svg"
import miner from "../../images/Menu/a 2.svg"
import hilo from "../../images/Menu/a 3.svg"
import coin from "../../images/Menu/a 4.svg"
import dice from "../../images/Menu/a 5.svg"
import cards from "../../images/Menu/a 6.svg"

import { CRASH_ROUTER } from "../../utils/consts"


export const MenuItems = [
    {
        Icon: crash,
        Title: "Crash",
        path: CRASH_ROUTER
    },
    {
        Icon: miner,
        Title: "Miner",
        path: CRASH_ROUTER
    },
    {
        Icon: hilo,
        Title: "HiLo",
        path: CRASH_ROUTER
    },
    {
        Icon: coin,
        Title: "Coin",
        path: CRASH_ROUTER
    },
    {
        Icon: dice,
        Title: "Dice",
        path: CRASH_ROUTER
    },
    {
        Icon: cards,
        Title: "Cards",
        path: CRASH_ROUTER
    }
]