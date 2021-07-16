import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
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

  clicksCounter = () => {
    this.setState({
      numberofclicks: this.state.numberofclicks + 1,
    })

  }

  render() {
    return (
      <CardColumns>
        <Card className="hornedbeast" style={{ width: "30em" }}>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Img className="heart" src={this.props.imageUrl} alt={this.props.description} onClick={this.clicksCounter} />
          <Card.Text>{this.state.numberofclicks} ❤️</Card.Text>
          <Card.Text>{this.props.description}</Card.Text>
        </Card >
      </CardColumns>
    );
  }
}

export default HornedBeast;
