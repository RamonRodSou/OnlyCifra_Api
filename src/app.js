import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'

class App {

 constructor() {
  this.server = express()

  mongoose.connect('mongodb+srv://ramon:Mv4BcZFD2AvTxncH@onlycifra.qvlcozi.mongodb.net/?retryWrites=true&w=majority&appName=OnlyCifra')
  
  this.middlewares()
  this.routes()
 }

 middlewares() {
  this.server.use(express.json())
 }1

 routes() {
  this.server.use(routes)
 }
}

export default new App().server