import { Router } from "express";
import { producto } from "./controller.js";

export const router = Router();

router.get('/productos', producto.getAll);
router.get('/producto', producto.getOne);
router.post('/producto', producto.add);
router.delete('/producto', producto.delete);
router.put('/producto', producto.update);
router.put('/productobaja', producto.baja)


