import './App.css';
import Feed from './components/Feed';
import GlobalStyle from './styles/themes/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/themes/theme';


// TODO: finish styles,
// save to local storage
// build and deploy


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Feed currentUserId="4" />
    </ThemeProvider>
  );
}

export default App;
