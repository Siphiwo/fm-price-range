import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'


function InputRangeSlider({currentPrice, updateMainPrice, resetYearly}) {
    
    const updatePrice = updatedPrice => {
        updateMainPrice(updatedPrice)
        resetYearly(false)
    }

    return (
        <InputRange
        minValue={20}
        maxValue={60}
        value={currentPrice}
        onChange={value => updatePrice(value)} />
    )
}

export default InputRangeSlider
