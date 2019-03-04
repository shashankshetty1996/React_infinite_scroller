import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from './Image';

export class Images extends Component {
  state = {
    images: [],
    count: 30,
    start: 1
  };

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = () => {
    const { count, start } = this.state;
    this.setState({ start: this.state.start + count });
    axios.get(`/api/photos?count=${count}&start=${start}`).then(res =>
      this.setState(prevState => ({
        images: prevState.images.concat(res.data)
      }))
    );
  };

  render() {
    const { images } = this.state;
    if (images.length === 0) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className="images">
        <InfiniteScroll
          dataLength={images.length}
          next={this.fetchImages}
          hasMore={true}
          useWindow
        >
          {images.map(image => (
            <Image key={image.id} image={image} />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default Images;
