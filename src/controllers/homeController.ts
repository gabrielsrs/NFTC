import { Request, Response } from "express";

class HomeController {
 handle (request: Request, response: Response){
  return response.render("home");
 }
}

export { HomeController }