import { useState } from "react";
import { currencies } from "./currencies";
import Container from "./Container";
import Form from "./Form";
import Result from "./Result";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [result, setResult] = useState({
    finalResult: "",
    baseValue: 0,
    currency: null,
  });

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onCurrencyChange = ({ target }) => {
    const currencyName = target.value;
    const selected = currencies.find((currency) => currency.name === currencyName);
    setSelectedCurrency(selected);
    console.log(`Została wybrana waluta ${selected.code}`);
  };

  const calculateCurrency = () => {
    const value = parseFloat(inputValue);
    const currencyCode = selectedCurrency.code;
    const currency = currencies.find(({ code }) => code === currencyCode);
    const rate = currency.rate;
    const calculatedResult = value / rate;

    setResult({
      finalResult: calculatedResult.toFixed(2),
      baseValue: value.toFixed(2),
      currency,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateCurrency();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Form
          inputValue={inputValue}
          onInputChange={onInputChange}
          onFormSubmit={onFormSubmit}
          onCurrencyChange={onCurrencyChange}
        />
        <Result
          result={result}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;

