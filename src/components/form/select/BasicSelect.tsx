import { SelectOption } from '@constants/types/common'
import { ReactComponent as InfoIcon } from '@assets/icons/info.svg'
import clsx from 'clsx'
import Select from 'react-select'

type Props = {
  options?: SelectOption[]
  value: SelectOption
  onChange: (...event: any[]) => void
  placeholder?: string
  label?: string
  error?: string
  className?: string
  labelRequired?: boolean
  defaultValue?: SelectOption
  isDisabled?: boolean
  info?: string
}

export default function BasicSelect({
  options,
  value,
  onChange,
  placeholder = '',
  label,
  error,
  className,
  labelRequired = true,
  defaultValue,
  isDisabled,
  info,
}: Props) {
  return (
    <div className={clsx(isDisabled && ' cursor-not-allowed')}>
      <label className={clsx('form-label fs-8')}>
        {label}
        <span className={clsx(labelRequired && 'required')}></span>
        {info && (
          <i className="ms-3 fs-6" data-bs-toggle="tooltip" title={info}>
            <InfoIcon />
          </i>
        )}
      </label>
      <Select
        className={clsx('react-select-styled react-select-solid', className)}
        classNamePrefix="react-select"
        options={options}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
        isDisabled={isDisabled}
        value={value}
      />
      <div className="mt-2 text-danger h-4">{error}</div>
    </div>
  )
}
