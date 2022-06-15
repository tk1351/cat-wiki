import { FC, useState } from 'react'
import { InputForm } from './components/atoms/InputForm/InputForm'

export const App: FC = () => {
  const [value, setValue] = useState('')
  const onChange = (inputValue: string) => {
    setValue(inputValue)
  }
  return (
    <div className="App">
      <InputForm
        placeholder="Enter your breed"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
