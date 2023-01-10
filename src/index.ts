import express, { Request, Response } from 'express'
import cors from 'cors'
import { accounts, fans } from './database'
import { ACCOUNT_TYPE, TFan, FAN_STATE } from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
})

app.get("/accounts", (req: Request, res: Response) => {
    res.send(accounts)
})

//Exercício 1

app.get("/accounts/:id", (req: Request, res: Response) => {

    const id = req.params.id

    const result = accounts.find((account) => {
        return account.id === id
    })

    res.status(200).send(result)
})


//Exercício 2

app.delete("/accounts/:id", (req: Request, res: Response) => {

    const id = req.params.id as string

    const accountIndex = accounts.findIndex((account) => {
        return account.id === id
    })

    console.log("Index: ", accountIndex)
    
    if(accountIndex >= 0) {
        accounts.splice(accountIndex,1)
        res.status(200).send("Item deletado com sucesso")
    }

    res.status(404).send("Item não encontrado")
    
})

//Exercício 3

app.put("/accounts/:id", (req: Request, res: Response) => {

    const id = req.params.id as string

    const newId = req.body.id as string | undefined
    const newOwnerName = req.body.ownerName as string | undefined
    const newBalance = req.body.balance as number | undefined
    const newType = req.body.type as ACCOUNT_TYPE | undefined

    const account = accounts.find((account) => {
        return account.id === id
    })

    if (account){
        account.id = newId || account.id
        account.ownerName = newOwnerName || account.ownerName
        account.balance = isNaN(newBalance) ? account.balance : newBalance
        account.type = newType || account.type
    }

    res.status(200).send("Item editado com sucesso")

})



// Fixação /////////////////////////////////////////////////////////////////

app.post('/fans', (req: Request, res: Response) => {
    // const id = req.body.id as string
    // const name = req.body.name as string
    // const state = req.body.state as FAN_STATE
    // const team = req.body.team as string

    const {id, name, state, team} = req.body as TFan

    const newfan = {
        id,
        name,
        state,
        team
    }

    fans.push(newfan)

    res.status(201).send("Torcedor registrado com sucesso")

})



app.get('/fans', (req: Request, res: Response) => {
    res.status(200).send(fans)
})



app.put("/fans/:id", (req: Request, res: Response) => {

    const id = req.params.id as string

    const newId = req.body.id as string | undefined
    const newName = req.body.name as string | undefined
    const newState = req.body.state as FAN_STATE | undefined
    const newTeam = req.body.team as string | undefined

    const fan = fans.find((fan) => {
        return fan.id === id
    })

    if (fan){
        fan.id = newId || fan.id
        fan.name = newName || fan.name
        fan.state = newState || fan.state
        fan.team = newTeam || fan.team
    }

    res.status(200).send("Item editado com sucesso")

})



app.delete("/fans/:id", (req: Request, res: Response) => {

    const id = req.params.id as string

    const accountIndex = fans.findIndex((fan) => {
        return fan.id === id
    })

    console.log("Index: ", accountIndex)
    
    if(accountIndex >= 0) {
        fans.splice(accountIndex,1)
        res.status(200).send("Item deletado com sucesso")
    }

    res.status(404).send("Item não encontrado")
    
})
