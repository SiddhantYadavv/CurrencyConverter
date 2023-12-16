import React, { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import Inputbox from './components/Inputbox.jsx'

const App = () => {
  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState("usd")
  const[to,setTo]=useState("inr")
  const[convertedAmount,setConvertedAmount]=useState(0)

  const currencyInfo=useCurrencyInfo(from)
  console.log(currencyInfo)
  const options = Object.keys(currencyInfo)

  const swap = (e) => {
    e.preventDefault()
    setFrom(to)
    setTo(from)
    setConvertedAmount(0)
    // setAmount(convertedAmount)
  }

const convert = (e)=>{
  e.preventDefault()
  setConvertedAmount(amount*currencyInfo[to])
}
console.log(convertedAmount)


  return (
    <div className='mainDiv'>

  <div className='whiteBG'>
<form className='mainForm'>
    <Inputbox 
      label="From" 
      type="number"
      amount={amount}
      onAmountChange={amount=>setAmount(amount)}
      currencyType="Currency Type"
      selectCurrency={from}
      currencyOptions={options}
      onCurrencyChange={currency=>setFrom(currency)}
      />


    <button className='swapbutton' onClick={swap} >SWAP</button>




    <Inputbox 
        label="To"
        type="text"
        amount={convertedAmount}
        currencyOptions={options}
        onCurrencyChange={currency=>setTo(currency)}
        selectCurrency={to}
        currencyType="Currency Type"
        />
    <button className='convert' onClick={convert}>CONVERT</button>
    </form>
     
   </div> 
    
    </div>
  )
}

export default App