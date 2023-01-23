import { useState, useEffect } from "react";


export const useFetch = (url, initData) => {
    const [data, setData] = useState(initData);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('')


    useEffect(() => {
        fetch(url)
            .then(res => {
                console.log(res);
                if (!res.ok) {
                    throw new Error('Amader error')
                }

                return res.json()
            })
            .then(payload => {
                setData(payload)
                setIsLoading(false)
                setError('')
            })
            .catch(e => {
                setError(e.message);
                setIsLoading(false);
                setData(initData)
            })
    }, [url])

    return {
        data,
        isLoading,
        error
    }
}
