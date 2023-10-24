import "./style.css"
import Clock from "../Clock"

const Container = ({ children }) => (
    <main className="container">
        <div className="container__screen">
            <Clock />
            <h1 className="container__header">Kalkulator walut</h1>
        </div>
        {children}
    </main>
)

export default Container