import { Request, Response } from "express";
import { JobService } from "./job.service";


const createJob= async(req:Request, res:Response)=>{

    const job = await JobService.createJob(req.body)

    res.status(201).json(job)
}


const getAllJob= async(req:Request, res:Response)=>{


    const options={
        search: req.query.search as string | undefined,
        location: req.query.location as string | undefined,
        page: req.query.page ? parseInt(req.query.page as string, 10) : undefined,
        limit: req.query.limit ? parseInt(req.query.limit as string, 10) : undefined,
    };
    const jobs = await JobService.getAllJob(options)

    res.status(200).json(jobs)
}



 export const jobController={

    createJob,
    getAllJob
}