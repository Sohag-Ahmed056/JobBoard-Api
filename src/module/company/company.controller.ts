import { Request, Response } from "express";
import { companyService } from "./company.service";


const createCompany=async(req:Request, res:Response)=>{

    const company = await companyService.createCompany(req.body);
    console.log(company);

    return res.status(201).json(company);
}


const getAllCompanies=async(req:Request, res:Response)=>{

    const companies = await companyService.getAllCompanies();

    return res.status(200).json(companies);
}




export const companyController={
    createCompany,
    getAllCompanies
}