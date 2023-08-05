import "./style.css"

const Result = ({ result }) => {
  const { finalResult, baseValue, currency } = result
 
  return (
    <div className="resultContainer">
      {result.finalResult && (
        <span className="resultArea ">
          {baseValue} zł
          = <strong>{finalResult} {currency.mark}</strong>
        </span>)}
    </div>)

};

export default Result;