import { SelectOption } from '@constants/types/common'
import clsx from 'clsx'
import Creatable from 'react-select/creatable'

type Props = {
  options?: SelectOption[]
  onChange: (...event: any[]) => void
  placeholder?: string
  label?: string
  error?: string
  className?: string
  labelRequired?: boolean
  defaultValue?: SelectOption
  isDisabled?: boolean
}

export default function CreatableSelect({
  options,
  onChange,
  placeholder = '',
  label,
  error,
  className,
  labelRequired = true,
  defaultValue,
  isDisabled,
}: Props) {
  return (
    <div className={clsx(isDisabled && ' cursor-not-allowed')}>
      <label className={clsx('form-label fs-8', labelRequired && 'required')}>{label}</label>
      <Creatable
        className={clsx('react-select-styled react-select-solid', className)}
        classNamePrefix="react-select"
        options={options}
        placeholder={placeholder}
        onChange={onChange}
        isClearable
        defaultValue={defaultValue}
        isDisabled={isDisabled}
      />
      <div className="mt-2 text-danger h-4">{error}</div>
    </div>
  )
}
