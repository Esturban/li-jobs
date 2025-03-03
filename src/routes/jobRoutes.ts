import { Router } from 'express';
import JobController from '../controllers/jobController';

const router = Router();
const jobController = new JobController();

router.post('/query', jobController.queryJobs);

export default router;