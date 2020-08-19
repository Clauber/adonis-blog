// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
  public async index() {
    return { data: "I went through the controller!" };
  }
}
