import express, { Router } from 'express';
import { companyRouter } from '../module/company/company.route';
import { jobRouter } from '../module/job/job.route';
import { applicantRoutes } from '../module/applicant/applicant.route';

export const createApiRouter = (): Router => {
  const router = express.Router();

  // Array of objects with path and router
  const routes: { path: string; router: Router }[] = [
    { path: 'companies', router: companyRouter },
    { path: 'job', router: jobRouter },
    { path: 'applicants', router: applicantRoutes },
  ];

  // Dynamically attach each router
  routes.map(r => {
    router.use(`/${r.path}`, r.router);
    console.log(`✅ Route registered: /api/v1/${r.path}`);
  });

  return router;
};
