import ControlledTextInput from '@components/form/input/ControlledTextInput'
import { useLoginForm } from './useLoginForm'

export const LoginForm = () => {
  const { control, errors, isDirty, isValid, submit, isSubmitting } = useLoginForm()

  return (
    <div>
      <form onSubmit={submit}>
        <h1>Log in</h1>
        <ControlledTextInput
          name="email"
          control={control}
          label={'login'}
          error={errors.email?.message as string}
        />{' '}
        <ControlledTextInput
          name="password"
          control={control}
          label={'password'}
          error={errors.password?.message as string}
        />
        <div>
          <button tabIndex={0} type="submit" disabled={!isDirty || !isValid || isSubmitting}>
            login
          </button>
        </div>
        <div>Don’t have an account yet?</div>
      </form>
    </div>
  )
}
