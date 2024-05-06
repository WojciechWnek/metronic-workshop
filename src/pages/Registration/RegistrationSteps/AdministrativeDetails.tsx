import { StepperComponent } from '@metronic/assets/ts/components'
import clsx from 'clsx'
import { UseFormReturn } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import ControlledTextInput from '@components/form/input/ControlledTextInput'
import ControlledPhoneInput from '@components/form/phone-input/ControlledPhoneInput'
import ControlledSelect from '@components/form/select/ControlledSelect'
import { ORGANISATIONAL_DEPARTMENT } from '@constants/registration'

type Props = {
  stepper: StepperComponent | null
  form: UseFormReturn<any>
  selectedCountry: string
}

export default function AdministrativeDetails({ stepper, form, selectedCountry }: Props) {
  const { t } = useTranslation()

  const validateForm = async () => {
    await form.trigger()
    if (!Object.keys(form.formState.errors).length) stepper?.goNext()
  }

  return (
    <form className="py-20 w-100 h-100 d-flex flex-column gap-4 ">
      <div className="text-center container">
        <h2 className="text-gray-900">{t('registration.title')}</h2>
        <p className="text-gray-500">{t('registration.administrativeDetails.subtitle')}</p>
      </div>
      <div className="h-100 overflow-y-auto ">
        <div className="container">
          <div className="row">
            <h4 className="text-gray-700 fw-bolder lh-1 fs-8">
              {t('registration.administrativeDetails.systemAdminstratorDetails.formTitle')}
            </h4>
            <p className="text-gray-500 fs-9">
              {t('registration.administrativeDetails.systemAdminstratorDetails.formSubitle')}
            </p>
          </div>
          <div className="row">
            <div className="col">
              <ControlledTextInput
                name="firstName"
                control={form.control}
                label={t('registration.administrativeDetails.systemAdminstratorDetails.firstName')}
                error={form.formState.errors.firstName?.message as string}
              />
            </div>
            <div className="col">
              <ControlledTextInput
                name="lastName"
                control={form.control}
                label={t('registration.administrativeDetails.systemAdminstratorDetails.lastName')}
                error={form.formState.errors.lastName?.message as string}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ControlledTextInput
                name="email"
                control={form.control}
                label={t('registration.administrativeDetails.systemAdminstratorDetails.email')}
                error={form.formState.errors.email?.message as string}
              />
            </div>
            <div className="col">
              <ControlledPhoneInput
                name="phoneNumber"
                control={form.control}
                label={t('registration.administrativeDetails.systemAdminstratorDetails.phone')}
                error={form.formState.errors.phoneNumber?.message as string}
                selectedCountry={selectedCountry}
                setValue={form.setValue}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <ControlledSelect
                name="organizationalDepartment"
                options={ORGANISATIONAL_DEPARTMENT}
                control={form.control}
                label={t(
                  'registration.administrativeDetails.systemAdminstratorDetails.organizationalDepartment',
                )}
                error={form.formState.errors.organizationalDepartment?.message as string}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ControlledTextInput
                name="password"
                control={form.control}
                label={t('registration.administrativeDetails.systemAdminstratorDetails.password')}
                error={form.formState.errors.password?.message as string}
                type="password"
                info={t(
                  'registration.administrativeDetails.systemAdminstratorDetails.passwordInfo',
                )}
              />
            </div>
            <div className="col">
              <ControlledTextInput
                name="confirmPassword"
                control={form.control}
                label={t(
                  'registration.administrativeDetails.systemAdminstratorDetails.confirmPassword',
                )}
                error={form.formState.errors.confirmPassword?.message as string}
                type="password"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h4 className="text-gray-700 fw-bolder lh-1 fs-8">
              {t('registration.administrativeDetails.secondaryContactDetails.formTitle')}
            </h4>
            <p className="text-gray-500 fs-9">
              {t('registration.administrativeDetails.secondaryContactDetails.formSubitle')}
            </p>
          </div>
          <div className="row">
            <div className="col">
              <ControlledTextInput
                name="secondaryContactFirstName"
                control={form.control}
                label={t('registration.administrativeDetails.systemAdminstratorDetails.firstName')}
                error={form.formState.errors.secondaryContactFirstName?.message as string}
                labelRequired={false}
              />
            </div>
            <div className="col">
              <ControlledTextInput
                name="secondaryContactLastName"
                control={form.control}
                label={t('registration.administrativeDetails.systemAdminstratorDetails.lastName')}
                error={form.formState.errors.secondaryContactLastName?.message as string}
                labelRequired={false}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <ControlledTextInput
                name="secondaryContactEmail"
                control={form.control}
                label={t('registration.administrativeDetails.systemAdminstratorDetails.email')}
                error={form.formState.errors.secondaryContactEmail?.message as string}
                labelRequired={false}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between  mt-4  container">
        <button
          onClick={() => {
            stepper?.goPrev()
          }}
          type="button"
          className="btn btn-lg btn-light-primary me-3"
          data-kt-stepper-action="previous"
        >
          Back
        </button>
        <button
          type="button"
          onClick={validateForm}
          className={clsx('btn btn-primary', !form.formState.isValid && 'disabled')}
        >
          <span className="indicator-label">Continue</span>
        </button>
      </div>
    </form>
  )
}
