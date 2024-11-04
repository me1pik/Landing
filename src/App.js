import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
import './App.css';
import Landing from './pages/Landing';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
