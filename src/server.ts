import express, { Request, Response } from 'express';
import path from 'path';
import productRouter from './routes/product/getAllProductsRouter';
import clientRouter from './routes/client/getAllClientsRouter';

const app = express()

app.use(express.static(path.join(__dirname, 'view')))
app.use('/product', express.static(path.join(__dirname, 'views', 'product')));
app.use('/client', express.static(path.join(__dirname, 'views', 'client')));

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.set('Contet-type', 'text/html')
  res.sendFile(path.join(__dirname, 'views', 'home', 'home.html'))
})

app.get('/client', (req: Request, res: Response) => {
  res.set('Contet-type', 'text/html')
  res.sendFile(path.join(__dirname, 'views', 'client', 'client.html'))
})

app.get('/product', (req: Request, res: Response) => {
  res.set('Contet-type', 'text/html')
  res.sendFile(path.join(__dirname, 'views', 'product', 'product.html'))
})

app.listen('3300', () => {
  console.log('api running on port: 3300')
})

app.use('/api', productRouter)
app.use('/api', clientRouter)