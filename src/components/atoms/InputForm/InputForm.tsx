import { ChangeEvent, FC } from 'react'
import './index.css'

type Props = {
  placeholder?: string
  value?: string
  onChange: (value: string) => void
}

export const InputForm: FC<Props> = ({
  placeholder = '',
  value = '',
  onChange
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }
  return (
    <div className="input-wrapper">
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}
