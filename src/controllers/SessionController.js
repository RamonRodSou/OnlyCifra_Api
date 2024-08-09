// metodos: index, show, update, store, destoy
// index: lista todos os registros 'Listagem de sessoes'
// show: mostra um registro 'Detalhes da sessao'
// update: atualiza um registro 'Atualizar sessao'
// store: cria um novo registro 'Criar sessao'
// destroy: deleta um registro 'Deletar sessao'

import User from "../models/User"
import * as yup from 'yup'


class SessionController {

 async store(req, res) {

  const { name, email, password } = req.body

   const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required()
  })

  let user = await User.findOne({ name, email, password })

  if ( ! ( await schema.isValid(req.body))){
   return res.status(400).json({ error: 'Email ou Senha Invalido!' })
  }
  
  // verifica se o usuario já existe
  if (!user) user = await User.create({ name, email, password })
  
  return res.json(user)
 }
} 

export default new SessionController()