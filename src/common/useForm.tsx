
import React, {useState} from 'react'

interface InitialState {
    [prop: string]: string;
}

const useForm = (initialState: InitialState) => {
    const [formValue, setForm] = useState(initialState)

    const setFormValue = (field: string) => (value: string) => {
        setForm({
            ...formValue,
            [field]: value
        })
    }

    return {setFormValue, formValue}
}

export default useForm