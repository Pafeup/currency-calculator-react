import { useState } from "react";
import { currencies } from "./currencies";
import Container from "./Container";
import Form from "./Form";
import Result from "./Result";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [currencySelect, setCurrencySelect] = useState(currencies[0]);

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };


  const onCurrencyChange = ({target}) => {
    const nameOfCurrency = target.value;
    const selected = currencies.find(currency => currency.name === nameOfCurrency)
    setCurrencySelect(selected);
    console.log(`została wybrana waluta ${selected.code}`)
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>

      <Form
        inputValue={inputValue}
        onInputChange={onInputChange}
        onFormSubmit={onFormSubmit}
        onCurrencyChange={onCurrencyChange}
      />
      <Result />
    </Container>
  );
}

export default App;
