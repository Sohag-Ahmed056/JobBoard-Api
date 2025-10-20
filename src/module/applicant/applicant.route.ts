import { Router } from "express";
import { applicantController } from "./applicant.controller";


const applicantRoutes = Router();
applicantRoutes.post('/', applicantController.applyjob)
applicantRoutes.get('/', applicantController.getAllApplications)

export { applicantRoutes };