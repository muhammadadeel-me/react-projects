import { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  selectedCurrency = "usd",
  onCurrencyChange,
  currencyList = [],
  className = "",
  disableInput = false,
  disableCurrencySelect = false
}) => {

  const inputID = useId()
  const selectID = useId()

  return (
    <div
      className={`inputBox flex gap-5 md:gap-10 bg-slate-50 text-slate-800 text-md md:text-2xl rounded-xl p-6 ${className}`}
    >
      <div className="leftSide flex flex-col flex-1 gap-5">
        <label htmlFor={inputID} className=" text-slate-600">
          {label}
        </label>
        <input
          type="number"
          placeholder="0"
          value={amount}
          onChange={ (e) => onAmountChange && onAmountChange((prev)=>Number(e.target.value)) }
          id={inputID}
          disabled = {disableInput}
          className="border focus:outline-purple-600 w-28 md:w-40 rounded-md px-2"
        />
      </div>
      <div className="rightSide flex flex-col items-end flex-1 grow  gap-5">
        <label htmlFor={selectID} className=" text-slate-600">
          Currency Type
        </label>
        <select
          value={selectedCurrency}
          onChange={(e) =>  onCurrencyChange && onCurrencyChange(e.target.value) }
          id={selectID}
          disabled = {disableCurrencySelect}
          className="border w-28 md:w-40 rounded-md px-2"
        >
          {currencyList.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
