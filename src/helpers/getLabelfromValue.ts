import { SelectOption } from '@constants/types/common'

export default function getLabelfromValue(value?: string, list?: SelectOption[]) {
  if (!value) return ''
  if (!list) return value
  const resultOption = list.filter((option) => option.value === value)
  const resultLabel = resultOption?.[0]?.label
  if (!resultLabel) return value
  return resultLabel
}
