import { Request, Response } from 'express';
import { getAllProducts, handleAddNewProduct } from '../../models/product/productModel';

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

  }

  public deleteProduct(req: Request, res: Response): void {
    
  }
}

export default new ProductController();
