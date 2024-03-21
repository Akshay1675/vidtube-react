import { useEffect, useState } from "react"

export const useDebounce = (value, delay) => {

    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const t = setTimeout(() => setDebounceValue(value), delay)
        
        return () => {
            clearTimeout(t)
        }
    }, [value, delay])

    return debounceValue
}