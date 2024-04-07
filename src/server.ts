import express from 'express';
import cors from 'cors';
import routes from './routes';
import { ErrorHandler } from './middlewares/ErrorHandler';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(ErrorHandler);
(BigInt.prototype as any).toJSON = function () {
    return this.toString();
};

app.listen(3333, () => console.log(`Server is running at http://localhost:${3333}`));