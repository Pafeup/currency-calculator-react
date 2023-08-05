import "./style.css"

const Result = ({ result }) => {
 
  return (
    <div className="resultContainer">
      {result.finalResult && (
        <span className="resultArea ">
          {result.baseValue} zł
          = <strong>{result.finalResult} {result.currency.mark}</strong>
        </span>)}
    </div>)

};

export default Result;