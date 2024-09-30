
import { AppDataSource } from "../data-source";
import { Contato } from "../entity/Contato";
import { Request, Response } from "express";

export class ContatoController{

 static async BuscarContatos (req:Request, res:Response){
   
        const contatoRepository = AppDataSource.getRepository(Contato);
        const contatos = await contatoRepository.find(); 
        return res.status(200).json(contatos);  
    }

  static async BuscarContatosPorId (req:Request, res:Response){
    const { id } = req.params;
    const contatoRepository = AppDataSource.getRepository(Contato);
    const contato = await contatoRepository.findOne({ where: { id: parseInt(id) } });  

    if (!contato) {
        return res.status(404).json({ message: "Contato não encontrado" }); 
    }

    return res.status(200).json(contato);
  }

   static async CriarContato(req:Request,res:Response){
    const { nome, telefone } = req.body;
    const contato = new Contato();
    contato.nome = nome;
    contato.telefone = telefone;
    const contatoRepository = AppDataSource.getRepository(Contato);
    const novoContato = await contatoRepository.save(contato);  
    return res.status(201).json({ message: "Contato criado", contato: novoContato });
   }
   
   static async AtualizarContato(req:Request, res:Response){
    const {id} = req.params;
    const contatoRepository = AppDataSource.getRepository(Contato);
    const contato = await contatoRepository.findOne({where:{id: parseInt(id)}})
    if(!contato){
        return res.status(404).json({ message: "Contato não encontrado" });
    }
    const {nome, telefone} = req.body;
    contato.nome = nome;
    contato.telefone = telefone;
    await contatoRepository.save(contato)
     return res.status(200).json({message:"Contato atualizado", contato:contato})
   }
  
   static async RemoverContato(req:Request, res:Response){
    const {id} = req.params;
    const contatoRepository = AppDataSource.getRepository(Contato);
    const contato = await contatoRepository.findOne({where:{id: parseInt(id)}})
   if(!contato){
    return res.status(404).json({message:"Contato não encontrado"})
   }
   await contatoRepository.remove(contato);
   return res.status(200).json({message: "Contato deletado!"})
   }

}