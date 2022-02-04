import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Faq from 'App/Models/Faq'
import StoreFaqValidator from 'App/Validators/StoreFaqValidator'

export default class FaqsController {
  
  
  public async store({ request, auth }: HttpContextContract) {
    const data = await request.validate(StoreFaqValidator)
    const faqDB = await Faq.create({...data, userId: auth.user?.id})
    return faqDB
  }
}