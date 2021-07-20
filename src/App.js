import React from 'react';
import Header from './Header.js'
import Main from './main'
import SelectedBeast from './SelectedBeast.js';
import Footer from './footer.js';
import './App.css';
import data from './data.json';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {}
    }
  }

  handleshowModal = (selectedBeast) => {
    this.setState({
      showModal: true,
      selectedBeast
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    })
  };


  render() {
    return (
      <div>
        <Header />
        <SelectedBeast
          style={{ width: '100%' }}
          showModal={this.state.showModal}
          beast={this.state.selectedBeast}
          handleCloseModal={this.handleCloseModal}
        />
        <Main data={data} handleshowModal={this.handleshowModal} />
        <Footer />
      </div>
    )
  }
}
export default App;
