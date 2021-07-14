import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component {
  render() {
    return (
      <main>
        <HornedBeast
          title="Unicorn Head"
          imageUrl="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"
          description="Someone wearing a creapy head mask"
        />

        <HornedBeast
          title="UniWhal"
          imageUrl="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
          description="A unicorn and a narwhal nuzzling their horns"
        />
      </main>
    );
  }
}

export default Main;
