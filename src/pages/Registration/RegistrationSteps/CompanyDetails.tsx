import ControlledTextInput from '@components/form/input/ControlledTextInput'
import ControlledNumberInput from '@components/form/number-input/ControlledNumberInput'
import ControlledSelect from '@components/form/select/ControlledSelect'
import { routes } from '@config/routes'
import { COUNTRIES, US_STATES } from '@constants/registration'
import { SelectOption } from '@constants/types/common'
import { StepperComponent } from '@metronic/assets/ts/components'
import clsx from 'clsx'
import { useEffect } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
type Props = {
  stepper: StepperComponent | null
  form: UseFormReturn<any>
  companies?: SelectOption[]
  selectedCountry: string
  submitCompanyDetails: () => Promise<void>
}

export default function CompanyDetails({
  stepper,
  form,
  companies,
  selectedCountry,
  submitCompanyDetails,
}: Props) {
  const { t } = useTranslation()

  useEffect(() => {
    if (selectedCountry !== 'US') {
      form.setValue('state', undefined)
      form.setValue('zipCode', '')
    }
  }, [selectedCountry])

  const validateForm = async () => {
    await submitCompanyDetails()
    if (!Object.keys(form.formState.errors).length) stepper?.goNext()
  }

  return (
    <form className="py-20 w-100 h-100 d-flex flex-column gap-4 ">
      <div className="text-center container">
        <h2 className="text-gray-900">{t('registration.title')}</h2>
        <p className="text-gray-500">{t('registration.companyDetails.subtitle')}</p>
      </div>
      <div className='accordion' id='kt_accordion_1'>
<div className='accordion-item'>
  <h2 className='accordion-header' id='kt_accordion_1_header_1'>
    <button
      className='accordion-button fs-4 fw-bold collapsed'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#kt_accordion_1_body_1'
      aria-expanded='false'
      aria-controls='kt_accordion_1_body_1'
    >
      Accordion Item #1
    </button>
  </h2>
  <div
    id='kt_accordion_1_body_1'
    className='accordion-collapse collapse'
    aria-labelledby='kt_accordion_1_header_1'
    data-bs-parent='#kt_accordion_1'
  >
    <div className='accordion-body'>
      <strong>This is the first item's accordion body.</strong>It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as the
      showing and hiding via CSS transitions. You can modify any of this with custom
      CSS or overriding our default variables. It's also worth noting that just about
      any HTML can go within the
      <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
  </div>
</div>
<div className='accordion-item'>
  <h2 className='accordion-header' id='kt_accordion_1_header_2'>
    <button
      className='accordion-button fs-4 fw-bold collapsed'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#kt_accordion_1_body_2'
      aria-expanded='false'
      aria-controls='kt_accordion_1_body_2'
    >
      Accordion Item #2
    </button>
  </h2>
  <div
    id='kt_accordion_1_body_2'
    className='accordion-collapse collapse'
    aria-labelledby='kt_accordion_1_header_2'
    data-bs-parent='#kt_accordion_1'
  >
    <div className='accordion-body'>
      <strong>This is the second item's accordion body.</strong>It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as the
      showing and hiding via CSS transitions. You can modify any of this with custom
      CSS or overriding our default variables. It's also worth noting that just about
      any HTML can go within the
      <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
  </div>
</div>
<div className='accordion-item'>
  <h2 className='accordion-header' id='kt_accordion_1_header_3'>
    <button
      className='accordion-button fs-4 fw-bold collapsed'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#kt_accordion_1_body_3'
      aria-expanded='false'
      aria-controls='kt_accordion_1_body_3'
    >
      Accordion Item #3
    </button>
  </h2>
  <div
    id='kt_accordion_1_body_3'
    className='accordion-collapse collapse'
    aria-labelledby='kt_accordion_1_header_3'
    data-bs-parent='#kt_accordion_1'
  >
    <div className='accordion-body'>
      <strong>This is the third item's accordion body.</strong>It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as the
      showing and hiding via CSS transitions. You can modify any of this with custom
      CSS or overriding our default variables. It's also worth noting that just about
      any HTML can go within the
      <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
  </div>
</div>
</div>
      <div className="h-100 overflow-y-auto ">
        <div className="container">
          <div className="row">
            <h4 className="text-gray-700 fw-bolder lh-1 fs-8">
              {t('registration.companyDetails.companyDetails.formTitle')}
            </h4>
          </div>
          <div className="row">
            <ControlledSelect
              name="country"
              options={COUNTRIES}
              control={form.control}
              label={t('registration.companyDetails.companyDetails.country')}
              error={form.formState.errors.country?.message as string}
              defaultValue={{ label: 'United States', value: 'US' }}
              info={t('registration.companyDetails.companyDetails.countryInfo')}
            />
          </div>
          <div className="row">
            <div className="col">
              <ControlledSelect
                name="companyName"
                options={companies}
                control={form.control}
                label={t('registration.companyDetails.companyDetails.companyName')}
                error={form.formState.errors.companyName?.message as string}
                isClearable
              />
            </div>
            <div className="col">
              <ControlledNumberInput
                name="fleetSize"
                setValue={form.setValue}
                control={form.control}
                label={t('registration.companyDetails.companyDetails.fleetSize')}
                error={form.formState.errors.fleetSize?.message as string}
              />
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <h4 className="text-gray-700 fw-bolder lh-1 fs-8">
              {t('registration.companyDetails.address.formTitle')}
            </h4>
          </div>
          <div className="row">
            <div className="col">
              <ControlledTextInput
                name="street1"
                control={form.control}
                label={t('registration.companyDetails.address.street1')}
                error={form.formState.errors.street1?.message as string}
              />
            </div>
            <div className="col">
              <ControlledTextInput
                name="street2"
                control={form.control}
                label={t('registration.companyDetails.address.street2')}
                error={form.formState.errors.street2?.message as string}
                labelRequired={false}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ControlledTextInput
                name="city"
                control={form.control}
                label={t('registration.companyDetails.address.city')}
                error={form.formState.errors.city?.message as string}
              />
            </div>
            <div className="col">
              <ControlledSelect
                name="state"
                options={US_STATES}
                control={form.control}
                label={t('registration.companyDetails.address.state')}
                error={form.formState.errors.state?.message as string}
                labelRequired={selectedCountry === 'US'}
                isDisabled={selectedCountry !== 'US'}
              />
            </div>
          </div>
          <div className="row">
            <ControlledTextInput
              name="zipCode"
              control={form.control}
              label={t('registration.companyDetails.address.zip')}
              error={form.formState.errors.zipCode?.message as string}
              labelRequired={selectedCountry === 'US'}
            />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-5 container">
        <Link to={routes.home} className="btn btn-bg-white">
          Exit
        </Link>
        <button
          type="button"
          className={clsx('btn btn-primary', !form.formState.isValid && 'disabled')}
          onClick={validateForm}
        >
          <span className="indicator-label">Continue</span>
        </button>
      </div>
    </form>
  )
}
