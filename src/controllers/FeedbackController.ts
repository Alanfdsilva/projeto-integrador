import { Request, Response } from "express";
import ApplicationError from "../shared/errors/AplicationError";
import createFeedBackUseCase from "../useCases/createFeedBackUseCase";
import listFeedbacksByCityInDay from "../useCases/listFeedbacksByCityInDay";
import listFeedbacksByLonLat from "../useCases/listFeedbacksByLonLat";

class FeedbackController {
    async registerFeedback(req: Request, res: Response) {
        try {
            const { 
                description, 
                user_name, 
                viewed_temperature, 
                perceived_temperature, 
                rate,
                city,
                lon,
                lat
            } = req.body;
            
            const result = await createFeedBackUseCase.create({
                description, 
                user_name, 
                viewed_temperature, 
                perceived_temperature, 
                rate,
                city,
                lon,
                lat
            })        

            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async listFeedbacksByLonLat(req: Request, res: Response) {
        try {
            const { 
                lon,
                lat
            } = req.params;
            
            const result = await listFeedbacksByLonLat.execute(parseFloat(lon), parseFloat(lat));        

            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async listFeedbacksByCity(req: Request, res: Response) {
        try {
            const { 
                city
            } = req.params;
            
            const result = await listFeedbacksByCityInDay.execute(city);        

            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default new FeedbackController;