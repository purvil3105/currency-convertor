import { useState, useEffect } from "react";

function useCurrencyConv(currency){
    const [info, setInfo] = useState({});
    useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res)=>res.json())
    .then((res)=>setInfo(res[currency]))
    console.log(info)
    }, [currency])
    return info;
}

export default useCurrencyConv;