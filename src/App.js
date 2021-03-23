import { useEffect, useState } from "react";
import InputRangeSlider from "./components/InputRange";
import ToggleSwitch from "./components/ToggleSwitch";

function App() {
  const [price, setPrice] = useState(20)
  const [yearly, setYearly] = useState(false)
  const [monthly, setMonthly] = useState(price)

  const updatePrice = () => {
    let discount = 25/100
    if(yearly){
      setMonthly(price)
      setPrice(current => {
        let full_year = (current * 12)
        let num =  full_year - (full_year * discount)
        return num.toFixed(0)
      })
    }else if(!yearly) {
      setPrice(monthly)
    }
  }

  useEffect(() => updatePrice(), [yearly])
  return (
    <div className="container-full px-20 h-screen w-screen flex flex-col justify-center items-center">
      <div className="header-container container mb-16 text-center">
        <h3 className="text-3xl mb-4">Simple, traffic-based pricing</h3>
        <p className="text-gray-700">Sign-up for our 30-day trail. No credit card required</p>
      </div>
      <div className="bg-white rounded-xl container shadow-lg">
        <div className="main px-12 py-8">
          <div className="flex container mb-8">
            <p className="uppercase font-bold text-gray-400 text-sm flex-1 my-auto">100K Pageviews</p>
            <div className="payment-wrapper flex flex-1 justify-end">
              <h3 className="text-4xl">${price}.00</h3>
              <p className="text-xs text-gray-600 p-1 my-auto">{yearly ? ' /year' : ' /month'}</p>
            </div>
          </div>
          <InputRangeSlider currentPrice={price} updateMainPrice={setPrice} resetYearly={setYearly} />
          <div className="mt-8 flex">
            <small className="flex-1 text-xs text-gray-600 text-right pr-2 py-1">Monthly Billing</small>
            <ToggleSwitch id="yearly" checked={yearly} onChange={setYearly} />
            <small className="flex-1 text-xs text-gray-600 py-1">Yearly Billing 
            <small className="text-xs bg-color-orange rounded-full text-orange-dark py-1 px-2 ml-1">25% discount</small></small>
          </div>
        </div>
        <hr/>
        <div className="footer flex px-12 py-8">
          <ul className="text-gray-600 text-xs flex-1">
            <li className="mb-2">Unlimted websites</li>
            <li className="mb-2">100% data ownership</li>
            <li>Email reports</li>
          </ul>
          <button className="btn-dark rounded-full px-7 py-2 my-auto text-xs">Start my trail</button>
        </div>
      </div>
    </div>
  );
}

export default App;
