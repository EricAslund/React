import React from 'react';
import Main from './pages/Main';
import 'semantic-ui-css/semantic.min.css'
import './fonts/index.css';
import { Provider } from 'react-redux';
import store from '../src/store';

function App() {
  return (
    <Provider className="App" store={store}>
      <Main />
    </Provider>
  );
}

export default App;
