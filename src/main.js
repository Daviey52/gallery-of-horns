import React from 'react';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import Form from 'react-bootstrap/Form';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: this.props.data
    }
  }
  render() {
    let itemsToRender = this.state.data.map((beast, index) =>
    (<HornedBeast
      handleshowModal={this.props.handleshowModal}
      key={index}
      beast={beast}

    />)
    );

    let noOfHornsBeast = e => {
      if (e.target.value === "default") {
        this.setState({
          data: this.props.data
        })
      } else {
        let filteredData = this.props.data.filter((horns) => horns.horns === parseInt(e.target.value)
        )
        this.setState({
          data: filteredData
        })
      }
    }

    return (
      <main>
        <Container>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Pick Beasts based on No of Horns</Form.Label>
              <Form.Control as="select" onChange={noOfHornsBeast} >
                <option value="default"> All Beasts</option>
                <option value="1">One Horn</option>
                <option value="2">Two Horns</option>
                <option value="3">Three Horns</option>
                <option value="100">A Hundred Horns</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Container>

        <CardColumns>
          {itemsToRender}
        </CardColumns>


      </main>
    );
  }
}
export default Main;
