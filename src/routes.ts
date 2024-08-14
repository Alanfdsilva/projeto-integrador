import { Router } from 'express';

import FeedbackController from './controllers/FeedbackController';

const routes = Router();

routes.get('/uptime', (req, res) => {
  res.status(403).send('Forbidden');
});

routes.post('/feedback', FeedbackController.registerFeedback);

routes.get('/feedback/:city', FeedbackController.listFeedbacksByCity);

routes.get('/feedback/location/:lon/:lat', FeedbackController.listFeedbacksByLonLat);
  
export default routes;