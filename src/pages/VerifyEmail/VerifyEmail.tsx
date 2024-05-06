import { ReactComponent as Polygon } from '@assets/icons/polygon.svg'
import { routes } from '@config/routes'
import { AuthService } from '@services/auth.service'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, Navigate, useParams } from 'react-router-dom'
import styles from './VerifyEmail.module.scss'

export default function VerifyEmail() {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(true)
  const [error, setError] = useState(false)

  const { token } = useParams()
  const params = Object.fromEntries(new URLSearchParams(window.location.search).entries())

  if (!token || !params.company) return <Navigate to={routes.home} />

  useEffect(() => {
    AuthService.verify({ token: token, companyId: params.company })
      .json()
      .then((response) => {
        console.log(response)
      })
      .catch(() => setError(true))
      .finally(() => setIsSubmitting(false))
  }, [])

  return (
    <div className={styles.emailVerify}>
      <div className={styles.shapes}>
        <div className={clsx(styles.rectangle, 'bg-white')}></div>
        <div className={clsx(styles.rectangle, 'bg-white')}></div>
        <Polygon className={styles.polygon1} />
        <Polygon className={styles.polygon2} />
      </div>
      <div className={clsx(styles.cardContainer)}>
        <div className={clsx(styles.card, 'bg-white')}>
          <h2>{t('emialVerify.title')}</h2>
          {isSubmitting ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border h-100px w-100px" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              {error ? (
                <>
                  <p className="text-primary fs-1">{t('emialVerify.error')}</p>
                  <Link to={routes.home} className="text-gray-500">
                    Back to home
                  </Link>
                </>
              ) : (
                <Navigate to={routes.app.onboarding} />
              )}
            </>
          )}
        </div>
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
    </div>
  )
}
