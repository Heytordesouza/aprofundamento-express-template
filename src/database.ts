import { ACCOUNT_TYPE, FAN_STATE, TAccount, TFan } from "./types";

export const accounts: TAccount[] = [
    {
        id: "a001",
        ownerName: "Ciclano",
        balance: 10000,
        type: ACCOUNT_TYPE.GOLD
    },
    {
        id: "a002",
        ownerName: "Astrodev",
        balance: 500000,
        type: ACCOUNT_TYPE.BLACK
    },
    {
        id: "a003",
        ownerName: "Fulana",
        balance: 20000,
        type: ACCOUNT_TYPE.PLATINUM
    }
]



export const fans: TFan[] = [
    {
        id: "01",
        name: "Fabrício",
        state: FAN_STATE.RJ,
        team: "Flamengo"
    },
    {
        id: "02",
        name: "Moisés",
        state: FAN_STATE.SP,
        team: "Palmeiras"
    },
    {
        id: "03",
        name: "Janaina",
        state: FAN_STATE.PE,
        team: "Santa Cruz"
    },
    {
        id: "04",
        name: "Arthur",
        state: FAN_STATE.RS,
        team: "Grêmio"
    }
]