import express from 'express';
import bodyParser from 'body-parser';
import jobRoutes from './routes/jobRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/jobs', jobRoutes);

app.listen(port, () => {

});