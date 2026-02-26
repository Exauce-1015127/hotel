import Home from "./pages/Home"
import {Route, Routes} from "react-router-dom";
import Favorites from "./pages/Favorites.jsx";
import NavBar from "./components/NavBar.jsx";
import "./css/App.css"
import {MovieProvider} from "./contexts/MovieContext";

function App() {

  return (
      <MovieProvider>
          <NavBar/>
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </main>
      </MovieProvider>
  )
}

export default App