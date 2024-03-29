import mysql from 'mysql'

export const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'backend_unilavras'
})

export const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'backend_unilavras'
})

export async function dbConnect() {
    connection.connect((err) => {
        if (err) {
            console.error('Erro ao conectar ao banco de dados:', err)
            return
        }
        console.log('Conexão bem-sucedida ao banco de dados!')
    })
}

dbConnect()