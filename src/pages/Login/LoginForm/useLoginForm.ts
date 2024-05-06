import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import { routes } from '@config/routes'
import { AuthService } from '@services/auth.service'

const loginSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Email must be a valid email'),
  password: yup.string().required('Password is required'),
})

export const useLoginForm = () => {
  const {
    handleSubmit,
    setError,
    formState: { errors, isDirty, isValid },
    control,
  } = useForm<any>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
    mode: 'all',
  })
  const navigate = useNavigate()
  const location = useLocation()

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit: SubmitHandler<any> = (data) => {
    setIsSubmitting(true)
    AuthService.login(data)
      .then((response) => {
        navigate(routes.app.onboarding)
      })
      .catch((error) => {
        setError('email', { message: 'Incorrect e-mail address or password' })
        setError('password', { message: 'Incorrect e-mail address or password' })
        //TODO - Add error handling
        console.log(error)
      })
      .finally(() => setIsSubmitting(false))
  }

  return {
    control,
    errors,
    isDirty,
    isValid,
    submit: handleSubmit(submit),
    isSubmitting,
  }
}
