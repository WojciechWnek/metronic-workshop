import { yupResolver } from '@hookform/resolvers/yup'
import { StepperComponent } from '@metronic/assets/ts/components'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import { routes } from '@config/routes'
import { SelectOption } from '@constants/types/common'
import { Company } from '@constants/types/company'
import {
  AdministrativeDatailsFormSchema,
  administrativeDatailsSchama,
  CompanyDetailsFormSchema,
  companyDetailsSchema,
} from '@constants/types/registration'
import { handleApiFieldErrors } from '@helpers/apiFieldErrors'
import { AuthService } from '@services/auth.service'
import { CompaniesService } from '@services/companies.service'
import { CompaniesRegistryService } from '@services/companiesRegistry.service'
import { HTTPError } from 'ky'
import { useNavigate } from 'react-router-dom'

export default function useRegistration() {
  const nagative = useNavigate()
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const [stepper, setStepper] = useState<StepperComponent | null>(null)
  const [companies, setCompanies] = useState<SelectOption[]>()
  const [newCompanyId, setNewCompanyId] = useState('')

  useEffect(() => {
    if (!stepperRef.current) return
    setStepper(StepperComponent.createInsance(stepperRef.current as HTMLDivElement))
  }, [stepperRef])

  useEffect(() => {
    CompaniesRegistryService.getAll()
      .then((response) => {
        const fomrattedCompanies = response.map((company) => ({
          value: company.id,
          label: company.name,
        }))
        setCompanies(fomrattedCompanies)
      })
      .catch((error: any) => {
        console.log(error)
      })
  }, [])

  const companyDetailsForm = useForm<CompanyDetailsFormSchema>({
    resolver: yupResolver(companyDetailsSchema),
    mode: 'all',
    defaultValues: {
      country: { value: 'US', label: 'United States' },
      companyName: undefined,
      fleetSize: 0,
      street1: '',
      street2: '',
      city: '',
      state: undefined,
      zipCode: '',
    },
  })
  const selectedCountry = companyDetailsForm.watch('country')?.value

  const submitCompanyDetails = companyDetailsForm.handleSubmit(async () => {
    try {
      const formattedCompanyData = {
        name: companyDetailsForm.getValues().companyName?.label,
        fleetSize: companyDetailsForm.getValues().fleetSize,
        zipCode: companyDetailsForm.getValues().zipCode,
        country: companyDetailsForm.getValues().country?.value,
        city: companyDetailsForm.getValues().city,
        street1: companyDetailsForm.getValues().street1,
        street2: companyDetailsForm.getValues().street2,
        state: companyDetailsForm.getValues().state?.value,
      }
      const companyResponse = (await CompaniesService.add(formattedCompanyData).json()) as Company
      setNewCompanyId(companyResponse.id)
    } catch (error) {
      const apiError = await (error as HTTPError).response.json()
      //TODO - Backend need fix - optional fields for countries other than US - state, zipCode
      // handleApiFieldErrors(apiError, companyDetailsForm.setError)
      stepper?.goto(1)
    }
  })

  const administrativeDetailsForm = useForm<AdministrativeDatailsFormSchema>({
    resolver: yupResolver(administrativeDatailsSchama),
    mode: 'all',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      organizationalDepartment: undefined,
      password: '',
      confirmPassword: '',
      secondaryContactFirstName: '',
      secondaryContactLastName: '',
      secondaryContactEmail: '',
    },
  })

  const reviewData = {
    companyDetails: companyDetailsForm.getValues(),
    administrativeDetails: administrativeDetailsForm.getValues(),
  }

  const submitReview = async () => {
    try {
      const fomattedContactData = {
        email: administrativeDetailsForm.getValues().email,
        companyId: newCompanyId,
        firstName: administrativeDetailsForm.getValues().firstName,
        lastName: administrativeDetailsForm.getValues().lastName,
        password1: administrativeDetailsForm.getValues().password,
        password2: administrativeDetailsForm.getValues().confirmPassword,
        phoneNumber: administrativeDetailsForm.getValues().phoneNumber,
      }
      await AuthService.register(fomattedContactData).json()
      nagative(routes.auth.registrationCompleted)
    } catch (error) {
      const apiError = await (error as HTTPError).response.json()
      handleApiFieldErrors(apiError, administrativeDetailsForm.setError)
      stepper?.goto(2)
    }
  }

  return {
    stepperRef,
    stepper,

    companyDetailsForm,
    submitCompanyDetails,
    companies,
    selectedCountry,

    administrativeDetailsForm,

    reviewData,
    submitReview,
  }
}
