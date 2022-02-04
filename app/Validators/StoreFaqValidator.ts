import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreFaqValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    resposta: schema.string()
  })

  
  public messages = {
    required: "O {{field}} é obrigatório!!!"
  }
}
