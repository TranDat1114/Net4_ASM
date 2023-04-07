import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Information from "./pages/Information";
import PageNotFound from "./pages/PageNotFound";
import Catagories from "./pages/catagories";
import ProducDetail from "./pages/productDetail";
import "./App.css";
import ProductProvider from "./contexts/productContext";
import Footer from "./components/Footer";
import Nav from "./components/newNav";

function App() {
    return (
        <ProductProvider>
            <div className="App overflow-hidden">
                <header>
                    <Nav />
                </header>
                <main className="lg:py-5 min-h-screen">
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home/" element={<Home />} />
                            <Route
                                path="/catagories/:name"
                                element={<Catagories />}
                            />
                            <Route
                                path="/productDetail/:id"
                                element={<ProducDetail />}
                            />
                            <Route path="/tintuc" element={<Information />} />
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </Router>
                </main>
                <Footer />
            </div>
        </ProductProvider>
    );
}

export default App;
