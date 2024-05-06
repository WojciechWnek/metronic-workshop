import { SelectOption } from '@constants/types/common'
import { Control, Controller } from 'react-hook-form'
import BasicSelect from './BasicSelect'
import CreatableSelect from './CreatableSelect'

type Props = {
  options?: SelectOption[]
  name: string
  control: Control<any>
  placeholder?: string
  label?: string
  value?: string | number
  error?: string
  className?: string
  labelRequired?: boolean
  isClearable?: boolean
  defaultValue?: SelectOption
  isDisabled?: boolean
  info?: string
}

export default function ControlledSelect({
  options,
  name,
  control,
  placeholder,
  label,
  error,
  className,
  labelRequired,
  isClearable,
  defaultValue,
  isDisabled = false,
  info,
}: Props) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <>
          {isClearable ? (
            <CreatableSelect
              options={options}
              label={label}
              placeholder={placeholder}
              onChange={onChange}
              error={error}
              className={className}
              labelRequired={labelRequired}
              defaultValue={defaultValue}
              isDisabled={isDisabled}
            />
          ) : (
            <BasicSelect
              options={options}
              label={label}
              placeholder={placeholder}
              onChange={onChange}
              error={error}
              className={className}
              labelRequired={labelRequired}
              defaultValue={defaultValue}
              isDisabled={isDisabled}
              value={value}
              info={info}
            />
          )}
        </>
      )}
    />
  )
}
