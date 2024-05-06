enum CompanyStatus {
  NEW,
  VERIFIED,
}

export type Company = {
  id: string
  name: string
  status: CompanyStatus
  fleet_size: number
  country: string
  city: string
  street1: string
  street2: string
  zip_code: string
  state: string
}
