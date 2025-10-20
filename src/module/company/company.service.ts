import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const createCompany =async (payload: Prisma.CompanyCreateInput)=>{
    console.log("Payload in service:", payload);

    const company = await prisma.company.create({
        data: payload
    })

    return company;
}


const getAllCompanies = async ()=>{

    const companies = await prisma.company.findMany();

    return companies;
}



export const companyService={
    createCompany,
    getAllCompanies
}