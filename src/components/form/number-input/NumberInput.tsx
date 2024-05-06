import clsx from 'clsx'
import { type UseFormSetValue } from 'react-hook-form'

import { ReactComponent as Minus } from '@assets/icons/minus-squared.svg'
import { ReactComponent as Plus } from '@assets/icons/plus-squared.svg'
import styles from './NumberInput.module.scss'

type Props = {
  name: string
  onChange: (...event: any[]) => void
  setValue?: UseFormSetValue<any>
  placeholder?: string
  label?: string
  value: string | number
  error?: string
  className?: string
  labelRequired?: boolean
}

export default function NumberInput({
  name,
  onChange,
  setValue,
  placeholder = '',
  label,
  value,
  error,
  className,
  labelRequired = true,
}: Props) {
  const increment = () => {
    setValue && setValue(name, +value + 1)
  }
  const decrement = () => {
    setValue && setValue(name, +value > 0 ? +value - 1 : 0)
  }
  return (
    <div>
      <label htmlFor={name} className={clsx('form-label fs-8', labelRequired && 'required')}>
        {label}
      </label>
      <div className={styles.numericInput}>
        <button type="button" onClick={decrement}>
          <Minus />
        </button>
        <input
          name={name}
          type={'number'}
          className={clsx(
            'form-control form-control-solid text-center form-control-sm ',
            className,
          )}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <button type="button" onClick={increment}>
          <Plus />
        </button>
      </div>

      <div className="mt-2 text-danger h-4">{error}</div>
    </div>
  )
}
