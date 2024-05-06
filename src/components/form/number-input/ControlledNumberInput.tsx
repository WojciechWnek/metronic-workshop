import { Control, Controller, UseFormSetValue } from 'react-hook-form'
import NumberInput from './NumberInput'
type Props = {
  name: string
  control: Control<any>
  setValue?: UseFormSetValue<any>
  placeholder?: string
  label?: string
  error?: string
  className?: string
  labelRequired?: boolean
}
export default function ControlledNumberInput({
  name,
  control,
  setValue,
  placeholder,
  label,
  error,
  className,
  labelRequired,
}: Props) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <NumberInput
          setValue={setValue}
          name={name}
          label={label}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          error={error}
          className={className}
          labelRequired={labelRequired}
        />
      )}
    />
  )
}
