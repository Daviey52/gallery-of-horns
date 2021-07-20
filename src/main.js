import React from 'react';
import { CardColumns } from 'react-bootstrap';
import HornedBeast from './HornedBeast';


class Main extends React.Component {

  render() {
    let itemsToRender = this.props.data.map((beast, index) =>
    (<HornedBeast
      handleshowModal={this.props.handleshowModal}
      key={index}
      beast={beast}


    //title={item.title}
    //imageUrl={item.image_url}
    //description={item.description}
    //horns={item.horns}


    />)
    );

    return (
      <main>
        <CardColumns>
          {itemsToRender}
        </CardColumns>
      </main>
    );
  }
}
export default Main;
