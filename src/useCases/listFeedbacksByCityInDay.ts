import { Feedback } from "../dtos/FeedbackDTO";
import FeedbackRepository from "../repositories/FeedbackRepository";
import ApplicationError from "../shared/errors/AplicationError";

class listFeedbacksByCityInDay {
    async execute(city: string) {
        if(!city) {
            throw new ApplicationError('Fields are missing.', 400);
        }

        const createdFeedback = await FeedbackRepository.findFeedbacksByCityAndCurrentDate(city);

        return createdFeedback;
    }

}

export default new listFeedbacksByCityInDay();