import { Request, Response } from "express";
import ApplicationError from "../shared/errors/AplicationError";
import createFeedBackUseCase from "../useCases/createFeedBackUseCase";

class FeedbackController {
    async registerFeedback(req: Request, res: Response) {
        try {
            const { 
                description, 
                user_name, 
                viewed_temperature, 
                perceived_temperature, 
                rate 
            } = req.body;
            
            const result = await createFeedBackUseCase.create({
                description, 
                user_name, 
                viewed_temperature, 
                perceived_temperature, 
                rate
            })        

            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default new FeedbackController;