// "Without country select" component.
import clsx from 'clsx'
import { useEffect } from 'react'
import { Control, Controller, UseFormSetValue } from 'react-hook-form'
import Input from 'react-phone-number-input/input'

type Props = {
  name: string
  control: Control<any>
  setValue?: UseFormSetValue<any>
  type?: string
  placeholder?: string
  label?: string
  error?: string
  className?: string
  labelRequired?: boolean
  selectedCountry?: string
}

export default function ControlledPhoneInput({
  name,
  control,
  setValue,
  type,
  placeholder,
  label,
  error,
  className,
  labelRequired,
  selectedCountry,
}: Props) {
  useEffect(() => {
    setValue && setValue('phone', '')
  }, [selectedCountry])
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <div>
          <label htmlFor={name} className={clsx('form-label fs-8', labelRequired && 'required')}>
            {label}
          </label>
          <Input
            className={clsx('form-control form-control-solid form-control-sm ', className)}
            name={name}
            control={control}
            value={value}
            international
            withCountryCallingCode
            onChange={onChange}
            country={selectedCountry as any}
          />
          <div className="mt-2 text-danger h-4">{error}</div>
        </div>
      )}
    />
  )
}
