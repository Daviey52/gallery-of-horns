import React from 'react';
import Header from './Header.js'
import Main from './main'
import Footer from './footer.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>

    )

  }

}

export default App;
