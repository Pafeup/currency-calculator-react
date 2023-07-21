import "./style.css"
import { currencies } from "../currencies"

const Form = ({ onFormSubmit, inputValue, onInputChange, onCurrencyChange, calculateCurrency }) => (
  <form
    onSubmit={onFormSubmit}

    className="form">


    <label className="form__label form__label--value">wartość w PLN</label>
    <label className="form__label form__label--currency">wybierz walutę</label>

    <input
      value={inputValue}
      onChange={onInputChange}
      type="number"
      autoComplete="off"
      className="form__input"
      pattern="[0-9]"
      min={0}
      step={0.01}
      required
    />

    <select onChange={onCurrencyChange} className="form__select">
      {currencies.map(currency => (
        <option key={currency.name}>
          {currency.name}
        </option>
      ))}
    </select>


    <button className="form__button">Przelicz</button>





  </form>
)

export default Form