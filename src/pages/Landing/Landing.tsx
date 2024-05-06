import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import styles from './Landing.module.scss'

import { ReactComponent as AirplanePath } from '@assets/icons/airplane-path.svg'
import { ReactComponent as Airplane } from '@assets/icons/airplane.svg'
import { routes } from '@config/routes'

export default function Landing() {
  const { t } = useTranslation()
  return (
    <main className={clsx(styles.landing, 'text-white')}>
      <section className={styles.info}>
        <h1 className="text-white">{t('landing.title')}</h1>
        <p>{t('landing.paragraph1')}</p>
        <p>{t('landing.paragraph2')}</p>
        <p>{t('landing.paragraph3')}</p>
      </section>
      <section className={styles.banner}>
        <div className={clsx(styles.card, 'bg-white')}>
          <div className={styles.info}>
            <h2 className="text-gray-900">{t('landing.banner.title')}</h2>
            <p className="text-gray-700">{t('landing.banner.subtitle')}</p>
          </div>
          <div className={styles.buttons}>
            <Link to={routes.pricing} className="btn btn-light-primary">
              {t('landing.banner.learnPricing')}
            </Link>
            <Link to={routes.auth.registration} className="btn btn-primary">
              {t('landing.banner.register')}
            </Link>
          </div>
        </div>
        <AirplanePath className={styles.path} />
        <Airplane className={styles.airplane} />
      </section>
    </main>
  )
}
