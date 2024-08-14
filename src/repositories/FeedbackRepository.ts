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
          city: feedback.city,
          rate: feedback.rate,
          lon: feedback.lon,
          lat: feedback.lat
      }
    });
    return createdFeedback;
  }

  async findFeedbacksByCityAndCurrentDate(city: string) {
    const currentDate = new Date();
    const startOfDay = new Date(currentDate);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(currentDate);
    endOfDay.setHours(23, 59, 59, 999);

    const createdFeedbacks = await prisma.feedback.findMany({
      where: {
        city: city,
      }
    });

    return createdFeedbacks;
  }

  async findFeedbacksByLonLatAndCurrentDate(lon: number, lat: number) {
    const currentDate = new Date();
    const startOfDay = new Date(currentDate);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(currentDate);
    endOfDay.setHours(23, 59, 59, 999);

    const createdFeedbacks = await prisma.$queryRaw`
      SELECT * FROM feedback
      WHERE lon = ${lon}
      AND lat = ${lat}
    `;

    return createdFeedbacks;
  }
}

export default new FeedbackRepository();