import { Feedback } from "../dtos/FeedbackDTO";
import FeedbackRepository from "../repositories/FeedbackRepository";
import ApplicationError from "../shared/errors/AplicationError";

class createFeedBackUseCase {
    async create(feedback: Feedback) {
        if(!feedback.perceived_temperature || !feedback.rate || !feedback.viewed_temperature) {
            throw new ApplicationError('Fields are missing.', 400);
        }
        const createdFeedback = await FeedbackRepository.create(feedback);

        return createdFeedback;
    }

}

export default new createFeedBackUseCase();