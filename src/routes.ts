import { Router } from 'express';

import FeedbackController from './controllers/FeedbackController';

const routes = Router();

routes.get('/uptime', (req, res) => {
  res.status(403).send('Forbidden');
});

routes.post('/feedback', FeedbackController.registerFeedback);
  
export default routes;