import './reset.css'
import './App.css';
import routes from './routes'
import Header from './Components/Header/Header'
import React from 'react'

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;
