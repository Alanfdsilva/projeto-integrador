import { PrismaClient } from "@prisma/client";
import { Feedback } from "../dtos/FeedbackDTO";
const prisma = new PrismaClient();

class FeedbackRepository {
  async create(feedback: Feedback) {
    const createdFeedback = await prisma.feedback.create({
      data: {
          description: feedback.description,
          user_name: feedback.user_name,
          viewed_temperature: feedback.viewed_temperature,
          perceived_temperature: feedback.perceived_temperature,
          rate: feedback.rate
      }
    });
    return createdFeedback;
  }
}

export default new FeedbackRepository();