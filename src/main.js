import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';

class Main extends React.Component {
  render() {

    let itemsToRender = [];
    data.forEach(item => {
      itemsToRender.push(<HornedBeast
        title={item.title}
        imageUrl={item.image_url}
        description={item.description}
      />);
    });

    return (
      <main>
        {itemsToRender}
      </main>
    );
  }
}
export default Main;
