import { Request, Response } from 'express';
import { changeClientName, deleteClient, getAllClients, handleAddNewClient } from '../../models/client/clientModel';

class ClientController {
  public getAllClients(req: Request, res: Response): void {
    getAllClients((err, clients) => {
      if (err) {
        console.error('Erro ao obter todos os clientes:', err);
        res.status(500).json({ error: 'Erro ao obter clientes' });
        return;
      }
      res.json(clients);
    });
  }

  public handleAddNewClient(req: Request, res: Response): void {
    const { nome, sobrenome, email, idade } = req.body;

    handleAddNewClient(nome, sobrenome, email, idade, (err, result) => {
      if (err) {
        console.error('Erro ao adicionar novo cliente:', err);
        res.status(500).json({ error: 'Erro ao adicionar novo cliente' });
        return;
      }
      res.status(201).json({ message: 'Novo cliente adicionado com sucesso' });
    });
  }

  public changeClientName(req: Request, res: Response): void {
    const { id, nome } = req.body;

    changeClientName(id, nome, (err, result) => {
      if (err) {
        console.log('Erro ao alterar o nome do cliente:', err)
        res.status(500).json({ error: 'Erro ao alterar o nome do cliente' })
        return;
      }
    })
    res.status(201).json({ message: 'Nome do cliente alterado com sucesso!' })
  }

  public deleteClient(req: Request, res: Response): void {
    const { id } = req.body

    deleteClient(id, (err, result) => {
      if (err) {
        console.log('Erro ao deletar Cliente:', err)
        res.status(500).json({ error: 'Erro ao deletar Cliente' })
        return;
      }
      res.status(201).json({ message: 'Cliente deletado com sucesso!' })
    })
  }
}

export default new ClientController();
