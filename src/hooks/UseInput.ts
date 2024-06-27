import { useState, ChangeEvent } from "react"

export const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue)
    const [error, setError] = useState(false)
    const [containsValue, setContainsValue] = useState(false)
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        if(e.target.value!=''){
          setContainsValue(true)
        }else{
            setContainsValue(false)
        }
    }
  
    return {
        containsValue,
        value,
        error,
        onChange: handleChange,
        setError,
    }
}