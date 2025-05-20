import { Request, Response } from 'express'
import { PrismaClient } from '../../generated/prisma'

const prisma = new PrismaClient()

export default {
    create : async(req: Request, res: Response) => {
        const user = await prisma.user.create({data: req.body})
        return res.status(201).json(user)
    }
}