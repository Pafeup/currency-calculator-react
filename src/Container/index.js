import "./style.css"
import CurrentDate from "./Date"

const Container = ({ children }) => (
    <main className="container">
        <div className="container__screen">
            <CurrentDate />
            <h1 className="container__header">Kalkulator walut</h1>
        </div>
        {children}
    </main>
)

export default Container