import { Request, Response } from 'express';

class JobController {
    async queryJobs(req: Request, res: Response) {
        const queryOptions = {
            keyword: req.body.keyword || 'data',
            location: req.body.location || 'Canada',
            dateSincePosted: req.body.dateSincePosted || '24hr',
            jobType: req.body.jobType || 'full time',
            remoteFilter: req.body.remoteFilter || 'remote,contract,temporary',
            salary: req.body.salary || '50000',
            experienceLevel: req.body.experienceLevel || 'entry level,senior,associate',
            limit: req.body.limit || '20',
            page: req.body.page || '0',
        };

        try {
            const linkedIn = require('linkedin-jobs-api');
            const response = await linkedIn.query(queryOptions);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching job data.' });
        }
    }
}

export default JobController;