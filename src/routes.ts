import { Router, Request, Response } from "express";
import userController from "./controllers/user";
import listController from "./controllers/list"

const routes = Router();

// rotas do users
routes.post("/users", (req: Request, res: Response) : any => userController.create(req, res))
routes.get("/users", (req: Request, res: Response) : any => userController.read(req, res))
routes.put("/users/:id", (req: Request, res: Response) : any => userController.update(req,res))
routes.delete("/users/:id", (req: Request, res: Response) : any => userController.delete(req,res))
routes.post("/login", (req: Request, res: Response) : any => userController.login(req, res))

// rotas da list
routes.post("/list", (req: Request, res: Response) : any => listController.create(req, res))
routes.get("/list", (req: Request, res: Response) : any => listController.read(req, res))
routes.put("/list/:id", (req: Request, res: Response) : any => listController.update(req, res))
routes.delete("/list/:id", (req: Request, res: Response) : any => listController.delete(req, res))

export default routes