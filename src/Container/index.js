import "./style.css"

const Container = ({ children }) => (
    <main className="container">
        <h1 className="container__header">Kalkulator walut</h1>
        {children}
    </main>
)

export default Container