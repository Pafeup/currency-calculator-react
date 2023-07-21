import { useState } from "react";
import { currencies } from "./currencies";
import Container from "./Container";
import Form from "./Form";
import Result from "./Result";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [currencySelect, setCurrencySelect] = useState(currencies[0]);
  const [result, setResult] = useState({
    finalResult: "",
    baseValue: 0,
    currency: null,
  });

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onCurrencyChange = ({ target }) => {
    const nameOfCurrency = target.value;
    const selected = currencies.find((currency) => currency.name === nameOfCurrency);
    setCurrencySelect(selected);
    console.log(`Została wybrana waluta ${selected.code}`);
  };

  const calculateCurrency = () => {
    const inputValueFloat = parseFloat(inputValue);
    const currencyCode = currencySelect.code;
    const currency = currencies.find(({ code }) => code === currencyCode);
    const rate = currency.rate;
    const calculatedResult = inputValueFloat / rate;

    setResult({
      finalResult: calculatedResult.toFixed(2),
      baseValue: inputValueFloat.toFixed(2),
      currency,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateCurrency();
  };

  return (
    <Container>
      <Form
        inputValue={inputValue}
        onInputChange={onInputChange}
        onFormSubmit={onFormSubmit}
        onCurrencyChange={onCurrencyChange}
      />
    
        <Result
          finalResult={result.finalResult}
          baseValue={result.baseValue}
          currency={result.currency}
          result={result}
        />
    
    </Container>
  );
}

export default App;

