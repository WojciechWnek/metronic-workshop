import { ReactComponent as InfoIcon } from '@assets/icons/info.svg'

import clsx from 'clsx'

type Props = {
  name: string
  onChange: (...event: any[]) => void
  type?: string
  placeholder?: string
  label?: string
  value: string | number
  error?: string
  className?: string
  labelRequired?: boolean
  info?: string
}

export default function TextInput({
  name,
  onChange,
  type,
  placeholder = '',
  label,
  value,
  error,
  className,
  labelRequired = true,
  info,
}: Props) {
  return (
    <div>
      <label htmlFor={name} className={clsx('form-label fs-8')}>
        {label}
        <span className={clsx(labelRequired && 'required')}></span>
        {info && (
          <i className="ms-3 fs-6" data-bs-toggle="tooltip" title={info}>
            <InfoIcon />
          </i>
        )}
      </label>
      <input
        name={name}
        type={type}
        className={clsx('form-control form-control-solid form-control-sm ', className)}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div className="mt-2 text-danger h-4">{error}</div>
    </div>
  )
}
