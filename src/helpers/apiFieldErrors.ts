import { UseFormSetError } from 'react-hook-form'

export const handleApiFieldErrors = (
  errors: Record<string, string[]>,
  setError: UseFormSetError<any>,
): void => {
  Object.entries(errors).forEach(([key, value]) => {
    setError(key, { message: Array.isArray(value) ? value[0] : value, type: 'server' })
  })
}
