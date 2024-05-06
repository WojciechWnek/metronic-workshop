import {
  AdministrativeDatailsFormSchema,
  CompanyDetailsFormSchema,
} from '@constants/types/registration'
import { StepperComponent } from '@metronic/assets/ts/components'
import { useTranslation } from 'react-i18next'
import { formatPhoneNumber } from 'react-phone-number-input'
type Props = {
  stepper: StepperComponent | null
  reviewData: {
    companyDetails: CompanyDetailsFormSchema
    administrativeDetails: AdministrativeDatailsFormSchema
  }
  submitReview: () => Promise<void>
}

export default function Review({ stepper, reviewData, submitReview }: Props) {
  const { t } = useTranslation()
  return (
    <form className="py-20 w-100 h-100 d-flex flex-column gap-4 ">
      <div className="text-center container">
        <h2 className="text-gray-900">{t('registration.title')}</h2>
        <p className="text-gray-500">{t('registration.review.subtitle')}</p>
      </div>
      <div className="h-100 overflow-y-auto d-flex  flex-column gap-6 ">
        <div className="container">
          <div className="card card-custom">
            <div className="card-header min-h-unset">
              <h3 className="card-title text-gray-800 fs-7 lh-1 fw-bold">
                {t('registration.steps.companyDetails')}
              </h3>
              <div className="card-toolbar">
                <button
                  type="button"
                  className="btn btn-sm btn bg-gray-200 btn-active-secondary btn-text-gray-600 fs-9"
                  onClick={() => {
                    stepper?.goto(1)
                  }}
                >
                  {t('navigation.edit')}
                </button>
              </div>
            </div>
            <div className="card-body container px-10 py-4 ">
              <div className="row">
                <div className="col-5 fs-8 fw-semibold text-gray-500 lh-1 mb-2">
                  {t('registration.companyDetails.companyDetails.companyName')}
                </div>
                <div className="col fs-8 fw-semibold text-gray-800 lh-1">
                  {reviewData.companyDetails.companyName?.label}
                </div>
              </div>
              <div className="row">
                <div className="col-5  fs-8 fw-semibold text-gray-500 lh-1 mb-2">
                  {t('registration.companyDetails.companyDetails.country')}
                </div>
                <div className="col fs-8 fw-semibold text-gray-800 lh-1">
                  {reviewData.companyDetails.country?.label}
                  {reviewData.companyDetails.state && ', ' + reviewData.companyDetails.state.label}
                </div>
              </div>
              <div className="row">
                <div className="col-5  fs-8 fw-semibold text-gray-500 lh-1 mb-2">
                  {t('registration.companyDetails.companyDetails.fleetSize')}
                </div>
                <div className="col fs-8 fw-semibold text-gray-800 lh-1">
                  {reviewData.companyDetails.fleetSize}
                </div>
              </div>
              <div className="row">
                <div className="col-5  fs-8 fw-semibold text-gray-500 lh-1 mb-2">
                  {t('registration.companyDetails.address.formTitle')}
                </div>
                <div className="col fs-8 fw-semibold text-gray-800 lh-1">
                  {reviewData.companyDetails.street1}, {reviewData.companyDetails.street2},{' '}
                  {reviewData.companyDetails.city}, {reviewData.companyDetails.zipCode},{' '}
                  {reviewData.companyDetails.country?.label}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card card-custom">
            <div className="card-header min-h-unset">
              <h3 className="card-title text-gray-800 fs-7 lh-1 fw-bold">
                {t('registration.steps.administrativeDetails')}
              </h3>
              <div className="card-toolbar">
                <button
                  type="button"
                  className="btn btn-sm btn bg-gray-200 btn-active-secondary btn-text-gray-600 fs-9"
                  onClick={() => {
                    stepper?.goto(2)
                  }}
                >
                  {t('navigation.edit')}
                </button>
              </div>
            </div>
            <div className="card-body container px-10 py-4">
              <div className="row mb-3 ">
                <h4 className="text-gray-700 fw-bolder lh-1 fs-8 ">
                  {t('registration.administrativeDetails.systemAdminstratorDetails.formTitle')}
                </h4>
              </div>
              <div className="row">
                <div className="col-5  fs-8 fw-semibold text-gray-500 lh-1 mb-2">
                  {t('registration.administrativeDetails.systemAdminstratorDetails.firstName')}
                </div>
                <div className="col fs-8 fw-semibold text-gray-800 lh-1">
                  {reviewData.administrativeDetails.firstName}
                </div>
              </div>
              <div className="row">
                <div className="col-5  fs-8 fw-semibold text-gray-500 lh-1 mb-2">
                  {t('registration.administrativeDetails.systemAdminstratorDetails.lastName')}
                </div>
                <div className="col fs-8 fw-semibold text-gray-800 lh-1">
                  {reviewData.administrativeDetails.lastName}
                </div>
              </div>
              <div className="row">
                <div className="col-5  fs-8 fw-semibold text-gray-500 lh-1 mb-2">
                  {t('registration.administrativeDetails.systemAdminstratorDetails.email')}
                </div>
                <div className="col fs-8 fw-semibold text-gray-800 lh-1">
                  {reviewData.administrativeDetails.email}
                </div>
              </div>
              <div className="row">
                <div className="col-5  fs-8 fw-semibold text-gray-500 lh-1 mb-2">
                  {t('registration.administrativeDetails.systemAdminstratorDetails.phone')}
                </div>
                <div className="col fs-8 fw-semibold text-gray-800 lh-1">
                  {formatPhoneNumber(reviewData.administrativeDetails.phoneNumber)}
                </div>
              </div>
              <div className="row">
                <div className="col-5  fs-8 fw-semibold text-gray-500 lh-1 mb-2">
                  {t(
                    'registration.administrativeDetails.systemAdminstratorDetails.organizationalDepartment',
                  )}
                </div>
                <div className="col fs-8 fw-semibold text-gray-800 lh-1">
                  {reviewData.administrativeDetails.organizationalDepartment?.label}
                </div>
              </div>
              {(!!reviewData.administrativeDetails.secondaryContactFirstName ||
                !!reviewData.administrativeDetails.secondaryContactLastName ||
                !!reviewData.administrativeDetails.secondaryContactEmail) && (
                <>
                  <div className="row mb-3 mt-8  ">
                    <h4 className="text-gray-700 fw-bolder lh-1 fs-8 ">
                      {t('registration.administrativeDetails.secondaryContactDetails.formTitle')}
                    </h4>
                  </div>
                  {reviewData.administrativeDetails.secondaryContactFirstName && (
                    <div className="row">
                      <div className="col-5  fs-8 fw-semibold text-gray-500 lh-1 mb-2">
                        {t('registration.administrativeDetails.secondaryContactDetails.firstName')}
                      </div>
                      <div className="col fs-8 fw-semibold text-gray-800 lh-1">
                        {reviewData.administrativeDetails.secondaryContactFirstName}
                      </div>
                    </div>
                  )}
                  {reviewData.administrativeDetails.secondaryContactLastName && (
                    <div className="row">
                      <div className="col-5  fs-8 fw-semibold text-gray-500 lh-1 mb-2">
                        {t('registration.administrativeDetails.secondaryContactDetails.lastName')}
                      </div>
                      <div className="col fs-8 fw-semibold text-gray-800 lh-1">
                        {reviewData.administrativeDetails.secondaryContactLastName}
                      </div>
                    </div>
                  )}
                  {reviewData.administrativeDetails.secondaryContactEmail && (
                    <div className="row">
                      <div className="col-5  fs-8 fw-semibold text-gray-500 lh-1 mb-2">
                        {t('registration.administrativeDetails.secondaryContactDetails.email')}
                      </div>
                      <div className="col fs-8 fw-semibold text-gray-800 lh-1">
                        {reviewData.administrativeDetails.secondaryContactEmail}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-5 container">
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
        <button type="button" className={'btn btn-primary'} onClick={submitReview}>
          <span className="indicator-label">Submit</span>
        </button>
      </div>
    </form>
  )
}
