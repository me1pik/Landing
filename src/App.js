import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
import './App.css';
import Landing from './pages/Landing';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router>
        <Route path='/' element={<Landing />} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
