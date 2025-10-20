import { Request, Response } from "express";
import { ApplicantService } from "./applicant.service";


const applyjob= async(req:Request, res:Response)=>{

    const application = await ApplicantService.applyjob(req.body)

    res.status(201).json(application)
}


const getAllApplications= async(req:Request, res:Response)=>{

    const applications = await ApplicantService.getAllApplications()

    res.status(200 ).json(applications)
}



    export const applicantController={
        applyjob,
        getAllApplications
    }