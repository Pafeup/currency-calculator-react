import { ResultArea, ResultContainer } from "./styled";

const Result = ({ result }) => {
 
  return (
    <ResultContainer>
      {result.finalResult && (
        <ResultArea>
          {result.baseValue} zł
          = <strong>{result.finalResult} {result.currency.mark}</strong>
        </ResultArea>)}
    </ResultContainer>)

};

export default Result;