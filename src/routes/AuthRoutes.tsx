import { Navigate, Route, Routes } from 'react-router-dom'

import { routes } from '@config/routes'
import Landing from '@pages/Landing/Landing'
import { Login } from '@pages/Login/Login'
import Onboarding from '@pages/Onboarding/Onboarding'
import Registration from '@pages/Registration/Registration'
import RegistrationCompleted from '@pages/Registration/RegistrationCompleted/RegistrationCompleted'
import VerifyEmail from '@pages/VerifyEmail/VerifyEmail'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route >
        <Route path={routes.home} element={<Landing />} />
        <Route path={routes.auth.verify} element={<VerifyEmail />} />
        <Route path={routes.auth.registrationCompleted} element={<RegistrationCompleted />} />
        <Route path={routes.app.onboarding} element={<Onboarding />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
      <Route path={routes.auth.registration} element={<Registration />} />
      <Route path={routes.auth.login} element={<Login />} />
    </Routes>
  )
}

export default AuthRoutes
