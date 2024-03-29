import { pool } from "../../configs/database";

// FUNCTION TO GET ALL PRODUCTS
export function getAllProducts(callback: (error: Error | null, products: any[]) => void) {
  const getAllProductsQuery = `
      SELECT * 
      FROM produtos;
  `;

  pool.query(getAllProductsQuery, (err: Error | null, rows: any[]) => {
    if (err) {
      callback(err, []);
      return;
    }
    callback(null, rows);
  });
}

export function handleAddNewProduct(name: string, description: string, price: number, updatedDateString: string, callback: (err: Error | null, result?: any) => void) {
  const updatedDate: Date = new Date(updatedDateString);

  if (isNaN(updatedDate.getTime())) {
    const error = new Error('Data de atualização inválida');
    callback(error);
    return;
  }

  const checkDuplicateQuery = `
        SELECT COUNT(*) AS count
        FROM produtos
        WHERE nome = ? AND descricao = ? AND preco = ? AND data_atualizado = ?;
    `;
  pool.query(checkDuplicateQuery, [name, description, price, updatedDate], (err, rows) => {
    if (err) {
      callback(err);
      return;
    }

    if (rows[0].count > 0) {
      const error = new Error('Produto já existe');
      callback(error);
      return;
    }

    const addProductRequest = `
            INSERT INTO produtos (nome, descricao, preco, data_atualizado)
            VALUES (?, ?, ?, ?);
        `;
    pool.query(addProductRequest, [name, description, price, updatedDate], (err, result) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, result);
    });
  });
}

export function changeProductPrice(id: string, newPrice: string, callback: (err: Error | null, result?: any) => void) {
  const updateProductPriceQuery = `
      UPDATE produtos
      SET preco = ?
      WHERE id = ?;
  `;

  pool.query(updateProductPriceQuery, [newPrice, id], (err, result) => {
      if (err) {
          callback(err);
          return;
      }
      callback(null, result);
  });
}

export function deleteProduct(id: number, callback: (error: Error | null, result?: any) => void) {
  const deleteQuery = `DELETE FROM produtos WHERE id = ?`;

  pool.query(deleteQuery, [id], (err, result) => {
      if (err) {
          callback(err);
          return;
      }
      callback(null, result);
  });
}