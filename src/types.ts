export enum ACCOUNT_TYPE {
    BRONZE = "Bronze",
    SILVER = "Prata",
    GOLD = "Ouro",
    PLATINUM = "Platina",
    BLACK = "Black"
}

//
export enum FAN_STATE {
    RJ = "RJ",
    SP = "SP",
    MG = "MG",
    ES = "ES",
    BA = "BA",
    PE = "PE",
    RN = "RN",
    PB = "PB",
    CE = "CE",
    TO = "TO",
    AM = "AM",
    SC = "SC",
    RS = "RS",
    PR = "PR"
}



export type TAccount = {
    id: string,
    ownerName: string,
    balance: number,
    type: ACCOUNT_TYPE
}


//
export type TFan = {
    id: string,
    name: string,
    state: FAN_STATE,
    team: string
}