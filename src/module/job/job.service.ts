import { Prisma, PrismaClient } from "@prisma/client";


const prisma= new PrismaClient();

const createJob= async(payload:Prisma.JobCreateInput)=>{

    const job= await prisma.job.create({
        data: payload
    });

    return job
}



interface GetAllJobOptions {
    search?: string;
    location?: string;
    page?: number;
    limit?: number;
    // You can add filtering, pagination, or sorting options here in the future
}

const getAllJob = async (options: GetAllJobOptions) => {
    const { page = 1, limit = 10, search, location } = options;

    const jobs = await prisma.job.findMany({
        skip: (page - 1) * limit,
        take: limit,
        where: {
            location: location ? { contains: location, mode: 'insensitive' } : undefined,
            OR: search ? [
                { title: { contains: search, mode: 'insensitive' } },
                // You can add more search fields here
                // { company: { contains: search, mode: 'insensitive' } },
                // { description: { contains: search, mode: 'insensitive' } },
            ] : undefined
        }
    });

    return jobs;
};



export const JobService={
    createJob,
    getAllJob
}