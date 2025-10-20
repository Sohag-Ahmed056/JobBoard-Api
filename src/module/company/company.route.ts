import { Router } from "express";
import { companyController } from "./company.controller";



export const companyRouter = Router();

companyRouter.post('/', companyController.createCompany)
companyRouter.get('/', companyController.getAllCompanies)