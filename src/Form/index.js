import "./style.css"

const Form = () => (
  <form className="form">


    <label className="form__label form__label--value">wartość w PLN</label>
    <label className="form__label form__label--currency">wybierz walutę</label>


    <div className="input__container">
      <input type="number" autoComplete="off" className="form__input" min={0} step={0.01} />
      <select className="form__select">
        <option value="EUR">€ Euro</option>
        <option value="USD">$ Dolar amerykański</option>
        <option value="GBP">£ Funt brytyjski</option>
        <option value="CHF">₣ Frank szwajcarski</option>
        <option value="JPY">¥ Jen japoński</option>
      </select>

    </div>
    <button className="form__button">Calculate</button>
    




  </form>
)

export default Form