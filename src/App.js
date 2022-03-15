import { Fragment } from 'react';
import './App.css';
import Feed from './components/Feed';
import GlobalStyle from './styles/themes/GlobalStyles';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Feed currentUserId="4" />
    </Fragment>
  );
}

export default App;
