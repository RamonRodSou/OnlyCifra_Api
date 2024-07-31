// metodos: index, show, update, store, destoy
// index: lista todos os registros 'Listagem de sessoes'
// show: mostra um registro 'Detalhes da sessao'
// update: atualiza um registro 'Atualizar sessao'
// store: cria um novo registro 'Criar sessao'
// destroy: deleta um registro 'Deletar sessao'

import User from "../models/User"

class SessionController {

 async store(req, res) {

  const { name, email, password } = req.body

  let user = await User.findOne({ email })
  
  // verifica se o usuario já existe
  if (!user) user = await User.create({ name, email, password })
  
  return res.json(user)
 }
} 

export default new SessionController()