import { useEffect, useState } from "react"

const useCurrencyInfo = (currency) => {

  const [data, setData] = useState({})

  useEffect(()=>{

    const apiUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

    fetch(apiUrl)
    .then(res => res.json())
    .then(res => setData(res[currency]))

  }, [currency]) // useEffect

  return data
}

export default useCurrencyInfo