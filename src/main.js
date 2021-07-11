import React from 'react';


class Main extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <image src='../public/images' alt="#">{this.props.imageSource}</image>
        <p>{this.props.description}</p>
      </div >
    )
  }
}

export default Main;
