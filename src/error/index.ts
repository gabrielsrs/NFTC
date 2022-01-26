import { Request, Response, NextFunction } from "express";

class RenderError {
 handle(err: Error, request: Request, response: Response, next: NextFunction) {
  if(err instanceof Error) {
   return response.status(400).json({
    error: err.message,
   });
  }
 
  return response.status(500).json({
   err: "error",
   message: "Internal Server Error"
  });
 }
}

export { RenderError }