import * as Yup from 'yup'

const REQUIRED_ERROR_MESSAGE = 'This field is required'

export const companyDetailsSchema = Yup.object({
  country: Yup.object({
    label: Yup.string().required(REQUIRED_ERROR_MESSAGE),
    value: Yup.string().required(REQUIRED_ERROR_MESSAGE),
  })
    .default(undefined)
    .required(REQUIRED_ERROR_MESSAGE),
  companyName: Yup.object({
    label: Yup.string().required(REQUIRED_ERROR_MESSAGE),
    value: Yup.string().required(REQUIRED_ERROR_MESSAGE),
  })
    .default(undefined)
    .required(REQUIRED_ERROR_MESSAGE),
  fleetSize: Yup.number().required(REQUIRED_ERROR_MESSAGE).min(0, 'Fleet size can not be nagative'),
  street1: Yup.string().required(REQUIRED_ERROR_MESSAGE),
  street2: Yup.string(),
  city: Yup.string().required(REQUIRED_ERROR_MESSAGE),
  state: Yup.object({
    label: Yup.string().required(REQUIRED_ERROR_MESSAGE),
    value: Yup.string().required(REQUIRED_ERROR_MESSAGE),
  }).when('country', ([country]) =>
    country.value === 'US'
      ? Yup.object({
          label: Yup.string().required(REQUIRED_ERROR_MESSAGE),
          value: Yup.string().required(REQUIRED_ERROR_MESSAGE),
        })
          .default(undefined)
          .required(REQUIRED_ERROR_MESSAGE)
      : Yup.object().default(undefined),
  ),
  zipCode: Yup.string().when('country', ([country]) =>
    country.value === 'US' ? Yup.string().required(REQUIRED_ERROR_MESSAGE) : Yup.string(),
  ),
})

export type CompanyDetailsFormSchema = Yup.InferType<typeof companyDetailsSchema>

export const administrativeDatailsSchama = Yup.object({
  firstName: Yup.string().required(REQUIRED_ERROR_MESSAGE),
  lastName: Yup.string().required(REQUIRED_ERROR_MESSAGE),
  email: Yup.string().required(REQUIRED_ERROR_MESSAGE).email('Email must be a valid email'),
  phoneNumber: Yup.string().required(REQUIRED_ERROR_MESSAGE),
  organizationalDepartment: Yup.object({
    label: Yup.string().required(REQUIRED_ERROR_MESSAGE),
    value: Yup.string().required(REQUIRED_ERROR_MESSAGE),
  })
    .default(undefined)
    .required(REQUIRED_ERROR_MESSAGE),
  password: Yup.string()
    .required(REQUIRED_ERROR_MESSAGE)
    .min(8, 'Password must be at least 8 characters')
    .matches(/\d.*/, {
      message: 'Password must contain at least 1 number',
    })
    .matches(/[A-Z].*/, {
      message: 'Password must contain at least 1 upper case letter',
    })
    .matches(/[a-z].*/, {
      message: 'Password must contain at least 1 lower case letter',
    })
    .matches(/^(?=.*[@$!%*?&])/, {
      message: 'Password must contain at least 1 special character',
    }),
  confirmPassword: Yup.string()
    .required('Password confirmation is required')
    .oneOf([Yup.ref('password'), ''], 'Passwords must match'),
  secondaryContactFirstName: Yup.string(),
  secondaryContactLastName: Yup.string(),
  secondaryContactEmail: Yup.string(),
})

export type AdministrativeDatailsFormSchema = Yup.InferType<typeof administrativeDatailsSchama>

export type Register = {
  email: string
  companyId: string
  firstName: string
  lastName: string
  password1: string
  password2: string
  phoneNumber: string
}

export type Verify = {
  companyId: string
  token: string
}
