import { ReactComponent as Polygon } from '@assets/icons/polygon.svg'
import { routes } from '@config/routes'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styles from './RegistrationCompleted.module.scss'

export default function RegistrationCompleted() {
  const { t } = useTranslation()
  return (
    <div className={styles.registrationCompleted}>
      <div className={styles.shapes}>
        <div className={clsx(styles.rectangle, 'bg-white')}></div>
        <div className={clsx(styles.rectangle, 'bg-white')}></div>
        <Polygon className={styles.polygon1} />
        <Polygon className={styles.polygon2} />
      </div>
      <div className={clsx(styles.cardContainer)}>
        <div className={clsx(styles.card, 'bg-white')}>
          <h2>{t('registration.registrationCompleted.title')}</h2>
          <p>{t('registration.registrationCompleted.subtitle')}</p>
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
