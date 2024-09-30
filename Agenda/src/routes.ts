import * as express from "express";
import { ContatoController } from "./controller/ContatoController";

export const router = express.Router();

router.get(
    "/contatos",
    ContatoController.BuscarContatos
  );

router.get(
    "/contatos/:id",
    ContatoController.BuscarContatosPorId
  );

router.post(
    "/contatos",
    ContatoController.CriarContato
);

router.put(
    "/contatos/:id",
    ContatoController.AtualizarContato
)

router.delete(
    "/contatos/:id",
    ContatoController.RemoverContato
)





