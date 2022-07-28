import Navbar from "./Navbar"
import Welcome from "./Welcome"
import Team from "./Team"
import About from "./About"
import Games from "./Games"
import Footer from "./Footer"

function App() {
    return (
        <div className="App">
            <Navbar />
            <Welcome />
            <About />
            <Team />
            <Games />
            <Footer />
        </div>
    )
}

export default App
