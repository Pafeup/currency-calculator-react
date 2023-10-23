// import "./style.css"
import { currencies } from "../currencies"
import { StyledForm, Label, Input, Select, Button} from "./styled"

const Form = ({ onFormSubmit, inputValue, onInputChange, onCurrencyChange }) => (
  <StyledForm
    onSubmit={onFormSubmit}>
    <Label value>wartość w PLN</Label>
    <Label select>wybierz walutę</Label>
    <Input
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
    <Select onChange={onCurrencyChange} className="form__select">
      {currencies.map(currency => (
        <option key={currency.name}>
          {currency.name}
        </option>
      ))};
    </Select>
    <Button className="form__button">Przelicz</Button>
  </StyledForm>
)

export default Form