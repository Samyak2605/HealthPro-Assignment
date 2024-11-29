import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResultPage from "./pages/ ResultPage/ResultPage";
import CalculatorPage from "./pages/CalculatorPage/CalculatorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CalculatorPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
