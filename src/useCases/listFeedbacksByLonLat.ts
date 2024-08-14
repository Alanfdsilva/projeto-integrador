import { Feedback } from "../dtos/FeedbackDTO";
import FeedbackRepository from "../repositories/FeedbackRepository";
import ApplicationError from "../shared/errors/AplicationError";

class listFeedbacksByLonLat {
    async execute(lon: number, lat: number) {
        if(!lon || !lat) {
            throw new ApplicationError('Fields are missing.', 400);
        }

        const createdFeedback = await FeedbackRepository.findFeedbacksByLonLatAndCurrentDate(lon, lat);

        return createdFeedback;
    }

}

export default new listFeedbacksByLonLat();