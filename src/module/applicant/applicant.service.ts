import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const applyjob=async(payload:Prisma.ApplicantCreateInput)=>{
    const application = await prisma.applicant.create({
        data:payload
    })

    //logic to apply for a job

    return application
}



const getAllApplications=async()=>{
    const applications = await prisma.applicant.findMany({

        include:{
            job:{
                include:{
                    company: true
                }
            }
        }
    })
    return applications
}

export const ApplicantService={
    applyjob,
    getAllApplications
}