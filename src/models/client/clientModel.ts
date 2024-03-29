import { pool } from "../../configs/database";
import clientController from "../../controllers/client/clientController";

//FUNCTION TO GET ALL CLIENTS
export function getAllClients(callback: (error: Error | null, clients: any[]) => void) {
  const getAllClientsQuery = `
      SELECT * 
      FROM clientes;
  `;

  pool.query(getAllClientsQuery, (err: Error | null, rows: any[]) => {
    if (err) {
      callback(err, []);
      return;
    }
    callback(null, rows);
  });
}

//ADD A NEW ITEM IN CLIENT TABLE
export function handleAddNewClient(name: string, lastName: string, email: string, age: number, callback: (err: Error | null, result?: any) => void) {
  const checkDuplicateQuery = `
        SELECT COUNT(*) AS count
        FROM clientes
        WHERE nome = ? AND sobrenome = ? AND email = ? AND idade = ?;
    `;
  pool.query(checkDuplicateQuery, [name, lastName, email, age], (err, rows) => {
    if (err) {
      callback(err);
      return;
    }

    if (rows[0].count > 0) {
      const error = new Error('Cliente já existe');
      callback(error);
      return;
    }

    const addClientRequest = `
            INSERT INTO clientes (nome, sobrenome, email, idade)
            VALUES (?, ?, ?, ?);
        `;
    pool.query(addClientRequest, [name, lastName, email, age], (err, result) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, result);
    });
  });
}