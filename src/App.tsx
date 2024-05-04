import { ThemeProvider } from "@emotion/react";
import HomePage from "./pages/HomePage"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
