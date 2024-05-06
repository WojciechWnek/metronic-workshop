import { get } from '@config/api'
import { endpoints } from '@config/endpoints'
import { CompaniesRegistry } from '@constants/types/companyRegistry'

export const CompaniesRegistryService = {
  getAll: () => get(endpoints.companiesRegistry.all).json() as Promise<CompaniesRegistry[]>,
}
