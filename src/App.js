import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TimePage from './pages/TimePage';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path="/time" element={<TimePage />} />
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App;
