import { createRoot } from 'react-dom/client'
import { AppRoutes } from './routes/AppRoutes'

import './_metronic/assets/sass/style.react.scss'
import './_metronic/assets/sass/style.scss'

import '@assets/locales/i18n'
import { I18nextProvider } from 'react-i18next'
import i18n from './assets/locales/i18n'

import './index.scss'


const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
      <I18nextProvider i18n={i18n}>
        <AppRoutes />
      </I18nextProvider>
  )
}
