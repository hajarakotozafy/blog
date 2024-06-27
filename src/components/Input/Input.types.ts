import { ChangeEvent } from "react";

export type  InputProps = {
    type: 'text' | 'number' | 'email' | 'password'
    label: string
    value: string | number
    name: string
    error: boolean
    errorMessage: string
    disabled?: boolean
    containsValue: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
  }