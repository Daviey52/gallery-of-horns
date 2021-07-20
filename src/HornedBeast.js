import React from 'react';
import Card from 'react-bootstrap/Card';
//import './HornedBeast.css';


class HornedBeast extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      numberofclicks: 0,
      numberfavoured: 0,
    }
  }

  clicksCounterShowModal = () => {
    this.setState({
      numberofclicks: this.state.numberofclicks + 1,
    });
    this.props.handleshowModal(this.props.beast);
  }
  render() {
    return (
      <Card>
        <div className="hornedbeast" style={{ width: "30em" }}>
          <h2>{this.props.beast.title} </h2>
          <Card.Img className="heart" src={this.props.beast.image_url} alt={this.props.beast.description} onClick={this.clicksCounterShowModal} />

          <p>{this.state.numberofclicks} ❤️</p>
          <Card.Title>{this.props.beast.description}</Card.Title>
          <p> Number of Horns {this.props.beast.horns}</p>

        </div>
      </Card>
    );
  }
}

export default HornedBeast;
