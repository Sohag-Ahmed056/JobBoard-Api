import { Router } from "express";
import { jobController } from "./job.controller";

export const jobRouter= Router();

jobRouter.post('/', jobController.createJob)
jobRouter.get('/', jobController.getAllJob)


