import { Router } from "express";
import cadAlunosController from "../controllers/cadalunosController.js";

const router = Router();

router.get("/", cadAlunosController.index);
router.get("/cadastrar", cadAlunosController.create);
router.post("/gravar", cadAlunosController.storage);

export default router
