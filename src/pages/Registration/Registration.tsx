import { ReactComponent as Polygon } from '@assets/icons/polygon.svg'
import VerticalStepper from '@components/stepper/VerticalStepper'
import { routes } from '@config/routes'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styles from './Registration.module.scss'
import AdministrativeDetails from './RegistrationSteps/AdministrativeDetails'
import CompanyDetails from './RegistrationSteps/CompanyDetails'
import Review from './RegistrationSteps/Review'
import useRegistration from './useRegistration'

export default function Registration() {
  const {
    stepperRef,
    stepper,

    companyDetailsForm,
    companies,
    selectedCountry,
    submitCompanyDetails,

    administrativeDetailsForm,

    reviewData,
    submitReview,
  } = useRegistration()

  const { t } = useTranslation()

  const steps = [
    { label: t('registration.steps.companyDetails') },
    { label: t('registration.steps.administrativeDetails') },
    //TODO - add when payments are ready
    // { label: t('registration.steps.paymentDetails') },
    { label: t('registration.steps.reveiw') },
  ]

  return (
    <div
      ref={stepperRef}
      className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row position-relative h-full"
      id="kt_create_account_stepper"
    >
      <div className={styles.registrationStepper}>
        <div className={styles.shapes}>
          <div className={clsx(styles.rectangle, 'bg-white')}></div>
          <div className={clsx(styles.rectangle, 'bg-white')}></div>
          <Polygon className={styles.polygon1} />
          <Polygon className={styles.polygon2} />
        </div>
        <Link to={routes.home} className="my-2">
          <img src={'images/logo.png'} alt="logo" className="" />
        </Link>
        <VerticalStepper steps={steps} />
        <div className="d-flex gap-10 flex-grow-1 align-items-end">
          <Link to={routes.terms} className="text-white">
            {t('registration.navigation.terms')}
          </Link>
          <Link to={routes.pricing} className="text-white">
            {t('registration.navigation.plans')}
          </Link>
          <Link to={routes.contact} className="text-white">
            {t('registration.navigation.contact')}
          </Link>
        </div>
      </div>
      <div className="d-flex flex-column-fluid bg-body flex-fill px-15 flex-grow-1 min-h-700px">
        <div className="current flex-fill" data-kt-stepper-element="content">
          <CompanyDetails
            stepper={stepper}
            companies={companies}
            form={companyDetailsForm}
            selectedCountry={selectedCountry}
            submitCompanyDetails={submitCompanyDetails}
          />
        </div>
        <div data-kt-stepper-element="content" className="flex-fill">
          <AdministrativeDetails
            stepper={stepper}
            form={administrativeDetailsForm}
            selectedCountry={selectedCountry}
          />
        </div>
        <div data-kt-stepper-element="content" className="flex-fill">
          <Review stepper={stepper} reviewData={reviewData} submitReview={submitReview} />
        </div>
      </div>
    </div>
  )
}
