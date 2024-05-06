import { get, post } from '@config/api'
import { endpoints } from '@config/endpoints'
import { Company } from '@constants/types/company'

export const CompaniesService = {
  add: (data: any) => post(endpoints.companies.all, { json: data }),
  getAll: () => get(endpoints.companies.all).json() as Promise<Company[]>,
}
