import React from 'react';
import Header from './Header.js'
import Main from './main';
import Footer from './footer.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Main
            title="Horse"
            imageSource='../public/images/horse.jpg'
            description="First image"
          />
          <Main
            title="Rhino"
            imageSource='../public/images/rhino.jpg' alt="#"
            description=" Second Image"
          />
        </div>

        <Footer />
      </div>

    )

  }

}

export default App;
