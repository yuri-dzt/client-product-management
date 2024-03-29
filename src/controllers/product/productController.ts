import { Request, Response } from 'express';
import { changeProductPrice, deleteProduct, getAllProducts, handleAddNewProduct } from '../../models/product/productModel';

class ProductController {
  public getAllProducts(req: Request, res: Response): void {
    getAllProducts((err, clients) => {
      if (err) {
        console.error('Erro ao obter todos os clientes:', err);
        res.status(500).json({ error: 'Erro ao obter clientes' });
        return;
      }
      res.json(clients);
    });
  }

  public handleAddNewProduct(req: Request, res: Response): void {
    const { nome, descricao, preco, data_atualizado } = req.body;

    handleAddNewProduct(nome, descricao, preco, data_atualizado, (err, result) => {
      if (err) {
        console.error('Erro ao adicionar novo cliente:', err);
        res.status(500).json({ error: 'Erro ao adicionar novo cliente' });
        return;
      }
      res.status(201).json({ message: 'Novo cliente adicionado com sucesso' });
    });
  }

  public changeProductPrice(req: Request, res: Response): void {
    const { id, newPrice } = req.body;

    if (!newPrice) {
      res.status(400).json({ error: 'Novo preço inválido' });
      return;
    }

    changeProductPrice(id, newPrice, (err, result) => {
      if (err) {
        console.error('Erro ao mudar o preço do produto:', err);
        res.status(500).json({ error: 'Erro ao mudar o preço do produto' });
        return;
      }
      res.status(201).json({ message: 'Preço do produto alterado com sucesso!' });
    })
  }

  public deleteClient(req: Request, res: Response): void {
    const { id } = req.body

    deleteProduct(id, (err, result) => {
      if (err) {
        console.log('Erro ao deletar produto:', err)
        res.status(500).json({ error: 'Erro ao deletar produto' })
        return;
      }
      res.status(201).json({ message: 'Produto deletado com sucesso!' })
    })
  }
}

export default new ProductController();
