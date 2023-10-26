import express from "express"
import {getAllUsers, getById} from "../controllers/user.controller.js";
import {verifyAdmin, verifyUser} from "../utils/verifyToken.js";

const router = express.Router()

router.get('/', verifyAdmin, getAllUsers)

router.get('/:id', verifyUser, getById)

export default router