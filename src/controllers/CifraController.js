import Cifra from "../models/Cifra"

class CifraController {

 async store(req, res){

  console.log(req.body)
  
  const { title, tom, singer, Struct, description, createdAt } = req.body
  const { user_id } = req.headers

  const cifra = await Cifra.create({ 
    user: user_id,
    title, 
    tom, 
    singer, 
    Struct, 
    description, 
    createdAt 
   })

  return res.json(cifra)
 }
}

export default new CifraController

