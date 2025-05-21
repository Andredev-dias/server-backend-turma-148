import { Request, Response } from 'express'
import { PrismaClient } from '../../generated/prisma'

const prisma = new PrismaClient()

export default {
    create : async(req: Request, res: Response) => {
        const user = await prisma.user.create({ data: req.body })
        return res.status(201).json(user)
    },

    read : async(req: Request, res: Response) => {
        const users = await prisma.user.findMany({ select: { password: false, id: true, name: true, email: true } })
        return res.status(200).json(users)
    },

    update : async(req: Request, res: Response)  => {
        const id = req.params.id
        const user = await prisma.user.update({data: req.body, where: {id: +id}})
        return res.status(200).json(user)
    },

    delete : async(req: Request, res: Response) => {
        const id = req.params.id 
        const user = await prisma.user.delete({where: {id: +id}})
        return res.status(200).json(user)
    },

    login: async(req: Request, res: Response) => {
        const {email, password} = req.body
        const user = await prisma.user.findFirst({where: {email, password}, select: { password: false, id: true, name: true, email: true }})
        if(user) return res.status(200).json(user)
        return res.status(404).send("User not found")
    }

}