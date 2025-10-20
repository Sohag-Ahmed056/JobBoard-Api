
import express from 'express'
import { companyRouter } from './module/company/company.route';
import { jobRouter } from './module/job/job.route';
import { applicantRoutes } from './module/applicant/applicant.route';
import { createApiRouter } from './routes';

export const app = express();

app.use(express.json());

// app.use('/api/v1/companies', companyRouter )
// app.use('/api/v1/job', jobRouter)
// app.use('/api/v1/applicants', applicantRoutes)

app.use('/api/v1', createApiRouter());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

