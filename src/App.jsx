import { useEffect, useState } from "react";
import InputBox from "./components/inputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [fromAmount, setFromAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("pkr");

  let currencyInfo = useCurrencyInfo(fromCurrency);
  let options = Object.keys(currencyInfo);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const onFormSubmit = (e) => {
    e?.preventDefault()
    setConvertedAmount(parseFloat(fromAmount * currencyInfo[toCurrency]).toFixed(2))
  }

  useEffect(()=>{
    window.addEventListener('offline', ()=>{
      toast.error("Ops! No internet connection")
    })
    window.addEventListener('online', ()=>{
      toast.success("You are online")
    })
  },[])

  return (
    <>
    <div className="w-full min-h-screen bg-slate-950 flex items-center justify-center py-10 px-4">
      <form onSubmit={onFormSubmit} className="currencyConverter w-full max-w-lg p-4 md:p-7 bg-slate-900 rounded-xl border border-slate-800 flex flex-col gap-5">
        
        <InputBox
          label="From"
          amount={fromAmount}
          onAmountChange={setFromAmount}
          setConvertedAmount = {setConvertedAmount}
          currencyList={options}
          selectedCurrency={fromCurrency}
          onCurrencyChange={setFromCurrency}
        />

        <button type="button" onClick={swapCurrencies} className="bg-purple-900 hover:bg-purple-950 size-12 -my-8 rounded-full border-4 border-white self-center transition-all duration-200 z-10 flex items-center justify-center">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="swapVerticalIconTitle"
            stroke="#ffffff"
            strokeWidth="1"
            strokeLinecap="square"
            strokeLinejoin="miter"
            fill="none"
            color="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title id="swapVerticalIconTitle">
                Swap items (vertically)
              </title>{" "}
              <desc id="swapVerticalIconDesc"></desc>{" "}
              <path d="M4 8L7 5L10 8"></path> <path d="M7 20L7 6"></path>{" "}
              <path d="M20 17L17 20L14 17"></path> <path d="M17 5L17 19"></path>{" "}
            </g>
          </svg>
        </button>

        <InputBox
          label="To"
          amount={convertedAmount}
          currencyList={options}
          selectedCurrency={toCurrency}
          onCurrencyChange={setToCurrency}
          disableInput
        />

        <button type="submit" className="bg-purple-900 hover:bg-purple-950 text-white font-semibold uppercase tracking-wider py-3 px-5 rounded-md border-2 border-purple-800 transition-all duration-200 z-10">
          Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
        </button>
      </form>
    </div>
    <ToastContainer />
    </>
  );
}

export default App;
