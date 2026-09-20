import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";

import "./App.css";
import { useTheme } from "./context/theme/ThemeContext";

function App() {
  const { state } = useTheme();
  return (
    <main className={`shop-app ${state.theme}`}>
      <Header />
      <Hero />
      <ProductList />
    </main>
  );
}

export default App;
