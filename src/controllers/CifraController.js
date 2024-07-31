import Cifra from "../models/Cifra"

class CifraController {

  async index(req, res) {
    const cifras = await Cifra.find()
    return res.json(cifras)
  }

  async store(req, res) {

    console.log(req.body)

    const { title, tom, singer, Struct, description, createdAt } = req.body
    const { user_id } = req.headers

    let cifra = await Cifra.findOne({ title, singer })

    if (!cifra) {
      cifra = await Cifra.create({
        user: user_id,
        title,
        tom,
        singer,
        Struct,
        description,
        createdAt
      })

    }
    return res.json(cifra)
  }

  async update(req, res) {
    const { cifra_id } = req.params
    const { title, tom, singer, Struct, description } = req.body
    const { user_id } = req.headers
    const cifra = await Cifra.updateOne({ _id: cifra_id }, {
      user: user_id,
      title,
      tom,
      singer,
      Struct,
      description
    })

    return res.send()
  }

  async destroy(req, res) {

    const { cifra_id } = req.params

    if(!cifra_id) {
      return res.status(400).json({ message: 'ID da cifra é necessário' });
    }

    const cifra = await Cifra.findById(cifra_id)

    if (!cifra) {
      return res.status(404).json({ message: 'Cifra não encontrada' })
    }

    await Cifra.findByIdAndDelete({ _id: cifra_id })

    return res.json({ message: 'Cifra Excluída com sucesso!' })

  }
  
}





export default new CifraController

