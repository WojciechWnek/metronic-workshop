import { Control, Controller } from 'react-hook-form'
import TextInput from './TextInput'
type Props = {
  name: string
  control: Control<any>
  type?: string
  placeholder?: string
  label?: string
  error?: string
  className?: string
  labelRequired?: boolean
  info?: string
}
export default function ControlledTextInput({
  name,
  control,
  type,
  placeholder,
  label,
  error,
  className,
  labelRequired,
  info,
}: Props) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <TextInput
          type={type}
          name={name}
          label={label}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          error={error}
          className={className}
          labelRequired={labelRequired}
          info={info}
        />
      )}
    />
  )
}
