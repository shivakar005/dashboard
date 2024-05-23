import ScrollToTop from "./common/ScrollToTop,js";
import DefaultLayout from "./layout/DefaultLayout";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={
        <DefaultLayout>
          <Dashboard />
        </DefaultLayout>} />

      </Routes>
    </Router>
  );
}

export default App;
