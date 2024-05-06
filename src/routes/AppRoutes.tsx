/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from '../App'
import AuthRoutes from './AuthRoutes'
import { PrivateRoutes } from './PrivateRoutes'

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { BASE_URL } = import.meta.env

const isAuth = false

const AppRoutes: FC = () => {
  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route element={<App />}>
          {isAuth ? (
            <Route path="/*" element={<PrivateRoutes />} />
          ) : (
            <Route path="/*" element={<AuthRoutes />} />
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { AppRoutes }
