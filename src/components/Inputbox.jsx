import React from 'react'

const Inputbox = ({
  label,
  type,
  amount,
  onAmountChange,
  currencyType,
  onCurrencyChange,
  currencyOptions=[],
  selectCurrency = "usd"
}) => {

  return (
    <div className='inputComp'>
       <div className='content'>
      <label>{label}</label>
      <input type={type} 
              placeholder={amount} 
              onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}/>
      </div>

      <div className='content2'>
      <label>{currencyType}</label>
      <select 
              value={selectCurrency}
              onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
              >
          {currencyOptions.map((e)=>{
            return <option key={e} value={e}>{e}</option>
          })}
                
      </select>
      </div>
    </div>
  )
}

export default Inputbox